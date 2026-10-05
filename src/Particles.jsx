import { useEffect } from "react";

function Particles() {
  useEffect(() => {
    const container = document.getElementById("particles-container");

    for (let i = 0; i < 300; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = Math.random() * 100 + "vw";
      p.style.animationDuration = (2 + Math.random() * 3) + "s";  // very fast
      p.style.animationDelay = (Math.random() * 2) + "s";         // barely staggered
      p.style.width = p.style.height = (Math.random() * 8 + 4) + "px"; // 4px–12px
      container.appendChild(p);
    }

    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  return <div id="particles-container" />;
}

export default Particles;