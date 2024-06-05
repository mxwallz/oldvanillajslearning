document.addEventListener('DOMContentLoaded', ()=>{
  const grid = document.querySelector('.grid-container');
  let squares = Array.from(document.querySelectorAll('.grid-container div'));
  const ScoreDisplay = document.querySelector('#score');
  const StartBtn = document.querySelector('#start-button');
  const width = 10; //width of the grid in squares


  console.log(squares);
  const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ]
  //only two moves
  const zTetromino = [
    [width*2, width*2+1, width+1, width+2],
    [1, width, width+1, width*2+1],
    [width*2, width*2+1, width+1, width+2],
    [1, width, width+1, width*2+1]
  ]
  //clockwise directions
  const tTetromino = [
    [width, width+1,1, width+2],
    [1, width+1, width+2, width*2+1],
    [width, width+1,width*2+1, width+2],
    [width, width+1, 1, width*2+1]
  ]
  const oTetromino = [
    [0, width, 1, width+1],
    [0, width, 1, width+1],
    [0, width, 1, width+1],
    [0, width, 1, width+1]
  ]
  const iTetromino = [
      [1, width + 1, width * 2 + 1, width * 3 + 1],
      [width, width + 1, width + 2, width + 3],
      [1, width + 1, width * 2 + 1, width * 3 + 1],
      [width, width + 1, width + 2, width + 3]
    ]


  const theTetriminos = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

  const currentPosition = 4;
  let current = theTetriminos[0]

  console.log(theTetriminos[0][0]);



})
