import React, { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.style.position = "fixed";
    cursor.style.top = "0";
    cursor.style.left = "0";
    cursor.style.width = "12px"; // menor tamanho
    cursor.style.height = "12px";
    cursor.style.backgroundColor = "#ff007f"; // rosa sólido
    cursor.style.borderRadius = "50%";
    cursor.style.pointerEvents = "none";
    cursor.style.transform = "translate(-50%, -50%)";
    cursor.style.transition = "transform 0.15s ease-out";
    cursor.style.zIndex = "9999";
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX + 25; // distância lateral da seta
      mouseY = e.clientY + 25; // distância vertical da seta
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;
      cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    animate();

    return () => {
      document.body.removeChild(cursor);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return null;
};

export default Cursor;
