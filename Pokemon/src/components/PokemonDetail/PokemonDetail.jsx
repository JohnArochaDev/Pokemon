import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';
import './PokemonDetail.css';

export default function PokemonDetail() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [description, setDescription] = useState('');

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${id}`
                );
                const data = await response.json();
                setPokemon(data);

                const speciesResponse = await fetch(data.species.url);
                const speciesData = await speciesResponse.json();
                const flavorText = speciesData.flavor_text_entries.find(
                    (entry) => entry.language.name === 'en'
                );
                setDescription(
                    flavorText
                        ? flavorText.flavor_text
                        : 'No description available.'
                );
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
            style={{ width: '60vw', height: 'auto' }}
        >
            <div className="row">
                <div className="col-md-6 left-section text-center d-flex flex-column align-items-center">
                    <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        className="img-fluid"
                        style={{ width: '300px' }}
                    />
                </div>
                <div className="col-md-6 right-section d-flex flex-column justify-content-center align-items-center">
                    <h3>Stats:</h3>
                    <table style={{ width: '100%' }}>
                        <tbody>
                            {pokemon.stats.map((statInfo) => (
                                <tr key={statInfo.stat.name}>
                                    <td
                                        className="stat-name"
                                        style={{ width: '30%' }}
                                    >
                                        {statInfo.stat.name}:
                                    </td>
                                    <td
                                        className="stat-value"
                                        style={{ width: '70%' }}
                                    >
                                        <ProgressBar
                                            now={statInfo.base_stat}
                                            label={`${statInfo.base_stat}`}
                                            style={{ width: '100%' }}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
            <div className="col-md-6 left-section text-center d-flex flex-column align-items-center">
                <h1>
                    {pokemon.name[0].toUpperCase() +
                        pokemon.name.substring(1, pokemon.name.length + 1)}
                </h1>
                <h2>
                    <span className="label">Height:</span> <span className="data">{pokemon.height}</span>
                </h2>
                <h2>
                    <span className="label">Weight:</span> <span className="data">{pokemon.weight}</span>
                </h2>
            </div>
                <div className="col-md-6 right-section d-flex flex-column justify-content-center align-items-center">
                    <h3>Description:</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}
