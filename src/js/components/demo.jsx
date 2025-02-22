import React, { useEffect } from "react";
import { Link } from "react-router";
import useFlux from "../flux/flux";
import "./../../styles/demo.css";

const Demo = () => {
  const { store, actions } = useFlux();
  const { dataCharacters } = store;
  const { dataPlanets } = store;

  useEffect(() => {
    actions.getCharacters();
    actions.getPlanets();
  }, []);

  console.log(dataCharacters);
  console.log(dataPlanets);

  return (
    <div className="container p-3 bg-dark text-warning ">
      <h1>Soy la demo</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div className="card-container">
        {dataCharacters &&
          dataCharacters.items && // Verifica que `items` exista
          dataCharacters.items.map((item, index) => (
            <div key={index} className="card">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          ))}
      </div>
      <h1 className="m-3">Planetas:</h1>

      <div className="card-container mt-3">
        {dataPlanets &&
          dataPlanets.items && // Verifica que `items` exista
          dataPlanets.items.map((item, index) => (
            <div key={index} className="card">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Demo;
