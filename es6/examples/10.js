//proxy
//用法 new Proxy(target,handler)

var obj = new Proxy({},{
	get:function(target, key, receiver){
		console.log(`getting ${key}!`);
		return target[key]
	},
	set:function(target, key, value,receiver){
		console.log(`setting ${key}!`);
		target[key] = value;
	}
});

obj.count =1;
console.log(obj.count);

//proxy可拦截的操作
//get,set,apply,construct,deleteProperty,preventExtensions等