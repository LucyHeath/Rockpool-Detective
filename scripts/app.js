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

  //  loop through cells , make an array of arrays with 4 cells in each array, 6 arrays total (0-5)
  for (let i = 0; i < decodingCells.length; i++) {
    row.push(i)
    if (row.length >= 4) {
      rowsArray.push(row)
      row = []
    }
  }

  let currentRow = rowsArray.length - 1
  console.log(currentRow)

  function updateDOMRow(choiceArr, rowArr) {
    //loop through player choice and row array,
    for (let i = 0; i < choiceArr.length; i++) {
      //update decoding cells with player choice- index of player choice matches index of cell it should appear in
      decodingCells[rowArr[i]].classList.add(choiceArr[i])
    }
  }

  function nextRow() {
    // funciton to fill up next row on grid once first row full- called at end of each round of the game
    currentRow--
  }
  nextRow()
  console.log(currentRow)

  function playerChoice(event) {
    // * clicking the choices pushes value into playerCurrentChoiceArray , until it holds 4 values
    if (playerCurrentChoiceArray.length < 4) {
      playerCurrentChoiceArray.push(event.target.id)
      console.log(playerCurrentChoiceArray)
    }
    // player choice displayed in decoding grid cell
    updateDOMRow(playerCurrentChoiceArray, rowsArray[currentRow])
    compareChoiceArrays()

    // move to next row once full
  }

  function computerRandomChoice() {
    // add random selection of four creatures to computerCurrentChoiceArray
    while (computerCurrentChoiceArray.length < 4) {
      const randomChoice =
        choiceArray[Math.floor(Math.random() * choiceArray.length)]
      computerCurrentChoiceArray.push(randomChoice)
      console.log(computerCurrentChoiceArray)
    }
  }
  computerRandomChoice()

  // const arr1 = ['hey', 'hello', 'hi']
  // const arr2 = ['goodbye', 'hi', 'hey']

  function compareChoiceArrays() {
    //full  matches- save direct matches from both arrays to new variable, which is an array called fullMatches
    let fullMatches = computerCurrentChoiceArray.filter((element) =>
      playerCurrentChoiceArray.includes(element)
    )
    console.log(fullMatches)
    //save no of items in fullMatch array to numBlackKeys variable
    let numblackClues = fullMatches.length
    console.log(numblackClues)
  }
  compareChoiceArrays()

  //partial matches
  // Problem- if same item selected multiple times by player will count as a partial match

  // Need keep track of the partial matches as through in partialMatches variable
  // Loop through existing values in partial matches array

  // Each time we check for a potential match, we should first check the previous partial matches we've already found to make sure that we're not counting the same one twice

  // One way to approach this would be to create a "clean" version of potential matches by removing any possible duplicates before running our match checks. That way we can be sure that if we find a match, it isn't a duplicate

  // I'd recommend using a variable outside the loop to store the matches we find, and the includes method to check for a possible match

  function resetGame() {
    score = 0
    scoreDisplay.textContent = score
    endGameTeext.innerHTML
  }

  function endGame() {
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
