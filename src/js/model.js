export default class Model {
  constructor() {
    this.currentPlayer = "X";
    this.winner = null;
    this.board = ["", "", "", "", "", "", "", "", ""];
    this.xScore = 0;
    this.oScore = 0;
    this.status = "ongoing";
  }

  makeMove(position) {
    console.log("status", this.status);
    if (this.status === "ongoing" && this.board[position] === "") {
      this.board[position] = this.currentPlayer;
      if (this.checkForWin()) {
        this.status = this.currentPlayer;
      } else if (this.isBoardFull()) {
        this.status = "draw";
      }
      this.switchPlayer();
      return true;
    }
    return false;
  }

  checkForWin() {
    const board = this.board;

    for (let i = 0; i < 9; i += 3) {
      if (
        board[i] === this.currentPlayer &&
        board[i + 1] === this.currentPlayer &&
        board[i + 2] === this.currentPlayer
      ) {
        return true;
      }
    }

    for (let i = 0; i < 3; i++) {
      if (
        board[i] === this.currentPlayer &&
        board[i + 3] === this.currentPlayer &&
        board[i + 6] === this.currentPlayer
      ) {
        return true;
      }
    }

    if (
      (board[0] === this.currentPlayer &&
        board[4] === this.currentPlayer &&
        board[8] === this.currentPlayer) ||
      (board[2] === this.currentPlayer &&
        board[4] === this.currentPlayer &&
        board[6] === this.currentPlayer)
    ) {
      return true;
    }

    return false;
  }

  isBoardFull() {
    return this.board.every((cell) => cell !== "");
  }

  switchPlayer() {
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
  }

  resetGame() {
    this.currentPlayer = "X";
    this.winner = null;
    this.board = ["", "", "", "", "", "", "", "", ""];
    this.status = "ongoing";
  }
}
