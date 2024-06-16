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
const passwrdcheckSpan = document.querySelector("#passwordCheckSpan");

passwrdcheck.addEventListener("input", function() {
    if (passwrd.value === passwrdcheck.value) {
      passwrdcheckSpan.style.color = "green";
      passwrdcheckSpan.innerHTML = "비밀번호가 일치합니다.";
    } else {
      passwrdcheckSpan.style.color = "red";
      passwrdcheckSpan.innerHTML = "비밀번호가 틀립니다.";
    }
})

const Name = document.querySelector("#name")
const NameSpan = document.querySelector("#nameSpan")

Name.addEventListener("input", function() {
  const regExp = /^[가-힣]{2,}$/
  const check = regExp.test(Name.value)

  if (check) {
    NameSpan.innerHTML = " "
  } else {
    NameSpan.style.color = "red"
    NameSpan.innerHTML = "알맞지 않는 형식입니다."
  }
})

const Email = document.querySelector("#email")
const EmailSpan = document.querySelector("#emailSpan")

Email.addEventListener("input", function () {
  const regExp = /^[!-~]+@[a-zA-Z]+.com+$/
  const check = regExp.test(Email.value)

  if (check) {
    emailSpan.style.color = "green"
    emailSpan.innerHTML = "쓸수 있는 이메일입니다."
  } else {
    emailSpan.style.color = "red"
    emailSpan.innerHTML = "쓸수 없는 이메일입니다."
  }
})