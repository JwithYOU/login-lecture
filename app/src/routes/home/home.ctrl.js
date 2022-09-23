"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    console.log(req.body);
  },
}



// module을 오브젝트 형태로 내보내는데 value 없이 key만 보내면 hello : hello, login : login 이런 형태로 나가는 거라고 볼 수 있다.
module.exports = {
  output,
  process,
};