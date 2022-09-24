"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["카카오", "네이버", "쿠팡"],
  psword: ["1234", "1234", "1234"],
}

const process = {
  login: (req, res) => {
    const id = req.body.id,
    psword = req.body.psword;

    if(users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if(users.psword[idx] === psword) {
        return res.json({
          success: true,
        });
      }

      return res.json({
        success: false,
        msg: "로그인에 실패하였습니다.",
      })
    }
  },
}



// module을 오브젝트 형태로 내보내는데 value 없이 key만 보내면 hello : hello, login : login 이런 형태로 나가는 거라고 볼 수 있다.
module.exports = {
  output,
  process,
};