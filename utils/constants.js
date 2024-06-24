const forgotPasswordMessage = (resetPasswordUrl) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="https://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
 <meta charset="UTF-8" />
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 <!--[if !mso]><!-- -->
 <meta http-equiv="X-UA-Compatible" content="IE=edge" />
 <!--<![endif]-->
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <meta name="format-detection" content="telephone=no" />
 <meta name="format-detection" content="date=no" />
 <meta name="format-detection" content="address=no" />
 <meta name="format-detection" content="email=no" />
 <meta name="x-apple-disable-message-reformatting" />
 <link href="https://fonts.googleapis.com/css?family=Fira+Sans:ital,wght@0,400;0,500;0,800" rel="stylesheet" />
 <title>Untitled</title>
 <!--[if !mso]><!-- -->
 <style>
 @media  all {
                                                 /* cyrillic-ext */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 400;
                 src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');
                 unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
             }
             /* cyrillic */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 400;
                 src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');
                 unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
             }
             /* latin-ext */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 400;
                 src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');
                 unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
             }
             /* latin */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 400;
                 src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');
                 unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
             }
                                     /* cyrillic-ext */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 500;
                 src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveSxf6Xl7Gl3LX.woff2) format('woff2');
                 unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
             }
             /* cyrillic */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 500;
                 src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveQhf6Xl7Gl3LX.woff2) format('woff2');
                 unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
             }
             /* latin-ext */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 500;
                 src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveSBf6Xl7Gl3LX.woff2) format('woff2');
                 unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
             }
             /* latin */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 500;
                 src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveRhf6Xl7Glw.woff2) format('woff2');
                 unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
             }
                                                 /* cyrillic-ext */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 800;
                 font-display: swap;
                 src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSxf6Xl7Gl3LX.woff2) format('woff2');
                 unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
             }
             /* cyrillic */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 800;
                 font-display: swap;
                 src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eQhf6Xl7Gl3LX.woff2) format('woff2');
                 unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
             }
             /* latin-ext */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 800;
                 font-display: swap;
                 src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSBf6Xl7Gl3LX.woff2) format('woff2');
                 unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
             }
             /* latin */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 800;
                 font-display: swap;
                 src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eRhf6Xl7Glw.woff2) format('woff2');
                 unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
             }
                     }
 </style>
 <!--<![endif]-->
 <style>
 html,
         body {
             margin: 0 !important;
             padding: 0 !important;
             min-height: 100% !important;
             width: 100% !important;
             -webkit-font-smoothing: antialiased;
         }
 
         * {
             -ms-text-size-adjust: 100%;
         }
 
         #outlook a {
             padding: 0;
         }
 
         .ReadMsgBody,
         .ExternalClass {
             width: 100%;
         }
 
         .ExternalClass,
         .ExternalClass p,
         .ExternalClass td,
         .ExternalClass div,
         .ExternalClass span,
         .ExternalClass font {
             line-height: 100%;
         }
 
         table,
         td,
         th {
             mso-table-lspace: 0 !important;
             mso-table-rspace: 0 !important;
             border-collapse: collapse;
         }
 
         u + .body table, u + .body td, u + .body th {
             will-change: transform;
         }
 
         body, td, th, p, div, li, a, span {
             -webkit-text-size-adjust: 100%;
             -ms-text-size-adjust: 100%;
             mso-line-height-rule: exactly;
         }
 
         img {
             border: 0;
             outline: 0;
             line-height: 100%;
             text-decoration: none;
             -ms-interpolation-mode: bicubic;
         }
 
         a[x-apple-data-detectors] {
             color: inherit !important;
             text-decoration: none !important;
         }
 
         .pc-gmail-fix {
             display: none;
             display: none !important;
         }
 
         @media (min-width: 621px) {
             .pc-lg-hide {
                 display: none;
             } 
 
             .pc-lg-bg-img-hide {
                 background-image: none !important;
             }
         }
 </style>
 <style>
 @media (max-width: 620px) {
 .pc-project-body {min-width: 0px !important;}
 .pc-project-container {width: 100% !important;}
 .pc-sm-hide {display: none !important;}
 .pc-sm-bg-img-hide {background-image: none !important;}
 .pc-w620-itemsSpacings-0-20 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 10px !important;padding-bottom: 10px !important;}
 .pc-w620-itemsSpacings-10-0 {padding-left: 5px !important;padding-right: 5px !important;padding-top: 0px !important;padding-bottom: 0px !important;}
 .pc-w620-padding-34-35-34-35 {padding: 34px 35px 34px 35px !important;}
 .pc-w620-fontSize-30 {font-size: 30px !important;}
 .pc-w620-lineHeight-40 {line-height: 40px !important;}
 .pc-w620-fontSize-18 {font-size: 18px !important;}
 .pc-w620-lineHeight-28 {line-height: 28px !important;}
 .pc-w620-padding-35-35-35-35 {padding: 35px 35px 35px 35px !important;}
 .pc-w620-itemsSpacings-0-40 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 20px !important;padding-bottom: 20px !important;}
 table.pc-w620-spacing-0-0-22-0 {margin: 0px 0px 22px 0px !important;}
 td.pc-w620-spacing-0-0-22-0,th.pc-w620-spacing-0-0-22-0{margin: 0 !important;padding: 0px 0px 22px 0px !important;}
 table.pc-w620-spacing-0-0-25-0 {margin: 0px 0px 25px 0px !important;}
 td.pc-w620-spacing-0-0-25-0,th.pc-w620-spacing-0-0-25-0{margin: 0 !important;padding: 0px 0px 25px 0px !important;}
 
 .pc-w620-gridCollapsed-1 > tbody,.pc-w620-gridCollapsed-1 > tbody > tr,.pc-w620-gridCollapsed-1 > tr {display: inline-block !important;}
 .pc-w620-gridCollapsed-1.pc-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-width-fill > tr {width: 100% !important;}
 .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
 .pc-w620-gridCollapsed-1 > tbody > tr > td,.pc-w620-gridCollapsed-1 > tr > td {display: block !important;width: auto !important;padding-left: 0 !important;padding-right: 0 !important;}
 .pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-width-fill > tr > td {width: 100% !important;}
 .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;}
 .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-first > .pc-grid-td-first,pc-w620-gridCollapsed-1 > .pc-grid-tr-first > .pc-grid-td-first {padding-top: 0 !important;}
 .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-last > .pc-grid-td-last,pc-w620-gridCollapsed-1 > .pc-grid-tr-last > .pc-grid-td-last {padding-bottom: 0 !important;}
 
 .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-first > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-first > td {padding-top: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-last > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-last > td {padding-bottom: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-first,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-first {padding-left: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-last,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-last {padding-right: 0 !important;}
 
 .pc-w620-tableCollapsed-1 > tbody,.pc-w620-tableCollapsed-1 > tbody > tr,.pc-w620-tableCollapsed-1 > tr {display: block !important;}
 .pc-w620-tableCollapsed-1.pc-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-width-fill > tr {width: 100% !important;}
 .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
 .pc-w620-tableCollapsed-1 > tbody > tr > td,.pc-w620-tableCollapsed-1 > tr > td {display: block !important;width: auto !important;}
 .pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
 .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
 }
 @media (max-width: 520px) {
 .pc-w520-padding-24-25-24-25 {padding: 24px 25px 24px 25px !important;}
 .pc-w520-padding-30-30-30-30 {padding: 30px 30px 30px 30px !important;}
 }
 </style>
 <!--[if !mso]><!-- -->
 <style>
 @media all { @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 400; src: url('https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvmYjN.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvmYjL.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 800; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7eSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7eSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 500; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnZKveSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnZKveSBf6.woff2') format('woff2'); } }
 </style>
 <!--<![endif]-->
 <!--[if mso]>
    <style type="text/css">
        .pc-font-alt {
            font-family: Arial, Helvetica, sans-serif !important;
        }
    </style>
    <![endif]-->
 <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
</head>

<body class="body pc-font-alt" style="width: 100% !important; min-height: 100% !important; margin: 0 !important; padding: 0 !important; line-height: 1.5; color: #2D3A41; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-variant-ligatures: normal; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; background-color: #f4f4f4;" bgcolor="#f4f4f4">
 <table class="pc-project-body" style="table-layout: fixed; min-width: 600px; background-color:#f4f4f4;" bgcolor="#f4f4f4" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
  <tr>
   <td align="center" valign="top">
    <table class="pc-project-container" style="width: 600px; max-width: 600px;" width="600" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
     <tr>
      <td style="padding: 20px 0px 20px 0px;" align="left" valign="top">
       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width: 100%;">
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Menu 10 -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w520-padding-24-25-24-25 pc-w620-padding-34-35-34-35" style="padding: 39px 40px 39px 40px; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="left">
                   <table class="pc-width-hug pc-w620-gridCollapsed-1" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-w620-itemsSpacings-0-20" valign="middle" style="padding-top: 0px; padding-right: 10px; padding-bottom: 0px; padding-left: 0px;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                       <tr>
                        <td align="left" valign="top">
                         <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td align="left" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td align="left" valign="top">
                               <img src="../logo.png" class="" width="125" height="125" alt="" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:125px; height: auto; max-width: 100%;" />
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                     <td class="pc-grid-td-last pc-w620-itemsSpacings-0-20" valign="middle" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 10px;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                       <tr>
                        <td align="left" valign="top">
                         <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td align="left" valign="top">
                            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td align="left">
                               <table class="pc-width-hug pc-w620-gridCollapsed-0" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr class="pc-grid-tr-first pc-grid-tr-last">
                                 <td class="pc-grid-td-first pc-w620-itemsSpacings-10-0" valign="top" style="padding-top: 0px; padding-right: 10px; padding-bottom: 0px; padding-left: 0px;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                   <tr>
                                    <td align="left" valign="top">
                                     <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tr>
                                       <td align="left" valign="top">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="border-collapse: separate; border-spacing: 0;">
                                         <tr>
                                          <td valign="top" align="left">
                                           <div class="pc-font-alt" style="line-height: 121%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 500; font-variant-ligatures: normal; color: #1b1b1b; text-align: left; text-align-last: left;">
                                            <a href="${process.env.FRONTEND_URL}"><span>Home</span>
                                            </a>
                                           </div>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                 <td class="pc-w620-itemsSpacings-10-0" valign="top" style="padding-top: 0px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                   <tr>
                                    <td align="left" valign="top">
                                     <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tr>
                                       <td align="left" valign="top">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="border-collapse: separate; border-spacing: 0;">
                                         <tr>
                                          <td valign="top" align="left">
                                           <div class="pc-font-alt" style="line-height: 121%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 500; font-variant-ligatures: normal; color: #1b1b1b; text-align: left; text-align-last: left;">
                                            <a href="${process.env.FRONTEND_URL}/shop"><span>Shop</span>
                                            </a>
                                           </div>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                 <td class="pc-w620-itemsSpacings-10-0" valign="top" style="padding-top: 0px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                   <tr>
                                    <td align="left" valign="top">
                                     <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tr>
                                       <td align="left" valign="top">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="border-collapse: separate; border-spacing: 0;">
                                         <tr>
                                          <td valign="top" align="left">
                                           <div class="pc-font-alt" style="line-height: 121%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 500; font-variant-ligatures: normal; color: #1b1b1b; text-align: left; text-align-last: left;">
                                            <a href="${process.env.FRONTEND_URL}/contact"><span>Contact Us</span>
                                            </a>
                                           </div>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                 <td class="pc-grid-td-last pc-w620-itemsSpacings-10-0" valign="top" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 10px;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                   <tr>
                                    <td align="left" valign="top">
                                     <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tr>
                                       <td align="left" valign="top">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="border-collapse: separate; border-spacing: 0;">
                                         <tr>
                                          <td valign="top" align="left">
                                           <div class="pc-font-alt" style="line-height: 121%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 500; font-variant-ligatures: normal; color: #1b1b1b; text-align: left; text-align-last: left;">
                                            <a href="${process.env.FRONTEND_URL}/about_us"><span>About us</span>
                                            </a>
                                           </div>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Menu 10 -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Transactional 2 -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w520-padding-30-30-30-30 pc-w620-padding-35-35-35-35" style="padding: 40px 40px 40px 40px; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="left" valign="top" style="padding: 0px 0px 15px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" align="left">
                      <div class="pc-font-alt pc-w620-fontSize-30 pc-w620-lineHeight-40" style="line-height: 128%; letter-spacing: -0.6px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 36px; font-weight: 800; font-variant-ligatures: normal; color: #151515; text-align: left; text-align-last: left;">
                       We received a request to change your password.</div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="left" valign="top" style="padding: 0px 0px 20px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" align="left">
                      <div class="pc-font-alt pc-w620-fontSize-18 pc-w620-lineHeight-28" style="line-height: 150%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 20px; font-weight: normal; font-variant-ligatures: normal; color: #9b9b9b; text-align: left; text-align-last: left;">
                       <div><span>We received a request to reset the password for your account. Please click the link below to create a new password:</span>
                       </div>
                       <div><span>&#xFEFF;</span>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="left">
                   <table class="pc-width-hug pc-w620-gridCollapsed-0" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-grid-td-last" valign="top" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                       <tr>
                        <td align="left" valign="top">
                         <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td align="left" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <th valign="top" align="left" style="text-align: left; font-weight: normal; line-height: 1;">
                               <!--[if mso]>
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="border-collapse: separate; border-spacing: 0;">
            <tr>
                <td valign="middle" align="center" style="border-radius: 8px; background-color: #417cd6; text-align:center; color: #ffffff; padding: 14px 19px 14px 19px; mso-padding-left-alt: 0; margin-left:19px;" bgcolor="#417cd6">
                                    <a class="pc-font-alt" href="${resetPasswordUrl}" style="text-decoration: none; font-variant-ligatures: normal; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-weight: 500; font-size: 16px; line-height: 150%; letter-spacing: -0.2px; text-align: center; color: #ffffff;" target="_blank">Reset password</a>
                                </td>
            </tr>
        </table>
        <![endif]-->
                               <!--[if !mso]><!-- -->
                               <a href="${resetPasswordUrl}" style="display: inline-block; box-sizing: border-box; border-radius: 8px; background-color: #417cd6; padding: 14px 19px 14px 19px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-weight: 500; font-size: 16px; line-height: 150%; letter-spacing: -0.2px; color: #ffffff; vertical-align: top; text-align: center; text-align-last: center; text-decoration: none; -webkit-text-size-adjust: none;" target="_blank">Reset password</a>
                               <!--<![endif]-->
                              </th>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="left" valign="top" style="padding: 0px 0px 20px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" align="left">
                      <div class="pc-font-alt pc-w620-fontSize-18 pc-w620-lineHeight-28" style="line-height: 150%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 20px; font-weight: normal; font-variant-ligatures: normal; color: #9b9b9b; text-align: left; text-align-last: left;">
                       <div><span>&#xFEFF;</span>
                       </div>
                       <div><span>﻿</span>
                       </div>
                       <div><span>If you did not request a password reset, please ignore this email. The link will expire in 10 min for your security.</span>
                       </div>
                       <div><span>﻿</span>
                       </div>
                       <div><span>If you have any questions or need further assistance, please contact our support team at support@fox.com.</span>
                       </div>
                       <div><span>﻿</span>
                       </div>
                       <div><span>Thank you for using our services.</span>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Transactional 2 -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Footer 8 -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w520-padding-30-30-30-30 pc-w620-padding-35-35-35-35" style="padding: 40px 40px 40px 40px; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td>
                   <table class="pc-width-fill pc-w620-gridCollapsed-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-w620-itemsSpacings-0-40" align="left" valign="top" style="width: 50%; padding-top: 0px; padding-right: 20px; padding-bottom: 0px; padding-left: 0px;">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                       <tr>
                        <td align="left" valign="top">
                         <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="left" valign="top">
                            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 10px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="left">
                                  <div class="pc-font-alt" style="line-height: 133%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: 500; font-variant-ligatures: normal; color: #1b1b1b; text-align: left; text-align-last: left;">
                                   Follow Us.</div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="left" valign="top">
                            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td class="pc-w620-spacing-0-0-22-0" valign="top" style="padding: 0px 0px 52px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="left">
                                  <div class="pc-font-alt" style="line-height: 143%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #9b9b9b; text-align: left; text-align-last: left;">
                                   <div><span>Follow us to stay updated with our latest releases.</span>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="left" valign="top">
                            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td align="left">
                               <table class="pc-width-hug pc-w620-gridCollapsed-0" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr class="pc-grid-tr-first pc-grid-tr-last">
                                 <td class="pc-grid-td-first pc-w620-itemsSpacings-10-0" valign="middle" style="padding-top: 0px; padding-right: 10px; padding-bottom: 0px; padding-left: 0px;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                   <tr>
                                    <td align="left" valign="top">
                                     <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tr>
                                       <td align="left" valign="top">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td valign="top">
                                           <img src="https://cloudfilesdm.com/postcards/d09524cd03695cc9e6b7ddb7018639e8.png" class="" width="20" height="20" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;" alt="" />
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                 <td class="pc-w620-itemsSpacings-10-0" valign="middle" style="padding-top: 0px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                   <tr>
                                    <td align="left" valign="top">
                                     <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tr>
                                       <td align="left" valign="top">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td valign="top">
                                           <img src="https://cloudfilesdm.com/postcards/4dff04aee748e4609888afb416076ed5.png" class="" width="20" height="20" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;" alt="" />
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                 <td class="pc-grid-td-last pc-w620-itemsSpacings-10-0" valign="middle" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 10px;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                   <tr>
                                    <td align="left" valign="top">
                                     <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tr>
                                       <td align="left" valign="top">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td valign="top">
                                           <img src="https://cloudfilesdm.com/postcards/31226d83b7ca4f0da461a767b175fa2e.png" class="" width="20" height="20" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;" alt="" />
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                     <td class="pc-grid-td-last pc-w620-itemsSpacings-0-40" align="left" valign="top" style="width: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 20px;">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                       <tr>
                        <td align="left" valign="top">
                         <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="left" valign="top">
                            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 10px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="left">
                                  <div class="pc-font-alt" style="line-height: 133%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: 500; font-variant-ligatures: normal; color: #151515; text-align: left; text-align-last: left;">
                                   Contact us</div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="left" valign="top">
                            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td class="pc-w620-spacing-0-0-25-0" valign="top" style="padding: 0px 0px 45px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="left">
                                  <div class="pc-font-alt" style="line-height: 143%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #9d9d9d; text-align: left; text-align-last: left;">
                                   <div><span>support@fox.com</span>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Footer 8 -->
         </td>
        </tr>
        <tr>
         <td>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
           <tr>
            <td align="center" valign="top" style="padding-top: 20px; padding-bottom: 20px; vertical-align: top;">
             <img src="https://api-postcards.designmodo.com/tracking/mail/promo?uid=MjQ5NTYy" width="1" height="1" alt="" style="display:none; width: 1px; height: 1px;">
            </td>
           </tr>
          </table>
         </td>
        </tr>
       </table>
      </td>
     </tr>
    </table>
   </td>
  </tr>
 </table>
 <!-- Fix for Gmail on iOS -->
 <div class="pc-gmail-fix" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 </div>
</body>

</html>
`
const generateTitle = (type) => {
    switch(type){
        case 'Processing':
            return 'Благодарим Ви за покупката!';
        case 'Shipped':
            return 'Вашата поръчка е изпратена!';
        case 'Delivered':
            return 'Вашата поръчка е доставена!';
        default:
            return 'Актуализация на състоянието на поръчката';
    }
}
const generateParagraph = (type) => {
    switch(type){
        case 'Processing':
            return "Благодарим Ви, че пазарувате при нас. Получихме Вашата поръчка и вече започнахме да я обработваме. Скоро ще получите имейл с всички подробности.";
        case 'Shipped':
            return "Вашата поръчка е на път. Изпратихме Вашата поръчка и можете да я проследите, като разгледате състоянието на поръчката по-долу. Ако имате въпроси, не се колебайте да се свържете с нас."; 
        case 'Delivered':
            return "Вашата поръчка е доставена. Надяваме се да се насладите на покупката си. Ако имате въпроси, не се колебайте да се свържете с нас.";
        default:
            return 'Актуализация на състоянието на поръчката';
    }
    
}
const generateSubject = (type) => {
    switch(type){
        case 'Processing':
            return 'Поръчката ви е получена!';
        case 'Shipped':
            return 'Поръчката ви е изпратена!'; 
        case 'Delivered':
            return 'Поръчката ви е доставена!';
        default:
            return 'Order status update';
    }
}
const generateColor = (type) => {
    switch(type){
        case 'Processing':
            return '#ffae00';
        case 'Shipped':
            return '#007bff'; 
        case 'Delivered':
            return '#40be65';
        default:
            return '#007bff';
    }
}

const orderMessage = (order) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="https://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
 <meta charset="UTF-8" />
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 <!--[if !mso]><!-- -->
 <meta http-equiv="X-UA-Compatible" content="IE=edge" />
 <!--<![endif]-->
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <meta name="format-detection" content="telephone=no" />
 <meta name="format-detection" content="date=no" />
 <meta name="format-detection" content="address=no" />
 <meta name="format-detection" content="email=no" />
 <meta name="x-apple-disable-message-reformatting" />
 <link href="https://fonts.googleapis.com/css?family=Fira+Sans:ital,wght@0,400;0,500;0,800" rel="stylesheet" />
 <title>Untitled</title>
 <!--[if !mso]><!-- -->
 <style>
 @media  all {
                                                 /* cyrillic-ext */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 400;
                 src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');
                 unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
             }
             /* cyrillic */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 400;
                 src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');
                 unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
             }
             /* latin-ext */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 400;
                 src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');
                 unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
             }
             /* latin */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 400;
                 src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');
                 unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
             }
                                     /* cyrillic-ext */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 500;
                 src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveSxf6Xl7Gl3LX.woff2) format('woff2');
                 unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
             }
             /* cyrillic */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 500;
                 src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveQhf6Xl7Gl3LX.woff2) format('woff2');
                 unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
             }
             /* latin-ext */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 500;
                 src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveSBf6Xl7Gl3LX.woff2) format('woff2');
                 unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
             }
             /* latin */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 500;
                 src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveRhf6Xl7Glw.woff2) format('woff2');
                 unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
             }
                                     /* cyrillic-ext */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 700;
                 src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eSxf6Xl7Gl3LX.woff2) format('woff2');
                 unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
             }
             /* cyrillic */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 700;
                 src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eQhf6Xl7Gl3LX.woff2) format('woff2');
                 unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
             }
             /* latin-ext */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 700;
                 src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eSBf6Xl7Gl3LX.woff2) format('woff2');
                 unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
             }
             /* latin */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 700;
                 src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eRhf6Xl7Glw.woff2) format('woff2');
                 unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
             }
                                     /* cyrillic-ext */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 800;
                 font-display: swap;
                 src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSxf6Xl7Gl3LX.woff2) format('woff2');
                 unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
             }
             /* cyrillic */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 800;
                 font-display: swap;
                 src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eQhf6Xl7Gl3LX.woff2) format('woff2');
                 unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
             }
             /* latin-ext */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 800;
                 font-display: swap;
                 src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSBf6Xl7Gl3LX.woff2) format('woff2');
                 unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
             }
             /* latin */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 800;
                 font-display: swap;
                 src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eRhf6Xl7Glw.woff2) format('woff2');
                 unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
             }
                     }
 </style>
 <!--<![endif]-->
 <style>
 html,
         body {
             margin: 0 !important;
             padding: 0 !important;
             min-height: 100% !important;
             width: 100% !important;
             -webkit-font-smoothing: antialiased;
         }
 
         * {
             -ms-text-size-adjust: 100%;
         }
 
         #outlook a {
             padding: 0;
         }
 
         .ReadMsgBody,
         .ExternalClass {
             width: 100%;
         }
 
         .ExternalClass,
         .ExternalClass p,
         .ExternalClass td,
         .ExternalClass div,
         .ExternalClass span,
         .ExternalClass font {
             line-height: 100%;
         }
 
         table,
         td,
         th {
             mso-table-lspace: 0 !important;
             mso-table-rspace: 0 !important;
             border-collapse: collapse;
         }
 
         u + .body table, u + .body td, u + .body th {
             will-change: transform;
         }
 
         body, td, th, p, div, li, a, span {
             -webkit-text-size-adjust: 100%;
             -ms-text-size-adjust: 100%;
             mso-line-height-rule: exactly;
         }
 
         img {
             border: 0;
             outline: 0;
             line-height: 100%;
             text-decoration: none;
             -ms-interpolation-mode: bicubic;
         }
 
         a[x-apple-data-detectors] {
             color: inherit !important;
             text-decoration: none !important;
         }
 
         .pc-gmail-fix {
             display: none;
             display: none !important;
         }
 
         @media (min-width: 621px) {
             .pc-lg-hide {
                 display: none;
             } 
 
             .pc-lg-bg-img-hide {
                 background-image: none !important;
             }
         }
 </style>
 <style>
 @media (max-width: 620px) {
 .pc-project-body {min-width: 0px !important;}
 .pc-project-container {width: 100% !important;}
 .pc-sm-hide {display: none !important;}
 .pc-sm-bg-img-hide {background-image: none !important;}
 .pc-w620-itemsSpacings-0-20 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 10px !important;padding-bottom: 10px !important;}
 .pc-w620-itemsSpacings-10-0 {padding-left: 5px !important;padding-right: 5px !important;padding-top: 0px !important;padding-bottom: 0px !important;}
 .pc-w620-padding-34-35-34-35 {padding: 34px 35px 34px 35px !important;}
 .pc-w620-fontSize-30 {font-size: 30px !important;}
 .pc-w620-lineHeight-40 {line-height: 40px !important;}
 .pc-w620-fontSize-18 {font-size: 18px !important;}
 .pc-w620-lineHeight-28 {line-height: 28px !important;}
 .pc-w620-itemsSpacings-0-30 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 15px !important;padding-bottom: 15px !important;}
 .pc-w620-fontSize-16 {font-size: 16px !important;}
 .pc-w620-lineHeight-26 {line-height: 26px !important;}
 table.pc-w620-spacing-0-0-20-0 {margin: 0px 0px 20px 0px !important;}
 td.pc-w620-spacing-0-0-20-0,th.pc-w620-spacing-0-0-20-0{margin: 0 !important;padding: 0px 0px 20px 0px !important;}
 .pc-w620-view-vertical,.pc-w620-view-vertical > tbody,.pc-w620-view-vertical > tbody > tr,.pc-w620-view-vertical > tbody > tr > th,.pc-w620-view-vertical > tr,.pc-w620-view-vertical > tr > th {display: inline-block;width: 100% !important;}
 .pc-w620-lineHeight-20 {line-height: 20px !important;}
 .pc-w620-width-auto {width: auto !important;}
 .pc-w620-fontSize-22 {font-size: 22px !important;}
 .pc-w620-lineHeight-32 {line-height: 32px !important;}
 .pc-w620-padding-35-35-35-35 {padding: 35px 35px 35px 35px !important;}
 .pc-w620-itemsSpacings-0-40 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 20px !important;padding-bottom: 20px !important;}
 table.pc-w620-spacing-0-0-22-0 {margin: 0px 0px 22px 0px !important;}
 td.pc-w620-spacing-0-0-22-0,th.pc-w620-spacing-0-0-22-0{margin: 0 !important;padding: 0px 0px 22px 0px !important;}
 table.pc-w620-spacing-0-0-25-0 {margin: 0px 0px 25px 0px !important;}
 td.pc-w620-spacing-0-0-25-0,th.pc-w620-spacing-0-0-25-0{margin: 0 !important;padding: 0px 0px 25px 0px !important;}
 
 .pc-w620-gridCollapsed-1 > tbody,.pc-w620-gridCollapsed-1 > tbody > tr,.pc-w620-gridCollapsed-1 > tr {display: inline-block !important;}
 .pc-w620-gridCollapsed-1.pc-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-width-fill > tr {width: 100% !important;}
 .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
 .pc-w620-gridCollapsed-1 > tbody > tr > td,.pc-w620-gridCollapsed-1 > tr > td {display: block !important;width: auto !important;padding-left: 0 !important;padding-right: 0 !important;}
 .pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-width-fill > tr > td {width: 100% !important;}
 .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;}
 .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-first > .pc-grid-td-first,pc-w620-gridCollapsed-1 > .pc-grid-tr-first > .pc-grid-td-first {padding-top: 0 !important;}
 .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-last > .pc-grid-td-last,pc-w620-gridCollapsed-1 > .pc-grid-tr-last > .pc-grid-td-last {padding-bottom: 0 !important;}
 
 .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-first > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-first > td {padding-top: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-last > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-last > td {padding-bottom: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-first,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-first {padding-left: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-last,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-last {padding-right: 0 !important;}
 
 .pc-w620-tableCollapsed-1 > tbody,.pc-w620-tableCollapsed-1 > tbody > tr,.pc-w620-tableCollapsed-1 > tr {display: block !important;}
 .pc-w620-tableCollapsed-1.pc-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-width-fill > tr {width: 100% !important;}
 .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
 .pc-w620-tableCollapsed-1 > tbody > tr > td,.pc-w620-tableCollapsed-1 > tr > td {display: block !important;width: auto !important;}
 .pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
 .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
 }
 @media (max-width: 520px) {
 .pc-w520-padding-24-25-24-25 {padding: 24px 25px 24px 25px !important;}
 .pc-w520-padding-30-30-30-30 {padding: 30px 30px 30px 30px !important;}
 }
 </style>
 <!--[if !mso]><!-- -->
 <style>
 @media all { @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 400; src: url('https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvmYjN.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvmYjL.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 800; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7eSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7eSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 500; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnZKveSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnZKveSBf6.woff2') format('woff2'); } }
 </style>
 <!--<![endif]-->
 <!--[if mso]>
    <style type="text/css">
        .pc-font-alt {
            font-family: Arial, Helvetica, sans-serif !important;
        }
    </style>
    <![endif]-->
 <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
</head>

<body class="body pc-font-alt" style="width: 100% !important; min-height: 100% !important; margin: 0 !important; padding: 0 !important; line-height: 1.5; color: #2D3A41; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-variant-ligatures: normal; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; background-color: #f4f4f4;" bgcolor="#f4f4f4">
 <table class="pc-project-body" style="table-layout: fixed; min-width: 600px; background-color:#f4f4f4;" bgcolor="#f4f4f4" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
  <tr>
   <td align="center" valign="top">
    <table class="pc-project-container" style="width: 600px; max-width: 600px;" width="600" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
     <tr>
      <td style="padding: 20px 0px 20px 0px;" align="left" valign="top">
       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width: 100%;">
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Menu 10 -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w520-padding-24-25-24-25 pc-w620-padding-34-35-34-35" style="padding: 39px 40px 39px 40px; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="left">
                   <table class="pc-width-hug pc-w620-gridCollapsed-1" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-w620-itemsSpacings-0-20" valign="middle" style="padding-top: 0px; padding-right: 10px; padding-bottom: 0px; padding-left: 0px;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                       <tr>
                        <td align="left" valign="top">
                         <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td align="left" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td align="left" valign="top">
                               <img src="../logo.png" class="" width="125" height="125" alt="" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:125px; height: auto; max-width: 100%;" />
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                     <td class="pc-grid-td-last pc-w620-itemsSpacings-0-20" valign="middle" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 10px;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                       <tr>
                        <td align="left" valign="top">
                         <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td align="left" valign="top">
                            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td align="left">
                               <table class="pc-width-hug pc-w620-gridCollapsed-0" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr class="pc-grid-tr-first pc-grid-tr-last">
                                 <td class="pc-grid-td-first pc-w620-itemsSpacings-10-0" valign="top" style="padding-top: 0px; padding-right: 10px; padding-bottom: 0px; padding-left: 0px;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                   <tr>
                                    <td align="left" valign="top">
                                     <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tr>
                                       <td align="left" valign="top">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="border-collapse: separate; border-spacing: 0;">
                                         <tr>
                                          <td valign="top" align="left">
                                           <div class="pc-font-alt" style="line-height: 121%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 500; font-variant-ligatures: normal; color: #1b1b1b; text-align: left; text-align-last: left;">
                                            <a href="${process.env.FRONTEND_URL}"><span>Начало</span>
                                            </a>
                                           </div>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                 <td class="pc-w620-itemsSpacings-10-0" valign="top" style="padding-top: 0px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                   <tr>
                                    <td align="left" valign="top">
                                     <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tr>
                                       <td align="left" valign="top">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="border-collapse: separate; border-spacing: 0;">
                                         <tr>
                                          <td valign="top" align="left">
                                           <div class="pc-font-alt" style="line-height: 121%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 500; font-variant-ligatures: normal; color: #1b1b1b; text-align: left; text-align-last: left;">
                                            <a href="${process.env.FRONTEND_URL}/shop"><span>Магазин</span>
                                            </a>
                                           </div>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                 <td class="pc-grid-td-last pc-w620-itemsSpacings-10-0" valign="top" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 10px;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                   <tr>
                                    <td align="left" valign="top">
                                     <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tr>
                                       <td align="left" valign="top">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="border-collapse: separate; border-spacing: 0;">
                                         <tr>
                                          <td valign="top" align="left">
                                           <div class="pc-font-alt" style="line-height: 121%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 500; font-variant-ligatures: normal; color: #1b1b1b; text-align: left; text-align-last: left;">
                                            <a href="${process.env.FRONTEND_URL}/about_us"><span>За нас</span>
                                            </a>
                                           </div>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Menu 10 -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Transactional 7 -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w520-padding-30-30-30-30 pc-w620-padding-35-35-35-35" style="padding: 40px 40px 40px 40px; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="left" valign="top" style="padding: 0px 0px 18px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" align="left">
                      <div class="pc-font-alt" style="line-height: 121%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: bold; font-variant-ligatures: normal; color: #40be65; text-align: left; text-align-last: left;">
                       Поръчка #${order._id}</div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="left" valign="top" style="padding: 0px 0px 15px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" align="left">
                      <div class="pc-font-alt pc-w620-fontSize-30 pc-w620-lineHeight-40" style="line-height: 128%; letter-spacing: -0.6px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 36px; font-weight: 800; font-variant-ligatures: normal; color: #151515; text-align: left; text-align-last: left;">
                       ${generateTitle(order.orderStatus)}
                       </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="left" valign="top" style="padding: 0px 0px 30px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" align="left">
                      <div class="pc-font-alt pc-w620-fontSize-18 pc-w620-lineHeight-28" style="line-height: 150%; letter-spacing: -0.4px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 20px; font-weight: normal; font-variant-ligatures: normal; color: #9b9b9b; text-align: left; text-align-last: left;">
                       ${generateParagraph(order.orderStatus)}</div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="left" style="padding: 0px 0px 40px 0px;">
                   <table class="pc-width-hug pc-w620-gridCollapsed-0" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-grid-td-last" valign="top" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                       <tr>
                        <td align="left" valign="top">
                         <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td align="left" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <th valign="top" align="left" style="text-align: left; font-weight: normal; line-height: 1;">
                               <!--[if mso]>
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="border-collapse: separate; border-spacing: 0;">
            <tr>
                <td valign="middle" align="center" style="border-radius: 8px; background-color: #417cd6; text-align:center; color: #ffffff; padding: 14px 15px 14px 15px; mso-padding-left-alt: 0; margin-left:15px;" bgcolor="#417cd6">
                                    <a class="pc-font-alt" style="display: inline-block; text-decoration: none; font-variant-ligatures: normal; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-weight: 500; font-size: 16px; line-height: 150%; letter-spacing: -0.2px; text-align: center; color: #ffffff;" target="_blank">Виж поръчката си</a>
                                </td>
            </tr>
        </table>
        <![endif]-->
                               <!--[if !mso]><!-- -->
                               <a href="${process.env.FRONTEND_URL}/orders" style="display: inline-block; box-sizing: border-box; border-radius: 8px; background-color: #417cd6; padding: 14px 15px 14px 15px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-weight: 500; font-size: 16px; line-height: 150%; letter-spacing: -0.2px; color: #ffffff; vertical-align: top; text-align: center; text-align-last: center; text-decoration: none; -webkit-text-size-adjust: none;" target="_blank">Виж поръчката си</a>
                               <!--<![endif]-->
                              </th>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td style="padding: 0px 0px 40px 0px;">
                   <table class="pc-width-fill pc-w620-gridCollapsed-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first">
                     <td class="pc-grid-td-first pc-w620-itemsSpacings-0-30" align="left" valign="top" style="width: 50%; padding-top: 0px; padding-right: 20px; padding-bottom: 20px; padding-left: 0px;">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                       <tr>
                        <td align="left" valign="top">
                         <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="left" valign="top">
                            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 10px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="left">
                                 <div class="pc-font-alt" style="line-height: 156%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: bold; font-variant-ligatures: normal; color: #151515; text-align: left; text-align-last: left;">
                                    Статус на поръчка
                                </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="left" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 10px 0px;">
                               <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-right: auto;">
                                <tr>
                                 <!--[if gte mso 9]>
                    <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #e5e5e5;">&nbsp;</td>
                <![endif]-->
                                 <!--[if !gte mso 9]><!-- -->
                                 <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #e5e5e5;">&nbsp;</td>
                                 <!--<![endif]-->
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="left" valign="top">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="border-collapse: separate; border-spacing: 0;">
                             <tr>
                              <td valign="top" align="left">
                              <div class="pc-font-alt" style="line-height: 121%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: bold; font-variant-ligatures: normal; color: ${generateColor(order.orderStatus)}; text-align: left; text-align-last: left;">
                                ${order.orderStatus}</div>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                     <td class="pc-grid-td-last pc-w620-itemsSpacings-0-30" align="left" valign="top" style="width: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 20px; padding-left: 20px;">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                       <tr>
                        <td align="left" valign="top">
                         <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="left" valign="top">
                            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 10px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="left">
                                  <div class="pc-font-alt" style="line-height: 156%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: bold; font-variant-ligatures: normal; color: #151515; text-align: left; text-align-last: left;">
                                   Дата на поръчката</div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="left" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 10px 0px;">
                               <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-right: auto;">
                                <tr>
                                 <!--[if gte mso 9]>
                    <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #e5e5e5;">&nbsp;</td>
                                 <!--[if !gte mso 9]><!-- -->
                                 <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #e5e5e5;">&nbsp;</td>
                                 <!--<![endif]-->
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="left" valign="top">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="border-collapse: separate; border-spacing: 0;">
                             <tr>
                              <td valign="top" align="left">
                               <div class="pc-font-alt" style="line-height: 156%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: normal; font-variant-ligatures: normal; color: #151515; text-align: left; text-align-last: left;">
                                ${order.createdAt}</div>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                    <tr class="pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-w620-itemsSpacings-0-30" align="left" valign="top" style="width: 50%; padding-top: 20px; padding-right: 20px; padding-bottom: 0px; padding-left: 0px;">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                       <tr>
                        <td align="left" valign="top">
                         <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="left" valign="top">
                            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 10px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="left">
                                  <div class="pc-font-alt" style="line-height: 156%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: bold; font-variant-ligatures: normal; color: #151515; text-align: left; text-align-last: left;">
                                   Адрес на доставка</div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="left" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 10px 0px;">
                               <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-right: auto;">
                                <tr>
                                 <!--[if gte mso 9]>
                                    <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #e5e5e5;">&nbsp;</td>
                                <![endif]-->
                                 <!--[if !gte mso 9]><!-- -->
                                 <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #e5e5e5;">&nbsp;</td>
                                 <!--<![endif]-->
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="left" valign="top">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="border-collapse: separate; border-spacing: 0;">
                             <tr>
                              <td valign="top" align="left">
                               <div class="pc-font-alt" style="line-height: 156%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: normal; font-variant-ligatures: normal; color: #151515; text-align: left; text-align-last: left;">
                                ${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.country}</div>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                    </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td>
                   <table class="pc-w620-tableCollapsed-0" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                    <tbody>
                     <tr>
                      <td align="left" valign="top" style="padding: 20px 10px 20px 0px; border-bottom: 1px solid #E5E5E5;">
                       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                        <tr>
                         <td valign="top" align="left">
                          <div class="pc-font-alt pc-w620-fontSize-16 pc-w620-lineHeight-26" style="line-height: 28px; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: bold; font-variant-ligatures: normal; color: #151515; text-align: left; text-align-last: left;">
                           Артикул</div>
                         </td>
                        </tr>
                       </table>
                      </td>
                      <td align="left" valign="top" style="padding: 20px 10px 20px 0px; border-bottom: 1px solid #E5E5E5;">
                       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                        <tr>
                         <td valign="top" align="right">
                          <div class="pc-font-alt pc-w620-fontSize-16 pc-w620-lineHeight-26" style="line-height: 28px; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: bold; font-variant-ligatures: normal; color: #151515; text-align: right; text-align-last: right;">
                           Брой</div>
                         </td>
                        </tr>
                       </table>
                      </td>
                      <td align="left" valign="top" style="padding: 20px 10px 20px 0px; border-bottom: 1px solid #E5E5E5;">
                       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                        <tr>
                         <td valign="top" align="right">
                          <div class="pc-font-alt pc-w620-fontSize-16 pc-w620-lineHeight-26" style="line-height: 28px; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: bold; font-variant-ligatures: normal; color: #151515; text-align: right; text-align-last: right;">
                           Размер</div>
                         </td>
                        </tr>
                       </table>
                      </td>
                      <td align="left" valign="top" style="padding: 20px 0px 20px 0px; border-bottom: 1px solid #E5E5E5;">
                       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                        <tr>
                         <td valign="top" align="right">
                          <div class="pc-font-alt pc-w620-fontSize-16 pc-w620-lineHeight-26" style="line-height: 28px; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: bold; font-variant-ligatures: normal; color: #151515; text-align: right; text-align-last: right;">
                           Цена</div>
                         </td>
                        </tr>
                       </table>
                      </td>
                     </tr>
                     ${order.orderItems.map((item) => (`
                        <tr>
                            <td align="left" valign="top" style="padding: 20px 10px 20px 0px; border-bottom: 1px solid #E5E5E5;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                            <td>
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                                <td valign="top">
                                <table class="" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                <th valign="top" style="font-weight: normal; text-align: left;">
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr>
                                    <td class="pc-w620-spacing-0-0-20-0" valign="top" style="padding: 0px 20px 0px 0px;">
                                    <img src="${item.image}" class="" width="100" height="104" alt="" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:100px; height:104px;" />
                                    </td>
                                    </tr>
                                    </table>
                                </th>
                                <th valign="top" style="font-weight: normal; text-align: left;">
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr>
                                    <td>
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                        <tr>
                                        <td valign="top">
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                        <tr>
                                            <th align="left" valign="top" style="font-weight: normal; text-align: left; padding: 0px 0px 4px 0px;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                                            <tr>
                                            <td valign="top" align="left" style="padding: 9px 0px 0px 0px;">
                                                <div class="pc-font-alt pc-w620-fontSize-16 pc-w620-lineHeight-26" style="line-height: 28px; letter-spacing: -0.3px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: 500; font-variant-ligatures: normal; color: #151515; text-align: left; text-align-last: left;">
                                                ${item.name}</div>
                                            </td>
                                            </tr>
                                            </table>
                                            </th>
                                        </tr>
                                        </table>
                                        </td>
                                        </tr>
                                    </table>
                                    </td>
                                    </tr>
                                    </table>
                                </th>
                                </tr>
                                </table>
                                </td>
                            </tr>
                            </table>
                            </td>
                        </tr>
                       </table>
                      </td>
                      <td align="left" valign="top" style="padding: 20px 10px 20px 0px; border-bottom: 1px solid #E5E5E5;">
                       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                        <tr>
                         <td valign="top" align="right">
                          <div class="pc-font-alt pc-w620-fontSize-16 pc-w620-lineHeight-20" style="line-height: 22px; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: normal; font-variant-ligatures: normal; color: #9b9b9b; text-align: right; text-align-last: right;">
                           ${item.quantity}</div>
                         </td>
                        </tr>
                       </table>
                      </td>
                      <td align="left" valign="top" style="padding: 20px 10px 20px 0px; border-bottom: 1px solid #E5E5E5;">
                       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                        <tr>
                         <td valign="top" align="right">
                          <div class="pc-font-alt pc-w620-fontSize-16 pc-w620-lineHeight-20" style="line-height: 22px; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: normal; font-variant-ligatures: normal; color: #9b9b9b; text-align: right; text-align-last: right;">
                           ${item.size}</div>
                         </td>
                        </tr>
                       </table>
                      </td>
                      <td align="left" valign="top" style="padding: 20px 0px 20px 0px; border-bottom: 1px solid #E5E5E5;">
                       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                        <tr>
                         <td valign="top" align="right">
                          <div class="pc-font-alt pc-w620-fontSize-16 pc-w620-lineHeight-20" style="line-height: 22px; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: normal; font-variant-ligatures: normal; color: #151515; text-align: right; text-align-last: right;">
                          ${item.price}</div>
                         </td>
                        </tr>
                       </table>
                      </td>
                     </tr>
                    `))}
                    </tbody>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td height="20" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td>
                   <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                     <td valign="top">
                      <table class="" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <th class="pc-w620-width-auto" width="460" align="right" valign="top" style="font-weight: normal; text-align: left; width: 460px;">
                         <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-width-auto" width="460" align="right" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                          <tr>
                           <td valign="top" align="right">
                            <div class="pc-font-alt pc-w620-fontSize-16 pc-w620-lineHeight-26" style="line-height: 28px; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: normal; font-variant-ligatures: normal; color: #151515; text-align: right; text-align-last: right;">
                             Цена:</div>
                           </td>
                          </tr>
                         </table>
                        </th>
                        <th class="pc-w620-width-auto" width="60" align="right" valign="top" style="font-weight: normal; text-align: left; width: 60px;">
                         <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-width-auto" width="60" align="right" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                          <tr>
                           <td valign="top" align="right" style="padding: 0px 0px 0px 20px;">
                            <div class="pc-font-alt pc-w620-fontSize-16 pc-w620-lineHeight-26" style="line-height: 28px; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: normal; font-variant-ligatures: normal; color: #151515; text-align: right; text-align-last: right;">
                            BGN ${order.itemsPrice}</div>
                           </td>
                          </tr>
                         </table>
                        </th>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td>
                   <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                     <td valign="top">
                      <table class="" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <th class="pc-w620-width-auto" width="460" align="right" valign="top" style="font-weight: normal; text-align: left; width: 460px;">
                         <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-width-auto" width="460" align="right" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                          <tr>
                           <td valign="top" align="right">
                            <div class="pc-font-alt pc-w620-fontSize-16 pc-w620-lineHeight-26" style="line-height: 28px; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: normal; font-variant-ligatures: normal; color: #151515; text-align: right; text-align-last: right;">
                             Доставка:</div>
                           </td>
                          </tr>
                         </table>
                        </th>
                        <th class="pc-w620-width-auto" width="60" align="right" valign="top" style="font-weight: normal; text-align: left; width: 60px;">
                         <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-width-auto" width="60" align="right" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                          <tr>
                           <td valign="top" align="right" style="padding: 0px 0px 0px 20px;">
                            <div class="pc-font-alt pc-w620-fontSize-16 pc-w620-lineHeight-26" style="line-height: 28px; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: normal; font-variant-ligatures: normal; color: #151515; text-align: right; text-align-last: right;">
                            $${order.shippingPrice}</div>
                           </td>
                          </tr>
                         </table>
                        </th>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td height="20" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                 <tr>
                  <td valign="top">
                   <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                     <!--[if gte mso 9]>
                    <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 2px solid #e5e5e5;">&nbsp;</td>
                <![endif]-->
                     <!--[if !gte mso 9]><!-- -->
                     <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 2px solid #e5e5e5;">&nbsp;</td>
                     <!--<![endif]-->
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td height="20" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td>
                   <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                     <td valign="top">
                      <table class="" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <th class="pc-w620-width-auto" width="460" align="right" valign="top" style="font-weight: normal; text-align: left; width: 460px;">
                         <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-width-auto" width="460" align="right" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                          <tr>
                           <td valign="top" align="right">
                            <div class="pc-font-alt pc-w620-fontSize-22 pc-w620-lineHeight-32" style="line-height: 34px; letter-spacing: -0.4px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 24px; font-weight: bold; font-variant-ligatures: normal; color: #151515; text-align: right; text-align-last: right;">
                             Общо: </div>
                           </td>
                          </tr>
                         </table>
                        </th>
                        <th class="pc-w620-width-auto" width="60" align="right" valign="top" style="font-weight: normal; text-align: left; width: 60px;">
                         <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-width-auto" width="60" align="right" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                          <tr>
                           <td valign="top" align="right" style="padding: 0px 0px 0px 20px;">
                            <div class="pc-font-alt pc-w620-fontSize-22 pc-w620-lineHeight-32" style="line-height: 34px; letter-spacing: -0.4px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 24px; font-weight: bold; font-variant-ligatures: normal; color: #151515; text-align: right; text-align-last: right;">
                             BGN ${order.totalPrice}</div>
                           </td>
                          </tr>
                         </table>
                        </th>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Transactional 7 -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Footer 8 -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w520-padding-30-30-30-30 pc-w620-padding-35-35-35-35" style="padding: 40px 40px 40px 40px; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td>
                   <table class="pc-width-fill pc-w620-gridCollapsed-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-w620-itemsSpacings-0-40" align="left" valign="top" style="width: 50%; padding-top: 0px; padding-right: 20px; padding-bottom: 0px; padding-left: 0px;">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                       <tr>
                        <td align="left" valign="top">
                         <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="left" valign="top">
                            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 10px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="left">
                                  <div class="pc-font-alt" style="line-height: 133%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: 500; font-variant-ligatures: normal; color: #1b1b1b; text-align: left; text-align-last: left;">
                                   Последвайте ни.</div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="left" valign="top">
                            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td class="pc-w620-spacing-0-0-22-0" valign="top" style="padding: 0px 0px 52px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="left">
                                  <div class="pc-font-alt" style="line-height: 143%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #9b9b9b; text-align: left; text-align-last: left;">
                                   <div><span>Последвайте ни, за да достигнем до повече хора.</span>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="left" valign="top">
                            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td align="left">
                               <table class="pc-width-hug pc-w620-gridCollapsed-0" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr class="pc-grid-tr-first pc-grid-tr-last">
                                 <td class="pc-grid-td-first pc-w620-itemsSpacings-10-0" valign="middle" style="padding-top: 0px; padding-right: 10px; padding-bottom: 0px; padding-left: 0px;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                   <tr>
                                    <td align="left" valign="top">
                                     <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tr>
                                       <td align="left" valign="top">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td valign="top">
                                           <img src="https://cloudfilesdm.com/postcards/d09524cd03695cc9e6b7ddb7018639e8.png" class="" width="20" height="20" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;" alt="" />
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                 <td class="pc-w620-itemsSpacings-10-0" valign="middle" style="padding-top: 0px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                   <tr>
                                    <td align="left" valign="top">
                                     <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tr>
                                       <td align="left" valign="top">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td valign="top">
                                           <img src="https://cloudfilesdm.com/postcards/4dff04aee748e4609888afb416076ed5.png" class="" width="20" height="20" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;" alt="" />
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                 <td class="pc-grid-td-last pc-w620-itemsSpacings-10-0" valign="middle" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 10px;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                   <tr>
                                    <td align="left" valign="top">
                                     <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tr>
                                       <td align="left" valign="top">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td valign="top">
                                           <img src="https://cloudfilesdm.com/postcards/31226d83b7ca4f0da461a767b175fa2e.png" class="" width="20" height="20" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;" alt="" />
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                     <td class="pc-grid-td-last pc-w620-itemsSpacings-0-40" align="left" valign="top" style="width: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 20px;">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                       <tr>
                        <td align="left" valign="top">
                         <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="left" valign="top">
                            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 10px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="left">
                                  <div class="pc-font-alt" style="line-height: 133%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: 500; font-variant-ligatures: normal; color: #151515; text-align: left; text-align-last: left;">
                                   Свържете се с нас.</div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="left" valign="top">
                            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td class="pc-w620-spacing-0-0-25-0" valign="top" style="padding: 0px 0px 45px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="left">
                                  <div class="pc-font-alt" style="line-height: 143%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #9d9d9d; text-align: left; text-align-last: left;">
                                   <div><span>support@sneakerbrigade.com</span>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Footer 8 -->
         </td>
        </tr>
        <tr>
         <td>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
           <tr>
            <td align="center" valign="top" style="padding-top: 20px; padding-bottom: 20px; vertical-align: top;">
             <img src="https://api-postcards.designmodo.com/tracking/mail/promo?uid=MjQ5NTYy" width="1" height="1" alt="" style="display:none; width: 1px; height: 1px;">
            </td>
           </tr>
          </table>
         </td>
        </tr>
       </table>
      </td>
     </tr>
    </table>
   </td>
  </tr>
 </table>
 <!-- Fix for Gmail on iOS -->
 <div class="pc-gmail-fix" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 </div>
</body>

</html>
`;

const sizes = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48];

module.exports = {forgotPasswordMessage, orderMessage, generateSubject, sizes};
