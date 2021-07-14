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
    time: 0,
    age: 1,
    metrics: null,
    
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

        game.gameTimer();
        

        // TODO change prompt method to a hidden element, image resets to seed 
  },
    nutrientButton (event) {
        if (game.nutrients > 0 && game.nutrients < 10 ) {
            game.nutrients++;
            $nutrientLevel.text(`NUTRIENTS: ${game.nutrients}`);
    }
  },

    waterButton (event) {
    if (game.water > 0 && game.water < 10 ) {
        game.water++;
        $waterLevel.text(`WATER: ${game.water}`);
    }
},
    lightButton (event) {
        if (game.light > 0 && game.light < 10 ) {
            game.light++;
            $lightLevel.text(`LIGHT: ${game.light}`);
        }
},

gameTimer () {
        game.timer = setInterval(this.gameMetrics, 1000); 
        console.log(game.time, "I'm the time!");   
},
gameMetrics () {
        game.time++;
        if (game.time === 5) {
            game.age++;
            $plantAge.text(`AGE: ${game.age} Days`);
            $plantGrowth.attr("src", "https://www.animatedimages.org/data/media/595/animated-plant-image-0097.gif", "alt='animated flower'");
        } else if (game.time === 10) {
            game.age++;
            $plantAge.text(`AGE: ${game.age} Days`);
            $plantGrowth.attr("src", "https://www.animatedimages.org/data/media/595/animated-plant-image-0114.gif", "alt='animated flower'");
        } else if (game.time === 15) {
            game.age++;
            $plantAge.text(`AGE: ${game.age} Days`);
            $plantGrowth.attr("src", "https://www.animatedimages.org/data/media/595/animated-plant-image-0076.gif", "alt='animated flower'");
        } else if (game.time === 20) {
            $("#win").show();
            clearInterval(game.timer); 
        }    
       if (game.time % 5 === 0 && game.nutrients > 0 && game.water > 0 && game.light > 0) {
            game.nutrients--;
            $nutrientLevel.text(`NUTRIENTS: ${game.nutrients}`);
            game.water--;
            $waterLevel.text(`WATER: ${game.water}`);
            game.light--;
            $lightLevel.text(`LIGHT: ${game.light}`);
        }
        if (game.nutrients === 0 || game.water === 0 || game.light === 0) {
            $plantGrowth.attr("src", "https://www.animatedimages.org/data/media/595/animated-plant-image-0115.gif", "alt='animated flower'");
            $("#lose").show();
            clearInterval(game.timer);
        } 
        
},
};

$("#start-button").on("click", game.startGame);
$("#nutrient-button").on("click", game.nutrientButton);
$("#water-button").on("click", game.waterButton);
$("#light-button").on("click", game.lightButton);
