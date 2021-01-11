/*
board | puzzle | player
*/

class Player {
  //compare two piece to see if match
  - pieceOne //instance of Puzzle
  - pieceTwo //instance of Puzzle
  + piecesMatch() //return boolean //call setFoundPlaceMent
}

let puzzleShapes = {
    extrusion: 'extrusion',
    indentation: 'indentation',
    flat: 'flat'
};

class Puzzle {
  - sides = [] //Sides
  - foundPlacement //boolean whether a piece found correct spot on board
  - horizontal index //int
  - vertical index //int
  + setFoundPlacement() //setter/ updates foundPlacement
}

class Sides {
  - side in out flat
  - curvature // angle
  - edge
  + getSides() //return side
}
class Board {
  - width //int
  - length //int
  - shape = 'rectangle' //string
}