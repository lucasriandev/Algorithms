// Seus dados chegando do Banco de Dados
const menu = {
  nome: "Eletrônicos",
  subcategorias: [
    { nome: "Celulares", subcategorias: [] },
    {
      nome: "Computadores",
      subcategorias: [
        { nome: "Notebooks", subcategorias: [] },
        { nome: "Desktops", subcategorias: [] },
      ],
    },
  ],
};

// A Função Recursiva Real
function renderizarMenu(categoria) {
  // 1. Faz o trabalho no item atual
  console.log("- " + categoria.nome);

  // 2. CASO-BASE Implícito: Se o array de subcategorias estiver vazio (length 0),
  // o loop for não roda, a função acaba e a pilha volta.

  // 3. CASO RECURSIVO: Se tiver subcategorias, joga elas pra função resolver de novo!
  for (let sub of categoria.subcategorias) {
    renderizarMenu(sub);
  }
}

// Executando
renderizarMenu(menu);
