import { useEffect, useRef, useState } from "react";
import { getStroke } from "perfect-freehand";

interface Point {
  x: number;
  y: number;
  pressure: number;
}

function getSvgPathFromStroke(points: number[][]) {
  if (!points.length) return "";

  const pathData = points.reduce(
    (accumulator, [x0, y0], currentIndex, pointsArray) => {
      const [x1, y1] = pointsArray[(currentIndex + 1) % pointsArray.length];
      accumulator.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
      return accumulator;
    },
    ["M", ...points[0], "Q"]
  );

  pathData.push("Z");
  return pathData.join(" ");
}

export function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentPoints, setCurrentPoints] = useState<Point[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    // Set canvas size to match viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      context.strokeStyle = "#000";
      context.lineWidth = 4;
      context.lineCap = "round";
      context.lineJoin = "round";
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  useEffect(() => {
    if (!currentPoints.length) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Get stroke outline points
    const stroke = getStroke(
      currentPoints.map((point) => [point.x, point.y, point.pressure]),
      {
        size: 16,
        thinning: 0.5,
        smoothing: 0.5,
        streamline: 0.5,
      }
    );

    // Create SVG path
    const pathData = getSvgPathFromStroke(stroke);
    const path = new Path2D(pathData);

    // Fill the path
    ctx.fillStyle = "#000";
    ctx.fill(path);
  }, [currentPoints]);

  const handlePointerDown = (event: React.PointerEvent) => {
    event.preventDefault();
    setIsDrawing(true);
    setCurrentPoints([
      {
        x: event.clientX,
        y: event.clientY,
        pressure: event.pressure,
      },
    ]);
  };

  const handlePointerMove = (event: React.PointerEvent) => {
    event.preventDefault();
    if (!isDrawing) return;

    setCurrentPoints((points) => [
      ...points,
      {
        x: event.clientX,
        y: event.clientY,
        pressure: event.pressure,
      },
    ]);
  };

  const handlePointerUp = (event: React.PointerEvent) => {
    event.preventDefault();
    setIsDrawing(false);
    // TODO: Here I would sync the final stroke with Liveblocks
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 touch-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{ touchAction: "none" }}
    />
  );
}
