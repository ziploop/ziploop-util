module.exports = {
	throttleForEach: function(array, wait, iterator){
    (function getNextItem(index){
      iterator(array[index], index);
      var next = index + 1;
      if (next < array.length) {
        setTimeout(function(){
          getNextItem(next);
        }, wait);
      }
    })(0);
  },
  validParams: function(obj, keys, strictMode) {
  	var strict = strictMode || false;
  	var resultObj = strict ? {} : obj;
	  var missing = [];
	  keys.forEach(function(key){
	    if (!obj.hasOwnProperty(key)) missing.push(key);
	    if (strict) resultObj[key] = obj[key];
	  });
	  if (missing.length > 0) {
	    return false;
	  } else {
	    return resultObj;
	  }
	}
};