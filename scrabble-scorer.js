// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85
const input = require("readline-sync");
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function transform(obj) {
let newObj = {};
for(i=0;i<26;i++){
  for (key in obj[i+1]){
  newObj[obj[i+1][key]] = i+1;
  }
}
sortedObj = Object.keys(newObj)
    .sort()
    .reduce(function (acc, key) { 
        acc[key] = newObj[key];
        return acc;
    }, {});
    sortedObj[' ']=0;
return sortedObj
};

console.log('transform: ', transform(oldPointStructure));

let newPointStructure = transform(oldPointStructure);


function initialPrompt() {
let wordPlayed = input.question("Let's play some scrabble!\n\nEnter a word to score: ");
return wordPlayed;
//testing algorithms
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
function simpleScore(word){
  let letterPoints = word.length;
  // for (i = 0; i<word.length; i++){
  //   console.log(`\nPoints for '${word[i]}': ${letterPoints/word.length}'`)
  // }
	return letterPoints;
};

function vowelBonusScore (word){
  word = word.toUpperCase();

  let letterPoints =0;
  let vowels = ['A','E','I','O','U'];
  let consonants = ['B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z'];
  for (i =0; i<word.length; i++){
    if (word[i]===vowels[0]||word[i]===vowels[1]||word[i]===vowels[2]||word[i]===vowels[3]||word[i]===vowels[4]){
      letterPoints = letterPoints+3;
      // console.log(`\nPoints for '${word[i]}': 3`)
    }
    else{
      letterPoints = letterPoints +1;
    // console.log(`Points for '${word[i]}': 1`)

    }

  }
	return letterPoints;
};

function scrabbleScore(word) {
	word = word.toUpperCase();
	let letterPoints = "";
  let score =0;
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
       score = score + Number(pointValue);

		 }

 
	  }
	}
	return score;  
 }

// for (let i = 0; i < word.length; i++) { 
// 	for (j=0; j<Object.keys(newPointStructure).length;j++){
//     for(points in obj){      
//     }
//   console.log(Object.keys(newPointStructure)[j][0])
//     score = score + Number(newPointStructure); 
// 	}
// }

//  console.log(Object.keys(newPointStructure)[i])
//  score = score + Number(newPointStruct[pointValue]);
// letterPoints += `\nPoints for '${word[i]}'{pointValue}\n`


const scoringAlgorithms = [
{
  name:"Simple Score",
  description:'Each letter is worth 1 point.',
  scoringFunction:simpleScore,
},
{
  name:"Bonus Vowels",
  description:'Vowels are 3 pts, consonants are 1 pt.',
  scoringFunction:vowelBonusScore,
},
{
  name:"Scrabble",
  description:'The traditional scoring algorithm.',
  scoringFunction:scrabbleScore,
}];


function scorerPrompt(word) {
  let scoringPref = input.question(`Which scoring algorithm would you like to use?\n\n0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}\n1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}\n2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}\nEnter 0, 1, or 2: `);

  if (scoringPref === '0'){
    console.log(`Score for '${word}': ${scoringAlgorithms[0].scoringFunction(word)}\n`);
  }
  else if (scoringPref === '1'){
    console.log(`Score for '${word}': ${scoringAlgorithms[1].scoringFunction(word)}\n`);
  }
  else if (scoringPref === '2'){
    console.log(`Score for '${word}': ${scoringAlgorithms[2].scoringFunction(word)}\n`);
  }
  else{
    console.log('Invalid input, please try again.')
  }

}
  

function runProgram(word) {
  scorerPrompt(initialPrompt())
  // initialPrompt();
  // scorerPrompt(word);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

