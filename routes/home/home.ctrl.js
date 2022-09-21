"use strict";

const hello = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};


// module을 오브젝트 형태로 내보내는데 value 없이 key만 보내면 hello : hello, login : login 이런 형태로 나가는 거라고 볼 수 있다.
module.exports = {
  hello,
  login,
};