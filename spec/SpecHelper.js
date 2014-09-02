function using(name, values, func){
  var jasmineEnv = jasmine.getEnv();
  for (var i = 0, count = values.length; i < count; i++) {
    var currentTestData = values[i],
	    fn,
		testFullName = "No name";
		
    if (Object.prototype.toString.call(values[i]) !== '[object Array]') {
      currentTestData = [values[i]];
    }
	testFullName = name+' -> for value: '+currentTestData;
	jasmineEnv.it(testFullName, (function(fn, currData){
		return function(){ fn.apply(this, currData) };
	})(func, currentTestData));
  }
}