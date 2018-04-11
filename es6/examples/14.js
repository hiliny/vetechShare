//class
class People {
	constructor(name,age,sex){
		this.name = name;
		this.age = age;
		this.sex = sex;
	}
	getName(){
		return this.name;
	}
	getAge(){
		return  this.age;
	}
	getSex(){
		return this.sex;
	}
}

var tom = new People('tom',18,'boy');
console.log(tom.getName());

//类的继承
class Teacher extends People{
	constructor(name,age,sex){
		super(name,age,sex);
		this.career = 'teacher';
	}
	getCareer(){
		return 'Im a'+this.career;
	}
}
var jane = new Teacher("jane",55,'girl');
console.log(jane.getCareer());