function async(arg,callback) {
	console.log('do something with ' +arg+ ' return after 1 second' );
	setTimeout(function(){callback(arg*2);},1000);
}

function final(){
	console.log("data",results);
}

var items = [1,2,3,4,5,6];
var results = [];

var running = 0;
var limit = 4;

function launcher(){
  while(running < limit && items.length > 0){
	var item = items.shift();
	async(item,function(result){
		results.push(result);
		running--;
		if(items.length > 0){
			launcher();
		}
		else if(running == 0){
			final();
		}
	});
	running++;
  }
}


launcher();
