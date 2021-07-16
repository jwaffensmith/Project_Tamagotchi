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
        game.gameSetup ();
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
        if (game.time === 10) {
            game.age++;
            $plantAge.text(`AGE: ${game.age}`);
            $("#plant-one").hide();
            $("#plant-two").show();
        } else if (game.time === 20) {
            game.age++;
            $plantAge.text(`AGE: ${game.age}`);
            $("#plant-two").hide();
            $("#plant-three").show();
        } else if (game.time === 30) {
            game.age++;
            $plantAge.text(`AGE: ${game.age}`);
            $("#plant-three").hide();
            $("#plant-four").show();
        } else if (game.time === 40) {
            game.age++;
            $plantAge.text(`AGE: ${game.age}`);
        } else if (game.age === 5) {
            $("#win").show();
            $(".icons").attr("disabled", true);
            clearInterval(game.timer); 
        }    
       if (game.time % 3 === 0 && game.water > 0 && game.light > 0) {
            game.water--;
            $waterLevel.text(`WATER: ${game.water}`);
            game.light--;
            $lightLevel.text(`LIGHT: ${game.light}`);
        } else if (game.time % 4 === 0 && game.nutrients > 0) {
            game.nutrients--;
            $nutrientLevel.text(`NUTRIENTS: ${game.nutrients}`);
        }
        if (game.nutrients === 0 || game.water === 0 || game.light === 0) {
            $("#plant-one").hide();
            $("#plant-two").hide();
            $("#plant-three").hide();
            $("#plant-four").hide();
            $("#dead-plant").show();
            $("#lose").show();
            $(".icons").attr("disabled", true);
            clearInterval(game.timer);
        } 
        
},
    gameSetup () {
        game.name = $("#name").val();
        $("#nametag").text(`${game.name}'s Health Meter`);
        $("#lose").text(`${game.name} didn't survive. Game Over.`);
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
    
  resetGame () {
    location.reload(true)
},

};

$(".welcome-button").on("click", game.startGame);
$("#nutrient-button").on("click", game.nutrientButton);
$("#water-button").on("click", game.waterButton);
$("#light-button").on("click", game.lightButton);
$("#reset-button").on("click", game.resetGame);

