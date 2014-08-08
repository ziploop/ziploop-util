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
  validParams: function(obj, keys) {
	  var missing = [];
	  keys.forEach(function(key){
	    if (!obj.hasOwnProperty(key)) missing.push(key);
	  });
	  if (missing.length > 0) {
	    console.log("MISSING ARGUMENTS:\n", missing);
	    return false;
	  } else {
	    return true;
	  }
	}
};