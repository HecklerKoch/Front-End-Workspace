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
      if (selectedMonth === 7 && month === "August") {
        // 예: 7월 (8월의 경우 7로 설정)
        showModal(clickedDate);
      } else if (selectedMonth === 6 && month === "July") {
        showModal(clickedDate);
      }
    },
  });

  calendar.render();

  function showModal(date) {
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = "<p>Selected Date: " + date + "</p>";
    modal.style.display = "block";
  }

  document.getElementById("X").addEventListener("click", function () {
    document.getElementById("myModal").style.display = "none";
  });
});
