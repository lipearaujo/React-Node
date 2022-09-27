import React, { useEffect, useState } from "react";
import api from "../services/api";
import './Cards.css';

const Cards = () => {
  const [characters, setCharacters] = useState([]);
  const ts = "1663109500";
  const apiKey = "8b9ef8cd8cb41b8f5816e15e43f5c023";
  const md5 = "0e3650b9432803da3d848f4d87e4b9ce";
  const maxCharacter = 100;

  useEffect(() => {
    api
      .get(`/v1/public/characters?limit=${maxCharacter}&ts=${ts}&apikey=${apiKey}&hash=${md5}`)
      .then((response) => {
        return response.data;
      })
      .then((jsonParsed) => {
        
        setCharacters(jsonParsed.data.results);
        console.log(jsonParsed.data);
      });
  }, []);

  return (
    <div className="cards">
      {characters.map((character) => (
        <div className="cards-single">
          <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="Character" />
          <h3>{character.name}</h3>
          <button>Details</button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
