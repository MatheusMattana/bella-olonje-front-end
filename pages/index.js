import Head from 'next/head';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import FloatingPhones from '../components/FloatingPhones';
import HowTheAppWorks from '../components/HowTheAppWorks';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';

export default function Home({ request }) {
  const card1 = request.items[0];
  const card2 = request.items[1];
  const card3 = request.items[2];

  return (
    <main>
      <NavBar />
      <HeroSection />
      <FloatingPhones />
      <HowTheAppWorks card1={card1} card2={card2} card3={card3} />
      <DownloadApp />
      <Footer />
    </main>
  );
}

export async function getStaticProps(context) {
  const request = await fetch(
    'https://6059fb9db11aba001745d43f.mockapi.io/api/v1/cards',
  )
    .then(function (response) {
      if (response.status !== 200) {
        console.log(
          'Looks like there was a problem. Status Code: ' + response.status,
        );
        return;
      }
      return response.json();
    })
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });

  return {
    props: { request },
  };
}
