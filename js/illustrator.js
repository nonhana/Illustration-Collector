// 从本地读取上传好的插画师数据并渲染到页面上
var illustratorlist = document.getElementById("illustratorlist");
var localillustratorlist = [];
if (localStorage.getItem("illustratorlist")) {
  for (
    var i = 0;
    i < JSON.parse(localStorage.getItem("illustratorlist")).length;
    i++
  ) {
    localillustratorlist.push(
      JSON.parse(localStorage.getItem("illustratorlist"))[i]
    );
  }
}
var localpicturelist = [];
if (localStorage.getItem("picturelist")) {
  for (
    var i = 0;
    i < JSON.parse(localStorage.getItem("picturelist")).length;
    i++
  ) {
    localpicturelist.push(JSON.parse(localStorage.getItem("picturelist"))[i]);
  }
}
for (var i = 0; i < localillustratorlist.length; i++) {
  var str = "";
  str =
    "<hr>" +
    "<div id='illustratoritem'>" +
    "<div id='illustratorinfo'>" +
    "<div class='headphoto'>" +
    "<img src='' alt=''>" +
    "</div>" +
    "<div id = 'details'>" +
    "<div id='name'>" +
    "<font>" +
    localillustratorlist[i].illustrator_name +
    "</font>" +
    "</div>" +
    "<div id='signal'>" +
    "<font>" +
    localillustratorlist[i].illustrator_sign +
    "</font>" +
    "</div>" +
    "<div id='style'>" +
    "<font>" +
    "风格：" +
    "<span>" +
    localillustratorlist[i].illustrator_style +
    "</span>" +
    "</font>" +
    "</div>" +
    "<div id='SNS'>" +
    "<font>" +
    "其他网站资讯：" +
    "<a class='uploaduser' target='_blank' href=''>" +
    "</a>" +
    "</font>" +
    "</div>" +
    "</div >" +
    "</div >" +
    "<div class='uploadpicturelist'>" +
    "</div>" +
    "<div class='noList'>" +
    "<font>" +
    "暂未收藏该画师的相关插画哦，快去添加吧！" +
    "</font>" +
    "</div>";
  illustratorlist.innerHTML += str;
}

var headArr = [];
for (var i = 0; i < document.getElementsByClassName("headphoto").length; i++) {
  headArr.push(document.getElementsByClassName("headphoto")[i].children);
}
for (var i = 3; i < headArr.length; i++) {
  headArr[i][0].src = localillustratorlist[i - 3].illustrator_head_photo;
}
var aArr = document.getElementsByClassName("uploaduser");
for (var i = 0; i < aArr.length; i++) {
  aArr[i].innerHTML = localillustratorlist[i].illustrator_SNS;
  aArr[i].href = localillustratorlist[i].illustrator_SNS;
}

var uploadpicturelist = document.getElementsByClassName("uploadpicturelist");
var noList = document.getElementsByClassName("noList");
var rangepictures = [];
for (var i = 0; i < uploadpicturelist.length; i++) {
  for (var j = 0; j < localpicturelist.length; j++) {
    if (
      localpicturelist[j].picture_creator ==
      localillustratorlist[i].illustrator_name
    ) {
      noList[i].style.display = "none";
      var str = "";
      str =
        "<div>" + "<img class='uploadpictureitem' src='' alt=''>" + "</div>";
      rangepictures.push(localpicturelist[j]);
      uploadpicturelist[i].innerHTML += str;
    }
  }
}
for (var i = 0; i < uploadpicturelist.length; i++) {
  for (
    var j = 0;
    j < uploadpicturelist[i].getElementsByClassName("uploadpictureitem").length;
    j++
  ) {
    uploadpicturelist[i].getElementsByClassName("uploadpictureitem")[j].src =
      rangepictures.shift().picture_file;
  }
}

// 点击图片，进入相应的详情页
var imgArr = document.getElementsByClassName("work");
// console.log(imgArr)
imgArr[0].addEventListener("click", function () {
  window.open("picturedetails/pasoputi/1.html");
});
imgArr[1].addEventListener("click", function () {
  window.open("picturedetails/pasoputi/2.html");
});
imgArr[2].addEventListener("click", function () {
  window.open("picturedetails/pasoputi/3.html");
});
imgArr[3].addEventListener("click", function () {
  window.open("picturedetails/pasoputi/4.html");
});
imgArr[4].addEventListener("click", function () {
  window.open("picturedetails/pasoputi/5.html");
});

// 点击画师头像，进入其主介绍页面
var illustratorArr = document.getElementsByClassName("headphoto");
// console.log(illustratorArr);
illustratorArr[0].addEventListener("click", function () {
  console.log(123);
  window.open("illustratordetails/pasoputi.html");
});
illustratorArr[1].addEventListener("click", function () {
  window.open("illustratordetails/ちふり.html");
});
illustratorArr[2].addEventListener("click", function () {
  window.open("illustratordetails/しおん.html");
});
