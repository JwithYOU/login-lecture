"use strict";

const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User")

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
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },

  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
}


// module을 오브젝트 형태로 내보내는데 value 없이 key만 보내면 hello : hello, login : login 이런 형태로 나가는 거라고 볼 수 있다.
module.exports = {
  output,
  process,
};