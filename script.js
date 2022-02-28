// Variables

const wolfNorth = document.querySelector("#wolf-north");
const goatNorth = document.querySelector("#goat-north");
const boatNorth = document.querySelector("#boat-north");
const pumpkinNorth = document.querySelector("#pumpkin-north");
const wolfSouth = document.querySelector("#wolf-south");
const goatSouth = document.querySelector("#goat-south");
const boatSouth = document.querySelector("#boat-south");
const pumpkinSouth = document.querySelector("#pumpkin-south");
let tripsTaken = document.querySelector("#trips");

// Functions

const checkPuzzleSolved = () => {
  console.log("puzzle solved function");
  return (
    goatNorth.innerHTML === "" &&
    wolfNorth.innerHTML === "" &&
    pumpkinNorth.innerHTML === "" &&
    boatNorth.innerHTML === ""
  );
};

// When the boat is in the North Bank
boatNorth.addEventListener("click", () => {
  console.log("Boat sailing South!");
  tripsTaken.innerHTML += "* ";
  boatNorth.innerHTML = "";
  boatSouth.innerHTML = `<img src="./images/boat-small-02-2.svg" />`;
  if (checkPuzzleSolved()) {
    return alert("🎉 Congratulations: you solved it!");
  }
  if (
    goatNorth.innerHTML != "" &&
    pumpkinNorth.innerHTML != "" &&
    wolfNorth.innerHTML != ""
  ) {
    return alert(
      "🛑 GAME OVER:🎃 eaten by the 🐐 and then 🐐 eaten by the 🐺!"
    );
  }
  if (tripsTaken.innerHTML >= "* * * * * * * *") {
    return alert("⛔️ GAME OVER: exceeded 7 trips!");
  }
});

// When the boat is in the South bank
boatSouth.addEventListener("click", () => {
  console.log("Boat sailing north!");
  tripsTaken.innerHTML += "* ";
  boatSouth.innerHTML = "";
  boatNorth.innerHTML = `<img src="./images/boat-small-02-2.svg" />`;
  if (checkPuzzleSolved()) {
    return alert("🎉 Congratulations: you solved it!");
  }
  if (goatNorth.innerHTML === "" && pumpkinNorth.innerHTML === "") {
    return alert("🛑 GAME OVER:🎃 eaten by the 🐐!");
  } else if (goatNorth.innerHTML === "" && wolfNorth.innerHTML === "") {
    return alert("🛑 GAME OVER: 🐐 eaten by the 🐺");
  }
  if (tripsTaken.innerHTML >= "* * * * * * * *") {
    return alert("⛔️ GAME OVER: exceeded 7 trips!");
  }
});

// When wolf is on the North Bank
wolfNorth.addEventListener("click", () => {
  console.log("No wolf!");
  // tripsTaken.innerHTML += "* ";
  wolfNorth.innerHTML = "";
  wolfSouth.innerHTML = `<img src="./images/wolf-1.svg" />`;
  // if (checkPuzzleSolved()) {
  //   return alert("🎉 Congratulations: you solved it!");
  // }
  if (goatNorth.innerHTML != "" && pumpkinNorth.innerHTML != "") {
    return alert("🛑 GAME OVER:🎃 eaten by the 🐐!");
  }
  // if (tripsTaken.innerHTML >= "* * * * * * * *") {
  //   return alert("⛔️ GAME OVER: exceeded 7 trips!");
  // }
});

// When wolf is on the South Bank

wolfSouth.addEventListener("click", () => {
  console.log("No south wolf!");
  // tripsTaken.innerHTML += "* ";
  wolfSouth.innerHTML = "";
  wolfNorth.innerHTML = `<img src="./images/wolf-1.svg" />`;
  // if (checkPuzzleSolved()) {
  //   return alert("🎉 Congratulations: you solved it!");
  // }
  if (goatSouth.innerHTML != "" && pumpkinSouth.innerHTML != "") {
    return alert("🛑 GAME OVER:🎃 eaten by the 🐐!");
  }
  // if (tripsTaken.innerHTML >= "* * * * * * * *") {
  //   return alert("⛔️ GAME OVER: exceeded 7 trips!");
  // }
});

// When goat is on the North Bank
goatNorth.addEventListener("click", () => {
  console.log("Goat has gone!");
  // tripsTaken.innerHTML += "* ";
  goatNorth.innerHTML = "";
  goatSouth.innerHTML = `<img src="./images/sheep.svg" />`;
  // if (checkPuzzleSolved()) {
  //   return alert("🎉 Congratulations: you solved it!");
  // }

  // if (tripsTaken.innerHTML >= "* * * * * * * *") {
  //   return alert("⛔️ GAME OVER: exceeded 7 trips!");
  // }
});

// When goat is on the South Bank
goatSouth.addEventListener("click", () => {
  console.log("Goat has gone!");
  // tripsTaken.innerHTML += "* ";
  goatSouth.innerHTML = "";
  goatNorth.innerHTML = `<img src="./images/sheep.svg" />`;
  // if (checkPuzzleSolved()) {
  //   return alert("🎉 Congratulations: you solved it!");
  // }

  // if (tripsTaken.innerHTML >= "* * * * * * * *") {
  //   return alert("⛔️ GAME OVER: exceeded 7 trips!");
  // }
});

// When pumpkin is on the North Bank

pumpkinNorth.addEventListener("click", () => {
  console.log("pumpkin has gone!");
  // tripsTaken.innerHTML += "* ";
  pumpkinNorth.innerHTML = "";
  pumpkinSouth.innerHTML = `<img src="./images/pumpkin-1.svg"/>`;
  // if (checkPuzzleSolved()) {
  //   return alert("Congratulations: you solved it!");
  // }
  if (goatNorth.innerHTML != "" && wolfNorth.innerHTML != "") {
    return alert("🛑 GAME OVER: 🐐 eaten by the 🐺");
  }

  // if (tripsTaken.innerHTML >= "* * * * * * * *") {
  //   return alert("⛔️ GAME OVER: exceeded 7 trips!");
  // }
});

// When pumpkin is on the South Bank
pumpkinSouth.addEventListener("click", () => {
  console.log("pumpkin has gone!");
  // tripsTaken.innerHTML += "* ";
  pumpkinSouth.innerHTML = "";
  pumpkinNorth.innerHTML = `<img src="./images/pumpkin-1.svg"/>`;
  // if (checkPuzzleSolved()) {
  //   return alert("🎉 Congratulations: you solved it!");
  // }
  if (goatSouth.innerHTML != "" && wolfSouth.innerHTML != "") {
    return alert(`🛑 GAME OVER: 🐐 eaten by the 🐺`);
  }
  // if (tripsTaken.innerHTML >= "* * * * * * * *") {
  //   return alert("⛔️ GAME OVER: exceeded 7 trips!");
  // }
});

// Pseudo code:
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
