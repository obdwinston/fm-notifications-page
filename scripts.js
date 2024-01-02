var notifications = document.querySelector(".notifications");
var unread = document.querySelectorAll(".unread");
var readAll = document.querySelector(".read-all");

readAll.addEventListener("click", function () {
  unread.forEach((element) => {
    element.classList.remove("unread");
    element.querySelector(".dot").style.display = "none";

    checkNotifications();
  });
});

unread.forEach((element) => {
  element.addEventListener("click", function () {
    element.classList.remove("unread");
    element.querySelector(".dot").style.display = "none";

    checkNotifications();
  });
});

function checkNotifications() {
  notifications.innerHTML = document.querySelectorAll(".unread").length;
}
