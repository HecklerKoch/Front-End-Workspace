const h1 = document.querySelector("h1");
h1.onmouseenter = function () {
  h1.style.color = "white";
  h1.style.backgroundColor = "black";
};
h1.onmouseleave = function () {
  h1.style.color = "black";
  h1.style.backgroundColor = "white";
};
//addEventListener 만 기억해도 괜찮다
h1.addEventListener("click", function () {
  h1.style.backgroundColor = "skyblue";
  h1.style.color = "skyblue";
});

const img = document.querySelectorAll(".container img");

/* 이미지마다 이벤트 걸려면 반복문 필요! */
/*
for (const item of img) {
  item.addEventListener("click", function (e) {
    e.currentTarget.style.display = "none";
  });
}
*/

const container = document.querySelector(".container");

function removeHandler(e) {
  if (e.target !== e.currentTarget) {
    e.target.style.display = "none";
  }
}

container.addEventListener("click", removeHandler);

container.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(e.currentTarget);
  if (e.target !== e.currentTarget) {
    e.target.style.display = "none";
  }
});
