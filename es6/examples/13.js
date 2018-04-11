//async同步函数
  function logs(message){
  	return new Promise(function(resolve,reject){
		setTimeout(resolve,1500);
  	});
}

async function link(){
	var ops = await logs("hello word");
	console.log("some thing");
}

link();