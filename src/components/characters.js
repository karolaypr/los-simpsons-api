import React from "react";

export default function Character(props) {
   const { characters, setCharacters } = props;

   const resetCharacters= () => {
    setCharacters(null);
   }

    return (
        <div className="characters">
            <button className="btn" onClick={resetCharacters}>
            <span class="material-icons">arrow_back</span> <span className="back">Volver</span>
            </button>
            <div className="container-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <h3>{character.character}</h3>
                            <img src={character.image} alt={character.name} />
                        <p>                            
                            {character.quote}
                        </p>
                    </div>
                ))}
            </div>
            <button className="btn" onClick={resetCharacters}>
                <span class="material-icons">arrow_back</span> <span className="back">Volver</span>
            </button>
        </div>
    );
}