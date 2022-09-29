"use strict";

// 모듈
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set('views', './src/views');
app.set("view engine", "ejs"); // view engine으로 ejs라는 걸 쓰겠다는 의미
app.use('/js',express.static(`${__dirname}/src/public/js`));
app.use('/css',express.static(`${__dirname}/src/public/css`));
app.use(express.json());
app.use(express.urlencoded({ extended : true}))
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결

app.use("/", home); // use -> 미들웨어를 등록 해주는 메서드(일단은 외우자)

module.exports = app;