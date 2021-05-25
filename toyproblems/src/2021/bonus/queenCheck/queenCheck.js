// Have the function QueenCheck(strArr) read strArr which will be an array consisting of the locations of a Queen and King on a standard 8x8 chess board with no other pieces on the board. The structure of strArr will be the following: ["(x1,y1)","(x2,y2)"] with (x1,y1) representing the position of the queen and (x2,y2) representing the location of the king with x and y ranging from 1 to 8.

// Your program should determine if the king is in check based on the current positions of the pieces, and if so, return the number of spaces it can move to in order to get out of check. If the king is not in check, return -1. For example: if strArr is ["(4,4)","(6,6)"] then your program should output 6. Remember, because only the queen and king are on the board, if the queen is checking the king by being directly adjacent to it, technically the king can capture the queen.

function queenCheck(str) {
  // code goes here
  return str;
}

module.exports = queenCheck;
