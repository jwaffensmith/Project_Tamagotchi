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

        game.gameTimer();

        // TODO change prompt method to a hidden element, image resets to seed 
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

gameTimer () {
        game.timer = setInterval(this.gameTimer, 1000); 
        if (game.timer === 10) {
            game.age++;
            $plantAge.text(`AGE: ${game.age} Days`);
            $plantGrowth.attr("src", "https://www.animatedimages.org/data/media/595/animated-plant-image-0097.gif", "alt='animated flower'");
        } else if (game.timer === 20) {
            game.age++;
            $plantAge.text(`AGE: ${game.age} Days`);
            $plantGrowth.attr("src", "https://www.animatedimages.org/data/media/595/animated-plant-image-0114.gif", "alt='animated flower'");
        } else if (game.timer === 30) {
            game.age++;
            $plantAge.text(`AGE: ${game.age} Days`);
            $plantGrowth.attr("src", "https://www.animatedimages.org/data/media/595/animated-plant-image-0076.gif", "alt='animated flower'");
        }
        if (game.timer % 5 === 0 && game.nutrients > 0 && game.water > 0 && game.light > 0) {
            game.nutrients--;
            $nutrientLevel.text(`NUTRIENTS: ${game.nutrients}`);
            game.water--;
            $waterLevel.text(`WATER: ${game.water}`);
            game.light--;
            $lightLevel.text(`LIGHT: ${game.light}`);
        }
        if (game.nutrients === 0 || game.water === 0 || game.light === 0) {
            $plantGrowth.attr("src", "https://www.animatedimages.org/data/media/595/animated-plant-image-0115.gif", "alt='animated flower'");
        }
    },
};


$("#start-button").on("click", game.startGame);
$("#nutrient-button").on("click", game.nutrientButton);
$("#water-button").on("click", game.waterButton);
$("#light-button").on("click", game.lightButton);