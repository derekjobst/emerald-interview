/* Derek Jobst 3/10/14 */

//Referenced: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

// Original Function

function acronym(input){

	var out = "";

	if(input.charAt(0) != " "){
		out = out.concat(input.charAt(0));
	}

	while(input.indexOf(" ") != -1){

		var location = input.indexOf(" ") + 1;

		if(input.charAt(location) != " "){
			out = out.concat(input.charAt(location));
		}

		input = input.substr(location+1);
	}

	return out;
}

//Tests

function testOneWord(){

	var input = "Hello";

	try{
		console.log(acronym(input) == "H");
	}
	catch(err){
		console.log(err);
	}
}

testOneWord();

function testTwoWords(){

	var input = "Hello World";
	
	try{
		console.log(acronym(input) == "HW");
	}
	catch(err){
		console.log(err);
	}
}

testTwoWords();

function testPreceedingSpace(){

	var input = " Hello";
	
	try{
		console.log(acronym(input) == "H");
	}
	catch(err){
		console.log(err);
	}
}

testPreceedingSpace();

function testSucceedingSpace(){

	var input = "Hello ";
	
	try{
		console.log(acronym(input) == "H");
	}
	catch(err){
		console.log(err);
	}
}

testSucceedingSpace();

//this breaks my program. I suspect it can be fixed with an else statment in the " " check that cuts to the first non " " character.

function testMultSpaces(){

	var input = "  Hello    World   ";
	
	try{
		console.log(acronym(input) == "HW");
	}
	catch(err){
		console.log(err);
	}
}

testMultSpaces()
