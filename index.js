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

//Replace letter with underscores
wordToGuess.textContent = str.replace(/[abcdefghijklmnopqrstuvwxyz]/g, '_')

//Display 10 guesses
remainingGuesses.textContent = parseInt('10')

//Set keyboard event
var correctGuess = []
var wrongGuess = []

document.onkeyup = function(e) {
  var letters = 'abcdefghijklmnopqrstuvwxyzd'
  if (!letters.includes(e.key)) return

  if (str.includes(e.key)) {
    correctGuess.push(e.key)
  } else {
    wrongGuess.push(e.key)
  }

  wordToGuess.textContent = ""
  for (let i = 0; i < str.length; i++) {
    if (correctGuess.includes(str[i])) {
      wordToGuess.textContent += str[i]
    } else {
      wordToGuess.textContent += '_'
      incorrectLetters.textContent = wrongGuess
      
    }
  
  }

  
}





  

 
