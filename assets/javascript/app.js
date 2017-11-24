$(document).ready(function(){
    // making sure my JS is linked to html
console.log('hi!');
// ARRAYS
    // questions (5-7)
    var questionArray =[{
        "Question":"If you order 'Escamole' tacos while in Mexico what will your server bring you?",
        "A":"Tacos smothered in a tangy sauce",
        "B":"Tacos filled with ant larve",
        "C":"Tacos made with fish eggs",
        "D":"Tacos filled with fermented cactus paddles",
        "Answer":"B"
    }, {
        "Question":"What does the Ukranian dish 'Salo' consist of?",
        "A":"Beets and sour cream",
        "B":"Chicken stuffed with dried fish",
        "C":"Beef and pork patties swimming in vinegar",
        "D":"Aged slabs of sliced on rye bread",
        "Answer":"D"
    }, {
        "Question": "What is the secret ingredient in the Korean dish 'Boshitang'?",
        "A":"Lots of Kimchi",
        "B":"The eye of a young cow",
        "C":"The meat of a small dog",
        "D":"The mold from old soy beans",
        "Answer":"C"
    }, {
        "Question": "What surprising part of the Moose do the Canadians turn into a jelly?",
        "A":"The knuckle.",
        "B":"The antlers",
        "C":"The nose",
        "D":"The heart",
        "Answer":"C"
    }, {
        "Question":"What insect first eaten under duress has become a staple in the diet of many Cambodians?",
        "A":"Deep-fried tarantulas",
        "B":"Smoked horse-flies",
        "C":"Roasted Grasshoppers",
        "D":"Fried earth-worms",
        "Answer":"A"
    }];
    // answers (4 for each question, one correct and 3 bluffs or T/F)

// need a start button for game
    // like to put this in the questionDisplay initially
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

    // option to restart the game is given this should go in the question display area
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
        









