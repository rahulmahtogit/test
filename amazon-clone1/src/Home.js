import React from "react";
import "./Home.css";
import Product from "./Product";
import { withRouter, Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_JPPREviews/e56c061b-be12-489c-b7dc-7fe406a9bd10._UR3000,600_SX1500_FMwebp_.jpg"
        ></img>
      </div>
      <div className="home__row">
        <Product
          id="1h6"
          title="Pigeon by Stovekraft Amaze Plus Kettle with Stainless Steel Body, 1.8 litres boiler for Water, instant noodles, soup etc."
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/613-UvYUh5L._SL1500_.jpg"
          rating={5}
        />
        <Product
          id="1ba6"
          title="Samsung Galaxy A51 (Blue, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
          price={299.99}
          image="https://images-na.ssl-images-amazon.com/images/I/81qVoEhymIL._SL1500_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="1bsb"
          title="Flybot Rock Over-Ear Bluetooth Headphone with Seamless Controls, IPX 5 Sweat Proof Cushions, up to 6 Hours Playtime (Black-Silver)"
          price={14.99}
          image="https://images-na.ssl-images-amazon.com/images/I/61wHnjRO01L._SL1500_.jpg"
          rating={4}
        />
        <Product
          id="baha"
          title="New Apple iPhone 12 Pro Max (256GB) - Graphite"
          price={1999.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg"
          rating={5}
        />
        <Product
          id="abhb"
          title="TP-Link Deco E4 Whole Home Mesh Wi-Fi System, Seamless Roaming and Speedy (AC1200), Work with Amazon Echo/Alexa and Wi-Fi Booster, Parent Control Router, Pack of 2"
          price={49.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51DPd-8SSoL._SL1200_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="ahba0b"
          title="Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silver"
          price={999.99}
          image="https://images-na.ssl-images-amazon.com/images/I/61vE8mR%2BtcL._SL1500_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
};

export default Home;
// export default withRouter(Home);
