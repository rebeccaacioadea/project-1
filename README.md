![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

## project-1: Grid Game <<< Snake >>>

## Overview 
This is my first ever project at General Assembly as a Software Engineer Immersive course's student.

The aim of this project is to create a grid-game which can be render in the brower by using HTML, CSS and JavaScript.
The player should be able to guide the snake to eat food randomly placed on the game board. 

This project demonstrate my knowledge   after 2 weeks of learning JavaScript.

### Brief:

* Render a game in the browser
* Design logic for winning
* Include separate HTML. CSS or JavaScript files
* Use JavaScript for DOM manipulation 
* Depoly your game online
* Use semantic markup for HTML and CSS (adhere to best practices

### Technologies:

* HTML5
* CSS
* JavaScript
* Git 
* GitHub

## Approach taken:

### The layout of the grid:

* I decided to generate a 20by20 grid for my game using an array of div's. This makes it easier to control and keep track of the position of the food or the snake.

![](https://i.imgur.com/MdCu2A7m.png)


## Functionality: 
* The food is placed randomly on the grid. The first food is placed when the game start, and then it is adding throughout the game whenever the snake eats the food on the grid.


![](https://i.imgur.com/MbSbyMAl.png)

* The snake should be able to eat food to grow bigger/ longer.
* The player should earn points whenever the snake eat the food.
* The game is declear "Game Over!!!" whenever a collision occurs. I had 3 collisions in this game to deal with. 
	1. 	Snake colliding with itself
	2. Snake colliding with the food
	3. Snake colliding with itself

* Snake's speed increases as it eats more food.

![](https://i.imgur.com/QcL2Uwy.png)
![]()

## Snake Movement

The movement of the snake was controlled by using an array to control the position on the snake's head and it's tail on the grid. 
As the snake's head moves right, left, up or down the grid. The snake's tail with a position snakeTailPositionsArray[0] replace the postion of the snake's head 
![](https://i.imgur.com/dqeZucc.png)

![](https://i.imgur.com/CYppHbwl.png)

## Screenshots
![](https://i.imgur.com/n9V3PwJm.png?1)

![](https://i.imgur.com/YE5tutSl.png)

![](https://i.imgur.com/qcH0EAYl.png)

## Potential future features
* Responsive design. Allowing the user to have the same as experience on their mobile phones
* Multi-player mode
* Adding music and sound effects
* Scoreboard with the 5 highest  score

## Lessons learned

* Through this project I have learnt that planning is the key part is developments. As there were some unforeseen problems that could have been avioded with a detailed planning.



