const db = require("./db/db");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const session = require("express-session");
const Router = require("./routes/index");
const cookieParser = require("cookie-parser");



app.use(express.static("public"));
app.use(morgan("dev"));
app.use(cookieParser());


app.use(
  session({
    secret: "cats",
    resave: true,
    saveUninitialized: true
  })
);
app.use(morgan("tiny"));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use("/api", Router);

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
}); //send the html file to render it

/***** Syncronize db and run the server:   *******/
db.sync({
    logging: false,
    force: false
  }).then(() => {
    app.listen(3000, () => {
      console.log("Server is listening on port 3000!");
    });
  })
  .catch(console.error);