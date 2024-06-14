/*
   사용자가 입력을 했을 때
   해당 조건이 틀릴 경우 빨간색으로 표시
              맞는 경우 초록색으로 표시
*/
const userId = document.querySelector("#Id");
const userIdSpan = document.querySelector("#userIdSpan");

userId.addEventListener("input", function () {
  //첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 오 4~12자로 입력하시오.
  const regExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
  const check = regExp.test(userId.value);
  if (check) {
    userIdSpan.style.color = "green";
    userIdSpan.innerHTML = "쓸수 있는 아이디 입니다.";
  } else {
    userIdSpan.style.color = "red";
    userIdSpan.innerHTML =
      "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오.";
  }
});

const passwrd = document.querySelector("#password");
const passwordSpan = document.querySelector("#passwordSpan");

passwrd.addEventListener("input", function () {
  const regExp = /^[!-~]{8,15}$/;
  const check = regExp.test(passwrd.value);
  if (check) {
    passwordSpan.style.color = "green";
    passwordSpan.innerHTML = "쓸수 있는 비밀번호 입니다.";
  } else {
    passwordSpan.style.color = "red";
    passwordSpan.innerHTML =
      "영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하세요";
  }
});
// 영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오.
// [!-~]{여기는 여러분들이 채워주세요}

const passwrdcheck = document.querySelector("#passwordCheck");
const passwrdcheckSpan = document.querySelector("#passwordCheckSpan");

passwrdcheck.addEventListener("input", function () {
  if (passwrd.value === passwrdcheck.value) {
    passwrdcheckSpan.style.color = "green";
    passwrdcheckSpan.innerHTML = "비밀번호가 일치합니다.";
  } else {
    passwrdcheckSpan.style.color = "red";
    passwrdcheckSpan.innerHTML = "비밀번호가 일치하지 않습니다.";
  }
});
// 위의 비밀번호와 일치하게 입력하시오.
// 정규표현식 필요 X, 위에 입력한 비밀번호 값이랑 비교!
// password.value === passwordCheck.value

const names = document.querySelector("#name");
const nameSpans = document.querySelector("#nameSpan");

names.addEventListener("input", function () {
  const regExp = /^[가-힣]{2,}$/;
  const check = regExp.test(names.value);
  if (check) {
    nameSpans.style.color = "green";
    nameSpans.innerHTML = "ok!";
  } else {
    nameSpans.style.color = "red";
    nameSpans.innerHTML = "한글로만 이루어져야되며 2글자 이상으로 입력하시오.";
  }
});
//한글로만 이루어져야되며 2글자 이상으로 입력하시오.
//[가-힣]{여기도 여러분들이 채워주세요!}

const emails = document.querySelector("#email");
const emailSpans = document.querySelector("#emailSpan");

emails.addEventListener("input", function () {
  const regExp = /^[!-~]+@[!-~]+$/;
  const check = regExp.test(emails.value);
  if (check) {
    emailSpans.style.color = "green";
    emailSpans.innerHTML = "ok!";
  } else {
    emailSpans.style.color = "red";
    emailSpans.innerHTML = "맞지 않는 이메일 형식입니다.";
  }
});
//이메일 형식에 맞춰서 입력하시오.
// abc123!@gmail.com
// -> (영어나숫자여러분자상관없이 길이도 상관없이 : +)@(앞이랑 마찬가지)
