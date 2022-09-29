"use strict";

const id = document.querySelector("#id"),
  userName = document.querySelector("#user-name"),
  psword = document.querySelector("#psword"),
  confirmPsword = document.querySelector("#confirm-psword"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
  if(!id.value) return alert("아이디를 입력해 주세요.");
  if(psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다");

  const req = {
    id: id.value,
    name: userName.value,
    psword: psword.value,
    confirmPsword: confirmPsword.value,
  };
  
  fetch("register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
  .then((res) => res.json())
  .then((res) => {
    if(res.success) {
      location.href = "/login";
    } else {
      alert(res.msg);
    }
  })
  .catch((err) => {
    console.error(new Error("회원가입 중에 에러 발생")) // new Error를 통해서 에러를 만들어 줄 수 있음
  });
}