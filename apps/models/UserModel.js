import { DataTypes } from "sequelize";
import connection from "../database/Connection.js";

const UserModel = connection.define("users", {
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

export default UserModel;
