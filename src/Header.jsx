import logo from "./assets/58f0fd75-23e6-4638-ae71-4b0307c4daf3 (1).png";

function Header() {
  return (
    <header>
      <img src={logo} width={200}></img>

      <div>
        <button>Share Your Space</button>

        <button>Sign In</button>

        <button>Contact Us:</button>
      </div>
    </header>
  );
}

export default Header;
