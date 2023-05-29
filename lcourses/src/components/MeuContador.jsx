import { useState } from "react"

export default function MeuContador() {

    console.log("Renderizando App...")

    const [contador, setContador] = useState(0)

    function aumentar() {
        setContador(contador + 1)
    }

    function diminuir() {
        setContador(contador - 1)
    }

    if(contador > 5) {
        return (
            <div>   
                <h1>Contador muito grande</h1>
                <button onClick={aumentar}>aumentar</button>
                <button onClick={diminuir}>diminuir</button>
            </div>
        )
    }

    return (
        <div>
            <h1>Meu contador: {contador}</h1>
            {/* {contador > 9 ? <h1>Valor muito grande!</h1> : null} */}
            <button onClick={aumentar}>aumentar</button>
            <button onClick={diminuir}>diminuir</button>
        </div>
    )
}