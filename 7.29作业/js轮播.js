window.onload = function () {
  var index = 1;

  var container = document.getElementsByClassName("container")[0];
  var banner = document.getElementsByClassName("banner")[0];
  var img = document.getElementsByClassName("banner-img")[0];
  var li = document.getElementsByClassName("banner-li");
  var arrows = document.getElementsByClassName("arrow");
  var prev = document.getElementsByClassName("prev")[0];
  var next = document.getElementsByClassName("next")[0];

  var buttonContainer = document.getElementsByClassName("button-container")[0];

  var buttons = document.getElementsByClassName("button-container-circle");

  var timer;

  stopAnimation();

  startAnimation();

  ClickButton();

  controlMouse();

  var offset = img.offsetWidth;

  container.style.width = offset + "px";
  container.style.height = img.offsetHeight + "px";
  container.style.overflow = "hidden";

  banner.style.height = img.offsetHeight + "px";
  banner.style.width = offset * li.length + "px";
  banner.style.left = -offset + "px";

  for (var i = 0; i < arrows.length; i++) {
    arrows[i].style.top =
      parseInt(img.offsetHeight) / 2 -
      parseInt(arrows[i].offsetHeight) / 2 +
      "px";
  }

  buttonContainer.style.top = img.offsetHeight - 40 + "px";
  buttonContainer.style.left =
    (offset - buttonContainer.offsetWidth) / 2 + "px";

  prev.onclick = function prevC() {
    index--;
    animate();
    prev.onclick = null;
    clearTimeout(b);
    var b = setTimeout(function () {
      prev.onclick = prevC;
    }, 300);
  };

  next.onclick = function nextC() {
    index++;
    animate();
    next.onclick = null;
    clearTimeout(a);
    var a = setTimeout(function () {
      next.onclick = nextC;
    }, 300);
  };

  function animate() {
    banner.style.transition = "0.3s";
    banner.style.left = -parseInt(offset) * index + "px";

    if (index === 0) {
      index = li.length - 2;
      relocation();
    } else if (index === li.length - 1) {
      index = 1;
      relocation();
    }
    controlButton();
  }

  function relocation() {
    setTimeout(function () {
      banner.style.transition = "0.0s";
      banner.style.left = -parseInt(offset) * index + "px";
    }, 300);
  }

  function controlButton() {
    var key;
    if (index === 0) {
      key = 4;
    } else if (index === li.length - 1) {
      key = 1;
    } else {
      key = index;
    }
    for (var i = 0; i < buttons.length; i++) {
      if (key == buttons[i].getAttribute("index")) {
        buttons[i].className = "button-container-circle on";
      } else {
        buttons[i].className = "button-container-circle";
      }
    }
  }
  function ClickButton() {
    for (var i = 0; i < buttons.length; i++) {
      (function (ii) {
        buttons[ii].onclick = function () {
          index = buttons[ii].getAttribute("index");
          animate();
        };
      })(i);
    }
  }

  function startAnimation() {
    timer = setInterval(function () {
      next.onclick();
    }, 2000);
  }

  function stopAnimation() {
    if (timer) {
      clearInterval(timer);
    }
  }

  function controlMouse() {
    container.onmouseover = function () {
      stopAnimation();
    };
    container.onmouseout = function () {
      startAnimation();
    };
  }
};
