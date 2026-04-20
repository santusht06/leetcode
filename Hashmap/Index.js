/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  let board = Array.from({ length: 3 }, () => Array(3).fill(""));

  // fill board
  for (let i = 0; i < moves.length; i++) {
    let [r, c] = moves[i];
    board[r][c] = i % 2 === 0 ? "X" : "O";
  }

  const check = (ch) => {
    // rows & cols
    for (let i = 0; i < 3; i++) {
      if (
        (board[i][0] === ch && board[i][1] === ch && board[i][2] === ch) ||
        (board[0][i] === ch && board[1][i] === ch && board[2][i] === ch)
      ) {
        return true;
      }
    }

    // diagonals
    if (
      (board[0][0] === ch && board[1][1] === ch && board[2][2] === ch) ||
      (board[0][2] === ch && board[1][1] === ch && board[2][0] === ch)
    ) {
      return true;
    }

    return false;
  };

  if (check("X")) return "A";
  if (check("O")) return "B";

  return moves.length === 9 ? "Draw" : "Pending";
};
