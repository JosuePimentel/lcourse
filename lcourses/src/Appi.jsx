// import MeuComponente from "./components/meuComponente"

// function () {
//   return (
//     <div>
//       <h1>Ola, Mundo React!</h1>
//       <MeuComponente/>
//       <MeuComponente/>

//       <MeuBtn conteudo='Clique aqui!'/>

//       <MeuBtn conteudo='Depois Clique aqui!'/>

//       <MeuBtn conteudo='Por fim Clique aqui!' idade={2}/>

//     </div>
//   )
// }

// props => conteudo={} para valores e funções ou conteudo='' para strings
// props é um objeto

// function MeuBtn(props) {

//   return (
//     <button>{props.conteudo}</button>
//   )
// }

// ==============================================================================================
// Eventos

// import MeuContador from "./components/MeuContador"

// function App() {
//   return (
//     <div>
//       <MeuContador />
//     </div>
//   )
// }

// ==========================================
// Listas

// import MinhaLista from "./components/MinhaLista"

// function App() {

//     return (  
//       <div>
//         <h1>Listas React!</h1>
//         <MinhaLista />
//       </div>
//     )
// }

import { useEffect, useState } from "react"

const minhalist = [
  {id: 1, value: 'Frutas'},
  {id: 2, value: 'Legumes'},
  {id: 3, value: 'Carnes'}
]

function App() {

  const [produtos, setProdutos] = useState(minhalist)
  const [pesquisa, setPesquisa] = useState('')

  // console.log(pesquisa)

  useEffect(
    () => {
      if(pesquisa){
        const NovaLista = minhalist.filter( item => {
          return item.value.toLowerCase().includes(pesquisa.toLowerCase())
        })
        setProdutos(NovaLista)
      } else {
        setProdutos(minhalist)
      }
    },
    [pesquisa]
  )

  return (
    <div>
      <h1>Efeitos colaterais</h1>
      <input type="text" placeholder="Pesquise aqui" value={pesquisa} onChange={e => setPesquisa(e.target.value)}/>
      {produtos.map( item => {
        return (
          <div key={item.id}>
              <h4>{item.value}</h4>
          </div>
      )})}
    </div>
  )
}

export default App
