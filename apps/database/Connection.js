import { Sequelize } from "sequelize";

const connection = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    logging: (logMessage) => {
      //   console.log(logMessage);
    },
  }
);

connection
  .authenticate()
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.log(err);
  });

export default connection;
