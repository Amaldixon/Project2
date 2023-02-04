function flip(guess) {
    let sideLandedOn = Math.round(Math.random()) == 0 ? 'heads' : 'tails'; // "flip" coin
    document.getElementById("result").innerHTML = sideLandedOn; // results element to side that coin landed on
    if (guess == sideLandedOn) {
      alert(`The coin landed on ${sideLandedOn} and you guessed ${guess}... you win!`); // alert user won
    } else {
      alert(`The coin landed on ${sideLandedOn} and you guessed ${guess}... you lose!`); // alert user lost
    }
  }
