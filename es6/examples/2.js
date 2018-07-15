// 数组的解构赋值
var [a,b=55] = [10,20];
console.log('a变量:'+a);
console.log('b变量:'+b);
//对象的解构赋值
var {name,age} = {name:"hiliny",age:18};
console.log('name变量:'+name)
console.log('age变量:'+age);
//字符串的解构赋值
var [c,d] = "hello";
console.log('c变量:'+c);
//函数参数的结构赋值
function add([x,y]){
	return x+y;
}
console.log("call add:"+add([5,5]));
//解构复制用于遍历Map结构
var map = new Map();
map.set("first","hello");
map.set("second","world");
for(let [key,value] of map){
	 console.log(key + " is " + value);
}
