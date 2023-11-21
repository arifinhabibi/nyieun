import inquirer from "inquirer";
import fs from "fs";
import path from "path";

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
        const saveFile = path.join("nyieun/controllers", fileName);

        fs.writeFileSync(saveFile, "", (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("file success created");
          }
        });
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
        const saveFile = path.join("nyieun/models", fileName);

        fs.writeFileSync(saveFile, "", (err) => {
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
        const saveFile = path.join("nyieun/middleware", fileName);

        fs.writeFileSync(saveFile, "", (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("file success created");
          }
        });
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
        const saveFile = path.join("nyieun/services", fileName);

        fs.writeFileSync(saveFile, "", (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("file success created");
          }
        });
      });
  }
}

export default Create;
