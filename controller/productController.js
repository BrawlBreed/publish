const ProductModel = require("../model/ProductModel");
const ErrorHandler = require("../utils/errorHandler");
const asyncWrapper = require("../middleWare/asyncWrapper");
const ApiFeatures = require("../utils/apiFeatures");
const cloudinary = require("cloudinary");
const DataURIParser = require('datauri/parser');
const path = require('path');
const parser = new DataURIParser();

exports.createProduct = asyncWrapper(async (req, res) => {
  try {
    let images = [];

    if (req.body.images) {
      if (typeof req.body.images === 'string') {
        images.push(req.body.images);
      } else {
        images = req.body.images;
      }

      const imagesLinks = [];

      // Split images into chunks due to cloudinary upload limits
      const chunkSize = 3;
      const imageChunks = [];
      while (images?.length > 0) {
        imageChunks.push(images.splice(0, chunkSize));
      }

      // Upload images in separate requests
      for (let chunk of imageChunks) {
        const uploadPromises = chunk.map((img) => {
          const matches = img.match(/^data:(image\/\w+);base64,(.+)$/);
          if (!matches) {
            throw new Error('Invalid image file');
          }
          const fileType = matches[1];
          const base64Data = matches[2];
          const buffer = Buffer.from(base64Data, 'base64');
          const dataURI = parser.format(fileType, buffer);

          return cloudinary.v2.uploader.upload(dataURI.content, {
            folder: 'Products',
          });
        });

        const results = await Promise.all(uploadPromises);

        for (let result of results) {
          imagesLinks.push({
            product_id: result.public_id,
            url: result.secure_url,
          });
        }
      }

      req.body.user = req.user.id;
      req.body.images = imagesLinks;
    }

    // Ensure Stock is correctly parsed
    if (req.body.Stock && typeof req.body.Stock === 'string') {
      req.body.Stock = JSON.parse(req.body.Stock);
    }

    const data = await ProductModel.create(req.body);

    res.status(200).json({ success: true, data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating product', error: error.message });
  }
});
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> get all product >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
exports.getAllProducts = asyncWrapper(async (req, res) => {
  const resultPerPage = 6; // Number of products visible per page
  const productsCount = await ProductModel.countDocuments(); // Get total number of products

  // Create an instance of the ApiFeatures class, passing the ProductModel.find() query and req.query (queryString)
  const apiFeature = new ApiFeatures(ProductModel.find(), req.query)
    .search() // Apply search filter based on the query parameters
    .filter(); // Apply additional filters based on the query parameters

  let products = await apiFeature.query; // Fetch the products based on the applied filters and search

  let filteredProductCount = products?.length; // Number of products after filtering (for pagination)

  apiFeature.Pagination(resultPerPage); // Apply pagination to the products

  // Mongoose no longer allows executing the same query object twice, so use .clone() to retrieve the products again
  products = await apiFeature.query.clone(); // Retrieve the paginated products

  res.status(201).json({
    success: true,
    products: products,
    productsCount: productsCount,
    resultPerPage: resultPerPage,
    filteredProductCount: filteredProductCount,
  });
});




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> get all product admin route>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

exports.getAllProductsAdmin = asyncWrapper(async (req, res) => {
  const products = await ProductModel.find();

  res.status(201).json({  
    success: true,
    products,
  });
});

  


//>>>>>>>>>>>>>>>>>> Update Admin Route >>>>>>>>>>>>>>>>>>>>>>>
exports.updateProduct = asyncWrapper(async (req, res, next) => {
  try {
    let product = await ProductModel.findById(req.params.id);

    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }

    let images = [];

    if (req.body.images) {
      if (typeof req.body.images === 'string') {
        images.push(req.body.images);
      } else {
        images = req.body.images;
      }

      // Deleting Images From Cloudinary
      for (let i = 0; i < product.images?.length; i++) {
        await cloudinary.v2.uploader.destroy(product.images[i].product_id);
      }

      const imagesLinks = [];

      // Split images into chunks due to cloudinary upload limits
      const chunkSize = 3;
      const imageChunks = [];
      while (images?.length > 0) {
        imageChunks.push(images.splice(0, chunkSize));
      }

      // Upload images in separate requests
      for (let chunk of imageChunks) {
        const uploadPromises = chunk.map((img) => {
          const matches = img.match(/^data:(image\/\w+);base64,(.+)$/);
          if (!matches) {
            throw new Error('Invalid image file');
          }
          const fileType = matches[1];
          const base64Data = matches[2];
          const buffer = Buffer.from(base64Data, 'base64');
          const dataURI = parser.format(fileType, buffer);

          return cloudinary.v2.uploader.upload(dataURI.content, {
            folder: 'Products',
          });
        });

        const results = await Promise.all(uploadPromises);

        for (let result of results) {
          imagesLinks.push({
            product_id: result.public_id,
            url: result.secure_url,
          });
        }
      }

      req.body.images = imagesLinks;
    }

    // Ensure Stock is correctly parsed
    if (req.body.Stock && typeof req.body.Stock === 'string') {
      req.body.Stock = JSON.parse(req.body.Stock);
    }

    product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      product: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error updating product', error: error.message });
  }
});

//>>>>>>>>>>>>>>>>>> Update Stock >>>>>>>>>>>>>>>>>>>>>>>
exports.updateProductStock = asyncWrapper(async (req, res) => {
  try {
    console.log(req.body);
    // Ensure Stock is correctly parsed
    if (req.body.Stock && typeof req.body.Stock === 'string') {
      req.body.Stock = JSON.parse(req.body.Stock);
    }

    const product = await ProductModel.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      product: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error updating product', error: error.message });
  }
});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  delete product --admin  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
exports.deleteProduct = asyncWrapper(async (req, res, next) => {
  let product = await ProductModel.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  // Deleting Images From Cloudinary
  for (let i = 0; i < product.images?.length; i++) {
    await cloudinary.v2.uploader.destroy(product.images[i].product_id);
  }

  await product.remove();

  res.status(201).json({
    success: true,
    message: "Product delete successfully",
  });
});

//>>>>>>>>>>>>>>>>>>>>>>> Detils of product >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
exports.getProductDetails = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const Product = await ProductModel.findById(id);
  if (!Product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(201).json({
    succes: true,
    Product: Product,
  });
});

//>>>>>>>>>>>>> Create New Review or Update the review >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

exports.createProductReview = asyncWrapper(async (req, res, next) => {
  const { ratings, comment, productId, title, recommend } = req.body;
  const review = {
    userId: req.user._id,
    name: req.user.name,
    ratings: Number(ratings),
    title: title,
    comment: comment,
    recommend: recommend,
    avatar: req.user.avatar.url, // Add user avatar URL to the review object
  };

  const product = await ProductModel.findById(productId);

  // check if user already reviewed
  const isReviewed = product.reviews.find((rev) => {
    return rev.userId.toString() === req.user._id.toString();
  });

  if (isReviewed) {
    // Update the existing review
    product.reviews.forEach((rev) => {
      if (rev.userId.toString() === req.user._id.toString()) {
        rev.ratings = ratings;
        rev.comment = comment;
        rev.recommend = recommend;
        
        rev.title = title;
        product.numOfReviews = product.reviews?.length;
      }
    });
  } else {
    // Add a new review
    product.reviews.push(review);
    product.numOfReviews = product.reviews?.length;
  }

  // Calculate average ratings
  let totalRatings = 0;
  product.reviews.forEach((rev) => {
    totalRatings += rev.ratings;
  });
  product.ratings = totalRatings / product.reviews?.length;

  // Save to the database
  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});


// >>>>>>>>>>>>>>>>>>>>>> Get All Reviews of a product>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
exports.getProductReviews = asyncWrapper(async (req, res, next) => {
  // we need product id for all reviews of the product

  const product = await ProductModel.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

//>>>>>>>>>>>>>>>>>>>>>> delete review >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
exports.deleteReview = asyncWrapper(async (req, res, next) => {
  // we have review id and product id here in req object
  // find thr product with product id

  const product = await ProductModel.findById(req.query.productId);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404)); 
  }

  // check if ther any review avalible with given reviwe id. then filter the review array store inside reviews without that review
  const reviews = product.reviews.filter(
    (rev) => { return rev._id.toString() !== req.query.id.toString()}
  );
  // once review filterd then update new rating from prdoduct review
  let avg = 0;
  reviews.forEach((rev) => {
   
    avg += rev.ratings;
  });


  
  let ratings = 0;
  if (reviews?.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / reviews?.length;
  }
  // also set  numOfReviews in product
  const numOfReviews = reviews?.length;
  // now update the product schema with these values
  await ProductModel.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});
