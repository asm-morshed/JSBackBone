// An Object is an unordered list of data which is stored as a series of key-value pairs. Each item in the list is called 
// a property and the functions are called methods

// Here simple Object example:

var studentObj = {firstName: "ASM", lastName: "Morshed", Dept: "CSE"};

// Here the firstName, lastName and Dept is key and others are key-value

// if we want to see the value we just need to call and Object name and key name

console.log(studentObj.firstName);

// property can be integer too. 

var studentObj = {11: "ASM",22:"Morshed"};

// But for getting the data we need to use bracket notation

console.log(studentObj["11"]);

// Reference Data Type and Primitive Data Type

// In primitive data type's the value is stored as a value

var name = "ASM";

var myName = name;

name = "MORSHED";

console.log(myName);
console.log(name);

// But in reference data the type is just copy the reference not the 
// value as a result when we change the value it reflects on others.

var name = {myName: "ASM"};

var nickName = name;

name.myName = "MORSHED";

console.log(nickName.myName);
console.log(name.myName);

// Creating Objects

// There are two common types to create objects:

// 1. Object Literals

// The most common and easiest way to create object

var student = {};

var fruit = {
	name: "Mango",
	color: "Yellow",
	sweetness: 8,
	Testy: function () {
		console.log("It is really wonderful to eat");
	}
}

console.log(fruit.name);
fruit.Testy();

// 2. Object Constructor
// second most common way

var student = new Object();

student.name = "ASM";
student.age = 26;
student.activity = function () {
	console.log("Doing a job at a software firm");
}

student.activity();

//** Objects can contain any other data type, including number,
//arrays and even other Objects **


//Constructor Pattern for creating Object

function studentDetail(name, age, hometown, sub, hobby) {
	
	this.name = name;
	this.age = age;
	this.hometown = hometown;
	this.sub = sub;
	this.age = age;
	this.hobby = hobby
	this.hobbyList = function () {
		this.hobby.forEach(function (hobby) {
			console.log("Hobby is: "+hobby);
		});
	}

}

var aStudent = new studentDetail("ASM MORSHED", "26","Dinajpur","CSE", ["Debate", "Psychology"]);

aStudent.hobbyList();

//Prototype Pattern for creating Object

function studentDetail(argument) {
	
}

studentDetail.prototype.name = "ASM Morshed";
studentDetail.prototype.age = 26;
studentDetail.prototype.hometown = "Dinajpur";
studentDetail.prototype.sub = "CSE";
studentDetail.prototype.hobby = ["Debate", "Psychology"];
studentDetail.prototype.hobbyList = function () {
	studentDetail.prototype.hobby.forEach(function (ho) {
		console.log("Hobby is : "+ ho);
	})
}
var aStudent = new studentDetail();



console.log(aStudent.name);

aStudent.hobbyList();

// Need to read the recommended

// Dot Notation and Bracket Notation

var student = {name: "ASM Morshed", age: 26, hometown:"Dinajpur"};

console.log(student.name); // Dot Notation

console.log(student["name"]); // Bracket Notation