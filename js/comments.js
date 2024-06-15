const inputs = document.querySelectorAll("input"); //获取表单相关元素
const tab = document.getElementById("tab");
const submitButton = document.getElementById("comment-submit");
submitButton.onclick = function () {
  for (let i = 0; i < inputs.length - 1; i++) {
    if (inputs[i].value == "") {
      //当前面输入框为空时,弹出提示信息
      alert("请填写完整信息");
      return false; // 阻止全部为空时alert一直弹窗;
    }
  }

  const tr = document.createElement("tr"); //创建一个行元素
  tab.appendChild(tr); //把tr追加到父元素下

  const td1 = document.createElement("td"); //创建一个单元格
  tr.appendChild(td1); //把单元格追加到父元素tr下
  td1.innerHTML = inputs[0].value; //把输入框的value值赋给单元格

  const td2 = document.createElement("td");
  tr.appendChild(td2);
  td2.innerHTML = inputs[1].value;

  const td3 = document.createElement("td");
  tr.appendChild(td3);
  td3.innerHTML = inputs[2].value;

  const td4 = document.createElement("td");
  tr.appendChild(td4);
  td4.innerHTML = inputs[3].value;

  const td5 = document.createElement("td");
  tr.appendChild(td5);
  td5.innerHTML = "<span>删除</span>";

  const span = document.querySelectorAll("span");
  //创建一个span-->>用来装最后一个单元格的删除(可点击,点击事件)              //赋值span的内容
  for (let i = 0; i < span.length; i++) {
    span[i].onclick = function () {
      this.parentNode.parentNode.remove();
    };
  }
  clear(); //调用下面函数
  // 将评论的详细信息存入localStorage中
  const comments = {
    name: inputs[0].value,
    sex: inputs[1].value,
    age: inputs[2].value,
    details: inputs[3].value,
  };
  localStorage.setItem("comments", comments);
};

function clear() {
  //点击添加按钮以后，自动清空
  for (let i = 0; i < inputs.length - 1; i++) {
    inputs[i].value = "";
  }
}
