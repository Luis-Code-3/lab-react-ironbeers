import { useState } from "react";
import axios from "axios";


function NewBeer() {

    const [name,setName] = useState('');
    const [tagline,setTagline] = useState('');
    const [description,setDescription] = useState('');
    const [first_brewed, setFirstBrewed] = useState('');
    const [brewers_tips,setBrewerTips] = useState('');
    const [attenuation_level,setAttenuation] = useState(null);
    const [contributed_by,setContributed] = useState('');

    const handleSubmit = () => {

    }



    return (
      <div>
        <h2>New</h2>

        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type='text' name="name" value = {name} onChange={(e) => setName(e.target.value)}></input>

            <label>Tagline</label>
            <input type='text' name="tagline"></input>

            <label>Description:</label>
            <input type='text' name="description"></input>

            <label>First Brewed:</label>
            <input type='text' name="first_brewed"></input>

            <label>Brewer Tips:</label>
            <input type='text' name="brewer_tips"></input>

            <label>Attenuation Level:</label>
            <input type='number' name="attenuation_level"></input>

            <label>Contributed by:</label>
            <input type='text' name="contributed_by"></input>

            <button type="submit">Add New</button>
        </form>




      </div>
    );
  }
  
  export default NewBeer;