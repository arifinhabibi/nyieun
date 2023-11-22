import inquirer from "inquirer";
import Create from "./Create.js";

inquirer
  .prompt([
    {
      type: "list",
      name: "action",
      message: "what you want make?",
      choices: ["controller", "model", "middleware", "service", "helper"],
    },
  ])
  .then((answer) => {
    switch (answer.action) {
      case "controller":
        Create.controller();
        break;
      case "model":
        Create.model();
        break;
      case "middleware":
        Create.middleware();
        break;
      case "service":
        Create.service();
        break;
      case "helper":
        Create.helper();
        break;
      default:
        console.log("nothing choice!");
        break;
    }
  });
