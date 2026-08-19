import usePokemonData from "../hooks/pokemon";
import type { PokemonData } from "../schema/pokemonDataSchema";

export function RoutePokemon() {

    return (
        <div>
            <h1>Lista dos Pokemons</h1>
            <ListaPokemon />
        </div>
    )
}

function ListaPokemon() {

    const {data} = usePokemonData()

    return (
        <div>
            {data.results.map((item: PokemonData) => {
                return (
                    <div style={{padding:3, margin: 5, background: "gray"}} key={item.name}>
                        <h1>Nome: {item.name}</h1>
                        <hr>Url: {item.url}</hr>
                    </div>
                )
            })}
        </div>
    )
}