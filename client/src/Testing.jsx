
import { Link } from "react-router-dom";
function Testing() {
  return (
    <>

    <Link to={'/'}><h3>{`<= Homepage`}</h3></Link>
    <section style={{minHeight: '250px', backgroundColor: 'red', width: '100%', display: 'flex'}}>
      <div style={{width: '50%', backgroundColor: 'yellow'}}>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </section>

    <div>
<h1>we will prevail</h1>
    </div>
    </>
  );
}

export default Testing;
