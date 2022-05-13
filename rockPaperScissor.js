let [computer_score,user_score]=[0,0];
let result = document.getElementById("result");
let possible_choices = {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose'
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win'
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw'
    }
}

function checkResult(input)
{
    var choices = ["rock", "paper", "scissor"];
    var num = Math.floor(Math.random()*3);
    document.getElementById("computer").innerHTML = `Computer choose <span> ${choices[num].toUpperCase()} </span>`;
    document.getElementById("user").innerHTML = `You choose <span> ${input.toUpperCase()} </span>`;

    let computer = choices[num];
    switch(possible_choices[input][computer]){
        case 'win':
            result.style.cssText = "background-color: #cefdce; color: #689f38";
            result.innerHTML = "YOU WIN";
            user_score++;
            break;
        case 'lose':
            result.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result.innerHTML = "YOU LOSE";
            computer_score++;
            break;
        case 'draw':
            result.style.cssText = "background-color: #e5e5e5; color: #808080";
            result.innerHTML = "DRAW";
            break;
    }
    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}