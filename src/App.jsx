import { useState } from 'react'
import './App.css'
import Card from "./components/Card";

function App() {
  const [userName, setUserName] = useState("");
  const [artista, setArtista] = useState("");
  const [disco, setDisco] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [send, setSend] = useState(false);
  const [errorSelect, setErrorSelect] = useState("");

  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };
  const onChangeArtista = (event) => {
    setArtista(event.target.value);
  };
  const onChangeDisco= (event) => {
    setDisco(event.target.value);
  };
  const onChangeSelect = (event) => {
    setSelectValue(event.target.value);
  };

  const validUserName = (userName) => {
    const withoutSpace = userName.trim();

    if (withoutSpace.length >= 3) {
      return true;
    } else {
      setErrorSelect("El nombre debe contener más de tres caracteres");
      return false;
    }
  };

  const validArtista = (artista) => {
    const withoutSpace = artista.trim();

    if (withoutSpace.length >= 6) {
      return true;
    } else {
      setErrorSelect("El nombre debe contener más de seis caracteres");
      return false;
    }
  };

  const completeInput = (userName, artista, disco) => {
    if (userName === "" || artista === "" || disco === "") {
      setErrorSelect("Por favor chequea que la información sea correcta");
      setSend(false);
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isNameValid = validUserName(userName);

    const isArtistaValid = validArtista(artista);

    const isCompleteInput = completeInput(userName, artista, disco);

    if (selectValue === "") {
      setErrorSelect("seleccionar canción favorita");

      return;
    }

    if (isNameValid && isArtistaValid && isCompleteInput) {
      setSend(true);
      setErrorSelect("");
    }
  };

  return (
    <div className="App">
      <h2>Mi artista favorito</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Yo soy"
          value={userName}
          onChange={onChangeUserName}
        />
        <input
          type="text"
          placeholder="Nombre del artista"
          value={artista}
          onChange={onChangeArtista}
        />
        <input
          type="text"
          placeholder="Disco favorito"
          value={disco}
          onChange={onChangeDisco}
        />

        <select
          placeholder="Seleccione su canción favorita del disco"
          value={selectValue}
          onChange={onChangeSelect}
        >
          <option value="" disabled default>
            Canción favorita
          </option>
          <option value="Golden">Golden</option>
          <option value="Watermelon Sugar">Watermelon Sugar</option>
          <option value="Falling">Falling</option>
          <option value="Sign of the times">Sign of the times</option>
          <option value="Adore you">Adore you</option>
        </select>
        <input type="submit" value="enviar" />
      </form>
      <div className="error">{errorSelect}</div>

       {send && (
        <Card
          userName={userName}
          disco={disco}
          artista={artista}
          selectValue={selectValue}
        />
      )}
    </div>
  );
}

export default App
