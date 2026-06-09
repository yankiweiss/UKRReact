import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Homepage from "./Homepage";
import ScrollToTop from "./ScrollToTop";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListingDetails from "./ListingDetails";
import PostListing from "./PostListing";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/listingDetails/:id" element={<ListingDetails />} />
          <Route path='/postListing' element={<PostListing />} />
          
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
