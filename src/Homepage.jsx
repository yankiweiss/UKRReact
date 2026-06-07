import { useEffect, useState } from "react";
import "./App.css";

import {Link} from 'react-router-dom';


function Homepage() {
  const [listingData, setListingData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false)
    fetch("https://upstatekosherrentals.com/listing")
      .then((response) => response.json())
      .then((data) => {
         setListingData(data);
      setLoading(true)
  })

      .catch((error) => { console.error(error);
        setLoading(false)
      });
    
  }, []);

  

  const groupByArea = listingData?.length
    ? Object.groupBy(listingData, ({ city }) => city)
    : {};

    const allListings = Object.values(groupByArea).flat();

  

  console.log(listingData)

  return (
    <>
      

      {/* search section */}

      <section>
        <h1 className="green600" >All Homes:</h1>

        {/* featured homes */}
      </section>

      <section style={{display: 'flex', flexWrap: 'wrap', minHeight: '750px'}}>
        
        
              {allListings.map((listing) => (
               
        <Link to={`/listingDetails/${listing._id}`}><div className="prop-container" key={listing.id}>

                 
                 
                  <img
                    src={listing.uploadedFiles[0]}
                    style={{
                      width: "100%",
                      height: "75%",
                      maxWidth: "100%",
                      minHeight: '75%',
                      maxHeight: '100%',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      display: 'block'
                    }}
                  ></img>

                   <div className="area">{listing.city}</div>
                  <p style={{margin: '0px'}}>{listing.street}</p>
                  <div style={{display: 'flex', justifyContent: 'start', margin: '0px', gap: '25px', height: '15px'}}>
                    <p style={{margin: '5px 0px'}}>Beds {listing.bedrooms}</p><p style={{margin: '5px 0px'}}>Baths {listing.baths}</p>
                  </div>
                </div></Link>
              ))}
            </section>
        
      
      
    </>
  );
}

export default Homepage;
