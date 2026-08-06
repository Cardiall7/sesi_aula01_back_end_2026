x = 10 
y = 25
//procesamento
soma = x + y 
sub = x - y
mult = x * y 
div = x / y
raiz = Math.sqrt(y)
potencia = Math.sqrt(x, 2)
//saida concatanadas
console.log(soma)
console.log("A soma de " + x + " + " + y +" = " + soma)
console.log("A subtração de " + x + " - " + y +" = " + sub)
//saida concatanadas com aspas simples 'apostrofes'
console.log('A moltiplicação de ' + x + ' * ' + y + ' = ' + mult)
console.log('A divisão de ' + x + ' / ' + y + ' = ' + div)
//saidas com template string (crase)
console.log(`A raiz quadrada de ${y} = ${raiz.toFixed(2)}`)
console.log(`A raiz quadrada de ${x}² = ${potencia}`)