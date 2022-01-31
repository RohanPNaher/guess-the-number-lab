const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      // No cheating!
      // console.log(this.secretNum)

    let playGuess;
    
    //Player guesses until they have the right number
    while (parseInt(this.playGuess) !== this.secretNum) {
      this.playGuess = this.getGuess()
      this.prevGuesses.push(this.playGuess)
      
      this.newNums()
      //Gives alerts during gameplay
      this.render()
    }

    //End game
    return playGuess = this.secretNum
  },
  
  getGuess() {
    //Prompt
    let guess = prompt(`Enter a numerical guess between ${this.smallestNum} and ${this.biggestNum}. You have already guessed: ${this.prevGuesses.join(" ")}.`);

    // undefined decl
    let currentGuess;
    
    //Catch all for invalid values
    while (isNaN(guess) === true || guess > this.biggestNum || guess < this.smallestNum) {
      guess = prompt(`Your guess, ${guess}, isn't valid. Please enter a numerical guess between ${this.smallestNum} and ${this.biggestNum}. You have already guessed: ${this.prevGuesses.join(" ")}.`)
    }

    //Moves forward with player guess
    return currentGuess = guess
  },

  render( ) {
    let totalAmountGuess = this.prevGuesses.length;
    let totalGuesses = this.prevGuesses.join(" ");
    let lastGuessed = this.prevGuesses[this.prevGuesses.length - 1];
    let status;

    if (lastGuessed == this.secretNum && totalAmountGuess === 1) {
      status = `You guessed ${this.secretNum} in only one guess?!`;
    } else if (lastGuessed == this.secretNum) {
      //Win
      status = `Congrats! You guessed the correct number, ${this.secretNum}, in ${totalAmountGuess} guesses! Refresh the browser to play again!`;
    } else if (lastGuessed > this.secretNum) {
      //High
      status = `Your guess is too high. Your previous guesses are: ${totalGuesses}.`
    } else if (lastGuessed < this.secretNum) {
      //Low
      status = `Your guess is too low. Your previous guesses are: ${totalGuesses}.`
    } else {
      //Broke
      status = 'Refresh the page, the game broke!'
    }

    return alert(status)
  },


  newNums() {
    if (this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum){
      return this.smallestNum = this.prevGuesses[this.prevGuesses.length - 1]
    } else if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
      return this.biggestNum = this.prevGuesses[this.prevGuesses.length - 1]
    }
  },
};


game.play();

