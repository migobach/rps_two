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

// var plays = 0

  function startGame() {
    computerNum = Math.floor(Math.random()*rps.length)
    
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
    // plays++
    userChoice = $(this).data().type
    console.log(userChoice)
    $('#player_choice').text('You chose: ' + userChoice)
    console.log(computerNum)
    $('#computer_choice').text('The computer chose: ' + rps[computerNum])
    
    winner(userChoice, computerNum)
  })

  function winner(userChoice, computerNum, plays){
    if ((userChoice === 'rock' && computerNum === 2) ||
    (userChoice === 'paper' && computerNum === 0) ||
    (userChoice === 'scissors' && computerNum === 1)) {
      userWin++
      // userWinPerc = (userWin / plays) * 100
      // debugger
      $('#results').text('You win! Congratulation')
      $('#wins').text('Your total wins: ' + userWin /* + ', you win ' + userWinPerc + "% of the time."*/ )
    } else if ((userChoice === 'rock' && computerNum === 1) ||
    (userChoice === 'paper' && computerNum === 2) ||
    (userChoice === 'scissors' && computerNum === 0)) {
      userLose++
      // userLosePerc = (userLose / plays * 100)
      $('#results').text('You lose..... sucker.') 
      $('#loses').text('Your total loses: ' + userLose /*+ ', you lose' + userLosePerc + "% of the time."*/)
    } else {
      $('#results').text("It's a tie. Try again.").fadeToggle(2000)
    }
  }

  $('#firstbtn').on('click', function() {
    var game = $('#page')
    var startButton = $(this)

    // if (startButton)
      $('#page').slideDown(3000, function() {
        //set some state of the elment
      })
    // else 
    //   button.text('Start Game')

    // startButton.slideToggle(3000)
  })

  // $('#new').on('click', fuction() {
  //   var = new startGame
  // })
  
})
