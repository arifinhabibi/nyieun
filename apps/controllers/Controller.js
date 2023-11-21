import ResponseJSON from "../helpers/ResponJSON.js";

class Controller {
  static index(req, res) {
    ResponseJSON.success(res, "Welcome!");
  }
}

export default Controller;
