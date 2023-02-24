import Beer from "../components/Beer";
import { useEffect, useState } from "react";
import axios from "axios";

function RandomBeer() {
    const [beer, setBeer] = useState({});


    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((response) => {
            setBeer(response.data)
        })
        .catch((err) => {
            console.log(err);
        })



    }, [])




    return (
      <div>
        {
            beer._id ?
                <Beer beer = {beer}></Beer>
            : <p>Loading....</p>
        }   
      </div>
    );
  }
  
  export default RandomBeer;