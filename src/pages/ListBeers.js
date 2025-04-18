import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListBeer() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');



  const handleSearchSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchTerm}`)
      .then((result) => {
        console.log(result.data);
        setBeers(result.data);
      })
  }





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

        <form onSubmit={handleSearchSubmit}>
          <label>Filer:</label>
          <input type='text' name="searchTerm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
          <button type="submit">Search</button>
        </form>

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