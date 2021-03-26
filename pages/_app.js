import { useState } from 'react';

import '../styles/CSS/globalStyles.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const [isScrollUp, setIsScrollUp] = useState(0);

  return (
    <div
      onWheel={(event) =>
        event.deltaY < 0 ? setIsScrollUp(-1) : setIsScrollUp(isScrollUp + 10)
      }
    >
      <NavBar isScrollUp={isScrollUp} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
