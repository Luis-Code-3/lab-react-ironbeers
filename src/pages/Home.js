import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <h2>Home</h2>
        <Link to={'/beers'}>All Beers</Link>
        <Link to={'/random-beer'}>Random Beer</Link>
        <Link to={'/new-beer'}>Add Beer</Link>
      </div>
    );
  }
  
  export default Home;