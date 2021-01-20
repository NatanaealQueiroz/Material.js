const escola = "Cod3r"
// Seleciona a Letra na Posição descrita
console.log(escola.charAt(4))
console.log(escola.charAt(5))
// retorna o valor do caractere selecionado com o valor da tabela asc
console.log(escola.charCodeAt(3))
// informa em que posição está o caractere inserido
console.log(escola.indexOf('o'))
// imprime o valor da posição 1 em diante
console.log(escola.substring(1))
// imprime o valor do indice 0 e os outros 3 caracteres
console.log(escola.substring(0, 3))
// concatenação
console.log('Escola '.concat(escola).concat("!"))
// subistitui o indice da posição 3 pela letra e
console.log(escola.replace(3,'e'))
// cubistitui todas as letras e digitos pela letra e
console.log(escola.replace(/\w/g, 'e'))
// subistitui todos os digitos do texto pela letra e
console.log(escola.replace(/\d/, 'e'))
// Criando um Array
console.log('Ana,Maria,Pedro'.split(','))