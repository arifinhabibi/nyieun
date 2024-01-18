import { DataTypes } from "sequelize";
import connection from "../database/Connection.js";

const UserModel = connection.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

export default UserModel;
