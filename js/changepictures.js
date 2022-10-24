//根据图片个数修改imgList宽度
var imgList = document.getElementById("imgList");
//获取图片个数，修改样式
var imgArr = document.getElementsByTagName("img");
imgList.style.width = 1220 * imgArr.length + "px";
// 居中导航按钮
// 获取navDiv与outer
var navDiv = document.getElementById("navDiv");
var outer = document.getElementById("outer");
// 计算得出居中的值
navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth) / 2 + "px";
// 默认显示图片的索引
var index = 0;
// 获取所有的超链接(即最下面的四个按钮)
var allA = document.getElementsByTagName("a");
// 设置默认选中的效果
setA();
// 每隔4s，自动往后切换一次图片,切换到第一张时会很快
var timer = setInterval(function () {
  var speed = 20;
  if (index < (imgArr.length - 1)) {
    index++;
  } else {
    index = 0;
    speed = 20 * (imgArr.length - 1);
  }
  move(imgList, "left", -1220 * index, speed);
  setA();
}, 4000)
/* 
 *按下不同的超链接，实现切换至不同的图片
 */
// 为所有的超链接绑定单击函数,采用for循环
for (var i = 0; i < allA.length; i++) {
  // 为每一个超链接加标签：num属性
  allA[i].num = i;
  allA[i].onclick = function () {
    // 删除上一个定时器
    clearInterval(timer);
    // 开启下一个定时器
    timer = setInterval(function () {
      var speed = 20;
      if (index < (imgArr.length - 1)) {
        index++;
      } else {
        index = 0;
        speed = 20 * (imgArr.length - 1);
      }
      move(imgList, "left", -1220 * index, speed);
      setA();
    }, 4000)
    // 获取index与this.num之间的差距gap，用来动态设置speed，使人机体验更好
    var gap = index > this.num ? (index - this.num) : (this.num - index);
    var speed = gap * 20;
    // 获取点击的超链接的索引，并将其设置给index
    index = this.num;
    // 修改正在选中的超链接的背景颜色(选中了就变黑的)
    setA();
    // 使用animation.js中的move函数来实现动态的切换图片
    move(imgList, "left", -1220 * index, speed);
  }
}
// 创建方法用来设置选中的超链接，使其变黑
function setA() {
  // 遍历所有的a，并将背景颜色设置为white
  for (var i = 0; i < allA.length; i++) {
    // 内联样式优先级最高，会妨碍接下来超链接样式的设置
    allA[i].style.backgroundColor = "";
  }
  // 根据index将选中的超链接设置为黑色
  allA[index].style.backgroundColor = "black";
}