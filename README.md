# Project_Tamagotchi

Wireframes: https://app.moqups.com/mcvPgjsUfn/view/page/a2be0b49a

User Stories:

1. When the user clicks the start/reset button, a submit form will appear in front of the page stating game instructions and an input field to type user's chosen plant name. 

2. The user will click the submit button in the submit form to begin the game. 

3. When the user clicks the submit button, an asynchronous timer that is not visual to the user will begin. 

4. The header of the page will contain an h1 tag of the user’s chosen plant name.

5. The header will also contain metric visuals for the user. The plants age will be to the left of the h1 tag and the start/reset button will be to the right of the h1 tag.

6. Below the h1 tag, there will be a scoreboard, keeping score of the plant’s nutrient level on a scale of 0 to 10, water level on a scale of 0 to 10, and light level on a scale of 0 to 10. Scores default to 3 at the start of the game.

7. The asynchronous timer will decrease metric levels by 1 every x seconds and increase the plant’s age by one day every x seconds/minutes.

10. At the bottom of the page there will be 3 buttons with icons the user can interact with: plant food, watering can to give it water and a sun to give it light. 

11. Each time the user clicks the plant food button, the value of food will increase by 1. 

12. Each time the user clicks the watering can button, the value of water will increase by 1. 

13. When user clicks the light button, the page will become brighter for x seconds through a css filter and the light metric will increase by 1.

14. The plant will be in the main part of the page, growing in size as the days increase.

15. For day 1, the first page, the plant begins as a seedling. 

16. If plant reaches day 2, it becomes a single flower. 

17. If plant reaches day 3, it becomes 3 flowers.

18. If plant reaches day 4, it becomes 5 flowers and user wins! A message will appear saying the user won and the game is over. The timer will stop. 

19. If any metric levels hit 0, the plant dies and a wilted plant will appear with the message, “Uh-oh. Your plant did not survive. Game Over.” The timer will stop.

20. To restart the game, the user will need to click the start/reset button to begin again. The beginning submit form will appear and the user will need to submit a name to begin a new game. 
