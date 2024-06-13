const newyear = new Date("2025-01-01 00:00:00");

function count() {
  const clock = new Date();
  const second = Math.floor((newyear - clock) / 1000); // 1초 = 밀리세컨드 / 1000
  const minute = Math.floor(second / 60); // 60초 = 1분
  const hour = Math.floor(minute / 60); //1시간 = 60분
  const day = Math.floor(hour / 24); // 24시간 = 1일
  console.log(second);
  // console.log(newyear - clock); // 밀리세컨드로 보여짐
  console.log(minute);
  // 1초 = 밀리세컨드/1000, 60초 = 1분, 24시간 = 1일
  console.log(hour);
  time.innerHTML = `${String(day).padStart(2, "0")}일 ${String(
    hour % 24
  ).padStart(2, "0")}시 ${String(minute % 60).padStart(2, "0")}분
   ${String(second % 60).padStart(2, "0")}초`;
}

count();

setInterval(count, 1000);
