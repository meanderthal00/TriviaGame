$(document).ready(function () {
    // making sure my JS is linked to html
    // console.log('hi!');
    // ARRAYS
    // questions (5-7)  
    // answers (4 for each question, one correct and 3 bluffs)
   


    // $("#questionDisplay").replaceWith(questionArray.question)
    // $.each(questionArray, function (index, value){
    //     console.log(value);
    // });

    // $("#questionDisplay").html("<b>" + questionArray[0]+ "</b>" );
    // console.log(questionArray[0]);

    // $("#questionDisplay").html(questionArray.question1);
    // $("#button1").html(questionArray.question1.choices1[0]);
    // console.log(questionArray.question1.choices1);
    // $("#button").html(questionArray.question1.choices1[1]);
    // $("#button1").html(questionArray.question1.choices1[2]);
    // $("#button1").html(questionArray.question1.choices1[3]);


    // document.getElementById("questionDisplay").innerHTML =questionArray[0];


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
    var count = 16;
    var intervalId;

    var counter = setInterval(1000);
    var counterRun = false;

    var gameTimer = {
        timer: function () {
                    count = count - 1;
                    if (count <= -1) {
                        clearInterval(counter);
                        return;
                    }
            document.getElementById("timerDisplay").innerHTML = count + " secs";
        },

        start: function () {
            if (!counterRun) {
                intervalId = setInterval(gameTimer.timer, 1000);
                    counterRun = true;
            }
        },


       
        // start the timer function refrence wk5 act 10 line 38
        
    }
});


var counter = 0;
$(document).on("click", "#start", function(){
    console.log("HELLO");
    counter ++;
    $("#questionDisplay").html(questionArray[counter].question);
},
     questionArray = [{
        question1: {
            question:
            "If you order 'Escamole' tacos while in Mexico what will your server bring you?",
            choices1: {
                choicesArray:
                ["Tacos smothered in a tangy sauce",
                    "Tacos filled with ant larve",
                    "Tacos made with fish eggs",
                    "Tacos filled with fermented cactus paddles"
                ],
                correctAnswer1: 
                    1
                
            }
        }

    }, {
        question2: {
            question:
            "What does the Ukranian dish 'Salo' consist of?",
            choices2: {
                choicesArray:
                ["Beets and sour cream",
                    "Chicken stuffed with dried fish",
                    "Beef and pork patties swimming in vinegar",
                    "Aged slabs of sliced on rye bread"
                ],
                correctAnswer2: 
                    3
                    // [3]
                }
            }
        },{
    
        question3: {
            question:
            "What is the secret ingredient in the Korean dish 'Boshitang'?",
            choices3: {
                choicesArray:
                [
                    "Lots of Kimchi",
                    "The eye of a young cow",
                    "The meat of a small dog",
                    "The mold from old soy beans"
                ],
                correctAnswer3: 
                    2
                    // [2]
                }
            }
        

    }, {
        question4: {
            question: "What surprising part of the Moose do the Canadians turn into a jelly?",
            choicesArray: [
                    "The 'knuckle'.",
                    "The antlers",
                    "The nose",
                    "The heart"
                ],
                correctAnswer4: 2
                    // [2]
                } 
            },
         {       
                question5: {
                    question: "What insect first eaten under duress, has become a staple in the diet of many Cambodians?",
                    choicesArray: 
                        [
                            "Deep-fried tarantulas",
                            "Smoked horse-flies",
                            "Roasted Grasshoppers",
                            "Grilled earth-worms"
                        ],
                        correctAnswer5:
                            0
                            // [0]
            }
        }
]);
