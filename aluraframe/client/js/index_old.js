/**
 * Aqui ele est� montando um array intitulado campos[], o qual faz refer�ncia
 * aos campos inputs do formul�rio(data,quantidade e valor).
 */

var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

// Vai imprimir no console

console.log(campos);

// Define a vari�vel tbody e faz refer�ncia a tabela tbody que ir� ser criada abaixo...

var tbody = document.querySelector('table tbody');

/**
 * Aqui ele est� pegando o formulario atrav�s da classe .form, adicionando um evento de submit e
 * passando uma fun��o que vai ser disparadar ao ser submetida
 */

document.querySelector('.form').addEventListener('submit', function(event) {

    /**
     * Ele est� prevenindo do formul�rio de submeter sem raz�o
     * 
     * Basicamente, ele vai fazer isso daqui:
     * 
     * O exemplo a seguir demonstra como um input com texto inv�lido 
     * pode ser parado ao chegar ao campo de entrada com o preventDefault().
     */

    event.preventDefault();

    // Aqui ele j� criou a tabela e vai passar a coluna tr...

    var tr = document.createElement('tr');

    // e pra cada linha, ter� uma coluna td, atrav�s de um la�o forEach

    campos.forEach(function(campo) {

        // linha (td) criada
        var td = document.createElement('td');

        /**
         * Depois, criaremos um td dinamicamente que n�o conter� nenhuma informa��o e informaremos
         * que o conte�do do mesmo ser� campo.value. Com o appendChild, adicionaremos a td como filho.
         */
        td.textContent = campo.value;
        /**
         * Adiciona um n� ao final da lista de filhos (td) de um n� pai especificado. Se o n� j� existir no documento,
         * ele � removido de seu n� pai atual antes de ser adicionado ao novo pai (tr).
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

    // Aqui ele vai criar um padr�o, ap�s ser submetido, para cada campo input.
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    // Aqui ele t� setando para, quando recarregar, voltar a cair no campo 0 (data)
    campos[0].focus();

})