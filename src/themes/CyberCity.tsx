"use client";

import { useEffect, useRef } from "react";

export default function CyberpunkCitySky() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const offsetXRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width: number;
    let height: number;
    let animationFrameId: number;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    // Load the background image
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/images/city-afternoon.jpg";
    imageRef.current = img;

    // Particle class for floating digital particles
    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.5 + 0.3;
        // Orange/yellow particles to match the cyberpunk aesthetic
        const colors = ["#ff6400", "#ffa500", "#ffcc00", "#ff8800"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;

        // Wrap around screen
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
      }

      draw() {
        if (!ctx) return;

        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // Data stream class for vertical flowing lines
    class DataStream {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = -Math.random() * height;
        this.length = Math.random() * 100 + 50;
        this.speed = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.3 + 0.2;
      }

      update() {
        this.y += this.speed;

        if (this.y > height + this.length) {
          this.y = -this.length;
          this.x = Math.random() * width;
        }
      }

      draw() {
        if (!ctx) return;

        const gradient = ctx.createLinearGradient(
          this.x,
          this.y,
          this.x,
          this.y + this.length
        );
        gradient.addColorStop(0, `rgba(255, 100, 0, 0)`);
        gradient.addColorStop(0.5, `rgba(255, 165, 0, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(255, 100, 0, 0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.stroke();
      }
    }

    let particles: Particle[] = [];
    let dataStreams: DataStream[] = [];

    // Initialize particles and data streams
    function initializeElements() {
      particles = [];
      dataStreams = [];

      // Create particles
      const particleCount = Math.floor(width / 10);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }

      // Create data streams
      const streamCount = Math.floor(width / 100);
      for (let i = 0; i < streamCount; i++) {
        dataStreams.push(new DataStream());
      }
    }

    // Animation loop
    function animate() {
      if (!ctx || !imageRef.current) return;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Slow pan effect - move image horizontally
      offsetXRef.current += 0.1;
      if (offsetXRef.current > width * 0.1) {
        offsetXRef.current = 0;
      }

      // Draw background image with pan effect
      if (imageRef.current.complete) {
        const imgAspect = imageRef.current.width / imageRef.current.height;
        const canvasAspect = width / height;

        let drawWidth, drawHeight, drawX, drawY;

        if (imgAspect > canvasAspect) {
          // Image is wider than canvas
          drawHeight = height;
          drawWidth = height * imgAspect;
          drawX = -(drawWidth - width) / 2 - offsetXRef.current;
          drawY = 0;
        } else {
          // Image is taller than canvas
          drawWidth = width;
          drawHeight = width / imgAspect;
          drawX = -offsetXRef.current;
          drawY = -(drawHeight - height) / 2;
        }

        // Draw image slightly larger to allow for pan
        ctx.drawImage(
          imageRef.current,
          drawX,
          drawY,
          drawWidth * 1.2,
          drawHeight * 1.2
        );
      }

      // Update and draw data streams
      for (const stream of dataStreams) {
        stream.update();
        stream.draw();
      }

      // Update and draw particles
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    // Initialize
    setCanvasDimensions();
    initializeElements();
    window.addEventListener("resize", () => {
      setCanvasDimensions();
      initializeElements();
    });

    // Start animation when image loads
    img.onload = () => {
      animate();
    };

    // Start animation immediately if image is already cached
    if (img.complete) {
      animate();
    }

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
