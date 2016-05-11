var person = prompt("Please enter your text to be enciphered/deciphered.", "NitroDragon is great.");
var caesarShift = function(person, amount) {
  if (amount < 0) {
    return caesarShift(person, amount + 26);
  }
  var output = '';
  
  for (var i = 0; i < person.length; i ++) {
    var c = person[i];
    if (c.match(/[a-z]/i)) {
      var code = person.charCodeAt(i);
      
      if ((code >= 65) && (code <= 90))
      c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      
      else if ((code >= 97) && (code <= 122))
      c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
    }
    output += c;
  }
  return output;
};
console.log("Possible solutions:");
console.log(caesarShift(person, 0));
console.log(caesarShift(person, 1));
console.log(caesarShift(person, 2));
console.log(caesarShift(person, 3));
console.log(caesarShift(person, 4));
console.log(caesarShift(person, 5));
console.log(caesarShift(person, 6));
console.log(caesarShift(person, 7));
console.log(caesarShift(person, 8));
console.log(caesarShift(person, 9));
console.log(caesarShift(person, 10));
console.log(caesarShift(person, 11));
console.log(caesarShift(person, 12));
console.log(caesarShift(person, 13));
console.log(caesarShift(person, 14));
console.log(caesarShift(person, 15));
console.log(caesarShift(person, 16));
console.log(caesarShift(person, 17));
console.log(caesarShift(person, 18));
console.log(caesarShift(person, 19));
console.log(caesarShift(person, 20));
console.log(caesarShift(person, 21));
console.log(caesarShift(person, 22));
console.log(caesarShift(person, 23));
console.log(caesarShift(person, 24));
console.log(caesarShift(person, 25));
