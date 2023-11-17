// Challenge 1: Store the string "I am a" in one variable and store the other string "Kalvian" in other variable and concatenate both the string to get the output as "I am a Kalvain" using "+" operator.
var firstName = 'I am a ';
var secondName = 'Kalvian';

// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".
console.log(firstName.concat(secondName));
// Challenge 3: Store a string in a variable and display the length of the string.
var stringLength = 'I am length';
console.log(stringLength.length);
// Challenge 4: Store a string in a variable and convert it into uppercase.
var upperCase = 'I am kalvian';
console.log(upperCase.toUpperCase());
//Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".
var program = 'I love programming';
console.log(program.replace(/programming/g, 'JavaScript programming'));
// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.
var repeatWord = 'tiger is on the way ';
console.log(repeatWord.repeat(3));
//Challenge 7: Store the string as "I am a Kalvian" in a variable and convert the string into array and print the array in console.
var kalvian = 'I am a kalvian';
console.log(kalvian.split(' '));
// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.
var timeAnd = 'Time and Tide wait for none';
console.log(timeAnd.indexOf('Ti'));

// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".
var lemon = 'When life gives you lemons make lemonade';
console.log(lemon.includes('lemon'));
// Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".
var change = 'You must be the change you wish to see in the world';
console.log(change.slice(16, 23));
console.log(change.substring(46, 52));
