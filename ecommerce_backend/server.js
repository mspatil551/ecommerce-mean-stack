const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const cors = require("cors")
dotenv.config({ path: "./config/.env" });
const db = require("./config/db");
db();
const user = require("./routes/user");
const app = express();
app.use(cors())
app.use(express.static("public"));
app.use(express.json());
app.use("/api/v1", user);
app.listen(process.env.PORT, () => {
  console.log("Server is running".green);
});
