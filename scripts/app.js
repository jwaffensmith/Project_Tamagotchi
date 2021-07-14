console.log("hello!");

const $nutrientLevel = $("#nutrient-level");
const $waterLevel = $("#water-level");
const $lightLevel = $("#light-level");
const $plantAge = $("#age");
const $plantGrowth = $("#plant");

const game = {
    nutrients: 3,
    water: 3,
    light: 3,
    timer: null,
    age: 1,
    
    startGame (event) {
        $nutrientLevel.text(`NUTRIENTS: ${game.nutrients}`);
        $waterLevel.text(`WATER: ${game.water}`);
        $lightLevel.text(`LIGHT: ${game.light}`);
        $plantAge.text(`AGE: ${game.age} Day`);
        $plantGrowth.attr("src", "https://www.animatedimages.org/data/media/595/animated-plant-image-0119.gif", "alt='animated growing plant'");

        const $plantName = prompt("This seed needs some love! Please give it food, water and light so it can grow into the plant it's always wanted to be! First, give your plant a name!", "Type Plant Name Here");
        if ($plantName !== null)   {
        $("#nametag").text(`Hi, I’m ${$plantName}!`);
        };

        // TODO change prompt method and link timer to reset on the onclick, image resets to seed 
  },
    nutrientButton (event) {
        if (game.nutrients > 1 && game.nutrients < 10 ) {
        game.nutrients++;
        $nutrientLevel.text(`NUTRIENTS: ${game.nutrients}`);
        } else if (game.nutrients < 1) {
        return "Game Over";
    }
  },

    waterButton (event) {
    if (game.water > 1 && game.water < 10 ) {
        game.water++;
        $waterLevel.text(`WATER: ${game.water}`);
        } else if (game.water < 1) {
        return "Game Over";
    }
},
    lightButton (event) {
        if (game.light > 1 && game.light < 10 ) {
            game.light++;
            $lightLevel.text(`LIGHT: ${game.light}`);
            } else if (game.light < 1) {
            return "Game Over";
        }
},

};

$("#start-button").on("click", game.startGame);
$("#nutrient-button").on("click", game.nutrientButton);
$("#water-button").on("click", game.waterButton);
$("#light-button").on("click", game.lightButton);




/*
Milestones 

Method for timer
- begins at begin/reset button 
- A day is worth x second/minutes, 4 rounds
- Values drop by 1 every x seconds
- Age increase by one (.text)
- Plant will morph and age after each day
- CSS- image moves around page 
- When pet dies or pet reaches 4 days, time stops 
- pop up message for winning after 4 days

Method for metric buttons 
- increase by one per click 
- When light button is clicked the page gets brighter for x seconds (css filter) 
- Pop up boxes/elements for winning after 4 days or losing if a value goes to 0
- Progress bar- html tag and .value in jquery 

Method end of game 
- if one value reaches 0 
- Pop up message game over
- Dead plant img 
    
*/