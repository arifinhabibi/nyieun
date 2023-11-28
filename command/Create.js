import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import Template from "./Template.js";
import { execSync } from "node:child_process";

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

        if (!fs.existsSync(saveFile)) {
          fs.writeFileSync(
            saveFile,
            Template.controller(answers.userInput),
            (err) => {
              if (err) {
                console.log(err);
              }
            }
          );
        }

        const command = `code ${saveFile}`;
        execSync(command);
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

        if (!fs.existsSync(saveFile)) {
          fs.writeFileSync(
            saveFile,
            Template.model(answers.userInput),
            (err) => {
              if (err) {
                console.log(err);
              }
            }
          );
        }

        const command = `code ${saveFile}`;
        execSync(command);
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

        if (!fs.existsSync(saveFile)) {
          fs.writeFileSync(
            saveFile,
            Template.middleware(answers.userInput),
            (err) => {
              if (err) {
                console.log(err);
              }
            }
          );
        }

        const command = `code ${saveFile}`;
        execSync(command);
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

        if (!fs.existsSync(saveFile)) {
          fs.writeFileSync(
            saveFile,
            Template.service(answers.userInput),
            (err) => {
              if (err) {
                console.log(err);
              }
            }
          );
        }

        const command = `code ${saveFile}`;
        execSync(command);
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

        if (!fs.existsSync(saveFile)) {
          fs.writeFileSync(
            saveFile,
            Template.helper(answers.userInput),
            (err) => {
              if (err) {
                console.log(err);
              }
            }
          );
        }

        const command = `code ${saveFile}`;
        execSync(command);
      });
  }
}

export default Create;
