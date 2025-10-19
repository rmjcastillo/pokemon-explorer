import type { PokemonDetail } from '../../models/pokemon/pokemon-detail';
import './card.css';

export default function Card(pokemon:PokemonDetail){
    
    
    //uri

    let image = pokemon.sprites.other['official-artwork'].front_default ??"";

    return <>
        <article className="card">
            <div className='inner-card'>
                <div className='name-wrapper'>
                 <span className='card-name'>
                    {pokemon.name}
                </span>
                </div>
                <div className='image-wrapper'>
                    <img src={image} />
                </div>
            </div>
        </article>

    </>
};