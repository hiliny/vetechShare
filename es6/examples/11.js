//Reflect 的静态方法
// Reflect.apply(target, thisArg, args)
// Reflect.construct(target, args)  不使用new ，构造对象
// Reflect.get(target, name, receiver)
// Reflect.set(target, name, value, receiver)
// Reflect.defineProperty(target, name, desc)
// Reflect.deleteProperty(target, name)
// Reflect.has(target, name)
// Reflect.ownKeys(target)
// Reflect.isExtensible(target)
// Reflect.preventExtensions(target)
// Reflect.getOwnPropertyDescriptor(target, name)
// Reflect.getPrototypeOf(target)
// Reflect.setPrototypeOf(target, prototype)

var obj = {name:"jix"};
console.log(Reflect.has(obj,"name"));
