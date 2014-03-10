
# Used http://coffeescript.org for this.


acronym = (input) ->
	out = ""
	out = out.concat(input.charAt(0)) if input.charAt(0) != " "

	while(input.indexOf(" ") != -1)
		location = input.indexOf(" ") + 1
		out = out.concat(input.charAt(location)) if input.charAt(location) != " "
		input = input.substr(location+1);

	return out;
