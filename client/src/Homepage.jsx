import { useEffect, useState } from "react";
import "./App.css";

import { Link } from "react-router-dom";
import Banner from "./Banner";

function Homepage() {
  const [listingData, setListingData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.jwprosoftwaresolutions.com/listing")
      .then((response) => response.json())
      .then((data) => {
        setListingData(data);
        setLoading(false);
      })

      .catch((error) => {
        console.error(error);
      });
  }, []);

  const groupByArea = listingData?.length
    ? Object.groupBy(listingData, ({ city }) => city)
    : {};

  const allListings = Object.values(groupByArea).flat();


const featuredHouses = listingData?.filter((f) => f.featured === 'true');

console.log(featuredHouses)

  return (
    <>
      {/* search section */}

      <Banner />

      <main className="homepage">


        <section className="featured-listing">

          <h1 className="green600">Featured Homes</h1>

          <div className="featured-listings-displayed">

            {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div className="prop-container" key={index}>
                <div className="prop-container-img skeleton"></div>

                <div
                  className="home-beds-baths skeleton"
                  style={{ marginTop: "20px" }}
                ></div>

                <div
                  className="home-beds-baths skeleton"
                  style={{ marginTop: "10px" }}
                ></div>
              </div>
            ))
          : featuredHouses.map((listing) => (
              <Link to={`/listingDetails/${listing._id}`}>
                <div className="prop-container" key={listing.id}>
                  <img
                    src={listing.uploadedFiles[0]}
                    className="prop-container-img"
                  ></img>

                  <div className="area">{listing.city}</div>
              
                  <div className="home-beds-baths">
                        <p style={{ margin: "0px" }}>{listing.street}</p>

                    <p style={{ margin: "2px 0px" }}>Beds {listing.bedrooms} - Baths {listing.baths}</p>
                   
                  
                  </div>
                </div>
              </Link>
                
            ))}
            </div>


          <div>

          </div>


        </section>

      <section>
        <h1 className="green600">All Homes</h1>

        {/* featured homes */}
      </section>

      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          minHeight: "750px",
          justifyContent: "center",
        }}
      >
        {loading
          ? Array.from({ length: 15 }).map((_, index) => (
              <div className="prop-container" key={index}>
                <div className="prop-container-img skeleton"></div>

                <div
                  className="home-beds-baths skeleton"
                  style={{ marginTop: "20px" }}
                ></div>

                <div
                  className="home-beds-baths skeleton"
                  style={{ marginTop: "10px" }}
                ></div>
              </div>
            ))
          : allListings.map((listing) => (
              <Link to={`/listingDetails/${listing._id}`}>
                <div className="prop-container" key={listing.id}>
                  <img
                    src={listing.uploadedFiles[0]}
                    className="prop-container-img"
                  ></img>

                  <div className="area">{listing.city}</div>
              
                  <div className="home-beds-baths">
                        <p style={{ margin: "0px" }}>{listing.street}</p>

                    <p style={{ margin: "2px 0px" }}>Beds {listing.bedrooms} - Baths {listing.baths}</p>
                   
                    
                  </div>
                </div>
              </Link>
            ))}
      </section>

      <div className="parent">

      <Link to={'/Testing'}>
      <button className="testing-button">Test</button></Link>

      </div>
      </main>
    </>
  );
}

export default Homepage;
