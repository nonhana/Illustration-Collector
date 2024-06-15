// 将上传的图片渲染到页面上实时显示
document.querySelector("#illustrator_fileItem").onchange = function () {
  let picInfo = this.files[0];
  let url = URL.createObjectURL(picInfo);
  document.querySelector("#illustrator_fileItem_display").src = url;
};
document.querySelector("#picture_fileItem").onchange = function () {
  let picInfo = this.files[0];
  let url = URL.createObjectURL(picInfo);
  document.querySelector("#picture_fileItem_display").src = url;
};

// 点击提交按钮时，获取提交的表单
document
  .getElementById("submitillustrator")
  .addEventListener("click", function () {
    var illustrator_form = [];
    for (
      var i = 0;
      i <
      document
        .getElementById("illustrator_postform")
        .getElementsByClassName("inputbox").length;
      i++
    ) {
      illustrator_form.push(
        document
          .getElementById("illustrator_postform")
          .getElementsByClassName("inputbox")[i]
      );
    }
    illustrator_form.push(document.getElementById("illustrator_fileItem"));
    var submit_illustrator_form = {
      illustrator_id: 1,
      illustrator_name: "",
      illustrator_sign: "",
      illustrator_style: "",
      illustrator_SNS: "",
      illustrator_reason: "",
      illustrator_story: "",
      illustrator_head_photo: "",
    };
    var flag = 0;
    // console.log(illustrator_form)
    for (var i = 0; i < illustrator_form.length; i++) {
      if (illustrator_form[i].value == "") {
        flag = 1;
      }
    }
    if (flag == 0) {
      submit_illustrator_form.illustrator_name = illustrator_form[0].value;
      submit_illustrator_form.illustrator_sign = illustrator_form[1].value;
      submit_illustrator_form.illustrator_style = illustrator_form[2].value;
      submit_illustrator_form.illustrator_SNS = illustrator_form[3].value;
      submit_illustrator_form.illustrator_reason = illustrator_form[4].value;
      submit_illustrator_form.illustrator_story = illustrator_form[5].value;
      // 运用FileReader将图片转化为base64编码格式，便于字符串形式进行存储
      var reader = new FileReader(); //声明FileReader对象
      reader.readAsDataURL(illustrator_form[6].files[0]); //进行转化
      // 注意：只能在onload函数中运用this.result将转化好的编码进行赋值！一旦离开onload函数则失效
      reader.onload = function () {
        submit_illustrator_form.illustrator_head_photo = this.result;
        // 通过axios上传
        // axios({
        // 	url: "http://localhost:8100/illustratorlist",
        // 	method: 'POST',
        // 	data: submit_illustrator_form,
        // }).then(function (res) {
        // 	alert("上传成功")
        // });
        // 将数据存入本地，让远程能够实现读取
        let illustrator_list = [];
        if (localStorage.getItem("illustratorlist")) {
          for (
            var i = 0;
            i < JSON.parse(localStorage.getItem("illustratorlist")).length;
            i++
          ) {
            submit_illustrator_form.illustrator_id++;
            illustrator_list.push(
              JSON.parse(localStorage.getItem("illustratorlist"))[i]
            );
          }
        }
        illustrator_list.push(submit_illustrator_form);
        localStorage.setItem(
          "illustratorlist",
          JSON.stringify(illustrator_list)
        );
        // 成功后重置表单
        submit_illustrator_form = {
          illustrator_id: 1,
          illustrator_name: "",
          illustrator_sign: "",
          illustrator_style: "",
          illustrator_SNS: "",
          illustrator_reason: "",
          illustrator_story: "",
          illustrator_head_photo: "",
        };
        alert("上传成功");
        window.location.reload();
      };
    } else {
      alert("添加画师的资料尚未填充完整！");
    }
  });

// 上传插画
document.getElementById("submitpicture").addEventListener("click", function () {
  var picture_form = [];
  for (
    var i = 0;
    i <
    document
      .getElementById("picture_postform")
      .getElementsByClassName("inputbox").length;
    i++
  ) {
    picture_form.push(
      document
        .getElementById("picture_postform")
        .getElementsByClassName("inputbox")[i]
    );
  }
  picture_form.push(document.getElementById("picture_fileItem"));
  console.log(picture_form);
  var submit_picture_form = {
    picture_id: 1,
    picture_name: "",
    picture_labels: "",
    picture_creator: "",
    picture_origin: "",
    picture_time: "",
    picture_reason: "",
    picture_file: "",
  };
  var flag = 0;
  // console.log(picture_form)
  for (var i = 0; i < picture_form.length; i++) {
    if (picture_form[i].value == "") {
      flag = 1;
    }
  }
  if (flag == 0) {
    submit_picture_form.picture_name = picture_form[0].value;
    submit_picture_form.picture_labels = picture_form[1].value;
    submit_picture_form.picture_creator = picture_form[2].value;
    submit_picture_form.picture_origin = picture_form[3].value;
    submit_picture_form.picture_time = picture_form[4].value;
    submit_picture_form.picture_reason = picture_form[5].value;
    // 运用FileReader将图片转化为base64编码格式，便于字符串形式进行存储
    var reader = new FileReader(); //声明FileReader对象
    reader.readAsDataURL(picture_form[6].files[0]); //进行转化
    // 注意：只能在onload函数中运用this.result将转化好的编码进行赋值！一旦离开onload函数则失效
    reader.onload = function () {
      submit_picture_form.picture_file = this.result;
      // 通过axios将数据存入data
      // axios({
      // 	url: "http://localhost:8100/picturelist",
      // 	method: 'POST',
      // 	data: submit_picture_form,
      // }).then(function (res) {
      // 	alert("上传成功")
      // });
      // 将数据存入本地，让远程能够实现读取
      let picture_list = [];
      if (localStorage.getItem("picturelist")) {
        for (
          var i = 0;
          i < JSON.parse(localStorage.getItem("picturelist")).length;
          i++
        ) {
          submit_picture_form.picture_id++;
          picture_list.push(JSON.parse(localStorage.getItem("picturelist"))[i]);
        }
      }
      picture_list.push(submit_picture_form);
      localStorage.setItem("picturelist", JSON.stringify(picture_list));
      // 成功后重置表单
      for (var i = 0; i < picture_form.length - 1; i++) {
        picture_form[i].value = "";
      }
      picture_form[6].files = "";
      alert("上传成功");
      window.location.reload();
    };
  } else {
    alert("添加插画的资料尚未填充完整！");
  }
});
