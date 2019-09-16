// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  var reversed = n.toString().split('').reverse().join('')
  return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;

// function reverseInt(n) {
//   var arr = n.toString().split('')
//   var reverse = ""
//   for ( let x of arr ) {
//     if ( x !== 0 ) {
//       reverse = x + reverse
//     }
//   }
//   var num = parseInt(reverse)
//   if ( Math.sign(n) === 1 || Math.sign(n) === 0 )
//     return num
//   else {
//     return -Math.abs(num)
//   }
// }
