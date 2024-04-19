
function firstNonRepeatedChar(str) {
	let charCount = {};
	for(let i=0;i<str.length;i++) {
		if(charCount[str.charAt(i)]==undefined) {
			charCount[str.charAt(i)]] = 1;
		}
		else {
			charCount[str.charAt(i)]] += 1;
		}
	}

	for (c in charCount) {
		if(c==1) {
			return c;
		}
	}
	return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
