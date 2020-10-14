const grid = document.querySelector('.grid')
const playButton = document.querySelector('.play')
const width = 20


let snakeHeadPosition = 81
let foodPosition = 0
let snakeDirection = 'right'

const cellsArray = []
let snakeTailPositionsArray = []
let snakeLength = 0

  //TODO
  // The player earns points by guiding the snake to eat food
  //The game should end when the snake hits the wall or itself
  //PAUSE
  //SCORE board



for (let i = 0; i < width ** 2; i++) {
  const div = document.createElement('div')
  div.classList.add('cell')
  grid.appendChild(div)
  div.innerHTML = i
  div.style.fontSize = '10px'
  cellsArray.push(div)
}


// generating random index 
const randomIndex = Math.floor(Math.random() * cellsArray.length)
foodPosition = cellsArray[randomIndex]

playButton.addEventListener('click', ()  => {

  
  // adding food on the grid
  foodPosition.classList.add('food')


  function updateSnakePosition() {
    if (cellsArray[snakeHeadPosition].classList.contains('food')) {
      
      // removing old food
      foodPosition.classList.remove('food')

      // update food position
      const randomIndex = Math.floor(Math.random() * cellsArray.length)
      foodPosition = cellsArray[randomIndex]
      
      // add new food on the grid
      foodPosition.classList.add('food')

      // increase the size of the snake
      snakeTailPositionsArray.push(0)
      
      snakeLength += 1

      // increase the speed of the snake
      
      setInterval(updateSnakePosition, 3000)

      
    } else {
      
      for (let i = 0; i < snakeLength; i++) {
        const snakeTailPosition = snakeTailPositionsArray[i]
        cellsArray[snakeTailPosition].classList.remove('snakeTail')
      }
      cellsArray[snakeHeadPosition].classList.remove('snakeHead')
     
      for (let i = snakeLength - 1; i > 0; i--) {
        snakeTailPositionsArray[i] = snakeTailPositionsArray[i - 1]
      }
      snakeTailPositionsArray[0] = snakeHeadPosition

      //TODO-----> ask for help!!!!
      // if the snakeHead touches the snakeTail. GAMEOVER
      
    // for (let i = 1; i < snakeLength;  i++) {
    //   
    //   snakeDirection === 'up' || snakeDirection === 'down' || snakeDirection === 'right' || snakeDirection === 'left' && snakeHeadPosition === snakeTailPositionsArray[i]
    // }

      if (snakeDirection === 'up' && snakeHeadPosition < width  ||
       snakeDirection === 'down' && snakeHeadPosition > (width ** 2 - (width - 1)) || 
       snakeDirection === 'right' && snakeHeadPosition % width === width - 1 ||
        snakeDirection === 'left' && snakeHeadPosition % width === 0  ){  
        alert('Game Over!!!')
      } else if (snakeDirection === 'up'  ) {  
        snakeHeadPosition -= width
      } else if (snakeDirection === 'down') {
        snakeHeadPosition += width
      } else if (snakeDirection === 'right') {
        snakeHeadPosition += 1 
      } else if (snakeDirection === 'left') {
        snakeHeadPosition -= 1   
      }
    


      for (let i = 0; i < snakeLength; i++) {
        const snakeTailPosition = snakeTailPositionsArray[i]
        cellsArray[snakeTailPosition].classList.add('snakeTail')
      }
      cellsArray[snakeHeadPosition].classList.add('snakeHead')
    }
    
  }  
  updateSnakePosition()
  
  document.addEventListener('keydown', (event) => {
    const key = event.key
    
    function updateSnakeDirection() {

      if (key === 'ArrowUp') {
        snakeDirection = 'up'
        updateSnakePosition()
      
      } else if (key === 'ArrowDown' ) {
 
        snakeDirection = 'down'
        updateSnakePosition()
      
      } else if (key === 'ArrowRight' ) {

        snakeDirection = 'right'
        updateSnakePosition()
     
      } else if (key === 'ArrowLeft') {
        snakeDirection = 'left'
        updateSnakePosition() 
      }  
    }
    updateSnakeDirection()
  })
  setInterval(updateSnakePosition, 500)
})