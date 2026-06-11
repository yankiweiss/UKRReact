import "./App.css";
import logo from "./assets/58f0fd75-23e6-4638-ae71-4b0307c4daf3 (1).png";

function Footer() {
  return (
    <>
      <hr className="divider"></hr>

      <section className="main-footer-flex">

        <div className="footer-about">
        <img src={logo} width={150}></img>

        <h3>About Upstate Kosher Rentals</h3>

        <p>
          We specialize in listing beautiful kosher bungalows and summer houses
          available for rent during the summer season and all year round.
          Whether you’re looking for a cozy getaway for the warm months or a
          long-term rental, our platform offers a curated selection of kosher
          properties to fit your needs. Explore trusted listings and find your
          perfect kosher home-away-from-home with ease and confidence.
        </p>

        </div>

        <div className="footer-contact">
          <h2 className="second-text">
            We would love to hear from you
            <br />
            please reach out to us for any help
            <br />
          </h2>
          <h2>
            <span style={{ textAlign: "center" }}>(845) 402-0053</span>
          </h2>
        </div>
      </section>

      <div style={{display: 'flex', justifyContent: 'center'}}>

      <p style={{color: 'black'}}>v-0-0-0</p>
      </div>
    </>
  );
}

export default Footer;
