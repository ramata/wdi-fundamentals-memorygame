

var cardOne= "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*if (cardOne === cardFour) {
	alert('You found a match!');
} else {
	      alert('Sorry, try again.');
}	     
if (cardOne === cardTwo) {
	     alert('You found a match!');
} else {
	      alert('Sorry, try again.');
}	      

if ( cardFour === cardThree) {
          alert('You found a match!');    
 } else {
	      alert('Sorry, try again.');
}	       
if ( cardTwo === cardThree) {
 	       alert('You found a match!');
} else {
	      alert('Sorry, try again.');
}*/
var createBoard = function(){
	for (var i= 0; i<4; i++){
		var card = document.createElement('div');
		card.className = 'card';
		document.getElementsByClassName('board')[0].appendChild(card);
		}	
}

var gameBoard = document.getElementById('game-board'); 
createBoard();
