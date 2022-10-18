function init() {
  // ? Elements
  const choice = document.querySelectorAll('.choice')
  const decodingCells = document.querySelectorAll('.cell')
  const playAgain = document.querySelector('button')
  const keyCells = document.querySelectorAll('.key-cell')
  // end of game text
  // score display

  // ? Variables
  // rightChoiceWrongPlaceArray
  // rightChoiceRightPlaceArray
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

  // prepare decoding grid-  make an array(rowsArray) of arrays(rows)  ----------------->
  for (let i = 0; i < decodingCells.length; i++) {
    rows.push(i)
    if (rows.length >= 4) {
      rowsArray.push(rows)
      rows = []
    }
  }
  // target current row and save to variable. Starting at rows 5 and working back to rows 0
  let currentRow = rowsArray.length - 1

  //Update the DOM decoding row with choices with player choices -------------------------------->
  function updateDOMRow(choiceArr, rowArr) {
    //loop through player choice and rows array,
    for (let i = 0; i < choiceArr.length; i++) {
      //update decoding cells with player choice- index of player choice matches index of cell it should appear in and is updated
      decodingCells[rowArr[i]].classList.add(choiceArr[i])
    }
  }

  // After round completed, the next row will need to be activiated
  function nextRow() {
    // funciton to fill up next rows on grid once first rows full- called at end of each round of the game
    currentRow--
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
  console.log(cellsArray[currentRow])

  function playerChoice(event) {
    // * clicking the choices pushes value into playerCurrentChoiceArray , until it holds 4 values
    if (playerCurrentChoiceArray.length < 4) {
      playerCurrentChoiceArray.push(event.target.id)
      updateDOMRow(playerCurrentChoiceArray, rowsArray[currentRow])
    }
    if (playerCurrentChoiceArray.length === 4) {
      compareChoiceArrays()
      disableChoices()
    }
    // player choice displayed in decoding grid cell
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
    //compare full  matches
    // remove direct matches from both arrays, count how many removed and save to new variable fullMatches-? reduce
    const matches = playerCurrentChoiceArray.map((element, i) =>
      element === computerCurrentChoiceArray[i]
        ? { full: true, index: i, element }
        : { full: false, index: i, element }
    )

    const fullMatches = matches.filter((m) => m.full)

    const potentialPartialMatches = matches.filter((m) => !m.full)

    const indexesToCheck = indexesToCheck.forEach((potentialIndex) => {
      console.log(potentialPartialMatches[potentialIndex].element)
    })

    const partialMatches = indexesToCheck.forEach()

    console.log({ fullMatches, potentialPartialMatches, indexesToCheck })

    let numBlackClues
  }

  function updateDOMClueGrid() {}

  nextRow()
  compareChoiceArrays()

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
