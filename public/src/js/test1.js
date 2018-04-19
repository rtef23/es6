var testObject = {
  name: "test name",
  age: "t"
};

var testSchema = {
  name: {
    type: "string",
    isValid: function(value){
      return value === "test name1";
    },
    message: "name is not valid"
  },
  age: {
    type: "number",
    message: "age is not valid"
  }
};

var result = Validator.validate(testObject, testSchema);

console.log(result);