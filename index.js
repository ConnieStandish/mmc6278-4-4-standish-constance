//display variables

var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

var wordGame = document.querySelector('.game')
var wordToGuess = document.querySelector('#word-to-guess')
var previousWord = document.getElementById('previous-word')
var incorrectLetters = document.getElementById('incorrect-letters')
var remainingGuesses = document.getElementById('remaining-guesses')

var remainingGuesses = 10
var wins = 0
var losses = 0

//Generate random word
var str = words[Math.floor(Math.random() * words.length)]
// console.log(word)


//Replace letter with underscores
newStr = str.replace(/[abcdefghijlmnopqrstuvwxyz]/g, '_')
console.log(newStr)
wordToGuess.textContent = newStr

// var displayHiddenWord = function() {
//   game.replace([a-z]/gi, '_')
// }

document.onkeyup = function(event) {
  
 
}
  
  

 
