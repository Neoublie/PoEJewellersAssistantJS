import React, { useState } from "react";
import data from "../Data/data";

const Characters = () => {
  const [charaters, setCharacters] = useState(data);
  return (
    <section className="characters">
      {charaters.map((character) => {
        return (
          <div key={character.id} className="card">
            <h5>{character.name}</h5>
            <p>{character.class}</p>
            <p>League: {character.league}</p>
            <p>level: {character.level}</p>
            <p>exp: {character.experience}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Characters;
