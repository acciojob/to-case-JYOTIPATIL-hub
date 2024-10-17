function toCase(text) {
  // write your code here
	function toCase(str) {
  // Handle the case for empty string
  if (str === "") return "-";
  
  // Convert the string to lowercase and uppercase
  const lower = str.toLowerCase();
  const upper = str.toUpperCase();
  
  // Return the concatenated result with '-' as the delimiter
  return `${lower}-${upper}`;
}

// Test cases
console.log(toCase('Mthatha'));    // Output: 'mthatha-MTHATHA'
console.log(toCase('HelloWorld')); // Output: 'helloworld-HELLOWORLD'
console.log(toCase('OpenAI'));     // Output: 'openai-OPENAI'
console.log(toCase(''));           // Output: '-'

}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
