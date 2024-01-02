var notifications = document.querySelector(".header-group p");
var unread = document.querySelectorAll(".unread");

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
