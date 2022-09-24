"use strict";

class UserStorage { // class안에는 따로 변수명을 선언할 필요 x
  static #users = {
    id: ["카카오", "네이버", "쿠팡"],
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
}

module.exports = UserStorage;