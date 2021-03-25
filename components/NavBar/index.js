import React from 'react';
import Link from 'next/link';

const index = () => {
  return (
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
    </nav>
  );
};

export default index;
