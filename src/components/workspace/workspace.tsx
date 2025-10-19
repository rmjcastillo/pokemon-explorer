import type { PokemonDetail } from "../../models/pokemon/pokemon-detail";
import type { PokemonListResponse } from "../../models/pokemon/pokemon-list-response";
import { fetchAPI } from "../../utilities/api";
import Card from "../cards/card";
import './workspace.css';
import { useEffect, useState } from "react";



export default function Workspace(){

    //we get the result from the API 
    
    // const [pokemons, setPokemons] = useState<PokemonSpeciesListResponse[]>([]);
    const [pokemonUri, setPokemonUri] = useState<string>("https://pokeapi.co/api/v2/pokemon");
    const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
        
    useEffect(() => {
       
        const fetchPokemon = async () => 
        {   

            //get pokmons 
            let pokemonList = await fetchAPI<PokemonListResponse>(pokemonUri);
            // let [pokemonSpecies, pokemonDetails] = await Promise.all(
            //     pokemonList.results.map(result => fetchAPI<(`https://pokeapi.co/api/v2/pokemon-species/${result.name}`))
            //     pokemonList.results.map(result => fetchAPI(`https://pokeapi.co/api/v2/pokemon${result.name}`))
            // );
            

            let pokemons = await Promise.all(
                pokemonList.results.map(pokemon => fetchAPI<PokemonDetail>(pokemon.url))
            )
            setPokemons(pokemons);


            // setSpecies(pokemonSpecies.results);
            // setNextSpeciesUri(pokemonSpecies.next);
        }
        fetchPokemon();
    }, []);



    return <>
        <div className="workspace">
            {pokemons!.map((pokemon) => (
                <Card key={pokemon.name} {...pokemon} />
            ))}
        </div>
            
    </>
}

    
