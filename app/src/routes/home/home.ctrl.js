"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
    psword = req.body.psword;

    const users = UserStorage.getUsers("id", "psword");

    const response = {};
    if(users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if(users.psword[idx] === psword) {
        response.success = true;
        return res.json(response);
      }
    }

    response.success = false;
    response.msg = "로그인에 실패하였습니다.";
    return res.json(response);
  },
}



// module을 오브젝트 형태로 내보내는데 value 없이 key만 보내면 hello : hello, login : login 이런 형태로 나가는 거라고 볼 수 있다.
module.exports = {
  output,
  process,
};