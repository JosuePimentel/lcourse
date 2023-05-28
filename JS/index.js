//Javascript mdn "oq vc quer saber"

console.clear() //Limpa o terminal
console.error("Hello World!") //Erro
console.warn("Hello World!") //Aviso
console.log("Hello World!")

console.log("")

console.log("Variaveis")
var nome = 'Josué'
console.log("hello " + nome + ",", typeof nome);

let idade = 20
console.log(idade + ",", typeof idade)

console.log("")
console.log("Op. Aritmeticas")
// (), pow, sqrt, *, /, +, - 
console.log(Math.pow(2,4))

console.log("")
console.log("Op. booleanos")
const n = 10
console.log(n, "é igual a '10'?", n === '10')
console.log(n, "é igual a '10'?", n == '10')

console.log("")
console.log("Coerção de tipos/Conversão de tipos")
const numero = 10
console.log(numero, typeof numero)
const palavra = String(numero)
console.log(palavra, typeof palavra)
const n1 = Number(palavra)
console.log(n1, typeof n1)
const tF = Boolean(n1)
console.log(tF, typeof tF)
//parseFloat - converte pro tipo number float
//parseInt - converte pro tipo number int
//Number - converte pro tipo number float

console.log("")
console.log(10 + '2', typeof(10 + '2')) //Concatena
console.log(10 - '2', typeof('10' - 2)) //Faz a operação normal
console.log(10 * '2', typeof(10 * '2')) // Faz a operação normal
console.log(10 - 'asda', typeof(10 - 'asda')) // NaN - Not is a Number

console.log("")
console.log("Op. Ternario")
const x = 20
const maiorDeIdade = x >= 18 ? 'Maior de idade' : 'Menor de idade'
console.log(maiorDeIdade)

console.log("")
console.log("Outras particularidades")
const y = 15
const z = 10
console.log(y + z)
// const z = 10 -> Se a constante z for incializada dps do escopo que pede ela, ira iniciar com erro.
console.log('O valor booleano de null é:', null == true) // O valor bolleno de null é false
let r
console.log(r, typeof(r)) // Por predefinição, qq variavel criada sem nenhum conteudo dentro, por definifição recebe undefined e o tipo undefined.
const t = 'As constantes devem receber o conteudo na criação dela.'
console.log(t)

console.log("")
console.log("Entradas") // Biblioteca usada npm --install readline-sync
const input = require("readline-sync")
const n2 = input.question('Informe um numero\n')
console.log(n2, typeof(n2))
console.log(Number(n2), typeof(Number(n2)))

let n3
do{
    n3 = Number(input.question("Qual a senha?\n"))
    if(n3 == 13) {
        console.log("Parabens, vc acertou a senha!")
    } else {
        console.log("Digite a senha novamente.")
    }
} while(n3 !== 13) 

console.log("")

console.log("Arrays")
let arr = ['Josué', 19, 1.65, 'Rio Verde/GO']

console.log("For of")
for (const elemento of arr) {
    console.log(elemento, arr)
}
console.log()

console.log("ForEach")
arr.forEach((ele,index,array) => {
    console.log(ele, index, array)
})
console.log()

console.log("For in")
for (const index in arr) {
    console.log(index, arr[index], arr)
}

console.log()
console.log("Metodos Arrays")
console.log("slice")
let fatia = arr.slice(0,2) // (0,2[
console.log(fatia)
console.log(arr.slice(2))

console.log()
console.log("push/unshift/pop/shift")
let arr1 = new Array
arr1.push(10, 20, 30) //push -> Elementos sao jogados para a ultima posição
arr1.push(40)
arr1.unshift(0) // unshift -> Elemento é jogado para o início do array
console.log(arr1)

let arr2 = new Array
arr1.pop() // pop -> Remove o ultimo elemento do array
arr2.pop()
console.log(arr1, arr2)

const elementoRemovido = arr1.shift() // Remove o primeiro elemento do array || Retorna o elemento removido
arr2.shift()
console.log(arr1, arr2, elementoRemovido)

console.log()
console.log("Concat")
console.log(arr.concat(arr1))
console.log(arr1.concat(arr))


let arr3 = [3,4,5,3,5,1,1,3]
console.log()
console.log("lastIndexOf/IndexOf")
console.log(arr3.indexOf(3)) // lê o array da esquerda pra direita e retorna a primeira posição do valor encontrado
console.log(arr3.lastIndexOf(3)) // lê o array da direita pra esquerda e retorna a primeira posição do valor encontrado
console.log(arr3.indexOf(10)) // Caso o valor não seja encontrada, ele retorna -1

console.log()
console.log("Include")
console.log(arr3.includes(3))
console.log(arr3.includes(10)) 

console.log()
console.log("Reverse") // Inverte o array
console.log(arr3.reverse())