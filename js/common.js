$(document).ready(function (){

  var canvas = document.getElementById('canvas');

  if(canvas && canvas.getContext){

    var ctx = canvas.getContext('2d');

    if(ctx){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      var grad   = Math.PI / 180;

      //ГРАВИТАЦИЯ

      var mouse = {
        x: canvas.width / 2,
        x: canvas.height / 2
      }

      var colors = [
        '#2185c5',
        '#7ecefd',
        '#fff6e5',
        '#ff7f66'
      ];

      var gravity = 1;
      var friction = 0.9;

      //Event Listener
      window.addEventListener('mousemove', function(event){
        mouse.x = event.clientX;
        mouse.y = event.clientY;
      })

      window.addEventListener('resize', function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight; 
        
        init();
      })

      //Utility Functions
      function randomIntFromRange(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      function randomColor(){
        return colors[Math.floor(Math.random() * colors.length)];
      }

      //Object
      function Ball(x, y, dx, dy, radius, color){
        this.x = x;
        this.y = y; 
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
        
        this.update = function(){
          if(this.y + this.radius + this.dy > canvas.height){
            this.dy = -this.dy * friction;
          } else {
            this.dy += gravity;
          }

          if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius <= 0) {
            this.dx = -this.dx
          }

          this.x += this.dx;
          this.y += this.dy;
          this.draw();
        };
        
        this.draw = function(){
          ctx.beginPath();
          ctx.arc( this.x, this.y, this.radius, 0, 360 * grad, false);
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.stroke();
          ctx.closePath();
        };  

      }

      // Implementation
      var ball;
      var ballArray;
      function init(){
        ballArray = [];
        for (var i = 0; i < 400; i++) {
          var radius = randomIntFromRange(8, 20);
          var x = randomIntFromRange(radius, canvas.width - radius);
          var y = randomIntFromRange(0, canvas.height - radius);
          var dx = randomIntFromRange(-2, 2);
          var dy = randomIntFromRange(-2, 2);
          var color = randomColor(colors);
          ballArray.push(new Ball(x, y, dx, dy, radius, color));
        }
      }

      //Animation Loop
      function animate(){
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < ballArray.length; i++) {
          ballArray[i].update();
        }
      }

      init();
      animate();

    }
  }

});