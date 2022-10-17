function init() {
  // ? Elements
  const choice = document.querySelectorAll('.choice')
  const decodingCells = document.querySelectorAll('.cell')
  const playAgain = document.querySelector('button')

  // end of game text
  // score display
  // clue grid cell

  // ? Variables
  // rightChoiceWrongPlaceArray
  // rightChoiceRightPlaceArray
  // numBlackClues
  // numWhiteClues
  // Score

  // let startingCells = [20, 21, 22, 23]
  // startingCells.forEach((cell) => {
  //   console.log(decodingCells[cell])
  // })
  // let currentCell = startingCells
  const choiceArray = [
    'starfish',
    'urchin',
    'seahorse',
    'anenome',
    'crab',
    'jellyfish',
  ]

  let playerCurrentChoiceArray = []

  let computerCurrentChoiceArray = []

  let rowsArray = []

  let row = []

  // ? Execution

  //  Step 1- loop through cells , make an array of arrays with 4 cells in each array
  for (let i = 0; i < decodingCells.length; i++) {
    row.push(i)
    if (row.length >= 4) {
      rowsArray.push(row)
      row = []
    }
  }

  //Update
  function updateDOMRow(choiceArr, rowArr) {
    for (let i = 0; i < choiceArr.length; i++) {
      decodingCells[rowArr[i]].classList.add(choiceArr[i])
    }
    console.log(choiceArr)
    console.log(rowArr)
  }

  function playerChoice(event) {
    // * clicking the choices pushes value into playerCurrentChoiceArray , until it holds 4 values
    if (playerCurrentChoiceArray.length < 4) {
      playerCurrentChoiceArray.push(event.target.id)
      console.log(playerCurrentChoiceArray)
    }
    // player choice displayed in decoding grid cell
    updateDOMRow(playerCurrentChoiceArray, rowsArray[5])

    // continue looping click and adding to grid fo all 4 choices
  }

  function computerRandomChoice() {
    // add random selection of four creatures to computerCurrentChoiceArray
    while (computerCurrentChoiceArray.length < 4) {
      const randomChoice =
        choiceArray[Math.floor(Math.random() * choiceArray.length)]
      computerCurrentChoiceArray.push(randomChoice)
      console.log(computerCurrentChoiceArray)
      console.log(randomChoice)
    }
  }

  computerRandomChoice()

  function playGame() {}
  function resetGame() {}
  function gameOver() {}

  // ? Events
  //click event for player choice
  choice.forEach((ch) => {
    ch.addEventListener('click', playerChoice)
  })

  // click on play again button to restart game
  playAgain.addEventListener('click', resetGame)
}

document.addEventListener('DOMContentLoaded', init)
