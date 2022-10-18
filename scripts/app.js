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
    'jellyfish',
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
    }
    console.log('player choice --->', playerCurrentChoiceArray)
    // player choice displayed in decoding grid cell
    updateDOMRow(playerCurrentChoiceArray, rowsArray[currentRow])
    compareChoiceArrays()
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
  let fullMatches = []
  function compareChoiceArrays() {
    //compare full  matches
    // remove direct matches from both arrays, count how many removed and save to new variable fullMatches-? reduce
    fullMatches = computerCurrentChoiceArray.filter((element, index) => {
      if (playerCurrentChoiceArray.includes(element)) {
        fullMatches.push(element)
        computerCurrentChoiceArray.splice(index, 1)
      }
    })
    console.log('full matches --->', fullMatches)
    //save number of items in fullMatch array to numBlackKeys variable
    let numBlackClues = fullMatches.length
    console.log('number of black keys --->', numBlackClues)
    //partial matches!!
    // if player has selected same color twice.... don't want both to be counted as a partial match
    // To avoid this -keep track of the partial matches we've found so far as we're going through
    // Each check for a potential match, we should first check the previous partial matches to make sure not counting the same one twice
    //remove any possible duplicates before running our match checks.to be sure that if we find a match, it isn't a duplicate
    //includesmethod- check for matches
    //
  }

  function updateDOMClueGrid(numBlack, cellArr) {
    //   // update the DOM clue grid with num clues to match the numBlackClues
    //   //update cluecells with -index of last child = number of times it is added
    //   keyCells[cellArr[i]].classList.add(numBlack * numBlack[i])
  }
  // updateDOMClueGrid()

  nextRow()
  compareChoiceArrays()

  function resetGame() {
    score = 0
    scoreDisplay.textContent = score
    endGameTeext.innerHTML
  }

  function endGame() {
    if (currentRow > 5) {
    }
    alert(score)
  }

  // ? Events
  //click event for player choice
  choice.forEach((ch) => {
    ch.addEventListener('click', playerChoice)
  })

  // click on play again button to restart game
  playAgain.addEventListener('click', resetGame)
}

document.addEventListener('DOMContentLoaded', init)
