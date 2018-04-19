var Validator = {
  validate: function (targetObject, schema) {
    var result = true;
    var messages = [];

    for (var key in schema) {
      if (!targetObject[key]) {
        result = false;

        if (schema[key].message) {
          messages.push(schema[key].message);
        }
        continue;
      }

      if (typeof schema[key].type === "string") {
        if (typeof targetObject[key] != schema[key].type) {
          result = false;

          if (schema[key].message) {
            messages.push(schema[key].message);
          }
          continue;
        }
      }

      var typeIsValid = typeof schema[key].isValid;

      if (typeIsValid === "function") {
        if (!schema[key].isValid(targetObject[key])) {
          result = false;

          if (schema[key].message) {
            messages.push(schema[key].message);
          }
        }
      } else if (typeIsValid === "boolean") {
        if (!schema[key].isValid) {
          result = false;

          if (schema[key].message) {
            messages.push(schema[key].message);
          }
        }
      }
    }

    return {
      result: result,
      messages: messages
    };
  }
};