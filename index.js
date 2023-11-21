import express from "express";
import bodyParser from "body-parser";
import router from "./router.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  if (process.env.APP_ENV === "local") {
    console.log(
      `Server running on http://` +
        process.env.APP_HOST +
        ":" +
        process.env.APP_PORT
    );
  } else {
    console.log(
      `Server running on htts://` +
        process.env.APP_HOST +
        ":" +
        process.env.APP_PORT
    );
  }
});
