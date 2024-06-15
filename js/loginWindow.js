// 默认将注册界面隐藏
document.getElementById("register-window").style.display = "none";

var inputs = document.querySelectorAll("input"); //获取元素
var submit = document.getElementById("submit");
var register = document.getElementById("register");

var isShow = document.getElementsByClassName("register-button");
isShow[0].addEventListener("click", function () {
  document.getElementById("login-window").style.display = "none";
  document.getElementById("register-window").style.display = "block";
});
isShow[1].addEventListener("click", function () {
  document.getElementById("register-window").style.display = "none";
  document.getElementById("login-window").style.display = "block";
});

submit.onclick = function () {
  for (var i = 0; i < 2; i++) {
    if (inputs[i].value == "") {
      alert("账号/密码未填好！");
      return false;
    }
  }
  const users = {
    username: inputs[0].value,
    password: inputs[1].value,
  };
  let flag = 0;
  // 如果是新用户，将用户名+密码写入本地存储；如果是老用户，则判断密码是否正确！
  if (localStorage.getItem("user_list")) {
    for (i = 0; i < JSON.parse(localStorage.getItem("user_list")).length; i++) {
      if (
        JSON.parse(localStorage.getItem("user_list"))[i].username ==
        users.username
      ) {
        flag = 1;
        // 进行判断
        if (
          JSON.parse(localStorage.getItem("user_list"))[i].password ==
          users.password
        ) {
          alert("欢迎回来！");
          window.location.href = "../docs/home.html";
        } else {
          alert("密码输入错误，请重新输入！");
        }
      }
    }
  } else {
    flag = 1;
    alert("检测到您输入的账号未注册，请先进行注册！");
  }
  if (flag == 0) {
    alert("检测到您输入的账号未注册，请先进行注册！");
  }
};

register.onclick = function () {
  for (var i = 2; i < 4; i++) {
    if (inputs[i].value == "") {
      alert("账号/密码未填好！");
      return false;
    }
  }
  const newuser = {
    username: inputs[2].value,
    password: inputs[3].value,
  };
  let user_list = [];
  if (localStorage.getItem("user_list")) {
    for (i = 0; i < JSON.parse(localStorage.getItem("user_list")).length; i++) {
      user_list.push(JSON.parse(localStorage.getItem("user_list"))[i]);
    }
  }
  var registerFlag = 0;
  for (var i = 0; i < user_list.length; i++) {
    if (newuser.username == user_list[i].username) {
      registerFlag = 1;
    }
  }
  if (registerFlag == 1) {
    alert("该用户名已被注册过，请按原密码进行登录即可！");
    document.getElementById("register-window").style.display = "none";
    document.getElementById("login-window").style.display = "block";
  } else {
    user_list.push(newuser);
    localStorage.setItem("user_list", JSON.stringify(user_list));
    alert("注册成功！请进行登录！");
    document.getElementById("register-window").style.display = "none";
    document.getElementById("login-window").style.display = "block";
  }
};
