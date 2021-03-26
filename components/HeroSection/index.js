import React from 'react';

const index = () => {
  return (
    <>
      <div style={{ height: '9.75rem' }}></div>
      <section id="heroSectionContainer">
        <div>
          <h3>Food app</h3>
          <h1>
            Why stay hungry when <br /> you can order from Bella Olonje?
          </h1>
          <h3>Download the Bella Olonje's food app now on</h3>
          <div>
            <a
              href="https://play.google.com/store/apps/details?id=br.com.brainweb.ifood&hl=pt_BR&gl=US"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Playstore</button>
            </a>
            <a
              href="https://apps.apple.com/br/app/ifood-delivery-de-comida/id483017239"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Appstore</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
