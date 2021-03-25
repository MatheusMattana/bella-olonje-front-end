import React from 'react';

const index = ({ card1, card2, card3 }) => {
  return (
    <section id="howTheAppWorksContainer">
      <div className="line" />
      <h2>How the app works</h2>
      <div className="cardContainer">
        <div>
          <img
            src={card1.image}
            alt="A phone demonstrating how the app works"
          />
        </div>
        <div>
          <h3>{card1.subtitle}</h3>
          <h2>{card1.title}</h2>
          <p>{card1.description}</p>
        </div>
      </div>
      <div className="cardContainer">
        <div>
          <h3>{card2.subtitle}</h3>
          <h2>{card2.title}</h2>
          <p>{card2.description}</p>
        </div>
        <div>
          <img
            src={card2.image}
            alt="A phone demonstrating how the app works"
          />
        </div>
      </div>
      <div className="cardContainer">
        <div>
          <img
            src={card3.image}
            alt="A phone demonstrating how the app works"
          />
        </div>
        <div>
          <h3>{card3.subtitle}</h3>
          <h2>{card3.title}</h2>
          <p>{card3.description}</p>
        </div>
      </div>
    </section>
  );
};

export default index;
