// As a user, I want to start the game by clicking on a button.
var start = document.querySelector(".guessing-section");
var container = document.querySelector(".container");
var mode = "";

guessing-section.addEventListener("click", function() {
  
  if (mode == "start") {
    var timeEl = document.querySelector(".time");
    var mainEl = document.getElementById("main");
    
    var secondsLeft = 11;
    
    function setTime() {
      var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " you lose.";
    
        // //if(secondsLeft === 0) {
        //   clearInterval(timerInterval);
        //   sendMessage();//
        
      }, 1000);
    }
    
    // function sendMessage() {
    //   timeEl.textContent = " ";
    //   var imgEl = document.createElement("img");
    //   imgEl.setAttribute("src", "images/image_1.jpg");
    //   mainEl.appendChild(imgEl);
    
    }
    // When a user clicks the start button, the timer should reset.
    setTime();
   
// As a user, I want to try and guess a word by filling in a number of blanks that match the number of letters in that word.// When a user presses a letter key, the user's guess should be captured as a key event.// When a user correctly guesses a letter, the corresponding blank "_" should be replaced by the letter. For example, if the user correctly selects "a", then "a _ _ a _" should appear. compare input to stored array

// As a user, I want to win the game when I have guessed all the letters in the word.// When a user wins or loses a game, a message should appear and the timer should stop. if true return winner

// As a user, I want to lose the game when the timer runs out before I have guessed all the letters. compare input with array and amount === with stored array === timer>0 to stored array

// As a user, I want to see my total wins and losses on the screen. // When a user refreshes or returns to the brower page, the win and loss counts should persist.stored array display