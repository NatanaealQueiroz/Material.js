const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])
//inclui um elemento noarray
valores[4] = 10
console.log(valores)
// infirma quantos elementos tem no array
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// Exclui o ultimo elemento do array
console.log(valores.pop())

//Exclui o elemento do array no indice 0
delete valores [0]
console.log(valores)

// informa a estrutura 
console.log(typeof valores)


