import React, { useEffect, useRef, useState } from 'react';
import './css/Header.css';

const Header = () => {
  const headerRef = useRef(null);
  const navbarRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      const headerHeight = header.getBoundingClientRect().height;
      const navbarTopPosition = headerHeight;

      if (window.scrollY >= navbarTopPosition) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={"header"} ref={headerRef}>
      <div className={"title"}>
        <div className={"right"}>bunt gallery</div>
      </div>
      <div className={`${"navbar"} ${isSticky ? "sticky" : ''}`} ref={navbarRef}>
        <div className={"navItemLeft"}>bunt</div>
        <div className={"navItem"}><a href="#about">about</a></div>
        <div className={"navItem"}><a href="#gallery">gallery</a></div>
        <div className={"navItemRight"}>2024</div>
      </div>
    </div>
  );
};

export default Header;
