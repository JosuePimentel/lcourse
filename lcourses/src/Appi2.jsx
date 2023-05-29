import { useEffect, useState } from "react"

const tarefas = [
  { id: 1, title: 'Minha 1 tarefa' },
  { id: 2, title: 'Minha 2 tarefa' },
  { id: 3, title: 'Minha 3 tarefa' },
  { id: 4, title: 'Minha 4 tarefa' }
]

function App() {

  const [tarefass, setTarefas] = useState([])

  useEffect(() => {
      async function buscarDados() {
        const resultado = await fetch('https://jsonplaceholder.typicode.com/todos')
        const resultadoFinal = await resultado.json()
        return resultadoFinal
      }

      buscarDados().then(res => setTarefas(res))
    }, []
  )

  return (
    <div>
      <h1>Buscado Dados</h1>
      <ol>
        {tarefass.map( tarefa => {
          return (
            <li key={tarefa.id}>
              {tarefa.title}
              {tarefa.completed ? ' - Tarefa concluida' : null}
              </li>
          )
        })}
      </ol>
    </div>
  )
}

export default App