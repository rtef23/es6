var testObject = {
  name: "test name",
  age: 5
};

var testSchema = {
  name: {
    type: "string",
    message: "name is not valid"
  },
  age: {
    type: "number",
    message: "age is not valid"
  }
};

var result = Validator.validate(testObject, testSchema);

console.log(result);