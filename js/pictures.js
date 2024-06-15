// 读取本地上传的图片数据，添加到列表内
var picturelist = document.getElementById("picturelist");
var localpictureArr = [];
if (localStorage.getItem("picturelist")) {
  for (
    var i = 0;
    i < JSON.parse(localStorage.getItem("picturelist")).length;
    i++
  ) {
    localpictureArr.push(JSON.parse(localStorage.getItem("picturelist"))[i]);
  }
}
for (var i = 0; i < localpictureArr.length; i++) {
  var str = "";
  str = "<img class='uploadpicture' src='' alt=''>";
  picturelist.innerHTML += str;
}
var uploadpictureArr = document.getElementsByClassName("uploadpicture");
for (var i = 0; i < uploadpictureArr.length; i++) {
  uploadpictureArr[i].src = localpictureArr[i].picture_file;
}

// 点击各个图片进入其详情页
var imgArr = document.getElementsByTagName("img");
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
