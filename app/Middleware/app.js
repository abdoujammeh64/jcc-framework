const hpp = require("hpp");
const xss = require("xss-clean");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const fileUpload = require("express-fileupload");
const mongooseSanitize = require("express-mongo-sanitize");

const app = [
  cookieParser(),
  hpp(),
  xss(),
  helmet(),
  fileUpload(),
  mongooseSanitize(),
];

module.exports = app;
