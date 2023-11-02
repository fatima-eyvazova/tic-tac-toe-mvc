import Model from "../js/model.js";
import Controller from "../js/controller.js";
import View from "../js/view.js";

function initialize() {
  const model = new Model();
  const view = new View();
  const controller = new Controller(model, view);

  controller.init();
}

window.addEventListener("DOMContentLoaded", initialize);
