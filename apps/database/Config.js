import connection from "./Connection.js";
import RegisterModel from "./RegisterModel.js";

class Config {
  static database = async () => {
    RegisterModel.index();
    try {
      await connection.sync({ force: true });
      //   await connection.sync();
      console.log("Tables has been created!");
    } catch (error) {
      console.log(error);
    }
  };
}

export default Config;
