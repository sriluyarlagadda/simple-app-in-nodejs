


function match(item,filter) {
	var keys = Object.keys(item);
	return keys.some(function(key){
		return item[key] == filter[key];
	});
}


var objects = [{a:'a',b:'b',c:'c'},{b:'2',c:'1'},{d:'3',e:'4'},{e:'f',c:'c'}];

objects.forEach(function(object){
	console.log('Result',match(object,{c:'c',d:'3'}));
});


console.log( doSomething() );

// define the functions after calling them!
var doSomethingElse = function() { return 'doSomethingElse'; };

function doSomething() { return 'doSomething'; }

console.log( doSomethingElse() );


var doSomethingElse = function(a, b) {
  console.log(a, b);
  console.log(arguments);
};
doSomethingElse(1, 2, 3, 'foo');