// The completed application should meet the following criteria:

// As a user, I want to start the game by clicking on a button.

// As a user, I want to try and guess a word by filling in a number of blanks that match the number of letters in that word.

// As a user, I want the game to be timed.

// As a user, I want to win the game when I have guessed all the letters in the word.

// As a user, I want to lose the game when the timer runs out before I have guessed all the letters.

// As a user, I want to see my total wins and losses on the screen.

// Specifications
// When a user presses a letter key, the user's guess should be captured as a key event.

// When a user correctly guesses a letter, the corresponding blank "_" should be replaced by the letter. For example, if the user correctly selects "a", then "a _ _ a _" should appear.

// When a user wins or loses a game, a message should appear and the timer should stop.

// When a user clicks the start button, the timer should reset.

// When a user refreshes or returns to the brower page, the win and loss counts should persist.


//Timer function and variables here

// Selects element by class
//We store the interval in a variable. This is an important step, so that we can get the interval to stop. 
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 11;

function setTime() {
  // Sets interval in variable
  //The setInterval() method takes a function as its first argument
  var timerInterval = setInterval(function() {
    //The function is the action that we want to be evaluated at each interval. This function prints a message at each interval
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      //When the countdown reaches zero, we want the action to stop. The clearInterval() method stops the execution of the interval. It takes one parameter: the variable name assigned to the interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
    //The second argument that the setInterval() method takes is the interval. Because intervals use milliseconds, we use 1000 to create an interval of one second
  }, 1000);
}

// Function to create and append colorsplosion image
//We call sendMessage() after the interval is cleared, so the image will pop up after the countdown is complete. The sendMessage function creates and appends the image to the document
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();


//word / letters to appear go here
var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function
  if(element.matches(".box")) {
    var state = element.getAttribute("data-state");

    if (state === "hidden") {
      element.textContent = element.getAttribute("data-number");
      element.setAttribute("data-state", "visible");
    } else {
      element.textContent = "";
      element.setAttribute("data-state", "hidden");
    }
  }
});


//text box for the user's guesses goes here









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