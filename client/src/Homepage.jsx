import { useEffect, useState } from "react";
import "./App.css";
import { IoIosSearch } from "react-icons/io";

import { Link } from "react-router-dom";
import Banner from "./Banner";

function Homepage() {
  const [listingData, setListingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [select, setSelect] = useState();
  const [area, setArea] = useState("");

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

  const cities = listingData?.map((listing) => listing.city);
  const bedrooms = listingData?.map((listing) => listing.bedrooms).sort();
  const baths = listingData.map((listing) => listing.baths).sort()

  const bedroomsSet = new Set(bedrooms);
  const citySet = new Set(cities);
  const bathsSet = new Set(baths)

  console.log(citySet);

  const featuredHouses = listingData?.filter((f) => f.featured === "true");

  console.log(featuredHouses);

  return (
    <>
      {/* search section */}

      <Banner />

      <main className="homepage">
        {/*<section className="search-parent">
          <div className="search-outer-container">
            <div className="area-button button-flex">
              <h4 style={{ margin: "0px" }}>Area</h4>
              <input
                type="text"
                placeholder="Search Area"
                onFocus={() => setSelect(select === "area" ? "" : "area")}
                value={area}
              ></input>

              {select === "area" && (
                <div className="city-container">
                  {[...citySet].map((city) => (
                    <div
                      className="select-city"
                      onClick={() => {
                        setArea(city);
                        setSelect("");
                      }}
                    >
                      {city}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="area-button button-flex">
              <h4 style={{ margin: "0px" }}>Bedrooms</h4>

              <select>
                {[...bedroomsSet].map((beds) => (
                  <option>{beds}</option>
                ))}
              </select>
            </div>

            <div className="area-button button-flex">
              <h4 style={{ margin: "0px" }}>Baths</h4>

              <select>
                {[...bathsSet].map((bath) => (
                  <option>{bath}</option>
                ))}
             
              </select>
            </div>

            <div className="search-icon-container">

          <IoIosSearch fontSize={'45px'}/>
          </div>

          </div>

       
        </section>*/}

        <section className="featured-listing"  >
          <h1 className="green600">Featured Homes</h1>

          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
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

                        <p style={{ margin: "2px 0px" }}>
                          Bedrooms {listing.bedrooms} - Baths {listing.baths}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
          </div>

          <div></div>
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

                      <p style={{ margin: "2px 0px" }}>
                        Bedrooms {listing.bedrooms} - Baths {listing.baths}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
        </section>

        <div className="parent">
          <Link to={"/Testing"}>
            <button className="testing-button">Test</button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Homepage;
