"use strict";

function errorHandler(error) {
  console.log(error);
  throw new Error("Fail in the operation server");
}

module.exports = errorHandler;
