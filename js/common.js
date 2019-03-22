$(document).ready(function (){

  var canvas = document.getElementById('canvas');

  if(canvas && canvas.getContext){

    var ctx = canvas.getContext('2d');

    if(ctx){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      var grad   = Math.PI / 180;

      // ШАБЛОН

      // let mouse = {
      //   x: canvas.width / 2,
      //   y: canvas.height / 2
      // }

      // const colors = [
      //   '#2185c5',
      //   '#7ecefd',
      //   '#fff6e5',
      //   '#ff7f66'
      // ];

      // //Event Listener
      // window.addEventListener('mousemove', function(event){
      //   mouse.x = event.clientX;
      //   mouse.y = event.clientY;
      // })

      // window.addEventListener('resize', function(){
      //   canvas.width = window.innerWidth;
      //   canvas.height = window.innerHeight; 
        
      //   init();
      // })

      // //Utility Functions
      // function randomIntFromRange(min, max){
      //   return Math.floor(Math.random() * (max - min + 1) + min);
      // }

      // function randomColor(){
      //   return colors[Math.floor(Math.random() * colors.length)];
      // }

      // //Object
      // function Circle(x, y, radius, color){
      //   this.x = x;
      //   this.y = y; 
      //   this.radius = radius;
      //   this.color = color;
        
      //   this.update = function(){

      //     this.draw();
      //   };
        
      //   this.draw = function(){
      //     ctx.beginPath();
      //     ctx.arc( this.x, this.y, this.radius, 0, 360 * grad, false);
      //     ctx.fillStyle = this.color;
      //     ctx.fill();
      //     ctx.closePath();
      //   };  

      // }

      // // Implementation
      // function init(){

      // }

      // //Animation Loop
      // function animate(){
      //   requestAnimationFrame(animate);
      //   ctx.clearRect(0, 0, canvas.width, canvas.height);
        
      // }

      // init();
      // animate();

      //ГРАВИТАЦИЯ

      // var mouse = {
      //   x: canvas.width / 2,
      //   y: canvas.height / 2
      // }

      // var colors = [
      //   '#2185c5',
      //   '#7ecefd',
      //   '#fff6e5',
      //   '#ff7f66'
      // ];

      // var gravity = 1;
      // var friction = 0.9;

      // //Event Listener
      // window.addEventListener('mousemove', function(event){
      //   mouse.x = event.clientX;
      //   mouse.y = event.clientY;
      // })

      // window.addEventListener('resize', function(){
      //   canvas.width = window.innerWidth;
      //   canvas.height = window.innerHeight; 
        
      //   init();
      // })

      // window.addEventListener('click', function(){        
      //   init();
      // })

      // //Utility Functions
      // function randomIntFromRange(min, max){
      //   return Math.floor(Math.random() * (max - min + 1) + min);
      // }

      // function randomColor(){
      //   return colors[Math.floor(Math.random() * colors.length)];
      // }

      // //Object
      // function Ball(x, y, dx, dy, radius, color){
      //   this.x = x;
      //   this.y = y; 
      //   this.dx = dx;
      //   this.dy = dy;
      //   this.radius = radius;
      //   this.color = color;
        
      //   this.update = function(){
      //     if(this.y + this.radius + this.dy > canvas.height){
      //       this.dy = -this.dy * friction;
      //     } else {
      //       this.dy += gravity;
      //     }

      //     if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius <= 0) {
      //       this.dx = -this.dx
      //     }

      //     this.x += this.dx;
      //     this.y += this.dy;
      //     this.draw();
      //   };
        
      //   this.draw = function(){
      //     ctx.beginPath();
      //     ctx.arc( this.x, this.y, this.radius, 0, 360 * grad, false);
      //     ctx.fillStyle = this.color;
      //     ctx.fill();
      //     ctx.stroke();
      //     ctx.closePath();
      //   };  

      // }

      // // Implementation
      // var ball;
      // var ballArray;
      // function init(){
      //   ballArray = [];
      //   for (var i = 0; i < 400; i++) {
      //     var radius = randomIntFromRange(8, 20);
      //     var x = randomIntFromRange(radius, canvas.width - radius);
      //     var y = randomIntFromRange(0, canvas.height - radius);
      //     var dx = randomIntFromRange(-2, 2);
      //     var dy = randomIntFromRange(-2, 2);
      //     var color = randomColor(colors);
      //     ballArray.push(new Ball(x, y, dx, dy, radius, color));
      //   }
      // }

      // //Animation Loop
      // function animate(){
      //   requestAnimationFrame(animate);
      //   ctx.clearRect(0, 0, canvas.width, canvas.height);
      //   for (var i = 0; i < ballArray.length; i++) {
      //     ballArray[i].update();
      //   }
      // }

      // init();
      // animate();

      // ОТБИВАНИЕ

      const mouse = {
        x: innerWidth / 2,
        y: innerHeight / 2,
        isDown: false
      };

      const colors = [
        {tone1: '#05056c', tone2: '#0d0c8f', tone3: '#0b0a95', tone4: '#0b0aaa', tone5: '#0d0bc9', tone6: '#110fe2', tone7: '#2826ec'},
        {tone1: '#0e581d', tone2: '#127826', tone3: '#15952e', tone4: '#18ae35', tone5: '#18c639', tone6: '#18d93c', tone7: '#27f24d'},
        {tone1: '#7a116a', tone2: '#91127d', tone3: '#a5158f', tone4: '#bb13a2', tone5: '#d015b4', tone6: '#e517c6', tone7: '#f331d6'},
        {tone1: '#7f491a', tone2: '#96561e', tone3: '#a96020', tone4: '#be6b22', tone5: '#d17524', tone6: '#df7c25', tone7: '#ef892e'},
        {tone1: '#116b6b', tone2: '#108383', tone3: '#159c9c', tone4: '#15b7b7', tone5: '#18d0d0', tone6: '#1de8e8', tone7: '#45f5f5'},
        {tone1: '#841a10', tone2: '#93190d', tone3: '#aa2316', tone4: '#be2819', tone5: '#d52d1d', tone6: '#e73625', tone7: '#f24f3f'}
      ];

      //Event Listener
      window.addEventListener('mousemove', function(event){
        mouse.x = event.clientX;
        mouse.y = event.clientY;
      });

      window.addEventListener('mousedown', function(e){
       mouse.isDown = true;
      });

      window.addEventListener('mouseup', function(e){
        mouse.isDown = false;
      });

      window.addEventListener('click', function(e){
        particles.push(new Particle(mouse.x, mouse.y, randomColor(colors)));
      });

      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight; 
        
        init();
      });

      //Utility Functions
      function randomIntFromRange(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      function randomColor(colors){
        return colors[Math.floor(Math.random() * colors.length)];
      }

      function gradient(x0, y0, r0, x1, y1, r1){
        const radGrad = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);;
        return radGrad; 
      }

      function distance(x1, y1, x2, y2){
        const xDist = x2 - x1;
        const yDist = y2 - y1;

        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
      }

      function rotate(velocity, angle){
        const rotatedVelocities = {
          x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
          y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
        };
        return rotatedVelocities;
      }

      function rotate(velocity, angle){
        const rotatedVelocities = {
          x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
          y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
        };
        return rotatedVelocities;
      }

      function gravity(velocity, angle){
        const gravityVelocities = {
          x: velocity.x * Math.cos(angle),
          y: velocity.y * Math.sin(angle)
        };
        return gravityVelocities;
      }

      function getRadius(elem){
        const index = Array.prototype.indexOf.call(particles, elem);
        let radiusUp = setInterval(function(){
          if (elem.radius >= elem.radiusMax){
            clearInterval(radiusUp);
            particles.splice(index, 1);
          }
          elem.radius += elem.dRadius;
        }, 1);
      }

      function getBomb(num){
        let xRand = randomIntFromRange(60, canvas.width - 60);
        let yRand = randomIntFromRange(60, canvas.height - 60);
        for (var j = 0; j < num; j++) {
          particles.push(new Particle(xRand, yRand, randomColor(colors)));                
        }
      }

      function getRadiusUp(mainelem, elem){
        const index = Array.prototype.indexOf.call(particles, elem);
        const index2 = Array.prototype.indexOf.call(particles, mainelem);
        const dist = distance(mainelem.x, mainelem.y, elem.x, elem.y);
        const sumRadius = mainelem.radius + elem.radius;
        const diffRadius = sumRadius - dist;

        if (mainelem.radius < sumRadius) {
          mainelem.radius += 1;
        } 

        if (mainelem.radius > 30) {
          particles.splice(index, 1);
        }
      }

      function gravityMerger(particle, otherParticle){
        const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
        const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

        const xDist = otherParticle.x - particle.x;
        const yDist = otherParticle.y - particle.y;

        if (xVelocityDiff * xDist + yVelocityDiff * yDist < 0) {
          const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);
          
          const v1 = gravity(particle.velocity, angle);
          const v2 = gravity(otherParticle.velocity, angle);

          particle.velocity.x = v1.x;
          particle.velocity.y = v1.y;

          otherParticle.velocity.x = v2.x;
          otherParticle.velocity.y = v2.y;
          if (particle.radius >= otherParticle.radius) {
            getRadiusUp(particle, otherParticle);
          } else {
            getRadiusUp(otherParticle, particle);
          }
        }
      }

      function resolveCollision(particle, otherParticle){
        const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
        const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

        const xDist = otherParticle.x - particle.x;
        const yDist = otherParticle.y - particle.y;

        if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
          const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);
          const m1 = particle.mass;
          const m2 = otherParticle.mass;

          const u1 = rotate(particle.velocity, angle);
          const u2 = rotate(otherParticle.velocity, angle);

          const v1 = {
            x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2),
            y: u1.y
          };
          const v2 = {
            x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2),
            y: u2.y
          };

          const vFinal1 = rotate(v1, -angle);
          const vFinal2 = rotate(v2, -angle);

          particle.velocity.x = vFinal1.x;
          particle.velocity.y = vFinal1.y;

          otherParticle.velocity.x = vFinal2.x;
          otherParticle.velocity.y = vFinal2.y;
        }
      }

      //Object
      function Particle(x, y, color){
        this.x = x;
        this.y = y; 
        this.velocity = {
          x: (Math.random() - 0.5) * 7,
          y: (Math.random() - 0.5) * 7
        };
        this.radius = randomIntFromRange(15, 30);
        this.radiusMax = this.radius * 3;
        this.dRadius = this.radius / 100; 
        this.mass = 1;
        this.opacity = 0.5;
        this.color = randomColor(colors);
        this.update = particles => {
          this.draw();
          const index = Array.prototype.indexOf.call(particles, this);

          for (let i = 0; i < particles.length; i++) {
            if (this === particles[i]) continue;
            if (distance(this.x, this.y, particles[i].x, particles[i].y) - (this.radius + particles[i].radius) < 0 && this.color !== particles[i].color) {
              resolveCollision(this, particles[i]);              
            }
            if (distance(this.x, this.y, particles[i].x, particles[i].y) - (this.radius + particles[i].radius) < 0 && this.color === particles[i].color) {
              gravityMerger(this, particles[i]);           
            }

          }

          if (this.x - this.radius <= 0 || this.x + this.radius > innerWidth) {
            this.velocity.x = -this.velocity.x;
          }
          if (this.y - this.radius <= 0 || this.y + this.radius > innerHeight) {
            this.velocity.y = -this.velocity.y;
          }

          //mouse
          if (distance(mouse.x, mouse.y, this.x, this.y) < 120 && this.opacity < 1) {
            this.opacity += 0.01;
          } else if(this.opacity > 0.5){
            this.opacity -= 0.01;
            this.opacity = Math.max(0.5, this.opacity);
          }

          if (mouse.isDown === true && distance(mouse.x, mouse.y, this.x, this.y) < this.radius) {
            getBomb(2);
            getRadius(this);
            mouse.isDown = false; 
          } 

          if (particles.length < particleslength) {
            getBomb(2);
          }

          if (this.radius > 40) {
            particles.splice(this, 1);
          }

          this.x += this.velocity.x;         
          this.y += this.velocity.y;        
        };
        
        this.draw = () => {
          ctx.beginPath();
          ctx.arc( this.x, this.y, this.radius, 0, 360 * grad, false);
          ctx.save();
          //ctx.globalAlpha = this.opacity;          
          const radGrad = gradient(this.x, this.y, this.radius / 10, this.x, this.y, this.radius);
          radGrad.addColorStop(0, this.color.tone7);
          radGrad.addColorStop(0.2, this.color.tone6);
          radGrad.addColorStop(0.4, this.color.tone5);
          radGrad.addColorStop(0.6, this.color.tone4);
          radGrad.addColorStop(0.8, this.color.tone3);
          radGrad.addColorStop(0.9, this.color.tone2);
          radGrad.addColorStop(1, this.color.tone1);
          ctx.fillStyle = radGrad;
          ctx.fill();
          ctx.restore();
          ctx.strokeStyle = this.color.tone1
          ctx.stroke();
          ctx.closePath();
        };  

      }

      // Implementation
      let particles;
      let particleslength = 100;

      function init(){
        const radius = 30;
        particles = [];
        for (let i = 0; i < particleslength; i++) {
          
          let x = randomIntFromRange(radius, canvas.width - radius);
          let y = randomIntFromRange(radius, canvas.height - radius);          
          const color  = randomColor(colors);
          if (i != 0) {
            for (let j = 0; j < particles.length; j++) {
              if (distance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
                x = randomIntFromRange(radius, canvas.width - radius);
                y = randomIntFromRange(radius, canvas.height - radius);
                j = -1;
              }              
            }
          }

          particles.push(new Particle(x, y, color));
        }
      }

      //Animation Loop
      function animate(){
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
          particle.update(particles);
        });

      }

      init();
      animate();

    }
  }

});