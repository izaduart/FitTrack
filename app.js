function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor do campo de pesquisa e converte para letras minúsculas
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados da busca
  let resultados = "";

  // Verifica se o campo de pesquisa está vazio
  if (campoPesquisa === "") {
    // Se estiver vazio, exibe uma mensagem de erro
    section.innerHTML = "<p>Campo vázio, não foi possível encontrar seu resultado</p>";
    return; // Encerra a função
  }

  // Itera sobre cada item nos dados
  for (let dado of dados) {
    // Converte o título, descrição e benefício para letras minúsculas para facilitar a comparação
    const titulo = dado.titulo.toLowerCase();
    const descricao = dado.descricao.toLowerCase();
    const beneficio = dado.beneficio.toLowerCase();

    // Verifica se o termo de busca está presente em algum dos campos
    if (titulo.includes(campoPesquisa) || beneficio.includes(campoPesquisa)) {
      // Se encontrar uma correspondência, adiciona o item aos resultados
      resultados += `
        <div class="exercicio">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <strong>${dado.beneficio}</strong>
        </div>
      `;
    }
  }

  // Verifica se algum resultado foi encontrado
  if (!resultados) {
    // Se não encontrou nenhum resultado, exibe uma mensagem
    resultados = "<p>Não foi possível encontrar seu resultado</p>";
  }

  // Atualiza o conteúdo da seção de resultados com os resultados da busca
  section.innerHTML = resultados;
}