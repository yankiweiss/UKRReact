// i must have like a nav bar on top instead of hitting the back browser.

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useRef } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Banner from "./Banner";

// fixed sizing vs relative

//
function ListingDetails() {
  const [listing, setListing] = useState({});
  const [currentImage, setCurrentImage] = useState(0);
  const mainImage = useRef(null);
  const [loading, setLoading] = useState(true);

  const { uploadedFiles } = listing;

  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === uploadedFiles.length - 1 ? 0 : prevImage + 1,
    );
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? 0 : prevImage - 1));
  };

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://www.jwprosoftwaresolutions.com/listing/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setListing(data);
        setLoading(false);
      })

      .catch((error) => console.error(error));
  }, []);


  const formatNumbers = (number) => {
    const usdFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return usdFormatter.format(number);
  };

  console.log(listing);

  return (
    <>
      <Banner />
      <div className="listing-details-page" style={{ minHeight: "1000px" }}>
        {loading ? (
          <>
            <div
              className="top-heading skeleton"
              style={{ width: "70%", height: "25px", margin: "35px auto" }}
            ></div>

            <div className="pic-container skeleton"></div>
          </>
        ) : (
          <>
            <div className="top-heading">
              <Link to="/">
                <FaLongArrowAltLeft color="#319648" fontSize={50} />{" "}
              </Link>

              <h1 className="bold-Dark">{listing.address}</h1>
            </div>

            <section className="beds-baths">
              <p>
                {" "}
                {listing?.bedrooms} Bedrooms{"    "} - {"    "}
                {listing?.baths} Baths - {listing?.city}
              </p>
            </section>

            <div className="pic-container">
              <div className="main-pic">
                <button
                  onClick={prevImage}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "10%",
                    border: "none",
                  }}
                >
                  <IoIosArrowDropleft
                    color="#1bd643"
                    stroke="white"
                    fontSize={65}
                  />{" "}
                </button>
                <img
                  src={listing?.uploadedFiles?.[currentImage]}
                  ref={mainImage}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                  }}
                ></img>

                <button
                  onClick={nextImage}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10%",
                    border: "none",
                  }}
                >
                  <IoIosArrowDropright color="#1bd643" fontSize={65} />{" "}
                </button>
              </div>

              <div className="pic-column">
                <img
                  src={listing?.uploadedFiles?.[1]}
                  style={{ width: "100%", height: "50%" }}
                ></img>

                <img
                  src={listing?.uploadedFiles?.[2]}
                  style={{ width: "100%", height: "50%" }}
                ></img>
              </div>

              <div className="pic-column">
                <img
                  src={listing?.uploadedFiles?.[3]}
                  style={{
                    width: "100%",
                    height: "50%",
                    borderTopRightRadius: "10px",
                  }}
                ></img>

                <img
                  src={listing?.uploadedFiles?.[4]}
                  style={{
                    width: "100%",
                    height: "50%",
                    borderBottomRightRadius: "10px",
                  }}
                ></img>
              </div>
            </div>

            <div
              className="card"
              style={{ marginTop: "15px", display: "flex" }}
            >
              <section className="description-contact-flex">
                <div className="description">
                  <h2
                    className=" bold-Dark main-header"
                    style={{ margin: "0%" }}
                  >
                    Description
                  </h2>

                  <hr className="main-underline" />

                  <p style={{ fontStyle: "italic", width: "100%" }}>
                    {listing?.description}
                  </p>
                </div>


                <div
                  className="contact-quick-details"
                  style={{ marginTop: "2%" }}
                >
                  <h2
                    className=" bold-Dark main-header"
                    style={{ margin: "0%" }}
                  >
                    Contact
                  </h2>

                  <hr className="main-underline" />

                  <h3>{`Phone: ${listing?.phone}`}</h3>

                  <h3>{`Email: ${listing?.email}`}</h3>
                </div>
              </section>

              <div className="price_container">
                <h2 style={{ textAlign: "center",  marginBottom: '0px' }}>Pricing:</h2>

                

                <hr className="main-underline" style={{ width: "85%" }} />

                {listing?.callForPricing === true ? (
                  <p style={{ textAlign: "center" }}>Please call for Pricing</p>
                ) : (
                  <>
                    <p
                      style={{ textAlign: "center" }}
                    >{`Weekend - ${formatNumbers(listing?.pricing.weekend)}`}</p>

                    <p
                      style={{ textAlign: "center" }}
                    >{`Week - ${formatNumbers(listing?.pricing.week)}`}</p>

                    {listing?.pricing.firstHalf != null && (
                      <h2
                        style={{ textAlign: "center" }}
                      >{`First Half - $10000`}</h2>
                    )}

                    {listing?.pricing.secondHalf != null && (
                      <h2
                        style={{ textAlign: "center" }}
                      >{`Second Half - $10000`}</h2>
                    )}

                    {listing?.pricing.fullSummer != null && (
                      <h2
                        style={{ textAlign: "center" }}
                      >{`Full Summer - $10000`}</h2>
                    )}
                  </>
                )}
              </div>
            </div>

            <div className="basic-info-container card">
              <h2 className="main-header" style={{ margin: "0%" }}>
                Basic Info
              </h2>
              <hr className="main-underline" />

              <ul>
                <li>
                  {" "}
                  <h3 className="bold-Dark">
                    Property Type: {listing?.propertyType}
                  </h3>
                </li>

                <li>
                  <div className="basic-info">
                    <h3 className="bold-Dark">Baths: {listing?.baths}</h3>
                  </div>
                </li>

                <li>
                  <div className="basic-info">
                    <h3 className="bold-Dark">Bedrooms: {listing?.bedrooms}</h3>
                  </div>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ListingDetails;
