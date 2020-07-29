var demo = document.getElementsByClassName("demo")[0];
var small_box = document.getElementsByClassName("small-box")[0];
var float_box = document.getElementsByClassName("float-box")[0];
var mark = document.getElementsByClassName("mark")[0];
var big_box = document.getElementsByClassName("big-box")[0];
var img = big_box.getElementsByTagName("img")[0];

mark.onmouseover = function () {
  float_box.style.display = "block";
  big_box.style.display = "block";
};

mark.onmouseout = function () {
  float_box.style.display = "none";
  big_box.style.display = "none";
};
mark.onmousemove = function (ev) {
  var _event = ev || window.event; //做兼容性，兼容IE
  //1计算值：
  var left =
    _event.clientX -
    demo.offsetLeft -
    small_box.offsetLeft -
    float_box.offsetWidth / 2;
  var top =
    _event.clientY -
    demo.offsetTop -
    small_box.offsetTop -
    float_box.offsetHeight / 2;

  //5.优化，在前面加判断,不让其溢出，加判断
  if (left < 0) left = 0;
  if (top < 0) top = 0;
  if (left > small_box.offsetWidth - float_box.offsetWidth)
    left = small_box.offsetWidth - float_box.offsetWidth;
  if (top > small_box.offsetHeight - float_box.offsetHeight)
    top = small_box.offsetHeight - float_box.offsetHeight;

  //2把值赋值给放大镜
  float_box.style.left = left + "px";
  float_box.style.top = top + "px";

  //3计算比例
  var percentX = left / (mark.offsetWidth - float_box.offsetWidth);
  var percentY = top / (mark.offsetHeight - float_box.offsetHeight);

  //4利用这个比例计算距离后赋值给右侧的图片
  img.style.left = -percentX * (img.offsetWidth - big_box.offsetWidth) + "px";
  img.style.top = -percentY * (img.offsetHeight - big_box.offsetHeight) + "px";
};
