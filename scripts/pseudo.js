function init() {
  // ? Elements
  // choice
  // decoding grid cell
  // clue grid cell

  // play again button
  // end of game text
  // score display

  // ? Variables

  // choiceArray
  // computerCurrentChoiceArray
  // playerCurrentChoiceArray
  // rightChoiceWrongPlaceArray
  // rightChoiceRightPlaceArray
  // numBlackClues
  // numWhiteClues
  // !numOfAttempts
  // Score

  // ? Execution

  // let startingCells = [20, 21, 22, 23]
  // startingCells.forEach((cell) => {
  //   console.log(decodingCells[cell])
  // })
  // let currentCell = startingCells

  function computerChoice() {
    // computer will randomly make a choice
    // * from the choicesArray using randomIndex
    // * this is pushed into computerCurrentChoiceArray
  }

  function playerChoice() {
    // player makes a choice
    // * clicking the choices select from the choicesArray
    // * pushes this into playerCurrentChoiceArray
    // player choice displayed in decoding grid cell ( has a generic class e.g. disabled ) which can  be removed e.g 4 cells at a time
    // * add choice to the decoding grid cell classList.add()
    // continue looping click and adding to grid, until all available cell are full for that round
    // * each round disable the next 4 cells , until the last row reached.
  }

  function playGame() {
    // the playerCurrentChoiceArray compared against the computer computerCurrentChoiceArray
    // 1) compare both Value and position
    // * If a playerChoiceArray[i] = computerChoiceArray[i] &  playerChoiceArray value = computerChoiceArray value -->  add to a rightChoiceRightPlaceArray
    // this is repeated for the array.length
    // let full matches = playerChoiceArray[i] = computerChoiceArray[i] &  playerChoiceArray value = computerChoiceArray value
    //if...loop through ...
    // remove full matches-
    // let partial matches
    // for loop - index to match
    // 2) Compare only Value
    // * Then if playerChoiceArray[value] = computerChoiceArray[value]and playerChoiceArray[i] != computerChoiceArray[i]-->  save to rightChoiceWrongPlaceArray
    // this is repeated for the array.length
    // 3) Then add clues
    // * rightChoiceRightPlace[i].lenght + 1  =  number of black clue keys --> saved to blackKeysArray and added as class to clue grid cell - classList.add()
    // * rightChoiceWrongPlace[i].lenght +1  =  number of white clue keys to be printed --> saved to whiteKeysArray and added as class to clue grid cell - classList.add()
    // playGame() should loop through until no spaces left on grid;
    //  * if playerChoiceArray != computerChoiceArray and  number of rows in decoding grid is less than or = to (no of rows)6   - keep playing
    //  * if playerChoiceArray != computerChoiceArray and number of rows in decoding grid is greater than (no of rows)6 - computer wins - gameover()
    //  * if playerChoiceArray = computerChoiceArray and  number of rows in decoding grid is less than or = to (no of rows) 6 - player wins- gameover()
    // ! playGame() should loop through until condition met
    // ! * numberOfAttempts =< 6 playerChoiceArray != computerChoiceArray - keep playing
    // ! * numberOfAttempts = 6 & playerChoiceArray != computerChoiceArray - computer wins
    // ! * numberOfAttempts = 6 & playerChoiceArray = computerChoiceArray - player wins
    // ! * numberOfAttempts =< 6 & playerChoiceArray = computerChoiceArray - player wins
  }

  function resetGame() {
    // Can be called at any time, when play again button is clicked
    // Resets the score and display to 0
    // Resets the decoding grid to clear
    // Resets the clue grid to clear
    // can be done at any time during the game
  }

  function gameOver() {
    // End of game update the score display innerHTML
    // * if computer wins , display message
    // * if player wins , display score and message
  }

  // ? Events
  // click on choice
  //* Event listner listens for player click on all items in choice array

  // click on play again button
  //* Event listner listens for player click on reset button
}

document.addEventListener('DOMContentLoaded', init)

// First remove all the direct matches from both arrays, and count how many full matches you're removing and save to a variable

// Then we check for partials

// We want to check for partial matches but if a player has selected the same colour twice, that the computer has only selected once, we don't want both to be counted as a partial match

// To avoid this we need to keep track of the partial matches we've found so far as we're going through

// Each time we check for a potential match, we should first check the previous partial matches we've already found to make sure that we're not counting the same one twice

// One way to approach this would be to create a "clean" version of potential matches by removing any possible duplicates before running our match checks. That way we can be sure that if we find a match, it isn't a duplicate

// I'd recommend using a variable outside the loop to store the matches we find, and the includes method to check for a possible match

//   const grid = document.querySelector('.grid')
