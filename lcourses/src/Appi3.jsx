import { useState } from "react"
import stilo from "./button.module.css"

function App() {

  const [contador, setContador] = useState(0)

  function aumentar() {
    setContador(contador + 1)
  }

  return (
    <div className="container">
      <h1>Meu contador</h1>
      <h3>{contador}</h3>
      <button onClick={aumentar} className={stilo.myButton}>Aumentar</button>
    </div>
  )
}

export default App