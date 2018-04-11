//promise基本使用方式
var pse = new Promise(function(resolve,reject){
	setTimeout(function(){
		//resolve('done');
		reject('fail');
	},1500);
});

pse.then(function(args){
	console.log(args);
})
.catch(function(args){
	console.log(args);
});

//promise的使用场景
//1. jquery ajax请求
//2. 简化链式异步操作
//3. 服务端验证表单提交