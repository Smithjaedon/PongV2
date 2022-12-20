<script>
  import { onMount } from "svelte";
  import { gmstart, p1count, p2count } from "../stores/store";
  let canvas = document.querySelector("canvas");

  if ($gmstart) {
    onMount(() => {
      // get canvas context
      let c = canvas.getContext("2d");
      let pause = false;

      class Paddle {
        constructor({ position }) {
          this.position = position;
          this.width = 10;
          this.height = 100;
        }

        draw() {
          c.fillStyle = "white";
          c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }

        update() {
          this.draw();
          if (this.position.y >= canvas.height - this.height) {
            this.position.y = canvas.height - this.height;
          } else if (this.position.y <= 0) {
            this.position.y = 0;
          }
        }
      }

      class Ball {
        constructor({ position }) {
          this.position = position;
          const speed = 3.5;
          const direction = {
            x: Math.random() - 0.5 >= 0 ? -speed : speed,
            y: Math.random() - 0.5 >= 0 ? -speed : speed,
          };

          this.velocity = {
            x: direction.x,
            y: direction.y,
          };

          this.width = 10;
          this.height = 10;
        }

        draw() {
          c.fillStyle = "white";
          c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }

        update() {
          this.draw();
          const rightSide = this.position.x + this.width + this.velocity.x;
          const leftSide = this.position.x + this.velocity.x;
          const bottomSide = this.position.y + this.height;
          const topSide = this.position.y;

          // paddle 1 collision
          if (
            leftSide <= paddle1.position.x + paddle1.width &&
            bottomSide >= paddle1.position.y &&
            topSide <= paddle1.position.y + paddle1.height
          ) {
            this.velocity.x = -this.velocity.x;
          }

          // paddle 2 collision
          if (
            rightSide >= paddle2.position.x &&
            bottomSide >= paddle2.position.y &&
            topSide <= paddle2.position.y + paddle2.height
          ) {
            this.velocity.x = -this.velocity.x;
          }

          // reverse y directions
          if (
            this.position.y + this.height + this.velocity.y >= canvas.height ||
            this.position.y + this.velocity.y <= 0
          ) {
            this.velocity.y = -this.velocity.y;
          }

          //score on left
          if (this.position.x + this.width < 0) {
            p2count.update((n) => n + 1);
            this.position.x = canvas.width / 2;
            this.position.y = canvas.height / 2;
          }

          if (this.position.x + this.width > canvas.width) {
            p1count.update((n) => n + 1);
            this.position.x = canvas.width / 2;
            this.position.y = canvas.height / 2;
          }

          this.position.x += this.velocity.x;
          this.position.y += this.velocity.y;
        }
      }

      const paddle1 = new Paddle({
        position: {
          x: 10,
          y: canvas.height / 2 - 50,
        },
      });

      const paddle2 = new Paddle({
        position: {
          x: canvas.width - 10 * 2,
          y: canvas.height / 2 - 50,
        },
      });

      const ball = new Ball({
        position: {
          x: canvas.width / 2,
          y: canvas.height / 2,
        },
      });

      function animate() {
        requestAnimationFrame(animate);
        c.fillStyle = "black";
        c.fillRect(0, 0, canvas.width, canvas.height);
        paddle1.update();
        paddle2.update();

        ball.update();
      }

      function animate2() {
        requestAnimationFrame(animate);
        c.fillStyle = "black";
        c.fillRect(0, 0, canvas.width, canvas.height);
        paddle1.update();
        paddle2.update();
      }

      animate();

      addEventListener("keydown", (event) => {
        const speed = 20;
        switch (event.key) {
          case "w":
            paddle1.position.y += -speed * 1.5;
            break;
          case "s":
            paddle1.position.y += speed * 1.5;
            break;

          case "ArrowUp":
            paddle2.position.y += -speed * 1.5;
            break;
          case "ArrowDown":
            paddle2.position.y += speed * 1.5;
            break;
        }
      });
    });
  }

  window.addEventListener(
    "keydown",
    function (e) {
      if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
      }
    },
    false
  );
</script>

<div class="flex justify-center items-center">
  <canvas width="720" height="480" bind:this={canvas} />
</div>

<style>
  canvas {
    border: 2px black solid;
    border-radius: 1rem;
  }

  :global(body) {
    margin: 0;
  }
</style>
