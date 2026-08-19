import { useQuery } from "@tanstack/react-query";

export default function usePokemonData() {
    const response = useQuery({
        queryKey: ["pokemon-data"],
        queryFn: () => {
            return fetch("https://pokeapi.co/api/v2/pokemon", {method: "GET"})
            .then(resp => resp.json())
        }
    });

    return response;
}