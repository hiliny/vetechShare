//扩展运算符
let a = [4,5,6];
let b = [1,2,3,...a];
console.log("扩展运算符："+b);

function logs(a,...b){
	console.log("a："+a);
	console.log("b："+b);
} 
logs(1,3,5,7,9);

//Array.from
function foo(a,b,c,d){
	var args = Array.from(arguments);
	console.log(args);
}
foo(1,1,1,1);

//Array.of 将一组值转为数组
//因为构造参数为1时是制定长度，多个时才为元素
console.log(Array.of(1,2,3));

//Array.copyWithin(begin,start,end)
console.log([1,2,3,4,5].copyWithin(0,3));

//Array.find Array.findIndex
var target = [1,4,-6,11].find(n=>n<0);//找出符合条件的第一个值
console.log("target:"+target);
var targetIndex = [1,4,-6,11].find(n=>n>0);//找出符合条件的第一个值
console.log("targetIndex:"+targetIndex);//找出符合条件的第一个索引值

//Array.fill 填充一个数组
console.log([1,2,3,4].fill(5));

//Array.includes
console.log([1,2,3,4].includes(1));
//数组的keys，values，entries
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}