"use strict";

const jsonValidator = require("json-validator");

let jsonSchema = {
  name: {
    required: true,
    trim: true,
    validate: function (name, path) {
      console.log(`name : ${name}\npath : ${path}`);

      return {
        isValid: (!name && typeof name === "string"),
        message: "check your name"
      };
    }
  }
};

let targetData = {
  name: false
};

jsonValidator.validate(targetData, jsonSchema, function(err, message){
  if(err){
    throw err;
  }

  console.log(`error : ${JSON.stringify(err)}`);
  console.log(`message : ${JSON.stringify(message)}`);
});