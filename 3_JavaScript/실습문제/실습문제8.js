const ID = document.querySelector("#id");
const IdSpan = document.querySelector("#idSpan");

ID.addEventListener("input", function () {
  const regExp = /^[a-zA-z][a-zA-Z0-9]{3,11}$/;
  const check = regExp.test(ID.value);
  if (check) {
    IdSpan.style.color = "green";
    IdSpan.innerHTML = "쓸수 있는 아이디입니다.";
  } else {
    IdSpan.style.color = "red";
    IdSpan.innerHTML = "형식에 맞지 않거나, 이미 쓰고있는 아이디입니다.";
  }
});

const passwrd = document.querySelector("#password");
const passwrdSpan = document.querySelector("#passwordSpan");

passwrd.addEventListener("input", function () {
  const regExp = /^[!-~]{8,15}$/;
  const check = regExp.test(passwrd.value);

  if (check) {
    passwrdSpan.style.color = "green";
    passwrdSpan.innerHTML = "쓸수 있는 비밀번호입니다";
  } else {
    passwrdSpan.style.color = "red";
    passwrdSpan.innerHTML = "형식에 맞지 않거나 이미 쓰고있는 비밀번호입니다.";
  }
});

const passwrdcheck = document.querySelector("#passwordcheck");
const passwrdcheckSpan = document.querySelector("#passwordCheckSpan")

passwrdcheck.addEventListener("input", function() {
    if (passwrd.value === passwrdcheck.value)
})