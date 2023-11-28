import connection from "./Connection.js";
import RegisterModel from "./RegisterModel.js";

class Config {
  static database = async () => {
    RegisterModel.index();
    try {
      // choose one
      // 1. active this once for temporary database
      await connection.sync({ force: true });

      // 2. active this if you wanna permanent database
      //   await connection.sync();
      console.log("Tables has been created!");
    } catch (error) {
      console.log(error);
    }
  };
}

export default Config;
