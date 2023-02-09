const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./Routes/index");
// console.log(typeof app);
const db = require("./models/index");

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    // if (process.env.DB_SYNC) {
    //   db.sequelize.sync({ alter: true });
    // }

    console.log(`Server started at PORT : ${PORT}`);
  });
};

prepareAndStartServer();
