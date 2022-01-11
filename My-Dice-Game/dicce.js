
// rollDice();

var player1ScoreTillNow = 0;
var player2ScoreTillNow = 0;
var drawsTillNow = 0;
function rollDice(){

    var player1 =  Math.floor(Math.random()*6 +1);
    var player2 =  Math.floor(Math.random()*6 +1);

    show(player1,player2);
    compare(player1,player2);
    updateScore(player1,player2);

}


function show(player1, player2 ){

    
    var a1 = document.querySelector(".img1");
    var a2 = document.querySelector(".img2");
    var randomImg1 = "./images/dice" + player1 + ".png";
    var randomImg2 = "./images/dice" + player2 + ".png";
    a1.setAttribute("src",randomImg1);
    a2.setAttribute("src",randomImg2);
    



}

function compare(player1, player2){
    var a = document.querySelector("#myText");
    if(player1>player2){
        a.innerText = "Player 1 Wins!";
    }else if(player1 < player2){
        a.innerText = "Player 2 Wins!";
    }else{
        a.innerText = "Draw!";
    }
}


function updateScore(player1, player2 ){
   
    var newScore;
    if(player1 > player2){
        player1ScoreTillNow += 1;
        newScore = player1ScoreTillNow;
        
        newScore = newScore.toString();
        newScore += " wins !";
        
        document.querySelector(".player1 strong").innerText = newScore;
        
    }else if(player1 < player2){
        player2ScoreTillNow += 1;
        newScore = player2ScoreTillNow;
        newScore = newScore.toString();
        newScore += " wins !";

        
        
        document.querySelector(".player2 strong").innerText = newScore;
    }else{
        drawsTillNow += 1;
        newScore = drawsTillNow;
        newScore = newScore.toString();
        newScore += " draws !";

        document.querySelector(".draw strong").innerText = newScore;
    }
    // console.log(player2ScoreTillNow);
}