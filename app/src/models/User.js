"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    const client = this.body;
    try {
      const user = await UserStorage.getUserInfo(client.id); 
    if(user) {
      if(user.id === client.id && user.psword === client.psword) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다."};
    } 
    return { success: false, msg: "존재하지 않는 아이디 입니다."};
    } catch {
      return { success: false, msg: err };
    }
  }

  async register() {
    const client = this.body;
    try {
      const user = await UserStorage.getUserInfo(client.id);
      console.log(user.id);
      if(!client.id) {
        return { success: false, msg: "아이디를 입력해 주세요." };
      } else if(client.id === user.id) {
        return { success: false, msg: "아이디가 중복 되었습니다." };
      }
      const response = await UserStorage.save(client);
    return response;
    } catch(err) {
      return { success: false, msg: "회원가입 도중 에러"};
    }
  }
}

module.exports = User; 