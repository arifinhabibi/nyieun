import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import Template from "./Template.js";

class Create {
  static controller() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "userInput",
          message: "write name controller:",
        },
      ])
      .then((answers) => {
        const fileName = answers.userInput + ".js";
        const saveFile = path.join("apps/controllers", fileName);

        fs.writeFileSync(
          saveFile,
          Template.controller(answers.userInput),
          (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("file success created");
            }
          }
        );
      });
  }

  static model() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "userInput",
          message: "write name model:",
        },
      ])
      .then((answers) => {
        const fileName = answers.userInput + ".js";
        const saveFile = path.join("apps/models", fileName);

        fs.writeFileSync(saveFile, Template.model(answers.userInput), (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("file success created");
          }
        });
      });
  }

  static middleware() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "userInput",
          message: "write name middleware:",
        },
      ])
      .then((answers) => {
        const fileName = answers.userInput + ".js";
        const saveFile = path.join("apps/middleware", fileName);

        fs.writeFileSync(
          saveFile,
          Template.middleware(answers.userInput),
          (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("file success created");
            }
          }
        );
      });
  }

  static service() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "userInput",
          message: "write name service:",
        },
      ])
      .then((answers) => {
        const fileName = answers.userInput + ".js";
        const saveFile = path.join("apps/services", fileName);

        fs.writeFileSync(
          saveFile,
          Template.service(answers.userInput),
          (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("file success created");
            }
          }
        );
      });
  }

  static helper() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "userInput",
          message: "write name helper:",
        },
      ])
      .then((answers) => {
        const fileName = answers.userInput + ".js";
        const saveFile = path.join("apps/helpers", fileName);

        fs.writeFileSync(
          saveFile,
          Template.helper(answers.userInput),
          (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("file success created");
            }
          }
        );
      });
  }
}

export default Create;
