// Have the function QueenCheck(strArr) read strArr which will be an array consisting of the locations of a 
// Queen and King on a standard 8x8 chess board with no other pieces on the board. The structure of strArr 
// will be the following: ["(x1,y1)","(x2,y2)"] with (x1,y1) representing the position of the queen and (x2,y2) 
// representing the location of the king with x and y ranging from 1 to 8.

// Your program should determine if the king is in check based on the current positions of the pieces, and if 
// so, return the number of spaces it can move to in order to get out of check. If the king is not in check, 
// return -1. For example: if strArr is ["(4,4)","(6,6)"] then your program should output 6. Remember, because 
// only the queen and king are on the board, if the queen is checking the king by being directly adjacent to it, 
// technically the king can capture the queen.

function queenCheck(str) {
  let [qX, qY, kX, kY] = [parseInt(str[0][1]), parseInt(str[0][3]), parseInt(str[1][1]), parseInt(str[1][3])];
  if (!inCheck(kX, kY, qX, qY)) return -1;
  let count = 0;
  for (let i = kX - 1; i <= kX + 1; i++) {
    for (let j = kY - 1; j <= kY + 1; j++) {
      if (!(i === kX && j === kY)) {
        if (i >= 1 && i <= 8 && j >= 1 && j <= 8 && !inCheck(i, j, qX, qY)) count++;
      }
    }
  }
  return count;
}

function inCheck(kingX, kingY, queenX, queenY) {
  if (Math.abs(kingX - queenX) == 0 && Math.abs(kingY - queenY) == 0) return false;
  else if (Math.abs(kingX - queenX) === Math.abs(kingY - queenY)) return true;
  else if (kingX === queenX || kingY === queenY) return true;
  else return false;
}

module.exports = queenCheck;
