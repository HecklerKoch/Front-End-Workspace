document.addEventListener("DOMContentLoaded", function () {
  var Calendar = FullCalendar.Calendar;

  var calendarEl = document.getElementById("calendar");

  var calendar = new Calendar(calendarEl, {
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    selectable: true,
    editable: true,
    dateClick: function (info) {
      const month = calendarEl
        .querySelector(".fc-toolbar-title")
        .innerText.split(" ")[0];
      var clickedDate = info.dateStr;
      var selectedMonth = info.date.getMonth(); // 0부터 시작하는 월 인덱스
      // 예: 7월 (8월의 경우 7로 설정)
      if (selectedMonth === 0 && month === "January") {
        showModal(clickedDate);
      } else if (selectedMonth === 1 && month === "February") {
        showModal(clickedDate);
      } else if (selectedMonth === 2 && month === "March") {
        showModal(clickedDate);
      } else if (selectedMonth === 3 && month === "April") {
        showModal(clickedDate);
      } else if (selectedMonth === 4 && month === "May") {
        showModal(clickedDate);
      } else if (selectedMonth === 5 && month === "June") {
        showModal(clickedDate);
      } else if (selectedMonth === 6 && month === "July") {
        showModal(clickedDate);
      } else if (selectedMonth === 7 && month === "August") {
        showModal(clickedDate);
      } else if (selectedMonth === 8 && month === "September") {
        showModal(clickedDate);
      } else if (selectedMonth === 9 && month === "October") {
        showModal(clickedDate);
      } else if (selectedMonth === 10 && month === "November") {
        showModal(clickedDate);
      } else if (selectedMonth === 11 && month === "December") {
        showModal(clickedDate);
      }
    },
  });

  calendar.render();

  function showModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }

  document.getElementById("X").addEventListener("click", function () {
    document.getElementById("myModal").style.display = "none";
  });
});
