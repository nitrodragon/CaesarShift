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
document.write(“Possible Solutions”);
document.write(caesarShift(person, 0));
document.write(caesarShift(person, 1));
document.write(caesarShift(person, 2));
document.write(caesarShift(person, 3));
document.write(caesarShift(person, 4));
document.write(caesarShift(person, 5));
document.write(caesarShift(person, 6));
document.write(caesarShift(person, 7));
document.write(caesarShift(person, 8));
document.write(caesarShift(person, 9));
document.write(caesarShift(person, 10));
document.write(caesarShift(person, 11));
document.write(caesarShift(person, 12));
document.write(caesarShift(person, 13));
document.write(caesarShift(person, 14));
document.write(caesarShift(person, 15));
document.write(caesarShift(person, 16));
document.write(caesarShift(person, 17));
document.write(caesarShift(person, 18));
document.write(caesarShift(person, 19));
document.write(caesarShift(person, 20));
document.write(caesarShift(person, 21));
document.write(caesarShift(person, 22));
document.write(caesarShift(person, 23));
document.write(caesarShift(person, 24));
document.write(caesarShift(person, 25));
