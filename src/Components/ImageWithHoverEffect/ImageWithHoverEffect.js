import React, { useState } from "react";
import "./ImageWithHoverEffect.css";
// import Myimage from '../../Media/brajesh.jpg'

const ImageWithHoverEffect = ({ src, alt }) => {
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
  });

  const handleMouseMove = (e) => {
    const { offsetWidth: width, offsetHeight: height } = e.target;
    const { offsetX: x, offsetY: y } = e.nativeEvent;

    const rotateX = ((y / height) * 30) - 15; // Range of -15 to 15
    const rotateY = ((x / width) * 30) - 15; // Range of -15 to 15

    setTransform({
      rotateX,
      rotateY,
    });
  };

  const handleMouseLeave = () => {
    setTransform({
      rotateX: 0,
      rotateY: 0,
    });
  };

  return (
    <div
      className="image-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="hover-image"
        src={src}
        alt={alt}
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        }}
      />
    </div>
  );
};

export default ImageWithHoverEffect;
