// Have the function KnightJumps(str) read str which will be a string consisting of the location of a knight on 
// a standard 8x8 chess board with no other pieces on the board. The structure of str will be the following: 
// "(x y)" which represents the position of the knight with x and y ranging from 1 to 8. Your program should 
// determine the number of spaces the knight can move to from a given location. For example: if str is "(4 5)" 
// then your program should output 8 because the knight can move to 8 different spaces from position x=4 and y=5.

function knightJumps(strIn) {
  let xK = parseInt(strIn[1]) - 1;
  let yK = parseInt(strIn[3]) - 1;
  let numValid = 0;
  const combos = [[xK - 1, yK + 2], [xK + 1, yK + 2], [xK - 1, yK - 2], [xK + 1, yK - 2], [xK - 2, yK + 1], [xK + 2, yK + 1], [xK - 2, yK - 1], [xK + 2, yK - 1]];

  for (const coord of combos) {
    if (coord[0] >= 0 && coord[0] < 8 && coord[1] >= 0 && coord[1] < 8) {
      numValid++;
    }
  }
  return numValid;
}

module.exports = knightJumps;
