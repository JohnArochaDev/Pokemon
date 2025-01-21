import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import PokeCard from '../PokeCard/PokeCard'
import PokemonDetail from '../PokemonDetail/PokemonDetail.jsx'

import backgroundImage from '../../assets/pokemon.png'

function App() {
    const [pokemon, setPokemon] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
                const data = await response.json()
                const detailedPokemon = await Promise.all(
                    data.results.map(async (poke, index) => {
                        const res = await fetch(poke.url)
                        const details = await res.json()
                        return {
                            name: poke.name,
                            img: details.sprites.front_default,
                            url: poke.url,
                            number: index + 1
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

    const filteredPokemon = pokemon.filter(poke =>
        poke.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
    )

    return (
        <div className="container">
            <Routes>
                <Route path="/" element={
                    <>
                        <div style={{paddingTop: '1vh', paddingBottom: '4vh'}} >
                            <img src={backgroundImage} alt="Background" style={{ width: '400px', height: 'auto' }} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search Pokémon"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{ padding: '10px', marginBottom: '20px', width: '80%', maxWidth: '400px', border: '1px solid #ccc', borderRadius: '5px' }}
                        />
                        <div className="row" style={{marginTop: '5vh'}}>
                            {filteredPokemon.length > 0 ? filteredPokemon.map((poke, idx) => (
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 card-container" key={idx}>
                                    <PokeCard
                                        name={poke.name[0].toUpperCase() + poke.name.substring(1, poke.name.length + 1)}
                                        img={poke.img}
                                        poke={poke}
                                        number={poke.number}
                                    />
                                </div>
                            )) : ''}
                        </div>
                    </>
                } />
                <Route path='/:id' element={<PokemonDetail />} />
            </Routes>
        </div>
    );
}

export default App