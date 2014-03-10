/* Derek Jobst 3/10/14 */

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