import React from 'react';

const index = () => {
  return (
    <section id="downloadAppContainer">
      <div>
        <h2>Download the app now.</h2>
        <h3>
          Available on your favorite store. Start your premium experience now
        </h3>
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
  );
};

export default index;
