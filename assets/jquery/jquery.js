// Games functions //
// Make variables for the wins/losses, for the amount that each rupee is worth, the target amount of points, the amount that you have guessed so far //
// Make an on keyup event to start the game and make that key enter //
// When enter is pressed, game starts and a random amount is chosen by the computer using Math.floor(Math.random) function and it is displayed inside of the target points area of the page. //
// make on('click') events for the row of rupee images so that when they are clicked their point value is added to 'your points section' //
// make if/else statements to make sure the game keeps on running as long as you have not met or surpassed the amount that was chosen by the computer //
// make an if/else statement to state that you win when you meet the number that is in the target area //
// make an if/else statement to state that you lost when you go over the amount in the target area //
// make a list of variables that the game will revert back too when the goal of wins or losses is met //

$(document).ready(function(){
    var userChoice = false;
    var computerChoice = Math.floor(Math.random()*600);
    var green =3;
    var red = 6;
    var blue = 9;
    var purple =12;
    var wins = 0;
    var losses = 0;

    
    $('.computer').html('<h1>' + computerChoice + '</h1>');


    $('.green').on('click', function(){
        $('.userAmount').html('<h1>' + green + '</h1>');
        if (userChoice += 0){
            userChoice = userChoice += green;
        };
        
    });

    $('.red').on('click', function(){
        $('.userAmount').html('<h1>' + red + '</h1>');
        
    });

    $('.blue').on('click', function(){
       
        $('.userAmount').html('<h1>' + blue + '</h1>');
    });

    $('.purple').on('click', function(){
        $('.userAmount').html('<h1>' + purple + '</h1>');
        
    });
});