 var firstName = "Peter"
    lastName = "Ally";


showFullName => () {
	console.log(this.firstName)
}
var person = {
	firstName: "ASM",
	lastName: "MORSHED",
	showFullName: function(){
		console.log(this.firstName+" "+this.lastName);
	}

}

showFullName();
person.showFullName();
