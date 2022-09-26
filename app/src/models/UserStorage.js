"use strict";

const { userInfo } = require('os');

const fs = require("fs").promises; // promises를 붙여줌으로써 유지보수 및 읽기에 좋다 

class UserStorage { // class안에는 따로 변수명을 선언할 필요 x
  static #getUserInfo(data, id) { // private한 변수나 메서드는 최상단에 올려준다
    const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // => [id, psword, name];
        const userInfo = userKeys.reduce((newUser, info) => {
          newUser[info] = users[info][idx];
          return newUser;
        }, {});
        return userInfo;
  }

  static getUsers(...fields) {
    // const users = this.#users;
    const newUsers = fields.reduce((arr, cur) => {
      if(users.hasOwnProperty(cur)) {
        arr[cur] = users[cur];
        return arr;
      }
    }, {})
    return newUsers;
  }

  static getUserInfo(id) {
    // const users = this.#users; // 전체 아이디, 비밀번호 불러옴
    return fs 
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error()); // err => console.log(err)
  }
  
  static save(userInfo) {
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return { success: true };
  }
}

module.exports = UserStorage;