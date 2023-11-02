export default class View {
  constructor() {
    // this.controller = controller;
    this.gameContainer = document.querySelector(".container");
    this.modal = document.querySelector(".modal");
    this.overlay = document.querySelector(".overlay");
    this.message = document.querySelector(".message");
    this.newGameBtn = document.querySelector(".new");
    this.resetBtn = document.querySelector(".reset");

    // this.listenButtonClick();
    this.listenNewGameClick();
    this.listenResetClick();
  }

  listenButtonClick(onCellClick, model) {
    this.gameContainer.addEventListener("click", (event) => {
      const button = event.target;
      if (button.tagName === "BUTTON") {
        this.position = button.getAttribute("data-value");
        console.log({ position: this.position });
        onCellClick(this.position, model);
      }
    });
  }

  listenNewGameClick() {
    this.newGameBtn.addEventListener("click", () => {
      // this.controller.onNewGameClick();
    });
  }

  listenResetClick() {
    this.resetBtn.addEventListener("click", () => {
      // this.controller.onResetClick();
    });
  }

  addToBoard(position, player) {
    const button = this.gameContainer.querySelector(
      `[data-value="${position}"]`
    );
    button.textContent = player;
  }

  switchBtnClass(currentPlayer) {
    this.gameContainer.dataset.currentPlayer = currentPlayer;
  }

  showModal(message) {
    this.message.textContent = message;
    this.modal.classList.remove("hidden");
    this.overlay.classList.remove("hidden");
  }

  hideModal() {
    this.modal.classList.add("hidden");
    this.overlay.classList.add("hidden");
  }

  manageScore(xScore, oScore) {
    document.getElementById("xScore").textContent = xScore;
    document.getElementById("oScore").textContent = oScore;
  }
}
