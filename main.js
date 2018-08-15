import championController from "./app/components/champions/championController.js";

export default class App {
  constructor() {
    this.controllers = {
      championController: new championController()
    }
  }
}

//@ts-ignore
window.app = new App()