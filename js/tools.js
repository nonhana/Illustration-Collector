//getStyle函数，用来获取元素对应的属性
function getStyle(obj, name) {
	if (window.getComputedStyle) {
		//正常浏览器都具有getComputedStyle方法
		return getComputedStyle(obj, null)[name];
	} else {
		//IE8及以下没有getComputedStyle方法
		return obj.currentStyle[name];
	}
}
/*
 *move函数，逐渐改变对象的相关属性(计时器的应用)
 */
function move(obj, attr, target, speed, callback) {
	//关闭上一个计时器
	clearInterval(obj.timer);
	//获取元素目前的位置
	var current_position = parseInt(getStyle(obj, attr));
	//用户输入的速度只为正值，根据不同的位置以及目标判断速度的方向(正负)
	if (current_position > target) {
		speed = -speed;
	}
	//开启一个定时器用以执行动画效果
	//给对象直接添加其timer属性，使得各个按钮分别控制不同的对象
	obj.timer = setInterval(function() {
		//获取box原来的target值
		var oldValue = parseInt(getStyle(obj, attr));
		//在旧值的基础上增加
		var newValue = oldValue + speed
		//结束：判断newValue是否大于800或小于0。
		if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
			newValue = target;
		}
		obj.style[attr] = newValue + "px";
		//达成目标，关闭计时器
		if (newValue == target) {
			clearInterval(obj.timer);
			//回调函数，将在动画执行完毕后执行，只会执行一次。基本用于嵌套，做成连续变化的动画效果
			//XXX&&XXX()形式用于判断是否含XXX函数，若含则执行，不含就不执行(使这个函数有很强的兼容性)
			callback && callback();
		}
	}, 10)
}






// 定义一个函数，向一个元素中添加指定的class属性值
function addClass(obj, cn) {
	// 检查obj中是否含有cn
	if (!hasClass(obj, cn)) {
		obj.className += " " + cn;
	}
}
// 判断一个元素中是否含有相应的class属性值
function hasClass(obj, cn) {
	// 当正则表达式需要传入字符串变量时，需要使用new RegExp的形式创建
	var reg = new RegExp("\\b" + cn + "\\b");
	return reg.test(obj.className);
}
// 删除一个元素中指定的class属性
function removeClass(obj, cn) {
	// 创建一个正则表达式
	var reg = new RegExp("\\b" + cn + "\\b");
	// 删除class
	obj.className = obj.className.replace(reg, "");
}
// 可以用来切换一个类，选择是否选择该类的样式
function toggleClass(obj, cn) {
	// 判断是否含有cn,有则删掉，没有则加上去
	if (!hasClass(obj, cn)) {
		addClass(obj, cn);
	} else {
		removeClass(obj, cn);
	}
}
