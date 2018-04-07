let str = "hello world";

console.log("includes:"+str.includes("hello"));
console.log("startsWith:"+str.startsWith("h"));
console.log("endsWidth:"+str.endsWith("d"));
console.log("repeat:"+str.repeat(2));
console.log("padStart:"+str.padStart(15,"d"));
console.log("padEnd:"+str.padEnd(15,"e"));

//模板字符串
function mix(){
	return "well done";
}

let str2 = `I want to say ${str}`;
console.log("from str2:"+str2);