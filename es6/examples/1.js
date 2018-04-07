// let和const命令示例

var a = [];
for(var i=0;i<10;i++){
	a[i] = function(){
		console.log(i);
	};
}
//console.log("循环变量i的值:"+i);
a[6]();

const c = 10;
//c = 100;
const d = {};
d.name = "js time";