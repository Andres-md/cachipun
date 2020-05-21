


  //elements
const rock='rock';
const paper='paper';
const scissors='scissors';

let computerScore=0;
let playerScore=0;
let numberOfGames=0;

 function startGame(){
   let playerName = prompt('Enter Your Name!');
   let str ='Hola ' + playerName + ' empecemos a divertinos !';  
   alert (str);}
  
startGame();

//Score Count

function game(){
     
     if (numberOfGames===5 && playerScore>computerScore){
       alert('You Win!, You are the master of universe!')
       endGame();
       
     }else if (numberOfGames===5 && playerScore<computerScore){
       alert('You Lose!, Computer Wins!!')
       endGame();
      }else if (numberOfGames===5 && playerScore===computerScore){
        alert("It's a Tie!")
        endGame();
      }
     };

function endGame(){
      playerScore='0';
      computerScore='0';
      numberOfGames=0;
      document.getElementById('computerChoice').textContent='??';
      document.getElementById('resultado').textContent='?';
};     

 // computer Play Function

function computerPlay(){
  n=Math.floor(Math.random()*10);

  if(n<=3){
      return rock;
  }else if(n>3 & n<=6){
      return paper;
  }else {
      return scissors;
}
}; 

// playRound function


function playRound (playerChoice){

 
  
  let computerChoice= computerPlay();
    document.getElementById('computerChoice').textContent=computerChoice;
    
  if(playerChoice === computerChoice){
      let tie=`It's a Tie!`;
      document.getElementById('resultado').textContent=tie;
  } else if (playerChoice === rock && computerChoice === scissors){
      playerScore ++;
      let win1 ='Rock Wins Scissor!';
      document.getElementById('resultado').textContent=win1;
    
  }else if (playerChoice === rock && computerChoice === paper){
      computerScore ++;
      let lose1= 'You lose, Paper Wins Rock!';
      document.getElementById('resultado').textContent=lose1;
    
  }else if (playerChoice=== scissors && computerChoice === paper){
    playerScore++;
    let win2= 'Scissors win paper';
    document.getElementById('resultado').textContent=win2;
  }else if (playerChoice=== scissors && computerChoice=== rock){
      computerScore ++;
      let lose2= 'You lose!, Rock Wins Scissors';
      document.getElementById('resultado').textContent=lose2;
  }else if (playerChoice=== paper && computerChoice=== scissors){
      computerScore ++;
      let lose3= 'you lose!, Scissors Wins Paper';
      document.getElementById('resultado').textContent=lose3;

  }else if (playerChoice=== paper && computerChoice=== rock){
    playerScore ++; 
    let win3 = 'You Win! Paper wins Rock'; 
    document.getElementById('resultado').textContent=win3;
      
  }
  numberOfGames++;
  game();

  document.getElementById('computerScore').textContent=computerScore;
  document.getElementById('playerScore').textContent=playerScore;
};


   let button1 = document.getElementById('1');
    button1.addEventListener('click',()=>{
      playRound('rock');
      
      });
  let button2 = document.getElementById('2');
    button2.addEventListener('click',()=>{
        playRound('paper');
        
      });
  let button3 = document.getElementById('3');
      button3.addEventListener('click',()=>{
        playRound('scissors');
       
      });       



  

    




