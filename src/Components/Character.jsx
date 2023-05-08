import React, { useState } from "react";
import characters from "../Data/data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/all";
// import _ from "lodash";

// const modifiedCharacters = _.mapKeys(characters, (value, key) => {
//   console.log(value);
//   return key === "class" ? "charClass" : key;
// });

//console.log(modifiedCharacters);

const Character = () => {
  const [index, setIndex] = useState(0);
  const { id, name, charClass, league, level, experience } = characters[index];

  const checkNumber = (number) => {
    if (number > characters.length - 1) {
      return 0;
    }
    if (number < 0) {
      return characters.length - 1;
    }
    return number;
  };

  const nextCharacter = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return checkNumber(newIndex);
    });
  };

  const prevCharacter = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <main>
      <div className="character-card">
        <div className="character">
          <div key={id} className="card">
            <h5>{name}</h5>
            <p>Class: {charClass}</p>
            <p>League: {league}</p>
            <p>level: {level}</p>
            <p>exp: {experience}</p>

            <div className="btn-container">
              <button className="prev-btn" onClick={prevCharacter}>
                <FaChevronLeft />
              </button>
              <button className="next-btn" onClick={nextCharacter}>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Character;
