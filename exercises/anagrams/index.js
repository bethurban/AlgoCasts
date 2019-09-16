// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(string) {
  return string.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//
//   const objA = objectify(stringA);
//   const objB = objectify(stringB);
//
//   var result = true;
//
//   if (Object.keys(objA).length === Object.keys(objB).length) {
//     for (let ltr in objA) {
//       if (objA[ltr] !== objB[ltr]) {
//         result = false;
//       }
//     }
//   } else {
//     result = false;
//   }
//
//   return result;
// }
//
// function objectify(string) {
//   var obj = {};
//
//   for (let ltr of string.replace(/[^\w]/g, "").toLowerCase().split("")) {
//     obj[ltr] = obj[ltr] + 1 || 1;
//   }
//
//   return obj;
// }
