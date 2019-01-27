const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const addInfoRouter = require("./routes/addInfo");
const showInfoByIdRouter = require("./routes/showInfoById");
const searchByIdRouter = require("./routes/searchById");
const about = require("./routes/about");
const saveToRedisRouter = require("./routes/saveToRedis");
const deleteInfoRouter = require("./routes/deleteInfo");
const deleteInfoByIdRouter = require("./routes/deleteInfoById");
const updateKanatuntaRouter = require('./routes/updateKanatunta');
const updateKanatuntaInfoRouter = require('./routes/updateKanatuntaInfo');
const realUpdateRouter = require('./routes/realUpdate');

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/about", about);
app.use("/showInfoById", showInfoByIdRouter);
app.use("/searchById", searchByIdRouter);
app.use("/deleteInfo", deleteInfoRouter);
app.use("/deleteInfoById", deleteInfoByIdRouter);
app.use("/addInfo", addInfoRouter);
app.use("/saveToRedis", saveToRedisRouter);
app.use('/updateKanatunta',updateKanatuntaRouter);
app.use('/updateKanatuntaInfo',updateKanatuntaInfoRouter);
app.use('/realUpdate',realUpdateRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
