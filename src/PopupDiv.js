// src/PopupDiv.js

import React, { useState } from "react";
import "./PopupDiv.css";

function PopupDiv() {
  const [isOpen, setIsOpen] = useState(false);
  const [snapPosition, setSnapPosition] = useState("closed");
  const [dragging, setDragging] = useState(false);
  const [dragY, setDragY] = useState(0);

  const handleButtonClick = () => {
    setIsOpen(true);
    setSnapPosition("half-open");
  };

  const handleCloseClick = () => {
    setIsOpen(false);
    setSnapPosition("closed");
  };

  const handleSnap = () => {
    if (snapPosition === "half-open") {
      setSnapPosition("full-open");
    } else if (snapPosition === "full-open") {
      setSnapPosition("half-open");
    }
  };
// Dragging Functionality
  const handleDragStart = (e) => {
    setDragging(true);
    setDragY(e.clientY);
  };
  const handleDrag = (e) => {
    if (dragging) {
      const deltaY = e.clientY - dragY;
      setDragY(e.clientY);

      const popupDiv = document.querySelector(".popup-div");
      if (popupDiv) {
        const currentTransform = window.getComputedStyle(popupDiv).transform;
        const currentY = currentTransform
          ? parseInt(currentTransform.split(",")[1], 10)
          : 0;
        const newY = currentY + deltaY;
        popupDiv.style.transform = `translateY(${newY}px)`;
      }
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  return (
    <div className={`popup-container ${isOpen ? "open" : ""}`}>
      <button onClick={handleButtonClick} className="open-button">
        Open Popup
      </button>
      {isOpen && (
        <div
          className={`popup-div ${snapPosition}`}
          onClick={handleSnap}
          onTransitionEnd={handleSnap}

          draggable={!dragging}
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}

        >
          <div className="handle">Drag me</div>
          <button className="close-button" onClick={handleCloseClick}>
            Close
          </button>
          <div id="mytxt">
          <p>
            In the whimsical land of Flibbertigibbet, residents spoke a language
            filled with Gobbledygook and engaged in daily activities like
            Wobbleflopping through the town square or engaging in Quizzaciously
            perplexing conversations. The local pastime was Lollygagging in the
            Snickerdoodle forest while sipping Zippity-doo-dah tea and sharing
            tales of Jibber-jabber adventures. Occasional rain showers of
            Bumbershoots would send everyone scrambling, but they'd always end
            up in fits of Blubbernut-induced laughter. The town's mascot, a
            giant Skedaddling Snugglebunny named Quibblesnatch, was the source
            of endless Fiddlesticks and Dingleberry-related amusement. Life in
            Flibbertigibbet was indeed a Malarkey-filled, Noodlebrained, and
            thoroughly Whatchamacallit kind of experience, where everyday
            occurrences were a Razzleberry of Jibberwocky and Snickerdoodle
            delights.
          </p>
          <p>
            In the whimsical land of Flibbertigibbet, residents spoke a language
            filled with Gobbledygook and engaged in daily activities like
            Wobbleflopping through the town square or engaging in Quizzaciously
            perplexing conversations. The local pastime was Lollygagging in the
            Snickerdoodle forest while sipping Zippity-doo-dah tea and sharing
            tales of Jibber-jabber adventures. Occasional rain showers of
            Bumbershoots would send everyone scrambling, but they'd always end
            up in fits of Blubbernut-induced laughter. The town's mascot, a
            giant Skedaddling Snugglebunny named Quibblesnatch, was the source
            of endless Fiddlesticks and Dingleberry-related amusement. Life in
            Flibbertigibbet was indeed a Malarkey-filled, Noodlebrained, and
            thoroughly Whatchamacallit kind of experience, where everyday
            occurrences were a Razzleberry of Jibberwocky and Snickerdoodle
            delights.
          </p>
          <p>
            In the whimsical land of Flibbertigibbet, residents spoke a language
            filled with Gobbledygook and engaged in daily activities like
            Wobbleflopping through the town square or engaging in Quizzaciously
            perplexing conversations. The local pastime was Lollygagging in the
            Snickerdoodle forest while sipping Zippity-doo-dah tea and sharing
            tales of Jibber-jabber adventures. Occasional rain showers of
            Bumbershoots would send everyone scrambling, but they'd always end
            up in fits of Blubbernut-induced laughter. The town's mascot, a
            giant Skedaddling Snugglebunny named Quibblesnatch, was the source
            of endless Fiddlesticks and Dingleberry-related amusement. Life in
            Flibbertigibbet was indeed a Malarkey-filled, Noodlebrained, and
            thoroughly Whatchamacallit kind of experience, where everyday
            occurrences were a Razzleberry of Jibberwocky and Snickerdoodle
            delights.
          </p>
          <p>
            In the whimsical land of Flibbertigibbet, residents spoke a language
            filled with Gobbledygook and engaged in daily activities like
            Wobbleflopping through the town square or engaging in Quizzaciously
            perplexing conversations. The local pastime was Lollygagging in the
            Snickerdoodle forest while sipping Zippity-doo-dah tea and sharing
            tales of Jibber-jabber adventures. Occasional rain showers of
            Bumbershoots would send everyone scrambling, but they'd always end
            up in fits of Blubbernut-induced laughter. The town's mascot, a
            giant Skedaddling Snugglebunny named Quibblesnatch, was the source
            of endless Fiddlesticks and Dingleberry-related amusement. Life in
            Flibbertigibbet was indeed a Malarkey-filled, Noodlebrained, and
            thoroughly Whatchamacallit kind of experience, where everyday
            occurrences were a Razzleberry of Jibberwocky and Snickerdoodle
            delights.
          </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupDiv;
