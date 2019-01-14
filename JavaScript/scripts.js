//Website Artificial Intelligence
function robot(){
  var answer=confirm("Hi! I'm this website's AI! Corie created me using JavaScript!\nClick 'Cancel' to turn me off and continue browsing the website or click 'OK' to continue talking to me :)");
  if(answer){//user clicked OK
    var visitorName = prompt('Yay! Firstly, What is your name');
    if(visitorName==null) return;
    else {console.log(visitorName);}//records the response in the console.Go to Develop>Show JavaScript Console
    alert("So your name is "+visitorName+"....................interesting!"+" Hi "+visitorName);
    alert("Let's play a game! :)");
    var randomNumber = Math.floor(Math.random()*6)+1;
    var guess = prompt('Guess which number I am thinking about between 1 and 5!');
    if(parseInt(guess)==null) return;
    else if(parseInt(guess)==randomNumber){
      alert("You guessed right!");
    }
    else{
      alert("Nope! That's not it! :P");
    }
    alert("Don't leave yet we're just starting to have fun!\nYou can take a look around Corie's website or continue playing with me!");
    var decision = prompt("Press 1 to continue playing with me or press 2 to exit my game and view Corie's website");
    
    if(parseInt(decision)==2){
    	window.location.href = "index.html";
    }
    else if(parseInt(decision)==1){
        alert("Okay, game on! :D");
        var correctGuess;
        var x=0;
        var randomNumber = Math.floor(Math.random()*10)+1;
        while(x!=4){
          var guess= prompt("Guess a number between 1 and 10! :P");
          if(parseInt(guess)==randomNumber){
            correctGuess=true;
          }
          else if (parseInt(guess)> randomNumber){
            alert("Too high! The number is less than that!");
          }
          else if (parseInt(guess)< randomNumber){
            alert("Too low! The number is greater than that!");
          }
            
          if(correctGuess){
            alert("Congrats! You got it :D");
          }
         
          x=x+1;
        }
      
        alert("Sorry the number was "+ randomNumber+" :P");      
    }
  }
  else{//user doesn't want to talk to the AI
    window.location.href = "index.html";
  }
  
}

robot();
window.location.href = "index.html";





