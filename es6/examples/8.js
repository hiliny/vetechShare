//Symbol的基本用法
let s = Symbol();
let e = Symbol("describe");//同参值不等
console.log(typeof s);
console.log(e);

let a = {
	[s]:"some thing",
	name:"jix"
};
console.log(a);

//Symbol.for(key) 重复利用一个key值产生的Symbol
//Symbol.keyFor 获取symbol值得key
let v = Symbol.for("describe");
let n  = Symbol.for("describe");
console.log(v === n);
console.log(Symbol.keyFor(v));

//Symbol 作为属性名,不会出现在for...in、for...of、Object.keys中，却会出现在Reflect.ownkeys中
console.log(Reflect.ownKeys(a));