import imageRickMorty from './img/rick-morty.png'
import './App.css';
import {useState} from "react";
import Characters from './components/Characters.jsx';

function App() {

  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
  
    // Actualizar el estado con los resultados de la API
    console.log(characterApi.results);
    setCharacters(characterApi.results);
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="titles">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home"/>
            <button onClick={ reqApi } className="btn-search">
              Search characters
            </button>
          </>
        )
        }
        
      </header>
    </div>
  );
}

export default App;
