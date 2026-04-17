// Exercício 4.1: Soma
function soma(lista) {
  if (lista.length === 0) return 0; // Caso-base

  // Caso recursivo: Pega o 1º item + a soma do resto da lista
  return lista[0] + soma(lista.slice(1));
}
console.log(soma([2, 4, 6])); // 12

// Exercício 4.2: Contar itens
function contar(lista) {
  if (lista.length === 0) return 0; // Caso-base

  // Caso recursivo: Conta 1 (o item atual) + a contagem do resto
  return 1 + contar(lista.slice(1));
}
console.log(contar([2, 4, 6])); // 3

// Exercício 4.3: Encontrar o Maior
function maior(lista) {
  if (lista.length === 1) return lista[0]; // Caso-base

  // Caso recursivo: Encontra o maior do "resto" da lista
  let maxResto = maior(lista.slice(1));

  // Compara o 1º item com o campeão do resto da lista
  return lista[0] > maxResto ? lista[0] : maxResto;
}
console.log(maior([3, 9, 5])); // 9
