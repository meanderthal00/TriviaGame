$(document).ready(function(){
    // making sure my JS is linked to html
console.log('hi!');
// ARRAYS
    // questions (5-7)
    // answers (4 for each question, one correct and 3 bluffs)

// need a start button for game
// question is displayed
// timer starts
// answers are displayed
    // on.click for each answer is needed
    // needs to have ability to check 
        // CORRECT
        // victory image/sounds (5 seconds)
        // updates right answer
            // INCORRECT
            // defeat image/sound (5 seconds)
            // updates wrong answer
                // TIMES OUT
                // too slow image/sound (5 seconds)
                // updates wrong answer
                        // TIMER RESETS
// next question set is displayed and the above functions are replayed
// AT END
    // number of right/wrong are displayed maybe a message based on performance.

    // option to restart the game is given
        // AT RESET
        // totals reset to 0
        // questions are reloaded
        // timer resets

// creating the count down timer.
var count =16;

var counter =setInterval(timer, 1000);
function timer()
{
    count=count-1;
    if (count <= -1)
    {
        clearInterval(counter);
        return;
    }
    document.getElementById("timerDisplay").innerHTML=count + " secs";
}

});
        









