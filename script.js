// Variables

const wolfNorth = document.querySelector("#wolf-north");
const goatNorth = document.querySelector("#goat-north");
// const boatNorth = document.querySelector("#boat-north");
const pumpkinNorth = document.querySelector("#pumpkin-north");
const wolfSouth = document.querySelector("#wolf-south");
const goatSouth = document.querySelector("#goat-south");
// const boatSouth = document.querySelector("#boat-south");
const pumpkinSouth = document.querySelector("#pumpkin-south");
let tripsTaken = document.querySelector("#trips");
// const northBankArray = [];
// const SouthBankArray = [];
let tripCounter = 0;

// Functions

wolfNorth.addEventListener("click", () => {
  console.log("No wolf!");
  tripsTaken.innerHTML += "* ";
  wolfNorth.innerHTML = "";
  wolfSouth.innerHTML = `<img src="./images/wolf-1.svg" />`;
  if (goatNorth.innerHTML && pumpkinNorth.innerHTML != "") {
    return alert(`GAME OVER:Pumpkin eaten by goat!`);
  } else {
  }
});

goatNorth.addEventListener("click", () => {
  console.log("Goat has gone!");
  tripsTaken.innerHTML += "* ";
  goatNorth.innerHTML = "";
  return (goatSouth.innerHTML = `<img src="./images/sheep.svg" />`);
});

pumpkinNorth.addEventListener("click", () => {
  console.log("pumpkin has gone!");
  tripsTaken.innerHTML += "* ";
  pumpkinNorth.innerHTML = "";
  return (pumpkinSouth.innerHTML = `<img src="./images/pumpkin-1.svg"/>`);
});

// boatNorth.addEventListener("click", () => {
//   anime({
//     targets: boatNorth,
//     translateX: 1500,
//     direction: "alternate",
//     loop: false,
//     easing: "steps(20)",
//   });
//   // if (northBankArray.length <= 2) {
//   //   console.log("This ship has sailed!");
//   //   return (boatNorth.innerHTML = "");
//   // } else if (northBankArray.length >= 3) {
//   //   alert("Not enough room in the boat!");
//   // } else {
//   //   console.log("nothing is happening");
//   // }
// });

// let currentPlayer = 1;

// const updateCurrentPlayer = () => {
//   if (currentPlayer === 1) {
//     currentPlayer = 2;
//   } else {
//     currentPlayer = 1;
//   }
// };

// const getNextPlayer = (currentPlayer) => {
//   return currentPlayer === 1 ? 2 : 1;
// };
// const activePlayer = 1;
// const nextPlayer = getNextPlayer(activePlayer);

// Event handlers

// There is a farmer who wishes to cross a river but he is not alone.
// He also has a goat, a wolf, and a cabbage along with him.

// There is only one boat available which can support the farmer and either of the goat, wolf or the cabbage. So at a time, the boat can have only two objects (farmer and one other).

// If the goat and wolf are left alone (either in the boat or onshore), the wolf will eat the goat.

// if (goatNorth.innerHTML && wolfNorth.innerHTML === "" || boatNorth.innerHTML && pumpkinNorth.innerHTML === "") {
// goatNorth.innerHTML = "`<img src="./images/blood.svg">`";
// alert("`<img src="./images/game-over.svg"> Goat eaten by wolf!`")

// }
// Similarly, if the Goat and cabbage are left alone, then goat will eat the cabbage.
// if (goatNorth.innerHTML && pumpkinNorth.innerHTML === "" || boatNorth.innerHTML && wolfNorth.innerHTML === "") {
// goatNorth.innerHTML = "`<img src="./images/apple.svg">`";
// alert("`<img src="./images/game-over.svg"> Pumpkin eaten by goat!`")

// }

// if (goatSouth.innerHTML && wolfSouth.innerHTML === "" || boatSouth.innerHTML && pumpkinNorth.innerHTML === "") {
// goatNorth.innerHTML = "`<img src="./images/blood.svg">`";
// alert("`<img src="./images/game-over.svg"> Goat eaten by wolf!`")

// }
// Similarly, if the Goat and cabbage are left alone, then goat will eat the cabbage.
// if (goatNorth.innerHTML && pumpkinNorth.innerHTML === "" || boatNorth.innerHTML && wolfNorth.innerHTML === "") {
// goatNorth.innerHTML = "`<img src="./images/apple.svg">`";
// alert("`<img src="./images/game-over.svg"> Pumpkin eaten by goat!`")

// }

// The farmer wants to cross the river with all three of his belongings: goat, wolf, and cabbage.
// What strategy should he use to do so?

// Scenarios:
// goat + wolf alone on a shore: game over
// goat and wolf alone in the boat: game over
// goat and cabbage together on a shore: game over
// goat and cabbage together on the boat: game over
// more than three "objects" in the boat: boat sinks => game over
// more then 7 trips: boat sinks => game over
// player should be able to change their mind about objects loaded on boat. (perhaps a clear/undo button)

// How to play:
// choose "objects" to take on the boat: all options include farmer as one object
// press ENTER
// choose a return journey and any objects (optional)
//

// Solution 1:

// Take goat on the other side and return back alone.
// Now,take the wolf along, drop the wolf on the other side and return with the goat.
// So now on one side, we have farmer, cabbage, and goat and on the other side, we have a wolf.
// Now, he takes the cabbage along and returns alone. So now the scenario is: farmer, goat on one side and wolf, cabbage on the other side.
// Now, finally, he crosses the river with the goat and hence succeeds in taking all his belongings with him.

// Tips from Dan on clean coding

// your code
// decimalButton.addEventListener("click", (e) => {
//   decimalString = e.target.value;

//   if(!currentString.includes('.')) {
//     currentString += '.'
//   } else{
//     return currentString;
//    }

// });

// refactor this to reference a separate function
// const handleDecimalPress = (e) => {
//   decimalString = e.target.value;
//   if (!currentString.includes('.')) {
//     currentString += '.'
//   } else {
//     return currentString;
//   }
// }

// decimalButton.addEventListener("click", handleDecimalPress);
// Now that decimal press logic has been abstracted into it’s own function, we can look at refactoring it a bit! Remember functions should only do one thing, in this case we add a decimal place to the current string if we’re allowed. So we actually don’t need that else or return inside it:
// remove decimal string, it's already "."
// remove unused "e" parameter
// remove else statement
// const handleDecimalPress = () => {
//   if (!currentString.includes('.')) {
//     currentString += '.'
//   }
// }

// decimalButton.addEventListener("click", handleDecimalPress);
