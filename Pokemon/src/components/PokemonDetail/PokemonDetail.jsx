import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './PokemonDetail.css';

export default function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="container pokemon-detail-container"
      style={{ width: '60vw', height: '70vh' }}
    >
      <div className="row">
        <div className="col-md-6 left-section text-center d-flex flex-column align-items-center">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="img-fluid"
            style={{ width: '300px' }}
          />
          <h2>
            {pokemon.name[0].toUpperCase() +
              pokemon.name.substring(1, pokemon.name.length + 1)}
          </h2>
        </div>
        <div className="col-md-6 right-section d-flex flex-column justify-content-center align-items-center">
          <h3>Height: {pokemon.height}</h3>
          <h3>Weight: {pokemon.weight}</h3>
          <h3>Base Experience: {pokemon.base_experience}</h3>
        </div>
      </div>
      <div className="row bottom-section">
        <div className="col-12">
          <h2>Description</h2>
          <h2>Evolution</h2>
        </div>
      </div>
    </div>
  );
}
