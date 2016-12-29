import cat2 from '../images/cat2.png';
import fish from '../images/fish.png';

window.onload = function onLoad() {
  var speedX, speedY, color, context, canvas;
  var positionX = getRandomInt(10, 200);
  var positionY = getRandomInt(10, 50);
  var sign = [1, -1];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function changeSpeed(from, to) {
    speedX = randomSpeed(from, to);
    speedY = randomSpeed(from, to);
  }

  function randomSpeed(from, to) {
    return getRandomInt(from, to) * sign[getRandomInt(0, 1)];
  }

  var dotDrawer = function () {
    var colors = ['#3399FF', '#0168b3', '#fc7753', '#88b83e', '#df928e', '#6bb6bb', '#f2cf01', '#7a8bc3'];

    init();
    window.onclick = changeSpeedAndColor;

    function init() {
      canvas = document.getElementById('my-canvas');

      if (canvas.getContext) {
        var wrapper = document.getElementById('canvas-wrapper');
        canvas.setAttribute('width', wrapper.offsetWidth);
        canvas.setAttribute('height', wrapper.offsetHeight);

        positionX = getRandomInt(10, wrapper.offsetWidth - 20);
        positionY = getRandomInt(10, wrapper.offsetHeight - 20);

        changeSpeedAndColor();

        context = canvas.getContext('2d');
        setInterval(draw, 50);
        setInterval(changeSpeedAndColor, 2500);
      }
    }

    function draw() {
      context.globalCompositeOperation = "source-over";
      context.fillStyle = "rgba(8,8,12,.2)";
      context.globalCompositeOperation = "lighter";

      positionX += speedX;
      positionY += speedY;

      if (positionX < 0 || positionX > canvas.width) {
        speedX *= -1;
      }

      if (positionY < 0 || positionY > canvas.height) {
        speedY *= -1;
      }

      context.beginPath();
      context.fillStyle = color;
      context.arc(positionX, positionY, 8, 0, Math.PI * 2.0, true);
      context.fill();
    }

    function changeSpeedAndColor() {
      changeSpeed(10, 20);
      changeColor();
    }

    function changeColor() {
      color = colors[getRandomInt(0, colors.length - 1)];
    }
  };

  var catDrawer = function () {
    var imgSize = 32;
    var catSize = imgSize;
    var catImg = new Image();
    var fishImg = new Image();
    var fishExist = false;
    var fishX, fishY;

    init();

    function init() {
      canvas = document.getElementById('my-canvas');

      if (canvas.getContext) {
        var wrapper = document.getElementById('canvas-wrapper');
        canvas.setAttribute('width', wrapper.offsetWidth);
        canvas.setAttribute('height', wrapper.offsetHeight);

        context = canvas.getContext('2d');

        positionX = getRandomInt(10, wrapper.offsetWidth - 20);
        positionY = getRandomInt(10, wrapper.offsetHeight - 20);

        changeSpeed(2, 4);

        catImg.src = cat2;
        catImg.onload = function () {
          setInterval(draw, 30);

          fishImg.src = fish;
          fishImg.onload = function () {
            wrapper.addEventListener('click', function(e) {
              if (fishExist) {
                return
              }

              fishExist = true;
              var rect = e.target.getBoundingClientRect();
              fishX = e.clientX - rect.left;
              fishY = e.clientY - rect.top;

              context.drawImage(fishImg, fishX, fishY, imgSize, imgSize);

              speedX = (fishX - positionX) / 10;
              speedY = (fishY - positionY) / 10;
            }, false);
          }
        }
      }
    }

    function draw() {
      if (fishExist && (Math.abs(fishX - positionX) < imgSize) && (Math.abs(fishY - positionY) < imgSize)) {
        context.clearRect(fishX, fishY, imgSize, imgSize);
        fishExist = false;
        fishX = undefined;
        fishY = undefined;
        catSize += 4;
        changeSpeed(2, 4);
      }

      context.globalCompositeOperation = "source-over";
      context.fillStyle = "rgba(8,8,12,.2)";
      context.globalCompositeOperation = "lighter";

      // Remove a previous cat
      context.clearRect(positionX, positionY, catSize, catSize);

      positionX += speedX;
      positionY += speedY;

      if (positionX < 0 || positionX > canvas.width) {
        speedX *= -1;
      }

      if (positionY < 0 || positionY > canvas.height) {
        speedY *= -1;
      }

      context.drawImage(catImg, positionX, positionY, catSize, catSize);
    }
  };

  //[dotDrawer, catDrawer][getRandomInt(0, 1)]();
  catDrawer();
};
