function init() {
  const WIDTH = document.documentElement.clientWidth;
  const HEIGHT = document.documentElement.clientHeight;
  let POINT = 55;
  const canvas = document.getElementById('Mycanvas');
  canvas.width = WIDTH,
  canvas.height = HEIGHT;
  const context = canvas.getContext('2d');
  context.strokeStyle = 'rgba(0,0,0,0.2)',
  context.strokeWidth = 1,
  context.fillStyle = 'rgba(0,0,0,0.1)';
  let circleArr = [];
  const userAgentInfo = navigator.userAgent;
  const clientType = ['iPhone', 'Android'];
  for (let i = 0, v = clientType.length; i < v; i += 1) {
    if (userAgentInfo.indexOf(clientType[i]) > 0) {
      POINT = 15;
      break;
    }
  }
  circleArr = [];
  for (let i = 0; i < POINT; i += 1) {
    circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(8, 2), num(20, -10) / 40, num(20, -10) / 40));
  }
  draw();
  setInterval(() => {
    for (let i = 0; i < POINT; i += 1) {
      const cir = circleArr[i];
      cir.x += cir.moveX;
      cir.y += cir.moveY;
      if (cir.x > WIDTH) cir.x = 0;
      else if (cir.x < 0) cir.x = WIDTH;
      if (cir.y > HEIGHT) cir.y = 0;
      else if (cir.y < 0) cir.y = HEIGHT;
    }
    draw();
  }, 10);
  function Line(x, y, _x, _y, o) {
    this.beginX = x,
    this.beginY = y,
    this.closeX = _x,
    this.closeY = _y,
    this.o = o;
  }
  // 点：圆心xy坐标，半径，每帧移动xy的距离
  function Circle(x, y, r, moveX, moveY) {
    this.x = x,
    this.y = y,
    this.r = r,
    this.moveX = moveX,
    this.moveY = moveY;
  }
  // 生成max和min之间的随机数
  function num(max, _min) {
    const min = arguments[1] || 0;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  // 绘制原点
  function drawCricle(cxt, x, y, r, moveX, moveY) {
    let circle = new Circle(x, y, r, moveX, moveY);
    cxt.beginPath();
    cxt.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
    cxt.closePath();
    cxt.fill();
    return circle;
  }
  // 绘制线条
  function drawLine(cxt, x, y, _x, _y, o) {
    let line = new Line(x, y, _x, _y, o);
    cxt.beginPath();
    cxt.strokeStyle = `rgba(0, 0, 0, ${o})`;
    cxt.moveTo(line.beginX, line.beginY);
    cxt.lineTo(line.closeX, line.closeY);
    cxt.closePath();
    cxt.stroke();
  }
  // 每帧绘制
  function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < POINT; i += 1) {
      drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r);
    }
    for (let i = 0; i < POINT; i += 1) {
      for (let j = 0; j < POINT; j += 1) {
        if (i + j < POINT) {
          let A = Math.abs(circleArr[i + j].x - circleArr[i].x),
            B = Math.abs(circleArr[i + j].y - circleArr[i].y);
          const lineLength = Math.sqrt(A * A + B * B);
          let C = 1 / lineLength * 7 - 0.009;
          const lineOpacity = C > 0.03
            ? 0.03
            : C;
          if (lineOpacity > 0) {
            drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[i + j].x, circleArr[i + j].y, lineOpacity);
          }
        }
      }
    }
  }
}

export default init;
