import React, { useRef } from "react";
import { useGesture } from "@use-gesture/react";
import "./DomeGallery.css";

export default function DomeGallery({
  images = [
    { src: "/events/frnd.jpg", alt: "Friends Event" },
    {src: "/events/frnd.jpg", alt: "Friends Event" },
    { src: "/events/frnd.jpg", alt: "Friends Event" },
    {src: "/events/frnd.jpg", alt: "Friends Event" },
   {src: "/events/frnd.jpg", alt: "Friends Event" },
    { src: "/events/frnd.jpg", alt: "Friends Event" },
    {src: "/events/frnd.jpg", alt: "Friends Event" },
    { src: "/events/frnd.jpg", alt: "Friends Event" },
    {src: "/events/frnd.jpg", alt: "Friends Event" },
    {src: "/events/frnd.jpg", alt: "Friends Event" },
    
  ],
}) {
  const stageRef = useRef(null);

  // ✅ gesture control for rotation
  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => {
      if (stageRef.current) {
        stageRef.current.style.transform = `rotateX(${y / 5}deg) rotateY(${x / 5}deg)`;
      }
    },
  });

  return (
    <div className="sphere-root">
      <div className="sphere-main" {...bind()}>
        <div className="stage" ref={stageRef}>
          <div className="sphere">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="item"
                style={{
                  transform: `rotateY(${(360 / images.length) * idx}deg) translateZ(300px)`,
                }}
              >
                <div className="item__image">
                  <img src={img.src} alt={img.alt} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
