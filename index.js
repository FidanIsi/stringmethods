//let text = "Fidan Ismayilova "

//exercise-1
// let myArr = text.split(' ')
// console.log(myArr);


//exercise-2
// function extracted(text, number) {
//   if (text.length <= number) {
//     return text;
//   } else {
//     return text.substring(0, number);
//   }
// }

// console.log(extracted(text, 5)); 


//exercise-3
// let email = "example@mail.ru"
// const splitting = email.split("@")
// const emailPart1 = splitting[0]
// const asterisks = "*".repeat(emailPart1.length - 1);
// splitting[0] = emailPart1[0] + asterisks;
// console.log(splitting.join("@"));

//exercise-4

// let repeatedText = text.repeat(3)
// console.log(repeatedText);


//exercise-5
var text = "This book is an interesting book";
const wordToFind = "book";
//1st way
// const myArr = text.split(" ")

// function matches (myArr, wordToFind){

//   let count = 0

//   for (let i = 0; i < myArr.length; i++) {
//     const element = myArr[i];
//     if (element.toLowerCase() === wordToFind.toLowerCase()) {
//       count++
//     }
//   } return count;
// }

// const count = matches(myArr, wordToFind);
// console.log(`The word "${wordToFind}" appears ${count} times in the text.`);

//2nd way
var matches = Array.from(text.matchAll(wordToFind) || []);
const count = matches.length
console.log(`The word "${wordToFind}" appears ${count} times in the text.`);

