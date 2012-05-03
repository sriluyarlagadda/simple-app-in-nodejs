
function process(argv){
	if(Array.isArray(argv)){
		if(argv.indexOf('help')) {
			console.log('this is the help text');
		}
	}
	else {
		console.log('not an array');
	}
}

process(['1','what','help']);


var keys = Object.keys({a:'foo',b:'bar'});
console.log(keys,keys.length);