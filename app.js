function pesquisar() {

    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa e converte para minúsculas para facilitar a comparação
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Verifica se o campo de pesquisa está vazio. Se estiver, exibe uma mensagem de erro e retorna.
    if (!campoPesquisa) {
        section.innerHTML = "<p class='mensagem-erro'>Nada foi encontrado, digite o nome do time ou de alguma player do  time.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultado = '';
    let titulo = '';
    let descricao = '';
    let jogadores = '';

    // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        // Converte os campos de título, descrição e jogadores para minúsculas para facilitar a comparação
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        jogadores = dado.jogadores.toLowerCase();

        // Verifica se o termo de pesquisa está presente em algum dos campos
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || jogadores.includes(campoPesquisa)) {
            // Constrói o HTML para cada resultado encontrado e adiciona à string 'resultado'
            resultado += `
                <div class="item-resultado">
                    <img class= 'logo-imagem' src="${dado.imagem}" alt="Logo da time"> <h2>
                    <a href="${dado.instagram}" target="_blank">${dado.titulo}</a> </h2>
                    <p class="descricao-meta">
                        ${dado.descricao} 
                    </p>
                    <a href="${dado.link}" target="_blank">Informações adicionais</a> 
                </div>
     `;
        }
    }

    // Verifica se algum resultado foi encontrado. Se não, exibe uma mensagem de erro.
    if (!resultado) {
        resultado = "<p class='mensagem-erro'>Nada foi encontrado, digite o nome do time ou de alguma player do time.</p>";
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultado;
}