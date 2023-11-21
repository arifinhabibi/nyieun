import connection from "./Connection.js";

class Config {
  static database = async () => {
    try {
      //   await connection.sync({ force: true });
      await connection.sync();
      console.log("Tables has been created!");
    } catch (error) {
      console.log(error);
    }
  };
}

export default Config;
