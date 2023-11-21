import inquirer from "inquirer";
import Create from "./command/Create.js";

inquirer
  .prompt([
    {
      type: "list",
      name: "action",
      message: "what you want make?",
      choices: ["controller", "model", "middleware", "service"],
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
      default:
        console.log("nothing choice!");
        break;
    }
  });
