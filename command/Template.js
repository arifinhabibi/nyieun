class Template {
  static controller(name) {
    return (
      "class " +
      name +
      " {\n" +
      "\tstatic index(req, res) {\n" +
      "\t\t// write here your code\n" +
      "\t}\n" +
      "}\n" +
      "export default " +
      name
    );
  }

  static service(name) {
    return (
      "class " +
      name +
      " {\n" +
      "\tstatic async index() {\n" +
      "\t\t// write here your code\n" +
      "\t}\n" +
      "}\n" +
      "export default " +
      name
    );
  }

  static middleware(name) {
    return (
      "class " +
      name +
      " {\n" +
      "\tstatic index() {\n" +
      "\t\t// write here your code\n" +
      "\t}\n" +
      "}\n" +
      "export default " +
      name
    );
  }

  static helper(name) {
    return (
      "class " +
      name +
      " {\n" +
      "\tstatic index() {\n" +
      "\t\t// write here your code\n" +
      "\t}\n" +
      "}\n" +
      "export default " +
      name
    );
  }

  static model(name) {
    return (
      `import { DataTypes } from "sequelize";\n` +
      `import connection from "../database/Connection.js";\n\n` +
      `const ` +
      name +
      `= connection.define("` +
      name.toLowerCase() +
      `", {\n` +
      `\tid: {\n` +
      `\t\ttype: DataTypes.INTEGER,\n` +
      `\t\tprimaryKey: true,\n` +
      `\t\tautoIncrement: true,\n` +
      `\t},\n` +
      `\t// add more coloumn\n` +
      `});\n\n` +
      `export default ` +
      name +
      `;`
    );
  }
}

export default Template;
