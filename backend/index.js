require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());



const playersRouter = require("./routes/players");

const notFoundMiddleware = require("./middlewares/not-found");

app.use("/players", playersRouter);
app.use(notFoundMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 5000;

const start = () => {
  app.listen(port, () => {
    console.log(`Server started on port ${port} and database connected`);
  });
};

start();
