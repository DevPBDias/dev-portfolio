"use client";

import { useEffect, useRef } from "react";

export default function ForestMoonSky() {
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
    img.src = "/images/night.png";
    imageRef.current = img;

    // Star class for twinkling stars
    class Star {
      x: number;
      y: number;
      size: number;
      brightness: number;
      twinkleSpeed: number;
      twinkleDirection: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height * 0.7; // Upper portion of screen
        this.size = Math.random() * 1.5 + 0.5;
        this.brightness = Math.random() * 0.5 + 0.5;
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        this.twinkleDirection = Math.random() > 0.5 ? 1 : -1;
      }

      update() {
        // Twinkling effect
        this.brightness += this.twinkleSpeed * this.twinkleDirection;
        if (this.brightness > 1) {
          this.brightness = 1;
          this.twinkleDirection = -1;
        } else if (this.brightness < 0.3) {
          this.brightness = 0.3;
          this.twinkleDirection = 1;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.brightness})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Firefly class for glowing particles
    class Firefly {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      brightness: number;
      pulseSpeed: number;
      pulseDirection: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.brightness = Math.random() * 0.5 + 0.5;
        this.pulseSpeed = Math.random() * 0.03 + 0.01;
        this.pulseDirection = Math.random() > 0.5 ? 1 : -1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around screen
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Pulsing effect
        this.brightness += this.pulseSpeed * this.pulseDirection;
        if (this.brightness > 1) {
          this.brightness = 1;
          this.pulseDirection = -1;
        } else if (this.brightness < 0.2) {
          this.brightness = 0.2;
          this.pulseDirection = 1;
        }
      }

      draw() {
        if (!ctx) return;

        // Glow effect
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 3
        );
        gradient.addColorStop(0, `rgba(144, 238, 144, ${this.brightness})`);
        gradient.addColorStop(
          0.5,
          `rgba(144, 238, 144, ${this.brightness * 0.5})`
        );
        gradient.addColorStop(1, "rgba(144, 238, 144, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    let stars: Star[] = [];
    let fireflies: Firefly[] = [];

    // Initialize entities
    function initializeEntities() {
      stars = [];
      fireflies = [];

      // Create stars
      const numStars = Math.floor(width / 10);
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }

      // Create fireflies
      const numFireflies = Math.floor(width / 50);
      for (let i = 0; i < numFireflies; i++) {
        fireflies.push(new Firefly());
      }
    }

    // Animation loop
    function animate() {
      if (!ctx || !imageRef.current) return;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Slow pan effect - move the background image slowly
      offsetXRef.current += 0.1;
      if (offsetXRef.current > width) {
        offsetXRef.current = 0;
      }

      // Calculate image dimensions to cover the screen with zoom
      const scale =
        Math.max(
          width / imageRef.current.width,
          height / imageRef.current.height
        ) * 1.2;
      const imgWidth = imageRef.current.width * scale;
      const imgHeight = imageRef.current.height * scale;

      // Center the image and apply pan
      const x = (width - imgWidth) / 2 - offsetXRef.current * 0.05;
      const y = (height - imgHeight) / 2;

      // Draw the background image with slow pan
      ctx.drawImage(imageRef.current, x, y, imgWidth, imgHeight);

      // Draw stars
      for (const star of stars) {
        star.update();
        star.draw();
      }

      // Draw fireflies
      for (const firefly of fireflies) {
        firefly.update();
        firefly.draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    // Wait for image to load before starting animation
    img.onload = () => {
      setCanvasDimensions();
      initializeEntities();
      animate();
    };

    // Handle resize
    const handleResize = () => {
      setCanvasDimensions();
      initializeEntities();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
