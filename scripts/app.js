function init() {
  // ? Elements
  const choice = document.querySelectorAll('.choice')
  const decodingCells = document.querySelectorAll('.cell')
  const playAgain = document.querySelector('button')
  const clueCells = document.querySelectorAll('.key-cell')
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

  let clueArray = []

  // ? Execution

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

  function updateDOMRow(choiceArr, rowArr) {
    // ? Update the DOM decoding row with choices with player choices
    //loop through player choice and rows array,
    for (let i = 0; i < choiceArr.length; i++) {
      //update decoding cells with player choice- index of player choice matches index of cell it should appear in and is updated
      decodingCells[rowArr[i]].classList.add(choiceArr[i])
    }
  }
  console.log('current decoding grid rows ---> ', currentRow)

  function nextRow() {
    currentRow--
  }

  // - make array of coding grid cells
  for (let i = 0; i < clueCells.length; i++) {
    cells.push(clueCells[i])
    if (cells.length >= 4) {
      cellsArray.push(cells)
      cells = []
    }
  }
  console.log('current key cells--->', cellsArray[currentRow])

  function playerChoice(event) {
    console.log('calling player choice')
    // * clicking the choices pushes value into playerCurrentChoiceArray , until it holds 4 values
    if (playerCurrentChoiceArray.length < 4) {
      playerCurrentChoiceArray.push(event.target.id)
      // player choice displayed in decoding grid cell
      updateDOMRow(playerCurrentChoiceArray, rowsArray[currentRow])
    }
    if (playerCurrentChoiceArray.length === 4) {
      compareChoiceArrays()
      if (currentRow === 5) {
        disableChoices()
      }
    }
  }

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

    clueArray = Object.values(matches.player)
    console.log('clue array-->', clueArray)
    console.log('player choice', playerCurrentChoiceArray)
    updateDOMClue(cellsArray[currentRow], clueArray)
  }

  function updateDOMClue(cellArr, clueArr) {
    console.log(cellArr)
    for (let i = 0; i < clueArr.length; i++) {
      cellArr[i].classList.add(clueArr[i])
    }
    nextRow()
    playerCurrentChoiceArray = []
    // enableChoices()
  }

  console.log(clueArray)

  function resetGame() {}

  // ? Events
  //click event for player choice
  function enableChoices() {
    console.log('calling enable chouces')
    choice.forEach((c) => {
      console.log(c)
      c.addEventListener('click', playerChoice)
    })
  }
  enableChoices()
  // click on play again button to restart game
  playAgain.addEventListener('click', resetGame)

  function disableChoices() {
    choice.forEach((c) => c.removeEventListener('click', playerChoice))
  }
}
document.addEventListener('DOMContentLoaded', init)
