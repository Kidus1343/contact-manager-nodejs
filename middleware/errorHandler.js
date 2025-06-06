const {constants} = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {

    case constants.VALIDATION_ERROR:
        res.json({
    title: "Validation Failed",
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
      err.message = "Bad Request";
      break;    
    case constants.UNAUTHORIZED:
        res.json({
    title: "Unauthorized",
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
    case constants.FORBIDDEN:
        res.json({
    title: "Forbidden",
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
  case constants.NOT_FOUND:
        res.json({
    title: "Not Found",
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
  case constants.SERVER_ERROR:
        res.json({
    title: "Server Error",
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
        break;  
    default:
        err.message = "Internal Server Error";
        break;
  // Set the response status code
  res.status(statusCode);

  // Send the error response
  
}
}
module.exports = errorHandler;