const path = require('path')
const cookieSession = require("cookie-session");
const mongoose = require("mongoose")
const passport = require("passport")
const express = require('express')
const connectDB = require('./config/db')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
var cors = require('cors')
const app = express()
//body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
const router = express.Router();
app.use(cors())
connectDB()
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "*"
  );
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
  }
  next();
});

// app.use(
//   cookieSession({
//     name: "session",
//     keys: 'thisappisawesome',
//     maxAge: 24 * 60 * 60 * 100
//   })
// );


const PORT = process.env.PORT ||  5000;

require('./config/passport')(passport)

// session middleware

app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
//passport middleware
app.use(passport.initialize())
app.use(passport.session())
// app.use(express.static(path.resolve(__dirname, 'views/images')))
// app.use(express.static('views/images')); 
// app.set('views', __dirname + '/views');
// app.set('view engine', 'hbs');
// app.engine('html', require('hbs').__express);
// app.use("/testing", (req, res, next) => {
//   fs.readFile(path.resolve("../build/index.html"), "utf-8", (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).send("Some error happened");
//     }
//     return res.send(
//       data.replace(
//         '<div id="root"></div>',
//         `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
//       )
//     );
//   });
// });

// app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.use('/' , require('./routes/index.js'))
app.use('/auth' ,require('./routes/auth'))
app.use('/firstform' , require('./routes/form.js'))
app.use('/home' , require('./routes/home.js'))
app.use('/req' , require('./routes/req.js'))

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});