/**
 * Created by Wd-1999 on 2017/3/23.
 * EventUtil 跨浏览器事件处理 ，兼容IE
 */
var EventUtil = {
  addHandler: function (element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },
  removeHandler: function (element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }
  }
};

//使用方法
var btn = document.getElementById("mybtn");
var handler = function () {
  alert("Clicked");
};
//添加事件
EventUtil.addHandler(btn, "click", handler);
//取消事件
//EventUtil.removeHandler(btn, "click", handler);