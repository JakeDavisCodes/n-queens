/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {

  var newBoard = new Board({n: 5});

  newBoard.attributes[0][0] = 1;

  console.log(newBoard);
  // console.log(1);
  // console.log(newBoard.get(0)[0]);

  /*

  helperFunc = function (board)
    if conflicts
      prune
    if n pieces
      solution

    creates a list of possible boards

    for let i = 0; < n; i++
      for let j = 0; j < n; j++
        if (board.get(i)[j] === 1)
          lastPos = {row: i, col: j}
    lastPos = lastPos || {row: 0, col: -1}
    possibleBoards = [];


    for let i = lastPos.row; < n; i++
      for let j = lastPos.col + 1; j < n; j++


      forEach possible
        return helperFunc(possible[i]);
  [0, 0, 0]
  [0, 0, 0]
  [0, 0, 0]

  */




  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
