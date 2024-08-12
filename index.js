const library = ["piney", "adieu", "flout", "coyly", "tryst"];
const randKey = Math.floor(Math.random() * library.length);

const userInput = document.getElementById("user-guess");
const display = document.getElementById("game-interface");

const required = document.getElementById("req");
const submitBtn = document.getElementById("guess");
const submitBtn1 = document.getElementById("guess1");
const submitBtn2 = document.getElementById("guess2");
const submitBtn3 = document.getElementById("guess3");
const submitBtn4 = document.getElementById("guess4");
const submitBtn5 = document.getElementById("guess5");
const submitBtn6 = document.getElementById("guess6");
const lossDisplay = document.getElementById("loss");
const winDisplay = document.getElementById("win");

const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const row3 = document.getElementById("row3");
const row4 = document.getElementById("row4");
const row5 = document.getElementById("row5");
const row6 = document.getElementById("row6");
let won = false;

const word = library[randKey];
let count = 1;

if (submitBtn && !won) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    row1.innerHTML = "";
    if (
      userInput.value !== "" &&
      userInput.value.length === word.length &&
      !won
    ) {
      console.log(userInput.value);
      let guess = userInput.value;
      console.log("First Guess...");

      if (guess !== word) {
        for (let i = 0; i < word.length; i++) {
          for (let letter of guess[i]) {
            if (letter === word[i]) {
              console.log(`${letter} is in the word.`);
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("green");
              newItem.innerHTML = userInput.value[i];
              row1.appendChild(newItem);
            } else if (word.includes(letter)) {
              console.log(
                `${letter} is in the word but not in the right place.`
              );
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("yellow");
              newItem.innerHTML = userInput.value[i];
              row1.appendChild(newItem);
            } else {
              console.log(`${letter} is not in the word.`);
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("red");
              newItem.innerHTML = userInput.value[i];
              row1.appendChild(newItem);
            }
          }
        }
      } else {
        console.log(`You win your guess "${guess}".`);
        for (let i = 0; i < word.length; i++) {
          for (let letter of guess[i]) {
            if (letter === word[i]) {
              console.log(`${letter} is in the word.`);
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("green");
              newItem.innerText = userInput.value[i];
              row1.appendChild(newItem);
              won = true;
              winDisplay.style.display = "block";
              submitBtn6.style.display = "block";
            }
          }
        }
      }

      required.innerText = "";
      userInput.value = "";
    } else {
      required.innerText =
        "Input is required and letters must be 5 characters.";
    }
    submitBtn.style.display = "none";
    submitBtn1.style.display = "block";
  });
}

if (submitBtn1 && !won) {
  submitBtn1.addEventListener("click", function (e) {
    e.preventDefault();
    row2.innerHTML = "";
    if (
      userInput.value !== "" &&
      userInput.value.length === word.length &&
      !won
    ) {
      console.log(userInput.value);
      let guess = userInput.value;
      console.log("First Guess...");

      if (guess !== word) {
        for (let i = 0; i < word.length; i++) {
          for (let letter of guess[i]) {
            if (letter === word[i]) {
              console.log(`${letter} is in the word.`);
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("green");
              newItem.innerHTML = userInput.value[i];
              row2.appendChild(newItem);
            } else if (word.includes(letter)) {
              console.log(
                `${letter} is in the word but not in the right place.`
              );
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("yellow");
              newItem.innerHTML = userInput.value[i];
              row2.appendChild(newItem);
            } else {
              console.log(`${letter} is not in the word.`);
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("red");
              newItem.innerHTML = userInput.value[i];
              row2.appendChild(newItem);
            }
          }
        }
      } else {
        console.log(`You win your guess "${guess}".`);
        for (let i = 0; i < word.length; i++) {
          for (let letter of guess[i]) {
            if (letter === word[i]) {
              console.log(`${letter} is in the word.`);
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("green");
              newItem.innerText = userInput.value[i];
              row2.appendChild(newItem);
              won = true;
              winDisplay.style.display = "block";
              submitBtn6.style.display = "block";
            }
          }
        }
      }

      required.innerText = "";
      userInput.value = "";
    } else {
      required.innerText =
        "Input is required and letters must be 5 characters.";
    }
    submitBtn1.style.display = "none";
    submitBtn2.style.display = "block";
  });
} else {
  required.innerText = "YOU WON!!!";
}

if (submitBtn2) {
  submitBtn2.addEventListener("click", function (e) {
    row3.innerHTML = "";
    e.preventDefault();
    if (
      userInput.value !== "" &&
      userInput.value.length === word.length &&
      !won
    ) {
      console.log(userInput.value);
      let guess = userInput.value;
      console.log("First Guess...");

      if (guess !== word) {
        for (let i = 0; i < word.length; i++) {
          for (let letter of guess[i]) {
            if (letter === word[i]) {
              console.log(`${letter} is in the word.`);
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("green");
              newItem.innerHTML = userInput.value[i];
              row3.appendChild(newItem);
            } else if (word.includes(letter)) {
              console.log(
                `${letter} is in the word but not in the right place.`
              );
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("yellow");
              newItem.innerHTML = userInput.value[i];
              row3.appendChild(newItem);
            } else {
              console.log(`${letter} is not in the word.`);
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("red");
              newItem.innerHTML = userInput.value[i];
              row3.appendChild(newItem);
            }
          }
        }
      } else {
        console.log(`You win your guess "${guess}".`);
        for (let i = 0; i < word.length; i++) {
          for (let letter of guess[i]) {
            if (letter === word[i]) {
              console.log(`${letter} is in the word.`);
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("green");
              newItem.innerText = userInput.value[i];
              row3.appendChild(newItem);
              won = true;
              winDisplay.style.display = "block";
              submitBtn6.style.display = "block";
            }
          }
        }
      }

      required.innerText = "";
      userInput.value = "";
    } else {
      required.innerText =
        "Input is required and letters must be 5 characters.";
    }
    submitBtn2.style.display = "none";
    submitBtn3.style.display = "block";
  });
} else {
  required.innerText = "YOU WON!!!";
}

if (submitBtn3) {
  submitBtn3.addEventListener("click", function (e) {
    row4.innerHTML = "";
    e.preventDefault();
    if (
      userInput.value !== "" &&
      userInput.value.length === word.length &&
      !won
    ) {
      console.log(userInput.value);
      let guess = userInput.value;
      console.log("First Guess...");

      if (guess !== word) {
        for (let i = 0; i < word.length; i++) {
          for (let letter of guess[i]) {
            if (letter === word[i]) {
              console.log(`${letter} is in the word.`);
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("green");
              newItem.innerHTML = userInput.value[i];
              row4.appendChild(newItem);
            } else if (word.includes(letter)) {
              console.log(
                `${letter} is in the word but not in the right place.`
              );
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("yellow");
              newItem.innerHTML = userInput.value[i];
              row4.appendChild(newItem);
            } else {
              console.log(`${letter} is not in the word.`);
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("red");
              newItem.innerHTML = userInput.value[i];
              row4.appendChild(newItem);
            }
          }
        }
      } else {
        console.log(`You win your guess "${guess}".`);
        for (let i = 0; i < word.length; i++) {
          for (let letter of guess[i]) {
            if (letter === word[i]) {
              console.log(`${letter} is in the word.`);
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("green");
              newItem.innerText = userInput.value[i];
              row4.appendChild(newItem);
              won = true;
              winDisplay.style.display = "block";
              submitBtn6.style.display = "block";
            }
          }
        }
      }

      required.innerText = "";
      userInput.value = "";
    } else {
      required.innerText =
        "Input is required and letters must be 5 characters.";
    }
    submitBtn3.style.display = "none";
    submitBtn4.style.display = "block";
  });
} else {
  required.innerText = "YOU WON!!!";
}

if (submitBtn4) {
  submitBtn4.addEventListener("click", function (e) {
    row5.innerHTML = "";
    e.preventDefault();
    if (
      userInput.value !== "" &&
      userInput.value.length === word.length &&
      !won
    ) {
      console.log(userInput.value);
      let guess = userInput.value;
      console.log("First Guess...");

      if (guess !== word) {
        for (let i = 0; i < word.length; i++) {
          for (let letter of guess[i]) {
            if (letter === word[i]) {
              console.log(`${letter} is in the word.`);
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("green");
              newItem.innerHTML = userInput.value[i];
              row5.appendChild(newItem);
            } else if (word.includes(letter)) {
              console.log(
                `${letter} is in the word but not in the right place.`
              );
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("yellow");
              newItem.innerHTML = userInput.value[i];
              row5.appendChild(newItem);
            } else {
              console.log(`${letter} is not in the word.`);
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("red");
              newItem.innerHTML = userInput.value[i];
              row5.appendChild(newItem);
            }
          }
        }
      } else {
        console.log(`You win your guess "${guess}".`);
        for (let i = 0; i < word.length; i++) {
          for (let letter of guess[i]) {
            if (letter === word[i]) {
              console.log(`${letter} is in the word.`);
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("green");
              newItem.innerText = userInput.value[i];
              row5.appendChild(newItem);
              won = true;
              winDisplay.style.display = "block";
              submitBtn6.style.display = "block";
            }
          }
        }
      }

      required.innerText = "";
      userInput.value = "";
    } else {
      required.innerText =
        "Input is required and letters must be 5 characters.";
    }
    submitBtn4.style.display = "none";
    submitBtn5.style.display = "block";
  });
} else {
  required.innerText = "YOU WON!!!";
}

if (submitBtn4) {
  submitBtn4.addEventListener("click", function (e) {
    row6.innerHTML = "";
    e.preventDefault();
    if (
      userInput.value !== "" &&
      userInput.value.length === word.length &&
      !won
    ) {
      console.log(userInput.value);
      let guess = userInput.value;
      console.log("First Guess...");

      if (guess !== word) {
        for (let i = 0; i < word.length; i++) {
          for (let letter of guess[i]) {
            if (letter === word[i]) {
              console.log(`${letter} is in the word.`);
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("green");
              newItem.innerHTML = userInput.value[i];
              row5.appendChild(newItem);
            } else if (word.includes(letter)) {
              console.log(
                `${letter} is in the word but not in the right place.`
              );
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("yellow");
              newItem.innerHTML = userInput.value[i];
              row5.appendChild(newItem);
            } else {
              console.log(`${letter} is not in the word.`);
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("red");
              newItem.innerHTML = userInput.value[i];
              row5.appendChild(newItem);
            }
          }
        }
      } else {
        console.log(`You win your guess "${guess}".`);
        for (let i = 0; i < word.length; i++) {
          for (let letter of guess[i]) {
            if (letter === word[i]) {
              console.log(`${letter} is in the word.`);
              let newItem = document.createElement("div");
              newItem.classList.add("item");
              newItem.classList.add("green");
              newItem.innerText = userInput.value[i];
              row5.appendChild(newItem);
              won = true;
              if (won) {
                winDisplay.style.display = "block";
                submitBtn6.style.display = "block";
              } else {
                winDisplay.style.display = "none";
              }
            }
          }
        }
      }

      required.innerText = "";
      userInput.value = "";
    } else {
      required.innerText =
        "Input is required and letters must be 5 characters.";
      if (!won) {
        lossDisplay.style.display = "block";
      } else {
        lossDisplay.style.display = "none";
      }
    }
    submitBtn5.style.display = "none";
    submitBtn6.style.display = "block";
  });
} else {
  required.innerText = "YOU WON!!!";
}

submitBtn6.addEventListener("click", function () {
  location.reload();
});
