var util = require("./util");

exports['test Invalid Argument'] = function() {
  
  // Unknown argument => throw error widh Unknown identifier
  util.assertLint("var arr;", {
          messages : [{
            "message" : "\"arr\" is defined but never used",
            "severity" : "error",
            "from" : 3,
            "to" : 4,            
            "file": "test1.js"}
          ]
  }, [ "browser" ]); 
  
}

if (module == require.main) require('test').run(exports)
