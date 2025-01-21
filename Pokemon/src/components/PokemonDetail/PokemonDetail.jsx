import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
    );
}