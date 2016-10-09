function grabbing(){ // declaring it
	// could do something if i wanted it to, but now it's just a holder.  
	alert("rock grabbed");
} // shouldn't do anything if never called. 

/* ------- USE 3 DIFFERENT FUNCTIONS, BUT NO NEED TO NAME THEM (ANONYMOUS) -----------*/
document.getElementById("rock-btn").addEventListener("click",function(){
	var r = 'rock'; 
	// console.log(r); // YAY it's listening!

	// declaring a variable here, so i can pass it through the computerChoice function
	// bc i can't do this: 	determineWinner(r,computerChoice(););

	var c = computerChoice();
	var winner = determineWinner(r,c);

	showResults(r,c);
	updateScore(); // maybe i can't just call a function.  need to assign it to a variable to run?  because this alone is not running.  


});

document.getElementById("paper-btn").addEventListener("click",function(){
	var p = 'paper'; 
	// console.log(p); // YAY it's listening!

	var c = computerChoice();
	var winner = determineWinner(p,c);

	showResults(p,c);
	updateScore();

});

document.getElementById("scissors-btn").addEventListener("click",function(){
	var s = 'scissors'; 
	// console.log(s); // YAY it's listening!

	var c = computerChoice();
	var winner = determineWinner(s,c);

	showResults(s,c);
	updateScore();
});
/* ------- ---------------------------------------- -----------*/

function computerChoice() {  // use a condition 'scenario holder' to output a random number
	// starting to use some random number to do a math operation.  need to define it, otherwise it's misc and out of place.  like an item in the store without a price tag.  no way to track it later.  no way for the database (computer) to know that it exists.  
	var x = Math.random();
	if (x < 0.3333) { // made sure it worked with an alert
		/* return 'Computer picked rock'; // then changed it to a return, but need to to be value/string that i can compare */
		return 'rock'; // hence this
	}
	else if (x < 0.6666) {
		/* return 'Computer picked paper'; */
		return 'paper'; 
	}
	else {
		/* return 'Computer picked scissors'; */
		return 'scissors'; 
	}
}

//COMPARE THE TWO STRING VALUES OF userPick and compPick (one is local and one is global btw!)
// use condition 'scenario holder' 
// it's gonna need some parameters.  
// declare them for the first time within this function, for use in this function. 
function determineWinner(userPick, compPick) { // DOES THIS ACTUALLY DECLARE THESE PARAMETERS AS VARIABLES?  or not, because this is just a holder??  
	// btw comparing userPick and compPick here won't work because userPick is local to the 3 initial click functions.  need to put this function up into those instead. 

	if (userPick == compPick) {
		userWins += 1; // >> then add a point to the user
		compWins += 1; // >> then add a point to the comp

	// the three scenarios where user wins
	} else if ( userPick == 'rock' && compPick == 'scissors' ) {
		/* return 'YOU win!'; // can only have one return/alert per output?!? 
			i.e. when i had this and the next addition line, addition didn't work.  */
		userWins += 1; // >> then add a point to the user
	} else if ( userPick == 'paper' && compPick == 'rock' ) { 
		/* return 'YOU win!'; // can only have one return/alert per output?!? 
		i.e. when i had this and the next addition line, addition didn't work.  */
		userWins += 1; // >> then add a point to the user
	} else if ( userPick == 'scissors' && compPick == 'paper' ) { 
		/* return 'YOU win!'; // can only have one return/alert per output?!? 
		i.e. when i had this and the next addition line, addition didn't work.  */
		userWins += 1; // >> then add a point to the user

	} else { // in all other cases, the computer wins
		compWins += 1; // >> then add a point to the computer
	}

	// in order to see this 'on click' need to plug this function back up into the initial click function.  won't really need to use userPick variable again bc each click function has its own variable that represents the user's Choice.  

} // so this function is just a holder so i can pass my own arguments through!!


// knowing that a value needs to STORE THE NUMBER OF WINS, assign a VALUE to something.
var userWins = 0;
var compWins = 0;


// setup a function (to pass through the initial click function) that SHOWS THE RESULTS on screen, instead of an alert
function showResults (u,c) {
	document.getElementById('results').innerHTML = 'You picked <h2>' + u + '</h2> and the I, the Computer, picked <h2>' + c + '</h2>So guess who won?';
	// option of putting the results in a variable too. 
}


// to UPDATE THE SCOREBOARD, need to add 1 to the value of an html element.  
// pass two parameters i.e. the scores
// each of these scores should be a function than adds 1 to the value of an html element.
// this one can contain three anonymous functions
function updateScore () { // btw typing only 'updateScore' in the console returns everything in here e.g. echos it.  must add ();

	document.getElementById('user-score').innerHTML = userWins;
	document.getElementById('computer-score').innerHTML = compWins; 

	// test: see if it adds up
	console.log(userWins, compWins);
} // need to pass this back into click function


// ADD TRASH TALK


// BEST OF 5

