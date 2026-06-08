// i must have like a nav bar on top instead of hitting the back browser.

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaLongArrowAltLeft} from "react-icons/fa";
import { useRef } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";


//useState,
// 1. basic useState set up,
//2. passing the previous state count
//3. passing the previous value to the next previous.
//4. having the use state only ones.

function ListingDetails() {
  const [listing, setListing] = useState({});
  const [currentImage, setCurrentImage] = useState(0)
  const mainImage = useRef(null);


  const {uploadedFiles } = listing;

 

  console.log(uploadedFiles)

  

  const nextImage = () => {
    setCurrentImage((prevImage) => 
      prevImage === uploadedFiles.length - 1 ?  0  : prevImage + 1
    )} 

   const prevImage = () => {
   setCurrentImage((prevImage) => 
  prevImage ===  0 ? 0 : prevImage - 1)
  
  } 

  

  

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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "45px",
            width: "65vw",
          }}
        >
          <Link to="/">
            <FaLongArrowAltLeft color="#319648" fontSize={50} />{" "}
            {/*<span style={{color: '#174622', fontSize : '15px'}}>Back To Home</span>*/}
          </Link>

          <h1 className="bold-Dark">{listing.address}</h1>

          {/* 

1. display flex,
2. justify content: center,  space between
3. align items 
4. flex-direction: column/ rows.
5. gap.
6. flex-wrap
7. align -content 
8. flex basis
9. flex-grow
 */}
        </div>

        <div className="pic-container">
          <div>
            <img
              src={listing?.uploadedFiles?.[currentImage]}
              ref={mainImage}
              width={705}
              style={{
                borderRadius: "8px",
                MaxWidth: "700px",
                width: "700px",
                height: '500px',
                maxHeight: "500px",
            
              
              }}
            ></img>
          </div>
          <div className="pic-column">
            <div>
              <img
                src={listing?.uploadedFiles?.[1]}
                width={335}
                style={{
                  MaxWidth: "315px",
                  width: "315px",
                  maxHeight: "240px",
                  minHeight: "240px",
               
                }}
              ></img>
            </div>
            <div>
              <img
                src={listing?.uploadedFiles?.[2]}
                width={335}
                style={{
                  MaxWidth: "315px",
                  width: "315px",
                  maxHeight: "240px",
                  minHeight: "240px",
                }}
              ></img>
            </div>
          </div>
          <div className="pic-column">
            <div>
              <img
                src={listing?.uploadedFiles?.[3]}
                style={{
                  borderTopRightRadius: "8px",
                  MaxWidth: "315px",
                  width: "315px",
                  maxHeight: "240px",
                  minHeight: "240px",
                }}
              ></img>
            </div>
            <div>
              <img
                src={listing?.uploadedFiles?.[4]}
                style={{
                  borderBottomRightRadius: "8px",
                  MaxWidth: "315px",
                  width: "315px",
                  maxHeight: "240px",
                  minHeight: "240px",
                }}
              ></img>
            </div>
          </div>
        </div>

     <button onClick={prevImage}>
         <IoIosArrowDropleft color="#1bd643" stroke="white" fontSize={65} style={{position: 'absolute', top: '450px', left: '300px'}}/>{" "}
         </button>
         <button onClick={nextImage}>
         <IoIosArrowDropright color="#1bd643" fontSize={65} style={{position: 'absolute', top: '450px', left: '900px'}}/>{" "}
         </button>

        {/*<div className="listDetail-side-bar-flex">

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

          </div>*/}

        {/*</div>*/}

        <section
          className="listDetail-top-side-bar "
          style={{
            border: "1px solid green",
            width: "90%",
            height: "auto",
            borderRadius: "8px",
            marginTop: "20px",
          }}
        >
          <h2 className="text-center bold-Dark">Description</h2>
        </section>
      </div>


     
    </>
  );
}

export default ListingDetails;
