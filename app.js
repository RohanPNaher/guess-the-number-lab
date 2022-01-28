const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  },
  prevGuesses: [],
  
  getGuess(guess) {
    let currentGuess = guess;
    if(currentGuess === -1){
      return console.log(`Enter a numerical guess between ${this.smallestNum} and ${this.biggestNum} inside the console:`)
    } else {
      if (isNaN(parseInt(guess)) === true) {
        console.log(guess)
        return `I am sorry to inform you, but your guess, ${guess}, isn't a number. Try again.`
      } else if (guess > this.biggestNum || guess < this.smallestNum) {
        console.log(guess)
        return `Please pick a number that is ${this.smallestNum} to ${this.biggestNum}.`
      } else {
        return currentGuess = guess
      }
    }
  },
};


game.getGuess(-1);