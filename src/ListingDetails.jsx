// i must have like a nav bar on top instead of hitting the back browser.

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ListingDetails() {
  const [listing, setListing] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://www.upstatekosherrentals.com/listing/${id}`)
      .then((response) => response.json())
      .then((data) => setListing(data))
      .catch((error) => console.error(error));
  }, []);

  console.log(listing);

  return (
    <>
      <div className="listing-details-page" style={{ minHeight: "1000px" }}>
        <Link to="/">
          <p>Go Back To Home Page</p>
        </Link>

        <h1 className="bold-Dark">{listing.address}</h1>

        <div className="listDetail-flex">
          <section
            style={{
              width: "1200px",
              height: "600px",
              borderRadius: "8px",
            }}
          >
            <img
              src={listing?.uploadedFiles?.[0]}
              style={{
                width: "85%",
                height: "100%",
                maxWidth: "100%",
                minHeight: "75%",
                maxHeight: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                display: "block",
                margin: 'auto'
              }}
            ></img>
          </section>

          <div className="listDetail-side-bar-flex">

          <section
            className="listDetail-top-side-bar "
            style={{
              border: "1px solid green",
              width: "400px",
              height: "auto",
              borderRadius: "8px",
              marginBottom: '15px'
            }}
          >
            <h2 className="text-center bold-Dark">Quick Facts:</h2>

            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>

            <h3 className="bold-Dark">{`Beds ${listing.bedrooms} `}</h3>

            <h3 className="bold-Dark">{`Baths ${listing.baths} `}</h3>

            </div>

            <h2 className="text-center bold-Dark">Price Breakdown:</h2>
          </section>

           <section
            className="listDetail-top-side-bar "
            style={{
              border: "1px solid green",
              width: "400px",
              height: "auto",
              borderRadius: "8px",
               marginBottom: '15px'
            }}
          >
           <h2 className="text-center bold-Dark">Available</h2>
          </section>

          <section
            className="listDetail-top-side-bar "
            style={{
              border: "1px solid green",
              width: "400px",
              height: "auto",
              borderRadius: "8px",
              marginBottom: '15px'
            }}
          >
           <h2 className="text-center bold-Dark">Ownership Details</h2>
          </section>

          </div>

          
        </div>


        <section
            className="listDetail-top-side-bar "
            style={{
              border: "1px solid green",
              width: "90%",
              height: "auto",
              borderRadius: "8px",
              marginTop: '20px'
            }}
          >
           <h2 className="text-center bold-Dark">Description</h2>
          </section>
      </div>
    </>
  );
}

export default ListingDetails;
