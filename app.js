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
    let currentGuess = -1;
    if(currentGuess === -1){
      return console.log(`Enter a numerical guess between ${this.smallestNum} and ${this.biggestNum} inside the console:`)
    } else {

    }
  }
};


game.getGuess();