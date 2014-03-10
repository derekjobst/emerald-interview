/* Derek Jobst 3/10/14 */

function acronym(input){

	var out = "";

	//check if first letter is not a space b/c while loop will hit first word only if it is preceeded by a space.
	if(input.charAt(0) != " "){
		out = out.concat(input.charAt(0));
	}

	//iterate through all spaces, concat letter succeeding them IFF not a space.
	while(input.indexOf(" ") != -1){

		var location = input.indexOf(" ") + 1;

		if(input.charAt(location) != " "){
			out = out.concat(input.charAt(location));
		}

		input = input.substr(location+1);
	}

	return out;
}