//Set数据机构
var s = new Set();
s.add(1);
s.add(2);
s.add(2);
s.add(3);
console.log(s,s.size);

//set的方法
console.log(s.has(3));
s.delete(3);
console.log(s);
s.clear();
console.log(s);

//set的遍历方法
var d = new Set([1,2,3,4]);
for(let item of d.entries()){
	console.log(item);//区别于数组的遍历，key不是索引,而是值本身
}
console.log("数组-->");
for(let item of [5,6].entries()){
	console.log(item);
}

//WeakSet add delete has方法
//垃圾回收的标记清除法和引用计数法
var x = [[1,2],[3,4]];
var a = new WeakSet(x);
console.log(a.has(x[0]));

//Map结构 has,get,delete,clear方法 
var mp = new Map();
var o = {name:"jix"};
mp.set(o,"content");

console.log(mp.size);
console.log(mp.has(o));
console.log(mp.get(o));

