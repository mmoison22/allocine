import './container.css';
import axios from "axios";
import { useState, useEffect } from "react";
import Card from './Card';

const Container = ()=>{
    const [data, setData] = useState("");
    const fetchData = async ()=>{
        const response = await axios.get('https://api-allocine.herokuapp.com/api/movies/upcoming');
        setData(response.data.results);
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {data
        ? data.map((film, i) => {
            // ne pas oublier d'associer une key à chaque element, meme si ça semble ne pas nous etre utile, sinon react nous sort un warning
            // i représente la position du film courant dans le tableau
            return <Card />;
            // <div key={i}>{film.original_title}</div>;
          })
        : "EN ATTENTE"}
        </div>
    );
};

export default Container;