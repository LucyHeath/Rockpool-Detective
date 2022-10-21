function init() {
  // ? Elements  //

  const choice = document.querySelectorAll('.choice')
  const decodingCells = document.querySelectorAll('.cell')
  const playAgain = document.querySelector('button')
  const clueCells = document.querySelectorAll('.key-cell')
  const gameOverScreen = document.getElementById('myPopup')
  const gameOverText = document.querySelector('.gameOverText')

  // ? Variables  //

  const choiceArray = [
    'starfish',
    'urchin',
    'seahorse',
    'anenome',
    'crab',
    'jellyfish'
  ]

  let playerCurrentChoiceArray = []

  let computerCurrentChoiceArray = []

  let rowsArray = []

  let rows = []

  let cells = []

  let cellsArray = []

  let clueArray = []

  // ? Execution

  function computerRandomChoice() {
    // Generates random code and pushes to computerCurrentChoiceArray
    while (computerCurrentChoiceArray.length < 4) {
      const randomChoice =
        choiceArray[Math.floor(Math.random() * choiceArray.length)]
      computerCurrentChoiceArray.push(randomChoice)
    }
  }
  computerRandomChoice()

  function prepareGame() {
    // Prepares decoding grid . Makes arrays of "rows" (containing 4 "decodingCells"), which are all pushed into "rowsArray".
    for (let i = 0; i < decodingCells.length; i++) {
      rows.push(i)
      if (rows.length >= 4) {
        rowsArray.push(rows)
        rows = []
      }
    }
  }
  prepareGame()

  let currentRow = rowsArray.length - 1

  // Loop through "playerCurrentChoiceArray" and "rowsArray". As indexes match, they are updated updated with the class.
  function updateDOMRow(choiceArr, rowArr) {
    for (let i = 0; i < choiceArr.length; i++) {
      decodingCells[rowArr[i]].classList.add(choiceArr[i])
    }
  }

  function nextRow() {
    currentRow--
  }

  function prepareClue() {
    // Prepares clue grid. Makes arrays of "cells" (containing 4 "clueCells") and pushes these into  "cellsArray".
    for (let i = 0; i < clueCells.length; i++) {
      cells.push(clueCells[i])
      if (cells.length >= 4) {
        cellsArray.push(cells)
        cells = []
      }
    }
  }
  prepareClue()

  function playerChoice(event) {
    // Player clicks on the "choice" element and its value is pushed into "playerCurrentChoiceArray". This repeats until the arrayholds 4.
    if (playerCurrentChoiceArray.length < 4) {
      playerCurrentChoiceArray.push(event.target.id)
      updateDOMRow(playerCurrentChoiceArray, rowsArray[currentRow])
    }
    if (playerCurrentChoiceArray.length === 4) {
      compareChoiceArrays()
    }
  }

  function compareChoiceArrays() {
    // Compare the "computerCurrentChoiceArray" with the "playerCurrentChoiceArray"
    const matches = {
      computer: {},
      player: {}
    }

    // If value and position the same, match is declared "full" and this value is added to the objects
    for (let i = 0; i < computerCurrentChoiceArray.length; i++) {
      if (computerCurrentChoiceArray[i] === playerCurrentChoiceArray[i]) {
        matches.computer[i] = 'full'
        matches.player[i] = 'full'
      }
    }

    // If value but not position are the same, match is declared "partial" and this value is added to the objects
    for (let i = 0; i < computerCurrentChoiceArray.length; i++) {
      if (!matches.computer[i]) {
        playerCurrentChoiceArray.forEach((choice, index) => {
          if (
            !matches.player[index] &&
            choice === computerCurrentChoiceArray[i]
          ) {
            matches.computer[i] = 'partial'
            matches.player[index] = 'partial'
          }
        })
      }
    }

    // Condition for player winning set
    const playerWon = computerCurrentChoiceArray.every(
      (item, i) => item === playerCurrentChoiceArray[i]
    )
    if (playerWon) {
      gameOver()
      gameOverText.innerHTML = '🌟Game Over!🌟  Well Done 🔍 !  Happy Sammy 🦭!'
      disableChoices()
    }
    clueArray = Object.values(matches.player)
    updateDOMClue(cellsArray[currentRow], clueArray)
  }

  function updateDOMClue(cellArr, clueArr) {
    // After player has made all 4 choices in the current round, clues will be allocated. Either the game will continue, or end depending conditions set.
    for (let i = 0; i < clueArr.length; i++) {
      cellArr[i].classList.add(clueArr[i])
    }
    if (currentRow === 0 && playerCurrentChoiceArray.length >= 4) {
      disableChoices()
      gameOver()

      const playerWon = computerCurrentChoiceArray.every(
        (item, i) => item === playerCurrentChoiceArray[i]
      )

      if (playerWon) {
        gameOverText.innerHTML =
          '🌟Game Over!🌟  Well Done 🔍 !  Happy Sammy 🦭!'
      } else {
        gameOverText.innerHTML = '💔Game Over!💔 Poor Sammy 🦭 !'
      }
    }
    nextRow()
    playerCurrentChoiceArray = []
  }

  function gameOver() {
    // Gameover screen, added as a class.
    gameOverScreen.classList.add('show')
  }

  // ? Events //

  function enableChoices() {
    // Enable the player click on choice
    choice.forEach((c) => {
      c.addEventListener('click', playerChoice)
    })
  }
  enableChoices()

  function resetGame() {
    //On click of the  Remove the gameOverScreen class, remove the classes from the decoding cells and the clue cells, empty arrays and call the functions to reset the game.
    gameOverScreen.classList.remove('show')
    for (let i = 0; i < decodingCells.length; i++) {
      decodingCells[i].classList.remove(...choiceArray)
    }
    for (let i = 0; i < clueCells.length; i++) {
      clueCells[i].classList.remove('partial', 'full')
    }
    playerCurrentChoiceArray = []
    computerCurrentChoiceArray = []
    rowsArray = []
    rows = []
    cells = []
    cellsArray = []
    clueArray = []
    prepareGame()
    computerRandomChoice()
    prepareClue()
    enableChoices()
    currentRow = rowsArray.length - 1
  }

  function disableChoices() {
    //  Disable the player click on choice
    choice.forEach((c) => c.removeEventListener('click', playerChoice))
  }

  playAgain.addEventListener('click', resetGame)
}
document.addEventListener('DOMContentLoaded', init)
