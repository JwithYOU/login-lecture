"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set('views', './views');
app.set("view engine", "ejs"); // view engine으로 ejs라는 걸 쓰겠다는 의미

app.use("/", home); // use -> 미들웨어를 등록 해주는 메서드(일단은 외우자)

module.exports = app;