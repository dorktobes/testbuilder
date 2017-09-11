// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
    var twoDigitPrefix = Number(cardNumber.split('').slice(0, 2).join(''));
    var threeDigitPrefix = Number(cardNumber.split('').slice(0, 3).join(''));
    var fourDigitPrefix = Number(cardNumber.split('').slice(0, 4).join(''));
    var sixDigitPrefix = Number(cardNumber.split('').slice(0, 6).join(''));
    var visaPrefix = Number(cardNumber[0]);
    var visaLengths = [13, 16, 19];
    var masterCardPrefixes = [51, 52, 53, 54, 55];
    var maestroPrefixes = [5018, 5020, 5038, 6304];
    var switch4DigitPrefixes = [4903, 4905, 4911, 4936, 6333, 6759];
    var switch6DigitPrefixes = [564182, 633110]; 
    var switchLengths = [16, 18, 19];
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if(cardNumber.length === 14 && twoDigitPrefix === 38 || twoDigitPrefix === 39){
  	return 'Diner\'s Club';
  } else if (cardNumber.length === 15 && twoDigitPrefix === 34 || twoDigitPrefix === 37){
  	return 'American Express';
  } else if (visaPrefix === 4 && visaLengths.indexOf(cardNumber.length) !== -1 && switch4DigitPrefixes.indexOf(fourDigitPrefix) === -1){
  	return 'Visa';
  } else if (masterCardPrefixes.indexOf(twoDigitPrefix) !== -1 && cardNumber.length === 16){
  	return 'MasterCard';
  } else if ((cardNumber.length === 16 || cardNumber.length === 19) && (fourDigitPrefix === 6011 || (threeDigitPrefix >= 644 && threeDigitPrefix <= 659))){
  	return 'Discover';
  } else if((cardNumber.length >= 12 && cardNumber.length <= 19) && (maestroPrefixes.indexOf(fourDigitPrefix) !== -1)){
  	return 'Maestro';
  } else if ((cardNumber.length >= 16 && cardNumber.length <= 19) && ((sixDigitPrefix >= 622126 && sixDigitPrefix <= 622925) || ((threeDigitPrefix >= 624 && threeDigitPrefix <= 626) || (fourDigitPrefix >= 6282 && fourDigitPrefix <= 6288)))){
  	return 'China UnionPay';
  } else if (switchLengths.indexOf(cardNumber.length) !== -1 && (switch6DigitPrefixes.indexOf(sixDigitPrefix) !== -1 || switch4DigitPrefixes.indexOf(fourDigitPrefix) !== -1)){
  	return 'Switch';
  }
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


