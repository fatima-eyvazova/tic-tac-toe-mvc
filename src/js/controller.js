export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view?.listenButtonClick(this.onCellClick, this.model);
  }

  init() {
    this.view.switchBtnClass(this.model.currentPlayer);
  }

  onCellClick(position, model) {
    const list = document.querySelectorAll("[data-value]");
    if (list?.[position]) {
      list[position].innerHTML = `<h1>${model?.currentPlayer}</h1>`;
    }

    model?.switchPlayer();

    // if (model?.makeMove(position)) {
    //   this.view.addToBoard(position, model.currentPlayer);

    //   if (this.model.status === "X" || model.status === "O") {
    //     // Game over with a win
    //     this.view.showModal(`Player ${model.status} wins!`);
    //     this.updateScore(model.status);
    //     this.view.manageScore(model.xScore, model.oScore);
    //     this.view.switchBtnClass("");
    //   } else if (model.status === "draw") {
    //     // Game over with a draw
    //     this.view.showModal("It's a draw!");
    //     this.view.switchBtnClass("");
    //   } else {
    //     // Continue the game
    //     this.view.switchBtnClass(model.currentPlayer);
    //   }
    // }
  }

  onNewGameClick() {
    this.model.resetGame();
    this.view.switchBtnClass(this.model.currentPlayer);
    this.view.hideModal();
  }

  onResetClick() {
    this.model.xScore = 0;
    this.model.oScore = 0;
    this.view.manageScore(0, 0);
  }

  updateScore(winner) {
    if (winner === "X") {
      this.model.xScore++;
    } else if (winner === "O") {
      this.model.oScore++;
    }
  }
}
