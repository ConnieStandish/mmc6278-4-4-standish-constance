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
var gameWin = document.getElementById('wins')
var gameLoss = document.getElementById('losses')

var wordsLeft = 10
var wins = 0
var losses = 0

var correctGuess = []
var wrongGuess = []

//Generate random word
var str = words[Math.floor(Math.random() * words.length)]

//Replace letter with underscores
wordToGuess.textContent = str.replace(/[abcdefghijklmnopqrstuvwxyz]/g, '_')

//Display 10 guesses
remainingGuesses.textContent = wordsLeft

//Create reset function
function reset() {
  previousWord.textContent = str
    str = words[Math.floor(Math.random() * words.length)]
    wordToGuess.textContent = str.replace(/[abcdefghijklmnopqrstuvwxyz]/g, '_')
    wordsLeft = 10
    remainingGuesses.textContent = wordsLeft
    incorrectLetters.textContent = ""
    correctGuess = []
    wrongGuess = []
}

//Set keyboard event

document.onkeyup = function (e) {
  // e.preventDefault()
  var letters = 'abcdefghijklmnopqrstuvwxyzd'
  if (!letters.includes(e.key)) return

  if (str.includes(e.key) && !correctGuess.includes(e.key)) {

    correctGuess.push(e.key)

  } else if (!wrongGuess.includes(e.key)) {
    wordsLeft--
    remainingGuesses.textContent = wordsLeft
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
  if (wordToGuess.textContent === str && wordsLeft > 0) {
    wins++
    gameWin.textContent = wins
    reset()
  } else if (wordToGuess.textContent !== str && wordsLeft <= 0) {
    losses++
    gameLoss.textContent = losses
  reset()
  } 

}










