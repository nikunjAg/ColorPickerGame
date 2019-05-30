var game = {};

game.newColor = document.querySelector('.list-item-1');
game.easyMode = document.querySelector('.list-item-2');
game.hardMode = document.querySelector('.list-item-3');
game.header = document.querySelector('.header');
game.resultText = document.querySelector('.list-item-text');
game.squares = document.querySelectorAll('.square');
game.colors = [];
game.color;

game.init = function() {
    // Reset
    game.reset();

    // Adding event Listener to the NewColor option
    game.newColor.addEventListener('click', ()=>{
        game.reset();
    });

    // Adding Event Listener to the easy Mode btn
    game.easyMode.addEventListener('click', function(){
        if(!game.easyMode.classList.contains('primary-background-color')){
            game.easyMode.classList.add('primary-background-color');
            game.hardMode.classList.remove('primary-background-color');
            document.querySelectorAll('.easy-mode-options').forEach((value) => {
                value.style.display = 'none';
            });
            game.reset();
        }
    });

    // Adding Event Listener To the Hard Mode btn
    game.hardMode.addEventListener('click', function(){
        if(!game.hardMode.classList.contains('primary-background-color')){
            game.hardMode.classList.add('primary-background-color');
            game.easyMode.classList.remove('primary-background-color');
            document.querySelectorAll('.easy-mode-options').forEach((value) => {
                value.style.display = '';
            });
            game.reset();
        }
    });

    // Adding Event Listener to all the squares
    game.squares.forEach((value, index)=> {
        value.addEventListener('click', ()=> {
            if(value.style.backgroundColor === game.colors[game.color]){
                game.header.style.backgroundColor = game.colors[game.color];
                game.squares.forEach((value, index)=> {
                    value.style.backgroundColor = game.colors[game.color];
                });
                game.newColor.innerHTML = 'PLAY AGAIN?';
                game.resultText.innerHTML = 'Correct!';
                game.resultText.style.color = '#54b803';
                game.resultText.classList.remove('hidden');

                // Making the mode change disabled
                game.easyMode.style.display = 'none';
                game.hardMode.style.display = 'none';
            }
            else {
                value.style.backgroundColor = '#232323';
                game.resultText.innerHTML = 'Try Again!';
                game.resultText.style.color = '#fd2525';
                game.resultText.classList.remove('hidden');
            }
        });
    });
}

// Reset Function Make every thing work from scratch
game.reset = function(){

    // Determining the mode
    // And make the colors array

    if(game.easyMode.classList.contains('primary-background-color'))
        game.colors = game.generateRandomColors(3);
    else
        game.colors = game.generateRandomColors(6);

    // pick color to be chosen
    game.color = game.pickColor();

    // Set it to h1
    game.header.getElementsByTagName('h1')[0].textContent = game.colors[game.color];
    game.header.style.backgroundColor = '#5377b9';
    game.newColor.innerHTML = 'NEW COLORS';

    // Hide the resultText
    game.resultText.classList.add('hidden');

    // Assign colors to each square
    game.squares.forEach((value, index)=>{
        value.style.backgroundColor = game.colors[index];
    });

    // Make the mode visible
    game.easyMode.style.display = '';
    game.hardMode.style.display = '';
}

game.pickColor = function(){
    return Math.floor((Math.random() * game.colors.length));
}

game.generateRandomColors = function(n) {
    var colors = [];
    for(var i = 0; i<n; i++){
        // Generating the random colors and pushing them to colors array
        // Format rgb(0, 255, 255)
        colors.push("rgb(" + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ")");
    }
    return colors;
}

game.init();