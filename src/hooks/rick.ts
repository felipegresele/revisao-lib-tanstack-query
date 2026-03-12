import { useQuery } from "@tanstack/react-query";

const API_DATA_CARACTERS = "https://rickandmortyapi.com/api/character"

export default function useRickData() {
    const response = useQuery({
        queryKey: ["rick-data"],
        queryFn: function() {
            return fetch(API_DATA_CARACTERS, {method: "GET"})
            .then(resp => resp.json())
        },
        staleTime: 1000 * 60
    })

    return response;
}
