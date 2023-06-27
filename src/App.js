import "./App.css";
import Cards from "./components/cards/Cards";
import SearchBar from "./components/searchBar/SearchBar";
import characters from "./data.js";

function App() {
  return (
    <div className="App">
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      <Cards
        characters={characters}
        onClose={() => window.alert("Emulamos que se cierra la card")}
      />
    </div>
  );
}

export default App;
