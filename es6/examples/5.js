//函数参数的默认值
function log(x,y='world'){
	//只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式
	return x+y;
}
console.log(log('hello'));

//函数的name属性
var func = function(){};
console.log('function name:'+func.name);//es5为空

//箭头函数
//箭头函数内部的this对象，是定义时所在的对象，不是运行时的对象
//箭头函数不能用做构造函数，内部没有arguments对象
var sum = (num1,num2) => num1+num2;
console.log("sum :"+sum(1,11));