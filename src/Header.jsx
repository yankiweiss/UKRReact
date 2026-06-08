import logo from "./assets/58f0fd75-23e6-4638-ae71-4b0307c4daf3 (1).png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>

    <div className="main-header">
    
          <header>
     <Link to={'/'}><img src={logo} width={200}></img></Link> 

      <div>
        <button>Share Your Space</button>

        <button>Sign In</button>

        <button>Contact Us:</button>
      </div>
      
    </header>

    
</div>
    
    </>

  );
}

export default Header;
