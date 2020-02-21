/**
 * Aqui ele está montando um array intitulado campos[], o qual faz referência
 * aos campos inputs do formulário(data,quantidade e valor).
 */

var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

// Vai imprimir no console

console.log(campos);

// Define a variável tbody e faz referência a tabela tbody que irá ser criada abaixo...

var tbody = document.querySelector('table tbody');

/**
 * Aqui ele está pegando o formulario através da classe .form, adicionando um evento de submit e
 * passando uma função que vai ser disparadar ao ser submetida
 */

document.querySelector('.form').addEventListener('submit', function(event) {

    /**
     * Ele está prevenindo do formulário de submeter sem razão
     * 
     * Basicamente, ele vai fazer isso daqui:
     * 
     * O exemplo a seguir demonstra como um input com texto inválido 
     * pode ser parado ao chegar ao campo de entrada com o preventDefault().
     */

    event.preventDefault();

    // Aqui ele já criou a tabela e vai passar a coluna tr...

    var tr = document.createElement('tr');

    // e pra cada linha, terá uma coluna td, através de um laço forEach

    campos.forEach(function(campo) {

        // linha (td) criada
        var td = document.createElement('td');

        /**
         * Depois, criaremos um td dinamicamente que não conterá nenhuma informação e informaremos
         * que o conteúdo do mesmo será campo.value. Com o appendChild, adicionaremos a td como filho.
         */
        td.textContent = campo.value;
        /**
         * Adiciona um nó ao final da lista de filhos (td) de um nó pai especificado. Se o nó já existir no documento,
         * ele é removido de seu nó pai atual antes de ser adicionado ao novo pai (tr).
         */
        tr.appendChild(td);

    });

    // nao entendi
    var tdVolume = document.createElement('td');

    // atribui a variavel uma lista 
    tdVolume.textContent = campos[1].value * campos[2].value;

    // depois adiciona a lista os campos cadastrados
    tr.appendChild(tdVolume);

    // depois finalizada aponando do pai pro filho
    tbody.appendChild(tr);

    // Aqui ele vai criar um padrão, após ser submetido, para cada campo input.
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    // Aqui ele tá setando para, quando recarregar, voltar a cair no campo 0 (data)
    campos[0].focus();

})