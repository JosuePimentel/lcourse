// export default function MinhaLista() {

//     const minhalist = [
//         <h4 key="1">Item A</h4>,
//         <h4 key="2">Item B</h4>,
//         <h4 key="3">Item C</h4>,
//         <h4 key="4">Item D</h4>,
//         <h4 key="5">Item E</h4>
//     ]
//     return minhalist
// }

const minhalist = [
    {id: 1, value: 'Frutas'},
    {id: 2, value: 'Legumes'},
    {id: 3, value: 'Carnes'}
]

export default function MinhaLista() {

    return minhalist.map( item => {
        return (
            <div key={item.id}>
                <h4>{item.value}</h4>
            </div>
        )
    })
}