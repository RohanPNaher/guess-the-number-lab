const game = {
  title: 'Guess the Number!',
  biggestNum: null,
  smallestNum: null,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    //Set the range before generating the secretNum
    this.getRange()
    //Generate secretNum from user defined range
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      // No cheating!
      // console.log(this.secretNum)

    let playGuess;
    
    //Player guesses until they have the right number
    while (parseInt(this.playGuess) !== this.secretNum) {
      this.playGuess = this.getGuess()
      this.prevGuesses.push(this.playGuess)
      
      //Changes the low/high so numbers guessed lower/higher than previous guess would be invalid
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

    //Catch all for invalid values
    while (isNaN(guess) === true || parseInt(guess) > this.biggestNum || parseInt(guess) < this.smallestNum || guess === '') {
      guess = prompt(`Your guess, ${guess}, isn't valid. Please enter a numerical guess between ${this.smallestNum} and ${this.biggestNum}. You have already guessed: ${this.prevGuesses.join(" ")}.`)
    }
    //Moves forward with player guess
    return guess
  },

  render( ) {
    let totalAmountGuess = this.prevGuesses.length;
    let totalGuesses = this.prevGuesses.join(" ");
    let lastGuessed = this.prevGuesses[this.prevGuesses.length - 1];
    let status; 
    
    
    lastGuessed == this.secretNum && totalAmountGuess === 1 ? status = `You guessed ${this.secretNum} in only one guess?!`
    // Win
    : lastGuessed == this.secretNum ? status = `Congrats! You guessed the correct number, ${this.secretNum}, in ${totalAmountGuess} guesses! Refresh the browser to play again!`
    // Low
    : lastGuessed < this.secretNum ? status = `Your guess is too low. Your previous guesses are: ${totalGuesses}.`
    // High
    : lastGuessed > this.secretNum ? status = `Your guess is too high. Your previous guesses are: ${totalGuesses}.`
    // broke
    : status = 'Refresh the page, the game broke!'

    return alert(status)
  },


  newNums() {
    if (this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum){
      return this.smallestNum = this.prevGuesses[this.prevGuesses.length - 1]
    } else if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
      return this.biggestNum = this.prevGuesses[this.prevGuesses.length - 1]
    }
  },

  getRange() {
    // Do while loop starts the prompt. While loop won't work here
    do {
      this.smallestNum = parseInt(prompt(`Please pick a number to be your lowest range`))
    } while (isNaN(this.smallestNum))

    do {
      this.biggestNum = parseInt(prompt(`Please pick a number to be your highest range. It cannot be lower than ${this.smallestNum}.`))
    } while (isNaN(this.biggestNum) || this.biggestNum < this.smallestNum)
  },

};


game.play();

