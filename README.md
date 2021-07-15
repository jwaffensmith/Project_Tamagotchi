# Project_Tamagotchi

Wireframes: https://app.moqups.com/mcvPgjsUfn/view/page/a2be0b49a

User Stories:

1.  On the beginning screen, the user is prompted to enter a name of their choice for the seed image.
 
2. When the user clicks play, the user's input value will be added to a hidden h1 tag and to hidden elements containing the winning and losing messages. The div element containing the first page contents will hide and the main div element containing the game screen will appear. A growing plant image will appear in the middle of the screen.
 
3. The header of the page contains the h1 tag with the user's input from the previous page. The header also contains metrics for the plant's water level, nutrient level and light level. Each level is set at a default of 3 and will increase and decrease in increments of 1 on a scale of 0-10. 
 
4. An asynchronous timer will decrease light and water metric levels by 1 every 2 seconds and decrease the nutrient level by 1 every 3 seconds. The plant’s age will increase by 1 every x seconds if all levels stay greater than 0. When the plant ages to 2, 3 and 4, a new plant image will appear for each age.
 
5. At the bottom of the page there are 3 buttons the user can interact with to keep the plant alive: a watering can to give it water, plant food to give it nutrients, and sun to give it light. Each time the user clicks the plant food, watering can and sun buttons, the value of their corresponding metric will increase by 1.
 
6. If the plant reaches age 5, a hidden div element will appear notifying the user that they won. The asynchronous timer will stop and the metric buttons will disable.
 
7. If any metric level hits 0 before age 5, a wilted plant image appears and a hidden div message will appear notifying the user that their plant did not survive and the game is over. The asynchronous timer will stop and the metric buttons will disable.
 
8. When the user clicks the reset button located in the header, the game will reload, bringing the user back to the beginning screen.

Credits: All button icons are sourced from https://www.flaticon.com

Plant gifs are sourced from https://www.animatedimages.org
