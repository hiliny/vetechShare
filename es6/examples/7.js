//属性的简洁表示法
let name = "web knowledge";
let obj = {
	name,
	say(){
		return this.name;
	}
};
console.log(obj.say());

//属性名表达式,表达式要放在方括号内
let all = "going";
let obj2 = {
	[all]:"who are you",
	["a"+"bc"]:"jack here"
};
console.log(obj2);

//方法的name属性
const person = {
	sayName(){
		console.log("hello"); 
	}
};
console.log(person.sayName.name);

//Object.is 比较两个值是否相等，与=== 有两个区别 +0不等于-0 NaN等于NaN
console.log(Object.is(NaN,NaN));

//Object.assign(target,source)方法,浅拷贝
let a1 = {name:"jix"},a2 = {age:"18"};
Object.assign(a1,a2);
console.log(a1);

//Object.keys ,Object.entries
let obj3 = {
	name:"jix-1",
	age:26
};
console.log(Object.keys(obj3),Object.entries(obj3));

//对象的扩展运算符
let aa = {name:"jane",age:"22"};
let ab = {sex:"man",...aa};
console.log(ab);

