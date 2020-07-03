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

// //Initializations
// const express = require('express')
// const session = require("express-session");
// const morgan = require('morgan')
// const bodyParser = require("body-parser");
// const Router = require("./routes/index");
// const db = require('./db/db')

// const app = express()

// //settings
// app.set('port', process.env.PORT || 3000)

// app.use(bodyParser.urlencoded({
// 	extended: false
// }));

// app.use(bodyParser.json());

// //Middlewares
// app.use(
// 	session({
// 	  secret: "cats",
// 	  resave: true,
// 	  saveUninitialized: true
// 	})
//   );
// app.use(morgan('dev'));
// //accept data from forms, to receive just simple data like strings and not images, etc 
// app.use(express.urlencoded({
// 	extended: false
// }))
// app.use(express.json())

// //Global Variables
// app.use((req, res, next) => {
// 	next()
// })

// //Routes
// app.use("/api", Router);

// //Public
// app.get("/*", (req, res) => {
// 	res.sendFile(__dirname + "/public/" + "index.html");
// });

// console.log(db)
// //Syncronize database, create tables and start server 
// db.sync({
// 	logging: false,
// 	force: false
// }).then(() => {
// 	app.listen(app.get('port'), () => {
// 		console.log('Server listening on port', app.get('port'))
// 	})
// }).catch(error => console.log('error: ', error))









// Por si acaso:

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const path = require('path');
// const morgan = require('morgan');
// const PORT = process.env.PORT || 3000;
// const db = require('./db/db');
// app.use(express.static('public'));
// app.use(morgan('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
// 	extended: false
// }));
// require("./db/db")
// /*Configuración de rutas*/
// app.get('/*', (req, res) => {
// 	res.sendFile(path.join(__dirname, './public', 'index.html'));
// });
// // db.connect((err) => {
// // 	if (err) console.log(err);
// // 	else console.log(`connected to Ejercicios DB`);
// // });
// db.sequelize.sync({
// 	force: false
// }).then((c) => console.log(`connected to ${c.config.database} DB`)).then(() => app.listen(PORT)).catch(error => console.log('error: ', error))
