import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const index = ({ isScrollUp }) => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setScrollY(window.pageYOffset);
  }, [isScrollUp]);

  return (
    <section
      id="navContainer"
      style={
        isNavBarOpen == false
          ? isScrollUp < 0
            ? { marginTop: '0' }
            : scrollY > 100
            ? { marginTop: '-9.75rem' }
            : { marginTop: '0' }
          : { marginTop: '0' }
      }
    >
      <nav id="navBarContainer">
        <img src="/BellaOlongeLogo.png" alt="Web Site Logo Bella Olonge" />
        <ul id="navBarItems" role="list">
          <li>
            <Link href="/">
              <a className="selectedNavLink">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/product">
              <a>Product</a>
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <a>Faq</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        {isNavBarOpen ? (
          <span onClick={() => setIsNavBarOpen(false)}>X</span>
        ) : (
          <img
            src="hamburguer.png"
            alt="mobile menu icon"
            onClick={() => setIsNavBarOpen(true)}
          />
        )}

        {isNavBarOpen && (
          <ul id="navBarMobile" role="list">
            <li>
              <Link href="/">
                <a className="selectedNavLink">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/product">
                <a>Product</a>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <a>Faq</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </section>
  );
};

export default index;
