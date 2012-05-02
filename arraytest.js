
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