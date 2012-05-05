function async(arg,callback) {
	console.log('do something with ' +arg+ ' return after 1 second' );
	setTimeout(function(){callback(arg*2);},1000);
}

function final(){
	console.log("data",results);
}

var items = [1,2,3,4,5,6];
var results = [];


items.forEach(function(item){
	async(item,function(result){
		results.push(result);
		if(results.length == items.length){
			final();
		}
	})
	
});

