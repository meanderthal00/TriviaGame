$(document).ready(function(){
    // making sure my JS is linked to html
console.log('hi!');
// ARRAYS
    // questions (5-7)  
      // answers (4 for each question, one correct and 3 bluffs)
    var questionArray =[{
        question:"If you order 'Escamole' tacos while in Mexico what will your server bring you?",
        choices:[
        "Tacos smothered in a tangy sauce",
        "Tacos filled with ant larve",
        "Tacos made with fish eggs",
        "Tacos filled with fermented cactus paddles"],
        correctAnswer:1
         
        // [1]
    }, {
        question:"What does the Ukranian dish 'Salo' consist of?",
        choices:[
        "Beets and sour cream",
        "Chicken stuffed with dried fish",
        "Beef and pork patties swimming in vinegar",
        "Aged slabs of sliced on rye bread"],
        correctAnswer: 3
        // [3]
    }, {
        question: "What is the secret ingredient in the Korean dish 'Boshitang'?",
        choices:[
        "Lots of Kimchi",
        "The eye of a young cow",
        "The meat of a small dog",
        "The mold from old soy beans"],
        correctAnswer: 2
        // [2]

    }, {
        question: "What surprising part of the Moose do the Canadians turn into a jelly?",
        choices:[
        "The 'knuckle'.",
        "The antlers",
        "The nose",
        "The heart"],
        correctAnswer: 2
        // [2]
    }, {
        question:"What insect first eaten under duress, has become a staple in the diet of many Cambodians?",
        choices:[
        "Deep-fried tarantulas",
        "Smoked horse-flies",
        "Roasted Grasshoppers",
        "Grilled earth-worms"],
        correctAnswer: 0
        // [0]
    }];


    $("#questionDisplay").replaceWith(questionArray.question)
    $.each(questionArray, function (index, value){
        console.log(value);
    })

    // for (i=0; i < questionArray.length; i++ ){
    //     for (j=0; j <questionArray [i].length; j++){
    //         console.log(questionArray [i] [j] [0] + " is a " + questionArray [i] );
    //     }
    // }
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
        









