const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./Routes/index");
// console.log(typeof app);
const db = require("./models/index");

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(
    cors({
      origin: "http://127.0.0.1:5173",
    })
  );

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    // if (process.env.DB_SYNC) {
    //   db.sequelize.sync({ alter: true });
    // }

    console.log(`Server started at PORT : ${PORT}`);
  });
};

prepareAndStartServer();
