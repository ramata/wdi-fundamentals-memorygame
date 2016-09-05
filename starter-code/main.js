

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
var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

var isMatch = function(cardsInPlay) {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		var cards = document.getElementsByClassName("card");
		
		for (var i = 0; i < cards.length; i++) {
			cards[i].innerHTML = "";
		}
	}

}

var isTwoCards = function() {
	if(this.getAttribute("data-card") === 'queen') {
		this.innerHTML = '<img src="../queen.png">';
	} else {
		this.innerHTML = '<img src="../king.png">';
	}

	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);

		cardsInPlay = [];
	}
}

var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
		var card = document.createElement('div');
		card.className = 'card';
		document.getElementsByClassName('board')[0].appendChild(card);
		
		card.setAttribute('data-card', cards[i]); 
		
		card.addEventListener('click', isTwoCards);
	}
}

var gameBoard = document.getElementById('game-board'); 

createBoard();

