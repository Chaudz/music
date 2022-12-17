const myalbum = document.querySelector(".myalbum");
const mycontainermusic = document.querySelector(".mycontainer");
const favouritemymusic = document.querySelector(".favouritemusic");
const mycontainer = document.querySelector(".main-container-pertional");
const homecontainer = document.querySelector(".main-container-discover");
const listfavouritemymusic = document.querySelector(".favouritemymusic");
const listhome = document.querySelector(".listhome");
const listmy = document.querySelector(".mylist");
const loginuser = document.querySelector(".header__user");
const loginmenu = document.querySelector(".login-user");
const loginbtn = document.querySelector(".login");
const login = document.querySelector(".model-login");
const listlogin = document.querySelector(".login-user");
const btncancellogin = document.querySelector(".cancelbtn");
const sidebar = document.querySelectorAll(".sidebar__item");
const overlay = document.querySelector(".overlay");
const nameUser = document.querySelector(".name-user");
document.onclick = (e) => {
  // console.log("id", e.target.id);
};
loginuser.onclick = () => {
  loginmenu.classList.toggle("active");
};
loginbtn.onclick = () => {
  overlay.style.display = "block";
  login.style.display = "block";
};
btncancellogin.onclick = () => {
  overlay.style.display = "none";
  login.style.display = "none";
};
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function loginn() {
  $.ajax({
    url: "/login",
    type: "POST",
    data: {
      username: $("#username").val(),
      password: $("#pass").val(),
    },
  })
    .then((data) => {
      if (data.message == "thanh cong") {
        setCookie("token", data.token, 1);
        setCookie("username", data.username, 1);

        nameUser.innerHTML = getCookie("usename");
        window.location.href = "/";
      }
    })
    .catch((err) => {
      console.log("Loi", err);
    });
}
// login vao hiển thị tên user
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
nameUser.innerHTML = getCookie("username");
// chuyển sang trạng thái đăng xuất
if (getCookie("username")) {
  listlogin.innerHTML = `<li class ="logout">Đăng xuất</li>`;
}
// logout
document.querySelector(".logout").onclick = () => {
  setCookie("username", "", 1);
  setCookie("token", "", 1);
  window.location.href = "/";
};
document.querySelector(".profile__name").innerHTML = getCookie("username");
