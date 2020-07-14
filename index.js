const battleship = () => {

  //Object PlayerOne
  let playerOne = {
    name: prompt("Enter the player #1 Name"),
    shipCount: 4,
    gameBoard: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]]
  };
  //Object PlayerTwo
  let playerTwo = {
    name: prompt("Enter the player #2 Name"),
    shipCount: 4,
    gameBoard: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]]
  };

  let ships = 0;//variable to add and count ships
  let x; //x coordinates for position of ships
  let y; //y coordinates for position of ships
  //while loop that will  make sure each board has 4 ships
  while (ships < playerOne.shipCount) {
    //random number for x  and y (coordinates) between 0 and 3,floor# for not including floating, last number not invcluded in random(4).
    x = Math.floor(Math.random() * 4);
    y = Math.floor(Math.random() * 4);
    //if playerOne gameboard don't have ship(1).
    if (parseInt(playerOne.gameBoard[x][y]) !== 1) {
      //add a ship
      playerOne.gameBoard[x][y] = 1;
      //add to the counter everytime the cycle run.
      ships++;   
    }
  };
  //same as above but for playerTwo
  //the counter is coming in 4 from previous step, needs to initialize to 0 to start all over for playerTwo.
  ships = 0;
  while (ships < playerTwo.shipCount) {
    x = Math.floor(Math.random() * 4);
    y = Math.floor(Math.random() * 4);
    if (parseInt(playerTwo.gameBoard[x][y]) !== 1) {
      playerTwo.gameBoard[x][y] = 1;//add a ship
      ships++;   
    }
  };
  console.log(playerOne.gameBoard)
  console.log(playerTwo.gameBoard)
  //Start the Game Play
  let currentPlayer = playerOne;
  let oponent;
  // playerOne and playerTwo should have at least one ship for the game to go on.
  while (playerOne.shipCount > 0 && playerTwo.shipCount > 0) {
    // ask playerOne x and y to strike .
    let xOneInput = prompt(`${currentPlayer.name} Enter an X value (0 to 3) to strike`);
    let yOneInput = prompt(`${currentPlayer.name} Enter an Y value (0 to 3) to strike`);
    if (currentPlayer === playerOne) {
      oponent = playerTwo;
    } else {
      oponent = playerOne;
    }
    // Checking oponent gameBoard, if it has ships, convert 1 to 0 and decrease quantity for cycle. 
    // Create alerts for each situation
    if (oponent.gameBoard[xOneInput][yOneInput] === 1) {
      oponent.gameBoard[xOneInput][yOneInput] = 0;
      oponent.shipCount--;
      alert('Hit');
    } else {
      alert('Miss');
    }
    if (currentPlayer === playerOne) {
      currentPlayer = playerTwo;
    } else {
      currentPlayer = playerOne;
    }
  }
  //when shipCount is 0 return the oponent is the winner and game over
  if (playerTwo.shipCount === 0) {
    return (`The winner is ${playerOne.name}!`)
  } else {
    return (`The winner is ${playerTwo.name}!`)
  }
}   
const gameResult = battleship()
const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
