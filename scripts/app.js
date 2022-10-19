function init() {
  // ? Elements
  const choice = document.querySelectorAll('.choice')
  const decodingCells = document.querySelectorAll('.cell')
  const playAgain = document.querySelector('button')
  const keyCells = document.querySelectorAll('.key-cell')
  // end of game text
  // score display

  // ? Variables
  // numBlackClues
  // numWhiteClues
  // Score

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

  // ? Execution

  // ? prepare decoding grid-  make an array(rowsArray) of arrays(rows)
  for (let i = 0; i < decodingCells.length; i++) {
    rows.push(i)
    if (rows.length >= 4) {
      rowsArray.push(rows)
      rows = []
    }
  }

  // target current row and save to variable. Starting at rows 5 and working back to rows 0
  let currentRow = rowsArray.length - 1

  // ? Update the DOM decoding row with choices with player choices
  function updateDOMRow(choiceArr, rowArr) {
    //loop through player choice and rows array,
    for (let i = 0; i < choiceArr.length; i++) {
      //update decoding cells with player choice- index of player choice matches index of cell it should appear in and is updated
      decodingCells[rowArr[i]].classList.add(choiceArr[i])
    }
  }
  console.log('current decoding grid rows ---> ', currentRow)

  // - make array of coding grid cells ( which are arrays of key-cells) 6 arrays, 4x key cells in each ------------->
  for (let i = 0; i < keyCells.length; i++) {
    cells.push(keyCells[i])
    if (cells.length >= 4) {
      cellsArray.push(cells)
      cells = []
    }
  }
  console.log('current key cells--->', cellsArray[currentRow])

  // After round completed, the next row will need to be activiated
  function nextRow() {
    // funciton to fill up next rows on grid once first rows full- called at end of each round of the game
    currentRow--
  }

  function playerChoice(event) {
    // * clicking the choices pushes value into playerCurrentChoiceArray , until it holds 4 values
    if (playerCurrentChoiceArray.length < 4) {
      playerCurrentChoiceArray.push(event.target.id)
      // player choice displayed in decoding grid cell
      updateDOMRow(playerCurrentChoiceArray, rowsArray[currentRow])
    }
    if (playerCurrentChoiceArray.length === 4) {
      compareChoiceArrays()
      disableChoices()
      nextRow()
    }
  }

  function computerRandomChoice() {
    // generate random selection of four creatures and add to computerCurrentChoiceArray
    while (computerCurrentChoiceArray.length < 4) {
      const randomChoice =
        choiceArray[Math.floor(Math.random() * choiceArray.length)]
      computerCurrentChoiceArray.push(randomChoice)
    }
    console.log('computer choice --->', computerCurrentChoiceArray)
  }

  computerRandomChoice()

  function compareChoiceArrays() {
    const matches = {
      computer: {},
      player: {}
    }

    for (let i = 0; i < computerCurrentChoiceArray.length; i++) {
      if (computerCurrentChoiceArray[i] === playerCurrentChoiceArray[i]) {
        matches.computer[i] = 'full'
        matches.player[i] = 'full'
      }
    }

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

    console.log('player choice', playerCurrentChoiceArray)

    console.log('matches', matches)
    console.log(Object.values(matches.player))
  }

  //   let numBlackClues = fullMatches.length
  //   console.log('number of black keys --->', numBlackClues)
  // }

  // function UpdateDOMBlack(black, cellArr) {
  //   //loop through black keys and cells array,
  //   for (let i = 0; i < black.length; i++) {
  //     //update clue grid cells numblack clues= to the array.length
  //     clueCells[cellArr[i]].classList.add(black[i])
  //   }
  //   console.log(updateDOMBlack)
  // }
  // updateDOMBlack(numBlackClues, cellsArray[currentRow])

  function resetGame() {}

  // nextRow()
  // compareChoiceArrays()

  // ? Events
  //click event for player choice
  choice.forEach((ch) => {
    ch.addEventListener('click', playerChoice)
  })

  // click on play again button to restart game
  playAgain.addEventListener('click', resetGame)

  function disableChoices() {
    choice.forEach((c) => c.removeEventListener('click', playerChoice))
  }
}
document.addEventListener('DOMContentLoaded', init)
