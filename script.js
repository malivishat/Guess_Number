'use strict';
//displayMessage

//Some variable that are used in DOM
let randomNum = Math.trunc(Math.random() * 20) + 1;
let Yscore = 20;
let highestScore = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}



//DOM Start
// when we are clicking on check button
document.querySelector('.btnB').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when no number inside the guessbox or number more than 20
    if (!guess) {
        // document.querySelector('.message').textContent = "⛔ No Number!";
        displayMessage("⛔ No Number!");
    } else if (guess > 20) {
        // document.querySelector('.message').textContent = "⭕ Incorrect Number!";
        displayMessage("⭕ Incorrect Number!");

        // player win the game
    } else if (randomNum === guess) {
        // document.querySelector('.message').textContent = "🎉 Correct guess!!!";
        displayMessage("🎉 Correct guess!!!");
        document.querySelector('.number').textContent = randomNum;
        document.querySelector('body').style.backgroundColor = 'rgb(99, 185, 99)'
        document.querySelector('.number').style.width = '8rem'

        // highest score of that player
        if (Yscore > highestScore) {
            document.querySelector('.Hscore').textContent = Yscore;
        }

        //when score is not same as guess 
    } else if (guess !== randomNum) {
        if (Yscore > 1) {
            //document.querySelector('.message').textContent = guess > randomNum ? "📈 Too high!" : "📉 Too low!"
            displayMessage(guess > randomNum ? "📈 Too high!" : "📉 Too low!");
            Yscore--;
            document.querySelector('.score').textContent = Yscore;
        } else {
            // document.querySelector('.message').textContent = "💥 you lost game!"
            displayMessage("💥 you lost game!");
            document.querySelector('body').style.backgroundColor = 'rgb(160, 55, 41)'
            document.querySelector('.score').textContent = 0;
        }
    }

    //     //when guess is too high        
    // } else if (randomNum < guess) {
    //     if (Yscore > 1) {
    //         document.querySelector('.message').textContent = "📈 Too high!"
    //         Yscore--;
    //         document.querySelector('.score').textContent = Yscore;
    //     } else {
    //         document.querySelector('.message').textContent = "💥 you lost game!"
    //         document.querySelector('body').style.backgroundColor = 'rgb(160, 55, 41)'
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     //when guess is too low
    // } else if (randomNum > guess) {
    //     if (Yscore > 1) {
    //         document.querySelector('.message').textContent = "📉 Too low!"
    //         Yscore--;
    //         document.querySelector('.score').textContent = Yscore;
    //     } else {
    //         document.querySelector('.message').textContent = "💥 you lost the game!"
    //         document.querySelector('body').style.backgroundColor = 'rgb(160, 55, 41)'
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }

});

//when we are clicking on again button 
document.querySelector('.btnA').addEventListener('click', function() {
        randomNum = Math.trunc(Math.random() * 20) + 1;
        Yscore = 20;
        document.querySelector('body').style.backgroundColor = 'rgb(20, 24, 20)';
        document.querySelector('.number').style.width = '10rem'
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        // document.querySelector('.message').textContent = "🙃 Start Guessing...";
        displayMessage("🙃 Start Guessing...");
        document.querySelector('.score').textContent = Yscore;
    })
    //DOM End