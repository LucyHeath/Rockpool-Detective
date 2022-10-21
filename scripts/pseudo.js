function init() {
  // ** Planning for JS ** //

  // ? DOM Elements //
  // choice
  // decoding grid cell
  // clue grid cell
  // play again button
  // end of game text

  // ? Possible variables //
  // choicesArray
  // clues Array
  // computerCurrentChoicesArray
  // playerCurrentChoicesArray
  // numBlackClues
  // numWhiteClues
  // Score

  // ? Execution

  function computerChoice() {
    // Computer random selection 4 choices
    // * from the choicesArray using randomIndex
    // * this is pushed into computerCurrentChoiceArray
  }

  function playerChoice() {
    // Player makes a choice of Rockpool Creature to add to decoding grid
    // * clicking on choice will select from the choicesArray
    // * pushes this into playerCurrentChoiceArray
    // Player choice displayed in decoding grid cell ( will need to target 1 row at a time- arrays of grid cells and rows)
    // * add choice to the decoding grid cell in DOM with classList.add().
    // Continue loop through clicking and adding to grid, until all available cell are full for that round
    // * move onto the next row, target next 4 cells- ? function nextRow()
    // Loop through rows 1-6 as above, until either:
    //  * playerChoiceArray != computerChoiceArray and  number of rows in decoding grid is less than or = to (no of rows)6   - keep playing
    //  * playerChoiceArray != computerChoiceArray and number of rows in decoding grid is greater than (no of rows)6 - computer wins - gameover()
    //  * playerChoiceArray = computerChoiceArray and  number of rows in decoding grid is less than or = to (no of rows) 6 - player wins- gameover()
  }

  function compareMatches() {
    // the playerCurrentChoiceArray compared against the computer computerCurrentChoiceArray
    // 1) compare both Value and position
    // * If a playerChoiceArray[i] = computerChoiceArray[i] &  playerChoiceArray value = computerChoiceArray value -->  add to a rightChoiceRightPlaceArray
    // * This is repeated for the array.length
    // 2) Compare only Value
    // * Then if playerChoiceArray[value] = computerChoiceArray[value]and playerChoiceArray[i] != computerChoiceArray[i]-->  save to rightChoiceWrongPlaceArray
    // * This is repeated for the array.length
    // 3) Then add clues
    // * rightChoiceRightPlace[i].lenght + 1  =  number of black clue keys --> saved to blackKeysArray and added as class to clue grid cell - classList.add()
    // * rightChoiceWrongPlace[i].lenght +1  =  number of white clue keys to be printed --> saved to whiteKeysArray and added as class to clue grid cell - classList.add()
  }

  function resetGame() {
    // Can be called at any time, when play again button is clicked
    // * Resets all variables ( e.g. clears player choice array)
    // * Resets the decoding grid to clear
    // * Resets the clue grid to clear
    // * Runs computerChoice
  }

  function gameOver() {
    // End of game update display using innerHTML in DOM
    // * if computer wins , display message
    // * if player wins , display different message
  }

  // ? Events
  // click on choice
  //* Event listner listens for player click on all items in choice array

  // click on play again button
  //* Event listner listens for player click on reset button
}
document.addEventListener('DOMContentLoaded', init)
