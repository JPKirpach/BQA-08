//Exercise 2 - Strings
//a
var firstString = 'Juan Pablo Kirpach';
firstString = firstString.toUpperCase();
console.log(firstString);

//b
var secondString = 'Football Player';
var stringStart = secondString.substring(0, 5);
console.log(stringStart);

//c
var thirdString = 'Radium Rocket Courses';
var stringEnd = thirdString.substring(thirdString.length - 3, thirdString.length);
console.log(stringEnd);

//d
var fourthString = 'web DEVELOPMENT';
var stringD = fourthString.substring(0, 1).toUpperCase() + fourthString.substring(1, fourthString.length).toLowerCase();
console.log(stringD);

//e
var fifthString = 'Buenos Aires';
var posBlankSpace = fifthString.indexOf(' ');
console.log(posBlankSpace);

//f
var sixthString = 'responsive DESIGN';
var posBlank = sixthString.indexOf(' ');
var stringF = sixthString.substring(0, 1).toUpperCase() + sixthString.substring(1, posBlank).toLowerCase()
    + sixthString[posBlank] + sixthString.substring(posBlank + 1, posBlank + 2).toUpperCase()
    + sixthString.substring(posBlank + 2, sixthString.length).toLowerCase();
console.log(stringF);