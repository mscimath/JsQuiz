//Add the circle background on load
document.addEventListener(
    "DOMContentLoaded",
    function () {
      var div = document.createElement("div");
      div.className = "circle";
      document.body.appendChild(div);
    },
    false
  );

  const canvas = document.getElementById("piaskownica");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const ctx = canvas.getContext("2d");

  function Circle(x, y, r, c) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;

    this.draw = function () {
      ctx.beginPath();
      ctx.fillStyle = this.c;
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
    };
  }

  const balls = [];
  for (let i = 0; i < 30; i++) {
    let r = Math.floor(Math.random() * 4);
    let x = Math.random() * (canvas.width - r * 2) + r;
    let y = Math.random() * (canvas.height - r * 2) + r;
    let c = "rgb(48,48,98)";
    balls.push(new Circle(x, y, r, c));
  }

  function Update() {
    for (let i = 0; i < balls.length; i++) {
      balls[i].draw();
    }
  }
  Update();