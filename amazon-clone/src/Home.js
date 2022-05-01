import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://browneagletech.com/wp-content/uploads/2020/04/E-commerce_website_development.jpg"
          />

          <div className="home__row" id = 'products'>
            <Product
              id={0}
              title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
              price={14.59}
              image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"
              rating={5}
            />
            <Product
              id={1}
              title="Sencor 6 Speed Stand Mixer With Pouring Shield and 4 Specialized Metal Attachments and Stainless Steel Bowl, 4.2 Qt, Red"
              price={117.99}
              image="https://m.media-amazon.com/images/I/61KWb74s7kL._AC_UY436_FMwebp_QL65_.jpg"
              rating={4}
            />
          </div>

    

          <div className="home__row">
            <Product
              id={2}
              title="Apple Watch Series 7 [GPS 41mm] Smart Watch w/Blue Aluminum Case with Abyss Blue Sport Band. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant"
              price={329.0}
              image="https://m.media-amazon.com/images/I/71GIYSZpW+L._AC_UY436_FMwebp_QL65_.jpg"
              rating={5}
            />
            <Product
              id={3}
              title="Tents, 6/8 Person 60 Seconds Set Up Camping Tent, Waterproof Pop Up Tent with Top Rainfly, Instant Cabin Tent, Advanced Venting Design, Provide Gate Mat"
              price={138.99}
              image="https://m.media-amazon.com/images/I/615nxsHPb+L._AC_UY436_FMwebp_QL65_.jpg"
              rating={3}
            />
            <Product
              id={4}
              title="IOTXY Wooden Open Shelf Bookcase - 3-Tier Floor Standing Display Cabinet Rack with Legs, 10 Cubes Bookshelf, Tiffany-Green"
              price={139.99}
              image="https://m.media-amazon.com/images/I/61pCpzR1X6L._AC_SX679_.jpg"
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
              id={5}
              title="2021 Apple MacBook Pro (16-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 512GB SSD) - Space Gray"
              price={2399}
              image="https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_UL640_FMwebp_QL65_.jpg"
              rating={4}
            />
          </div>
        </div>
      </div>
    );
}

export default Home
