let challenge = '30 Days of JavaScript';
console.log(challenge);
console.log(challenge.length);
let upper = challenge.toLocaleUpperCase();
console.log(upper);
let lower = challenge.toLocaleLowerCase();
console.log(lower);
firstWord = challenge.substr(0, 2);
console.log(firstWord);
let slicedString = challenge.substring(0,2);
console.log(slicedString);
containScript = challenge.includes('Script');
console.log(containScript);
let stringArray = challenge.split();
console.log(stringArray);
let splitString = challenge.split(' ');
console.log(splitString);
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let companiesArray = companies.split(',');
console.log(companiesArray);
let stringReplace = challenge.replace('JavaScript', 'Python');
console.log(stringReplace);


