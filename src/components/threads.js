"use client";
import { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";

export default function Threads() {
  const canvasRef = useRef(null);
  const noise = createNoise2D(Math.random);

  const dampSpeed = 2;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");


    let t = 0;
    const numThreads = 12;
    let frame;

    function plot(x, vt) {
      return 75 * noise(x / 1000, vt / 8);
    }

    let mouseX = 0;
    let mouseY = 0;

    let dampX = canvas.offsetWidth / 2;
    let dampY = canvas.offsetHeight / 2;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let last = performance.now();

    let scrollPos = 0;

    const draw = () => {
      scrollPos = window.scrollY * 0.5;
      if(scrollPos > canvas.height) {
        frame = requestAnimationFrame(draw);
        return;
      }

      const now = performance.now();
      const dt = (now - last) / 1000;
      last = now;

      const w = canvas.width;
      const h = canvas.height;

      ctx.fillStyle = "rgba(0,0,0,.3)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const a = 1 - Math.exp(-dampSpeed * dt);
      dampX += (mouseX - dampX) * a;
      dampY += (mouseY - dampY) * a;

      const scrollNorm = 1 - scrollPos / (canvas.height / 2);


      for (let i = 0; i < numThreads; i++) {
        const xOffset = -15 * i;

        ctx.beginPath();

        for (let x = 1; x < w; x++) {
          const xdist = Math.abs(dampX - x) / w;
          const ydist = (dampY - h / 2) / h;
          const mouseMultiplier = 2 * Math.exp(-xdist * xdist * 8) * scrollNorm;

          const y = h / 2 + ((h / 6) * ydist * scrollNorm) * mouseMultiplier + plot(x + xOffset * (1 + 0.5 * (mouseMultiplier)), t + 1 * (i / numThreads)) * (1 + mouseMultiplier);

          if (x === 0)
            ctx.moveTo(x, y);
          else
            ctx.lineTo(x, y - scrollPos);
        }

        ctx.strokeStyle = `rgba(200, 200, 200, ${1 - (i / numThreads)})`;
        ctx.stroke();
      }


      t += dt;
      frame = requestAnimationFrame(draw);
    };

    draw();

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = Math.min(e.clientY - rect.top, rect.height);
    };

    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', onResize);


    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [noise]);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-screen h-screen -z-10" />;
}
