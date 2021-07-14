console.log("hello!");

const game = {
    nutrients: 3,
    water: 3,
    light: 3,
    timer: null,
    age: 1,
    
    startGame (event) {

        $("#nutrient-level").text(`NUTRIENTS: ${game.nutrients}`);
        $("#water-level").text(`WATER: ${game.water}`);
        $("#light-level").text(`LIGHT: ${game.light}`);
        $("#age").text(`AGE: ${game.age}`);

        //const $growingPlant = $("#plant");
        const $plantGrowth = $("#plant");
        $plantGrowth.attr("src", "https://www.animatedimages.org/data/media/595/animated-plant-image-0119.gif", "alt='animated growing plant'");

        const $plantName = prompt("This seed needs some love! Please give it food, water and light so it can grow into the plant it's always wanted to be! First, give your plant a name!", "Type Plant Name Here");
        if ($plantName !== null)   {
        $("#nametag").text(`Hi, I’m ${$plantName}!`);
        };
        // TODO change prompt method and link timer to reset on the onclick, image resets to seed 
  },
  
};

$("#start-button").on("click", game.startGame);



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