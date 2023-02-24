import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListBeer() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {

    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response) => {
      setBeers(response.data)
    })
    .catch((err) => {
      console.log(err);
    })

  }, [])


    return (
      <div>
        <h2>All Beers</h2>

        {
          beers.length ?
            <div>
              {beers.map((beer) => {
                return (
                  <div key={beer._id}>
                  <Link to={`/beers/${beer._id}`}>
                    <img src={beer.image_url}></img>
                    <h3>{beer.name}</h3>
                    <p>{beer.tagline}</p>
                    <p>Created by: {beer.contributed_by}</p>
                  </Link>
                  </div>
                )
              })}

            </div>


          :
          <h4>Loading....</h4>
        }


      </div>
    );
  }
  
  export default ListBeer;