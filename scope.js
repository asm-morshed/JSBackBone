//<--------Global variable works in the local function------>
var name = "ASM";

function showName() {
	console.log(name);
}


showName();
console.log(name);
// //<-------- same variable name but in function------>

// var name = "ASM";

// function showName() {
// 	var name = "MORSHED"
// 	console.log(name);
// }

// console.log(name);
// showName();

// <------- Without functional variable it always keeps the newest value-------->
// var name = "ASM";

// for (var i = 0; i < 2; i++) {
// 	var name = i+1;
// 	console.log(name);
// }

// console.log(name);


// <-----Local variable has priority over Global variable------>
// var name ="ASM";

// function showName() {
// 	console.log(name);
// }

// function showNameAfter() {
// 	name="MORSHED";
// 	console.log(name);
// }
// showName();
// showNameAfter();
// showName();
// console.log(name);

