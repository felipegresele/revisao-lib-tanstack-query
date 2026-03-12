import useRickData from "../hooks/rick";
import type { RickDataSchema } from "../schema/rickDataSchema";

export function ListaRick() {

    const {data} = useRickData()

    return (
        <div>
            {data?.results.map((item: RickDataSchema) => {
                return (
                    <div style={{padding:3, margin: 5, background: "gray"}} key={item.id}>
                        <h1>Id: {item.id}</h1>
                        <h1>Nome: {item.name}</h1>
                    </div>
                )
            })}
        </div>
    )

}