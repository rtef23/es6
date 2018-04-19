var Validator = {
  validate: function(targetObject, schema){
    var result = true;
    var messages = [];

    for(var key in schema){
      if(!targetObject[key]){
        result = false;
        if(schema[key].message){
          messages.push(schema[key].message);
        }
        continue;
      }

      if(!!schema[key].type){
        if(typeof targetObject[key] != schema[key].type){
          result = false;
          if(schema[key].message){
            messages.push(schema[key].message);
          }
          continue;
        }
      }

      if(!!schema[key].isValid){
        if(!schema[key].isValid(targetObject[key])){
          result = false;
          if(schema[key].message){
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