console.log("hello!");

const $nutrientLevel = $("#nutrient-level");
const $waterLevel = $("#water-level");
const $lightLevel = $("#light-level");
const $plantAge = $("#age");
const $plantGrowth = $("#plant-one");

const game = {
    nutrients: 3,
    water: 3,
    light: 3,
    timer: null,
    time: 0,
    age: 1,
    name: "",
    metrics: null,
    
    startGame (event) {
        game.name = $("#name").val();
        $("#nametag").text(`Hi, I'm ${game.name}!`);
        $("#lose").text(`${game.name} didn't survive. Game Over`);
        $("#win").text(`${game.name} is thriving. You win!`);
        $("#main-screen").show();
        $("#welcome-screen").hide();
        $nutrientLevel.text(`NUTRIENTS: ${game.nutrients}`);
        $waterLevel.text(`WATER: ${game.water}`);
        $lightLevel.text(`LIGHT: ${game.light}`);
        $plantAge.text(`AGE: ${game.age}`);
        $plantGrowth.attr("src", "https://www.animatedimages.org/data/media/595/animated-plant-image-0119.gif", "alt='animated growing plant'");
        game.gameTimer();
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
},
gameMetrics () {
        game.time++;
        if (game.time === 5) {
            game.age++;
            $plantAge.text(`AGE: ${game.age}`);
            $("#plant-one").hide();
            $("#plant-two").show();
        } else if (game.time === 10) {
            game.age++;
            $plantAge.text(`AGE: ${game.age}`);
            $("#plant-two").hide();
            $("#plant-three").show();
        } else if (game.time === 15) {
            game.age++;
            $plantAge.text(`AGE: ${game.age}`);
            $("#plant-three").hide();
            $("#plant-four").show();
        } else if (game.time === 20) {
            game.age++;
            $plantAge.text(`AGE: ${game.age}`);
        } else if (game.age === 5) {
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

$(".welcome-button").on("click", game.startGame);
$("#nutrient-button").on("click", game.nutrientButton);
$("#water-button").on("click", game.waterButton);
$("#light-button").on("click", game.lightButton);
// reset button $("#reset-button").on("click", game.startGame);
