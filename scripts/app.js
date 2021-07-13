console.log("hello!");

const game = {
    Nutrients:3,
    Water: 3,
    Light: 3,
    Timer: null,
    Age: null,
   // needed? name: “”, 

};


/*
Pseudo code/Milestones 
Basic HTML- see wireframes
Basic CSS 
Four event listeners- start/reset button and metrics 
Progress bar- html tag and .value in jquery 
Submit form
Name input and append to h1 tag
Pop up boxes for winning after 4 days or losing if a value goes to 0
3 minute game with each day as 45 seconds 
Plant will morph and age will change up each day, .text to main tag
Values drop every 5-10 seconds
When light button is clicked the page gets brighter (css filter) 
1 click is one point for each button 
Object based programming with methods

Method for start/reset
- pops up name input
- Values default to 3
- Timer resets after submit form

Method for timer
- begins at begin/reset button 
- points decrease 
- Age increase by one (.text)
- pic changes as days increase by one (img .text? 4 images)
- CSS- image moves around page 
- When pet dies or pet reaches 4 days, time stops 
- pop up message for winning after 4 days

Method for metric buttons 
- increase by one
- Light will turn page brighter for x seconds

Method end of game 
- if one value reaches 0 
- Pop up message game over
- Dead plant img 

*/