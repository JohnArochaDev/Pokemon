import './App.css'
import { useState, useEffect } from 'react'
import PokeCard from '../PokeCard/PokeCard'
import backgroundImage from '../../assets/pokemon.png'; // Adjust the path as necessary

function App() {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
                const data = await response.json()
                const detailedPokemon = await Promise.all(
                    data.results.map(async (poke) => {
                        const res = await fetch(poke.url)
                        const details = await res.json()
                        return {
                            name: poke.name,
                            img: details.sprites.front_default,
                            url: poke.url
                        }
                    })
                )
                setPokemon(detailedPokemon)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchPokemon()
    }, [])

    return (
        <div className="container">
            <div style={{paddingTop: '1vh', paddingBottom: '2vh'}} >
                <img src={backgroundImage} alt="Background" />
            </div>
            <div className="row">
                {pokemon.length > 0 ? pokemon.map((poke, idx) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={idx}>
                        <PokeCard
                            name={poke.name}
                            img={poke.img}
                            poke={poke}
                        />
                    </div>
                )) : ''}
            </div>
        </div>
    );
}

export default App