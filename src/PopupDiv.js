import React, { useState } from 'react';
import './PopupDiv.css';

function BottomSheet() {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(0);
  const [sheetHeight, setSheetHeight] = useState(50); // Initial height is 50vh
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const updateHeight = (height) => {
    setSheetHeight(height);
  };

  const showSheet = () => {
    setIsSheetOpen(true);
    updateHeight(50);
    document.body.style.overflow = 'hidden';
  };

  const hideSheet = () => {
    setIsSheetOpen(false);
    document.body.style.overflow = 'auto';
  };

  const dragStart = (e) => {
    setIsDragging(true);
    const pageY = e.pageY || (e.touches && e.touches[0].pageY);
    setStartY(pageY);
    setStartHeight(sheetHeight);
  };

  const dragging = (e) => {
    if (!isDragging) return;
    const pageY = e.pageY || (e.touches && e.touches[0].pageY);
    const delta = startY - pageY;
    const newHeight = startHeight + (delta / window.innerHeight) * 100;

    updateHeight(newHeight);
  };

  const dragStop = () => {
    setIsDragging(false);

    if (sheetHeight < 25) {
      hideSheet();
      updateHeight(0);
    } else if (sheetHeight > 75) {
      updateHeight(100);
    } else {
      updateHeight(50);
    }
  };

  return (
    <div>
      <button className="show-btn" onClick={showSheet}>
        Show Bottom Sheet
      </button>
      <div className={`bottom-sheet ${isSheetOpen ? 'show' : ''}`} onMouseUp={dragStop}>
        <div className="overlay" onClick={hideSheet}></div>
        <div className="content" style={{ height: `${sheetHeight}vh` }}>
          <div className="header">
            <div className="drag-icon" onMouseDown={dragStart} onMouseMove={dragging}>
              <span></span>
            </div>
          </div>
          <div className="body">
            <h2>Bottom Sheet Content</h2>
            <p>
              In the whimsical land of Flibbertigibbet, residents spoke a
              language filled with Gobbledygook and engaged in daily
              activities like Wobbleflopping through the town square or
              engaging in Quizzaciously perplexing conversations. The local
              pastime was Lollygagging in the Snickerdoodle forest while
              sipping Zippity-doo-dah tea and sharing tales of Jibber-jabber
              adventures. Occasional rain showers of Bumbershoots would send
              everyone scrambling, but they'd always end up in fits of
              Blubbernut-induced laughter. The town's mascot, a giant
              Skedaddling Snugglebunny named Quibblesnatch, was the source of
              endless Fiddlesticks and Dingleberry-related amusement. Life in
              Flibbertigibbet was indeed a Malarkey-filled, Noodlebrained, and
              thoroughly Whatchamacallit kind of experience, where everyday
              occurrences were a Razzleberry of Jibberwocky and Snickerdoodle
              delights.
            </p>
            <p>
              In the whimsical land of Flibbertigibbet, residents spoke a
              language filled with Gobbledygook and engaged in daily
              activities like Wobbleflopping through the town square or
              engaging in Quizzaciously perplexing conversations. The local
              pastime was Lollygagging in the Snickerdoodle forest while
              sipping Zippity-doo-dah tea and sharing tales of Jibber-jabber
              adventures. Occasional rain showers of Bumbershoots would send
              everyone scrambling, but they'd always end up in fits of
              Blubbernut-induced laughter. The town's mascot, a giant
              Skedaddling Snugglebunny named Quibblesnatch, was the source of
              endless Fiddlesticks and Dingleberry-related amusement. Life in
              Flibbertigibbet was indeed a Malarkey-filled, Noodlebrained, and
              thoroughly Whatchamacallit kind of experience, where everyday
              occurrences were a Razzleberry of Jibberwocky and Snickerdoodle
              delights.
            </p>
            <p>
              In the whimsical land of Flibbertigibbet, residents spoke a
              language filled with Gobbledygook and engaged in daily
              activities like Wobbleflopping through the town square or
              engaging in Quizzaciously perplexing conversations. The local
              pastime was Lollygagging in the Snickerdoodle forest while
              sipping Zippity-doo-dah tea and sharing tales of Jibber-jabber
              adventures. Occasional rain showers of Bumbershoots would send
              everyone scrambling, but they'd always end up in fits of
              Blubbernut-induced laughter. The town's mascot, a giant
              Skedaddling Snugglebunny named Quibblesnatch, was the source of
              endless Fiddlesticks and Dingleberry-related amusement. Life in
              Flibbertigibbet was indeed a Malarkey-filled, Noodlebrained, and
              thoroughly Whatchamacallit kind of experience, where everyday
              occurrences were a Razzleberry of Jibberwocky and Snickerdoodle
              delights.
            </p>
            <p>
              In the whimsical land of Flibbertigibbet, residents spoke a
              language filled with Gobbledygook and engaged in daily
              activities like Wobbleflopping through the town square or
              engaging in Quizzaciously perplexing conversations. The local
              pastime was Lollygagging in the Snickerdoodle forest while
              sipping Zippity-doo-dah tea and sharing tales of Jibber-jabber
              adventures. Occasional rain showers of Bumbershoots would send
              everyone scrambling, but they'd always end up in fits of
              Blubbernut-induced laughter. The town's mascot, a giant
              Skedaddling Snugglebunny named Quibblesnatch, was the source of
              endless Fiddlesticks and Dingleberry-related amusement. Life in
              Flibbertigibbet was indeed a Malarkey-filled, Noodlebrained, and
              thoroughly Whatchamacallit kind of experience, where everyday
              occurrences were a Razzleberry of Jibberwocky and Snickerdoodle
              delights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomSheet;
