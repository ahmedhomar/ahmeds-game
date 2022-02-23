// Variables

const farmerNorth = document.querySelector("#farmer-north");
const wolfNorth = document.querySelector("#wolf-north");
const goatNorth = document.querySelector("#goat-north");
const boatNorth = document.querySelector("#boat-north");
const pumpkinNorth = document.querySelector("#pumpkin-north");

const farmerSouth = document.querySelector("#farmer-south");
const wolfSouth = document.querySelector("#wolf-south");
const goatSouth = document.querySelector("#goat-south");
const boatSouth = document.querySelector("#boat-south");
const pumpkinSouth = document.querySelector("#pumpkin-south");

const northBankArray = [];
const SouthBankArray = [];

// Functions

farmerNorth.addEventListener("click", (e) => {
  console.log("Something is coming");
  northBankArray.push("farmer");
  return (farmerNorth.innerHTML = "");
});

wolfNorth.addEventListener("click", (e) => {
  console.log("No wolf!");
  northBankArray.push("wolf");
  return (wolfNorth.innerHTML = "");
});

goatNorth.addEventListener("click", (e) => {
  console.log("Goat has gone!");
  northBankArray.push("goat");
  return (goatNorth.innerHTML = "");
});

pumpkinNorth.addEventListener("click", (e) => {
  console.log("pumpkin has gone!");
  northBankArray.push("pumpkin");
  pumpkinNorth.innerHTML = "";
  return (pumpkinSouth.innerHTML = `
  <figure id="pumpkin-north">
      <img src="./images/pumpkin-1.svg"/>
      <figcaption>Pumpkin</figcaption>
  </figure>`);
});

boatNorth.addEventListener("click", (e) => {
  if (northBankArray.length <= 2) {
    console.log("This ship has sailed!");
    return (boatNorth.innerHTML = "");
  } else if (northBankArray.length >= 3) {
    alert("Not enough room in the boat!");
  } else {
    console.log("nothing is happening");
  }
});

// Event handlers

// There is a farmer who wishes to cross a river but he is not alone.
// He also has a goat, a wolf, and a cabbage along with him.

// There is only one boat available which can support the farmer and either of the goat, wolf or the cabbage. So at a time, the boat can have only two objects (farmer and one other).

// If the goat and wolf are left alone (either in the boat or onshore), the wolf will eat the goat.
// Similarly, if the Goat and cabbage are left alone, then goat will eat the cabbage.
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
