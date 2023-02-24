import Beer from "../components/Beer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function SingleBeer() {
    const [beer, setBeer] = useState({});

    const {id} = useParams();


    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
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
  
  export default SingleBeer;