


  console.log("inside canvas js");

  var canvas = document.getElementById('canvase');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  //c stands for context
  var c = canvas.getContext('2d');

// random colors
var colorArray = [
  '#2E112D',
  '#540032',
  '#820333',
  '#C9283E',
  '#F0433A',
];

/*
var colorArray = [
  '#332031',
  '#59393F',
  '#7D5B52',
  '#8F7160',
  'E5D8C8',
];
*/

// creating a javascript object to create multiple circles
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];


    this.draw = function() {
      //creating circle
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        //getting random index
        c.fillStyle = this.color;
        c.fill();

    }

    this.update = function() {
      // this is done so the circle bounces of the screen
      if(this.x + this.radius > innerWidth || this.x - this.radius < 0 ) {
        this.dx = - this.dx;
      }

      if(this.y + this.radius > innerHeight || this.y - this.radius < 0 ) {
        this.dy = - this.dy;
      }

      this.x += this.dx;
      this.y += this.dy;

      this.draw();

    }
}


  var circleArray = [];
  for(var i = 0; i < 300; i++){
    //creating intial radius
    var radius = Math.random() * 3 + 1;
    //creating intial random position
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    //the velocity
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }

//creating the object
//var circle = new Circle(200, 200, 3, 3, 30);

  //mooving the circle
  function animate() {
    //looping
    requestAnimationFrame(animate);
    //clearing
    c.clearRect(0, 0, innerWidth, innerHeight);

      for(var i = 0; i < circleArray.length ; i++){


        circleArray[i].update();

      }

    }


  animate();
