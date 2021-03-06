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
var plays = 0

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
    plays++
    userChoice = $(this).data().type
    console.log(userChoice)
    $('#player_choice').text('You chose: ' + userChoice)
    console.log(computerNum)
    $('#computer_choice').text('The computer chose: ' + rps[computerNum])
    
    winner(userChoice, computerNum, plays)
  })

  function winner(userChoice, computerNum, plays){
    if ((userChoice === 'rock' && computerNum === 2) ||
    (userChoice === 'paper' && computerNum === 0) ||
    (userChoice === 'scissors' && computerNum === 1)) {
      userWin++
      userWinPerc = (userWin / plays) * 100
      $('#results').text('You win! Congratulation').fadeToggle(2000)
      $('#wins').text('Your total wins: ' + userWin + ', you win ' + Math.floor(userWinPerc) + "% of the time.")
    } else if ((userChoice === 'rock' && computerNum === 1) ||
    (userChoice === 'paper' && computerNum === 2) ||
    (userChoice === 'scissors' && computerNum === 0)) {
      userLose++
      userLosePerc = (userLose / plays * 100)
      $('#results').text('You lose..... sucker.').fadeToggle(2000)
      $('#loses').text('Your total loses: ' + userLose + ', you lose ' + Math.floor(userLosePerc) + "% of the time.")
    } else {
      $('#results').text("It's a tie. Try again.").fadeToggle(2000)
    }
  }

  $('#firstbtn').on('click', function() {
    if (plays > 0) {
      reset()
    }
    userWin = 0
    userLose = 0 
    plays = 0
      $('#page').slideDown(3000, function() {
      })

  })

  function reset() {
    $('#wins').text('Your total wins: ')
    $('#loses').text('Your total loses: ')
    $('#player_choice').text('You chose: ') 
    $('#computer_choice').text('The computer chose: ')
  }
})
