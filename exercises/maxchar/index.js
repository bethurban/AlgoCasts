// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var arr = str.split('')
  var obj = {}
  arr.map(x => {
    // obj[x] ? obj[x]++ : obj[x] = 1
    obj[x] = obj[x] + 1 || 1
  })
  // return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b )
  var max = 0
  var maxChar = ''
  for ( let char in obj ) {
    if (obj[char] > max) {
      max = obj[char]
      maxChar = char
    }
  }
  return maxChar
}

module.exports = maxChar;

// function maxChar(str) {
//   var obj = {}
//   var arr = str.split('')
//   for ( let x of str ) {
//     if ( obj[x] ) {
//       obj[x] += 1
//     } else {
//       obj[x] = 1
//     }
//   }
//   return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b )
// }
