$(document).ready( function() {
  //"Global || top level" variables
  //functions
  //listeners
  //code that runs

  // winner banner
var userChoice = 0
var computerNum = 0
var rps = ['rock', 'paper', 'scissors']
var userWin = 0
var userLose = 0 

  function startGame() {
    computerNum = Math.floor(Math.random()*rps.length)
    // console.log("something")
    if (computerNum === 0) {
      "The computer chose rock"
    } else if (computerNum === 1) {
      "The computer chose paper" 
    } else {
      "The computer chose scissors"
    }
  }

  $('.imgbutton').on('click', function(){
    startGame()
    userChoice = $(this).data().type
    console.log(userChoice)
    $('#player_choice').text('You chose: ' + userChoice)
    console.log(computerNum)
    $('#computer_choice').text('The computer chose: ' + rps[computerNum])
    
    winner(userChoice, computerNum)
  })

  function winner(userChoice, computerNum){
    if ((userChoice === 'rock' && computerNum === 2) ||
    (userChoice === 'paper' && computerNum === 0) ||
    (userChoice === 'scissors' && computerNum === 1)) {
      userWin++
      $('#results').text('You win! Congratulation')
      $('#wins').text('Your total wins: ' + userWin)
    } else if ((userChoice === 'rock' && computerNum === 1) ||
    (userChoice === 'paper' && computerNum === 2) ||
    (userChoice === 'scissors' && computerNum === 0)) {
      userLose++
      $('#results').text('You lose..... sucker.') 
      $('#loses').text('Your total loses: ' + userLose)
    } else {
      $('#results').text("It's a tie. Try again.")
    }
  }

  new startGame
})
