var words = ["ground", "control", "to", "major", "tom"];

function map(array, callBack) {
   var output = [];
   for (word of array) {
    output.push(callBack(word))
   }
  console.log(output);
  return output;
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
