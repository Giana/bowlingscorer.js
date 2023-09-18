// Author: Giana - github.com/Giana

function getStrikeScore(game, index, framesLen) {
    var score = game[index];

    // Scenario 1: Not the last frame
    if(framesLen < 9) {
        score += game[index + 2];
       // Scenario 1.1: Bonus is a strike
       if(game[index + 2] == 10) {
          score += game[index + 4];
       // Scenario 1.2: Bonus is not a strike
       } else {
          score += game[index + 3];
       }
    // Scenario 2: Last frame
    } else {
        score += game[index + 1] + game[index + 2];
    }

    return score;
}

function getSpareScore(game, index) {
    return game[index + 1] + game[index + 2];
}

function scoreGame(game) {
   var score = 0;
   var frames = [];
   var i = 0;

   while(i < game.length) {
       // Scenario 1: Not the last frame
       if(frames.length < 9) {
           // Scenario 1.1: All 10 pins with one ball
           if(game[i] === 10 || game[i + 1] === 10) {
               // Scenario 1.1.1: Strike
               if(game[i] === 10) {
                   var strikeScore = getStrikeScore(game, i, frames.length);
                   var newFrame = [strikeScore, 0];
                   frames.push(newFrame);
               // Scenario 1.1.2: Spare
               } else {
                   var spareScore = getSpareScore(game, i);
                   var newFrame = [game[i], spareScore];
                   frames.push(newFrame);
               }
           // Scenario 1.2: Not all 10 pins with one ball
           } else {
               // Scenario 1.2.1: Spare
               if((game[i] + game[i + 1]) === 10) {
                   var spareScore = getSpareScore(game, i);
                   var newFrame = [game[i], spareScore];
                   frames.push(newFrame);
               // Scenario 1.2.2: No spare
               } else {
                  var newFrame = [game[i], game[i + 1]];
                  frames.push(newFrame);
               }
           }
          i += 2;
       // Scenario 2: Last frame
       } else {
           // Scenario 1.1: All 10 pins with one ball
           if(game[i] === 10 || game[i + 1] === 10) {
               // Scenario 1.1.1: Strike
               if(game[i] === 10) {
                   var strikeScore = getStrikeScore(game, i, frames.length);
                   var newFrame = [strikeScore, 0];
                   frames.push(newFrame);
               // Scenario 1.1.2: Spare
               } else {
                   var spareScore = getSpareScore(game, i);
                   var newFrame = [game[i], spareScore];
                   frames.push(newFrame);
               }
           // Scenario 1.2: Not all 10 pins with one ball
           } else {
               // Scenario 1.2.1: Spare
               if((game[i] + game[i + 1]) === 10) {
                   var spareScore = getSpareScore(game, i);
                   var newFrame = [game[i], spareScore];
                   frames.push(newFrame);
               // Scenario 1.2.2: No spare
               } else {
                  var newFrame = [game[i], game[i + 1]];
                  frames.push(newFrame);
               }
           }

           break;
       }
   }

   // Get total score
   while(frames.length > 0) {
      var curFrame = frames.shift();
      while(curFrame.length > 0) {
         score += curFrame.shift();
      }
   }

   return score;
}

var input = prompt("\nWelcome to bowlingscorer.js\n\nEnter a game of bowling separated by commas\n\nExample: 7,2,10,0,9,1,3,6,8,2,10,0,4,2,6,3,7,3,5,1\n\n");

if(input !== null && input.trim() !== '') {
    var inputGame = input.split(',').map(function(item) {
        return parseInt(item, 10);
    });

    var score = scoreGame(inputGame);

    alert('Input: ' + inputGame + "\n\nScore: " + score);

    console.log('Input: ' + inputGame);
    console.log('Score: ' + score);
}