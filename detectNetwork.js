// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
    var prefix = Number(cardNumber.split('').slice(0, 2).join(''));
    var visaPrefix = Number(cardNumber[0]);
    var visaLengths = [13, 16, 19];
    var masterCardPrefixes = [51, 52, 53, 54, 55]
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if(cardNumber.length === 14 && prefix === 38 || prefix === 39){
  	return 'Diner\'s Club';
  } else if (cardNumber.length === 15 && prefix === 34 || prefix === 37){
  	return 'American Express';
  } else if (visaPrefix === 4 && visaLengths.indexOf(cardNumber.length) !== -1){
  	return 'Visa';
  } else if (masterCardPrefixes.indexOf(prefix) !== -1 && cardNumber.length === 16){
  	return 'MasterCard';
  }
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


