"use strict";

const db = require("../config/db")

// const fs = require("fs").promises; // promises를 붙여줌으로써 유지보수 및 읽기에 좋다 

class UserStorage { // class안에는 따로 변수명을 선언할 필요 x
  // static #getUserInfo(data, id) { // private한 변수나 메서드는 최상단에 올려준다(개발자 사이에 국룰)
  //   const users = JSON.parse(data);
  //       const idx = users.id.indexOf(id);
  //       const userKeys = Object.keys(users); // => [id, psword, name];
  //       const userInfo = userKeys.reduce((newUser, info) => {
  //         newUser[info] = users[info][idx];
  //         return newUser;
  //       }, {});
  //       return userInfo;
  // }

  // static #getUsers(data, isAll, fields) {
  //   const users = JSON.parse(data);
  //   if(isAll) return users;

  //   const newUsers = fields.reduce((newUsers, field) => {
  //     if(users.hasOwnProperty(field)) {
  //       newUsers[field] = users[field];
  //       return newUsers;
  //     }
  //   }, {})
  //   return newUsers;
  // }

  static getUsers(isAll, ...fields) {
    // return fs 
    //   .readFile("./src/databases/users.json")
    //   .then((data) => {
    //     return this.#getUsers(data, isAll, fields);
    //   })
    //   .catch(console.error()); // err => console.log(err)
  }

  static getUserInfo(id) {
    return new Promise((resolve,reject)=> {
      const query = "SELECT * FROM users WHERE id=?;"; 
      db.query(query, [id], (err, data)=> {
        if(err) reject(err);
        resolve(data[0]);
      })  
    }) 
    
    // return fs 
    //   .readFile("./src/databases/users.json")
    //   .then((data) => {
    //     return this.#getUserInfo(data, id);
    //   })
    //   .catch(console.error()); // err => console.log(err)
  }
  
  static async save(userInfo) {
    return new Promise((resolve,reject)=> {
      const query = "INSERT INTO users(id, name, psword) VALUES (?, ?, ?);"; 
      db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err)=> {
        if(err) reject(`${err}`);
        resolve({ success : true });
      })  
    })  

    // const users = await this.getUsers(true); // 데이터를 전부 다 불러오고 싶을 때는 ture만 써도 됨
    // if(users.id.includes(userInfo.id)) {
    //   throw "이미 존재하는 아이디 입니다.";
    // }
    // users.id.push(userInfo.id);
    // users.psword.push(userInfo.psword);
    // users.name.push(userInfo.name);
    // // 데이터 추가
    // fs.writeFile("./src/databases/users.json", JSON.stringify(users)) // 첫번졔 파라미터에는 파일경로, 두번쨰 파라미터에는 저장할 데이터
    // return { success: true };
  }

  static noticeSave(id) {
    return new Promise((resolve,reject)=> {
      const query = "SELECT * FROM users WHERE id=?;"; 
      db.query(query, [id], (err, data)=> {
        if(err) reject(err);
        resolve(data[0]);
      })  
    }) 
    
    // return fs 
    //   .readFile("./src/databases/users.json")
    //   .then((data) => {
    //     return this.#getUserInfo(data, id);
    //   })
    //   .catch(console.error()); // err => console.log(err)
  }
}

module.exports = UserStorage;