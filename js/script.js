var link = document.querySelector(".hostel-search");

    var popup = document.querySelector(".modal-date");
    var date = popup.querySelector("[name=date-arrival]");


    link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
    date.focus();
  });
