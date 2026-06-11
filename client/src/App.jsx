import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Homepage from "./Homepage";
import ScrollToTop from "./ScrollToTop";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListingDetails from "./ListingDetails";
import PostListing from "./PostListing";
import Testing from "./Testing";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <BrowserRouter>
      <Analytics/>
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/listingDetails/:id" element={<ListingDetails />} />
          <Route path='/postListing' element={<PostListing />} />
          <Route path="/Testing" element={<Testing/>}/>
          
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
