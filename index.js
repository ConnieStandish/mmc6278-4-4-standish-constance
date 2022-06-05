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

// var remainingGuesses = 10
var wins = 0
var losses = 0

//Generate random word
var str = words[Math.floor(Math.random() * words.length)]
// console.log(word)


//Replace letter with underscores
var newStr = str.replace(/[abcdefghijklmnopqrstuvwxyz]/g, '_')
console.log(newStr)
wordToGuess.textContent = newStr

//Display 10 guesses
remainingGuesses.textContent = 10

//Set keyboard event

// document.onkeyup = function(e) {
//   var letters = 'abcdefghijklmnopqrstuvwxyzd'
//   if (!letters.includes(e.key)) return
//   // console.log(e.key)
  
//   if (words === newStr) {
//     newStr.replace(/_/g, 'abcdefghijklmnopqrstuvwxyz')
//   }  else {
//     return null
//   }

//   textContent.newStr = e.key

  
// }

// var wordGuess = newStr.replace(/_/g, 'abcdefghijklmnopqrstuvwxyz')

// document.addEventListener('keyup', function(e) {
//   var letters = 'abcdefghijklmnopqrstuvwxyzd'
//   if (!letters.includes(e.key)) return
  
//   if (wordGuess === words) {
//     wordGuess.textContent = e.key
//   } else {
//     return null
//   }
  
// })

// var wordGuess = newStr.replace(/_/g, 'abcdefghijklmnopqrstuvwxyz')

for (let i = 0; i < newStr.length; i++) {
  var wordGuess = newStr[i];
  newStr[i].onkeyup = function(e) {
    wordGuess.textContent = this.textContent
  }
}



  

 
