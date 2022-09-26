"use strict";

class UserStorage { // class안에는 따로 변수명을 선언할 필요 x
  static #users = {
    id: ["카카오", "네이버", "쿠팡"],
    name: ["김코딩", "박해커", "이테크"],
    psword: ["1234", "1234", "1234"],
  }

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((arr, cur) => {
      if(users.hasOwnProperty(cur)) {
        arr[cur] = users[cur];
        return arr;
      }
    }, {})
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users; // 전체 아이디, 비밀번호 불러옴
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users);
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
  }, {});
    return userInfo;
  }

  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return { success: true };
  }
}

module.exports = UserStorage;