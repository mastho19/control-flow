// Faça um programa que recebe 3 números inteiros e retorne o maior entre eles

var n1 = Number(prompt("Informe o primeiro número"))
var n2 = Number(prompt("Informe o segundo número"))
var n3 = Number(prompt("Informe o terceiro número"))
maiorNumero = 0

if(n1 > n2 && n1 > n3){
    maiorNumero = n1
} else if(n2 > n1 && n2 > n3){
    maiorNumero = n2
} else{
    maiorNumero = n3
}
console.log(maiorNumero)

// Faça um programa que receba três números e retorne eles em ordem crescente

var lista = []

for(let i = 0; i <= 2; i++){
    lista[i] = prompt("Informe um número: ")
} 
lista.sort()
console.log(`Primeiro: ${lista[0]}, Segundo: ${lista[1]}, Terceiro: ${lista[2]}`)




// Faça um programa que receba a idade de uma pessoa e mostre na saída em qual
//categoria ela se encontra:
// 10-14 infantil
// 15-17 juvenil
// 18-25 adulto

var idade = Number(prompt("Informe a sua idade"))

if (idade <= 14){
    console.log("Categoria Infantil")
}else if (idade >= 15 && idade <= 17){
    console.log("Categoria Juvenil")
}else{
    console.log("Categoria Adulto")
}

// Faça um programa em que permita a entrada de um número qualquer e exiba se
//este número é par ou ímpar. Se for par exiba também a raiz quadrada do mesmo;
//se for ímpar exiba o número elevado ao quadrado.

var n1 = Number(prompt("Informe um número: "))

if(n1 % 2 === 0){
    console.log(`A raíz quadrada desse número é igual a:  ${Math.sqrt(n1)}`)
}else{
    console.log(`Número elevado a 2 é igual a : ${n1 ** 2}`)
}

