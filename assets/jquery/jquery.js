// Games functions //
// Make variables for the wins/losses, for the amount that each rupee is worth, the target amount of points, the amount that you have guessed so far //
// Make an on keyup event to start the game and make that key enter //
// When enter is pressed, game starts and a random amount is chosen by the computer using Math.floor(Math.random) function and it is displayed inside of the target points area of the page. //
// make on('click') events for the row of rupee images so that when they are clicked their point value is added to 'your points section' //
// make if/else statements to make sure the game keeps on running as long as you have not met or surpassed the amount that was chosen by the computer //
// make an if/else statement to state that you win when you meet the number that is in the target area //
// make an if/else statement to state that you lost when you go over the amount in the target area //
// make a list of variables that the game will revert back too when the goal of wins or losses is met //

$(document).ready(function () {
    var userChoice = 0;
    var computerChoice = Math.floor(Math.random() * 121) + 19;
    var green = Math.floor(Math.random() * 12) + 3;
    var red = Math.floor(Math.random() * 12) + 3;
    var blue = Math.floor(Math.random() * 12) + 3;
    var purple = Math.floor(Math.random() * 12) + 3;
    var wins = 0;
    var losses = 0;

    function reset() {
        userChoice = 0;
        computerChoice = Math.floor(Math.random() * 101) + 19;
        green = Math.floor(Math.random() * 9) + 3;
        red = Math.floor(Math.random() * 9) + 3;
        blue = Math.floor(Math.random() * 9) + 3;
        purple = Math.floor(Math.random() * 9) + 3;

    };


    function isWin() {
        if (userChoice === computerChoice) {
            userChoice = 0;
            reset();
            wins++;
            $('.wins').html('<h1>' + wins + '</h1>');
            $('.computer').html('<h1>' + computerChoice + '</h1>');

        }

        if (computerChoice < userChoice) {
            userChoice = 0;
            reset();
            losses++;
            $('.losses').html('<h1>' + losses + '</h1>');
            $('.computer').html('<h1>' + computerChoice + '</h1>');


        }
    };


    $('.computer').html('<h1>' + computerChoice + '</h1>');

    $('.green').on('click', function () {
        userChoice = userChoice + green;
        $('.userAmount').html('<h1>' + userChoice + '</h1>');
        isWin();
        console.log(userChoice);
    });

    $('.red').on('click', function () {
        userChoice = userChoice + red;
        $('.userAmount').html('<h1>' + userChoice + '</h1>');
        isWin();
        console.log(userChoice);
    });

    $('.blue').on('click', function () {
        userChoice = userChoice + blue;
        $('.userAmount').html('<h1>' + userChoice + '</h1>');
        isWin();
        console.log(userChoice);
    });

    $('.purple').on('click', function () {
        userChoice = userChoice + purple;
        $('.userAmount').html('<h1>' + userChoice + '</h1>');
        isWin();
        console.log(userChoice);
    });













});