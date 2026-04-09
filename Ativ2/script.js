function buscarMenor(arr) {
  let menor = arr[0];
  let menorIndice = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < menor) {
      menor = arr[i];
      menorIndice = i;
    }
  }
}
