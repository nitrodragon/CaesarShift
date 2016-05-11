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
print ("Possible conclusions:");
print (caesarShift(person, 0));
print (caesarShift(person, 1));
print (caesarShift(person, 2));
print (caesarShift(person, 3));
print (caesarShift(person, 4));
print (caesarShift(person, 5));
print (caesarShift(person, 6));
print (caesarShift(person, 7));
print (caesarShift(person, 8));
print (caesarShift(person, 9));
print (caesarShift(person, 10));
print (caesarShift(person, 11));
print (caesarShift(person, 12));
print (caesarShift(person, 13));
print (caesarShift(person, 14));
print (caesarShift(person, 15));
print (caesarShift(person, 16));
print (caesarShift(person, 17));
print (caesarShift(person, 18));
print (caesarShift(person, 19));
print (caesarShift(person, 20));
print (caesarShift(person, 21));
print (caesarShift(person, 22));
print (caesarShift(person, 23));
print (caesarShift(person, 24));
print (caesarShift(person, 25));
