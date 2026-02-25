import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    generateStars();

    const handleResize = () => generateStars();

    const handleMouseMove = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 8000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        depth: Math.random() * 30 + 20,
      });
    }

    setStars(newStars);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {/* Cursor Glow */}
      <div
        className="absolute rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.6), transparent)",
          left: mouse.x - 150,
          top: mouse.y - 150,
          transition: "transform 0.1s linear",
        }}
      />

      {/* Stars */}
      {stars.map((star) => {
        const dx = mouse.x - star.x;
        const dy = mouse.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let offsetX = 0;
        let offsetY = 0;

        if (distance < 150) {
          offsetX = -dx * 0.05;
          offsetY = -dy * 0.05;
        }

        return (
          <div
            key={star.id}
            className="absolute rounded-full star-twinkle bg-foreground/70"
            style={{
              width: star.size,
              height: star.size,
              left: star.x + offsetX,
              top: star.y + offsetY,
            }}
          />
        );
      })}
    </div>
  );
};