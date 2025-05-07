import { useEffect, useRef } from 'react';

export default function Card() {
  const cardRef = useRef(null);
  let bounds;

  function rotateToMouse(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    };
    const distance = Math.sqrt(center.x**2 + center.y**2);
    
    if (cardRef.current) {
      cardRef.current.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance)* 2}deg
        )
      `;
      
      const glowElement = cardRef.current.querySelector('.glow');
      if (glowElement) {
        glowElement.style.backgroundImage = `
          radial-gradient(
            circle at
            ${center.x * 2 + bounds.width/2}px
            ${center.y * 2 + bounds.height/2}px,
            #ffffff55,
            #0000000f
          )
        `;
      }
    }
  }

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    function handleMouseEnter() {
      bounds = card.getBoundingClientRect();
      document.addEventListener('mousemove', rotateToMouse);
    }

    function handleMouseLeave() {
      document.removeEventListener('mousemove', rotateToMouse);
      card.style.transform = '';
      card.style.background = '';
    }

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup event listeners on unmount
    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', rotateToMouse);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="card" ref={cardRef}>
      3D Card
      <div className="glow" />
    </div>
  );
}