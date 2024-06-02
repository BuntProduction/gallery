import React, { useEffect, useRef, useState } from 'react';
import './css/Gallery.css';
import Paint1 from './css/img/paints/paint1-compressed.webp';
import Paint2 from './css/img/paints/paint2-compressed.webp';
import Paint3 from './css/img/paints/paint3-compressed.webp';

const portraits = [
  { id: 1, name: '[1] Ballerina Sitting in an Interior - Yi Ren', image: Paint1 },
  { id: 2, name: '[2] Abstract painting - Rahul Pandit', image: Paint2 },
  { id: 3, name: '[3] Black and White Abstract Painting - Steve Johnson', image: Paint3 }
];

const Gallery = () => {
  const galleryRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (!galleryRef.current) return;

      const gallery = galleryRef.current;
      const galleryTop = gallery.offsetTop;

      if (window.scrollY >= galleryTop) {
        setIsSticky(true);
        setScrollOffset(window.scrollY - galleryTop);

        const leftmostPortrait = gallery.querySelector('.portraitContainer');
        if (leftmostPortrait) {
          const rect = leftmostPortrait.getBoundingClientRect();
          setShowTitle(rect.right >= window.innerWidth);
        }
      } else {
        setIsSticky(false);
        setScrollOffset(0);
        setShowTitle(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  return (
    <div className="galleryWrapper" ref={galleryRef}>
      <div className={`gallery ${isSticky && !isMobile ? 'sticky' : ''}`}>
        {isMobile && (
          <div className="titleWrapper">
            <h1>discover the</h1>
            <h1>gallery</h1>
            <ul>
              {portraits.map((portrait) => (
                <li key={portrait.id}>{portrait.name}</li>
              ))}
            </ul>
          </div>
        )}
        {portraits.map((portrait, index) => (
          <div
            key={portrait.id}
            className="portraitContainer"
            style={{
              transform: !isMobile
                ? `translateX(${Math.min(
                    index === 0 ? scrollOffset * 1.2 : index === 1 ? scrollOffset * 0.6 : 0,
                    window.innerWidth * 2 / 3 - scrollbarWidth + 5
                  )}px)`
                : 'none',
              zIndex: index === 0 ? 3 : index === 1 ? 2 : 1
            }}
          >
            <img src={portrait.image} alt={portrait.name} className="portrait" loading="eager" />
            {!isMobile && index === 0 && (
              <div className={`titleWrapper ${showTitle ? 'visible' : ''}`} style={{ showTitle }}>
                <h1>discover the</h1>
                <h1>gallery</h1>
                <ul>
                  {portraits.map((portrait) => (
                    <li key={portrait.id}>{portrait.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
