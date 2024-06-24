const mongoose = require("mongoose");
const { sizes } = require("../utils/constants");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter product description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [8, "Price cannot exceed 9 characters"],
  },
  info: {
    type: String,
    required: [true, "Please Enter product info"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      product_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter Product Category"],
  },
  Stock: {
    type: Object,
    of: {
      type: Number,
      required: [true, "Please Enter product stock"],
      max: [9999, "Stock cannot exceed 4 characters"],
      default: 1,
    },
    validate: {
      validator: function (stock) {
        return Object.keys(stock).every(key => sizes.includes(Number(key)));
      },
      message: 'Please enter a valid size and quantity',
    },
    required: [true, 'Please enter sizes and quantities'],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      userId: {
        type: mongoose.Schema.ObjectId,
        ref: "userModel",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      ratings: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      recommend: {
        type: Boolean,
        default: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      avatar: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "userModel",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

productSchema.pre('save', function (next) {
  if (typeof this.Stock === 'string') {
    try {
      this.Stock = new Map(Object.entries(JSON.parse(this.Stock)));
    } catch (e) {
      return next(new Error('Invalid Stock format'));
    }
  }
  next();
});

const ProductModel = mongoose.model("ProductModel", productSchema);
module.exports = ProductModel;
