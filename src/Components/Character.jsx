import React, { useState } from "react";
import characters from "../Data/data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/Fa";

const Character = () => {
  const [index, setIndex] = useState(0);
  const { id, name, league, level, experience } = characters[index];
  // const [charaters, setCharacters] = useState(data);

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
      <article className="character-card">
        <section className="character">
          <div key={id} className="card">
            <p>Character</p>
            <h5>{name}</h5>
            {/* <p>{character.class}</p> */}
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
        </section>
      </article>
    </main>
  );
};

export default Character;
