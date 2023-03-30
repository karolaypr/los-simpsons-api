import './App.css';
import simpsons from './img/simpsons.png';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);
  const getCharacters = async () => {
    try {
      const apiCharacters = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=50');
      const jsonCharacters = await apiCharacters.json();
    
      let characterMap = jsonCharacters.map(item=>{
        return [item.character,item]
      });
      let characterMapArr = new Map(characterMap); // Pares de clave y valor
      let uniqueCharacters = [...characterMapArr.values()]; // Conversión a un array
      console.log(uniqueCharacters);
      
      uniqueCharacters.sort((x, y) => x.character.localeCompare(y.character)); //Ordenar de manera ascendente 

      setCharacters(uniqueCharacters);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className="App">
      <div className="App-header">
        <h1 className="title">Los Simpsons</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={simpsons} alt="Los Simpsons" className="img-home" />
            <button className="btn" onClick={getCharacters}>
              Buscar
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
