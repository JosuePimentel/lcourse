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