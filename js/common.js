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
      var friction = 0.95;

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

      function Ball(x, y, dy, radius, color){
        this.x = x;
        this.y = y; 
        this.dy = dy;
        this.radius = radius;
        this.color = color;
        
        this.update = function(){
          if(this.y + this.radius > canvas.height){
            this.dy = -this.dy * friction;
            //console.log(this.dy);
          } else {
            this.dy += gravity;
            //console.log(this.dy);
          }
          this.y += this.dy;
          this.draw();
        };
        
        this.draw = function(){
          ctx.beginPath();
          ctx.arc( this.x, this.y, this.radius, 0, 360 * grad, false);
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.closePath();
        };  

      }

      // Inplementation
      var ball;
      function init(){
        ball = new Ball(canvas.width / 2, canvas.height / 2, 2, 30, 'red')
      }

      //Animation Loop
      function animate(){
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        ball.update();
      }

      init();
      animate();

    }
  }

});