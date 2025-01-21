// Validação do formulário de adicionar produto.

// campos.
const nameInput = document.getElementById('name'); 
const valorInput = document.getElementById('valor');
const imagemInput = document.getElementById('imagem');

// erros.
const nameErro = document.getElementById('nameErro');
const valorErro = document.getElementById('valorErro');
const imagemErro = document.getElementById('imagemErro');

// botão.
const botaoEnviar = document.querySelector('.form-botoes'); // Seleciona o botão.

// event listeners.
// input-name.
nameInput.addEventListener("input", () => {
    // Função de callback que será executada quando o evento "input" ocorrer.
    const resultado = validarName(nameInput.value); //  a função acessa e valida o valor da variável constante de "input".
    nameErro.textContent = resultado.mensagemErro;
    nameErro.classList.toggle('mostrar-erro', !resultado.valido);
});

// Função de validação do campo de nome.
function validarName(nameInput) {
    const name = nameInput; // Obtém o valor diretamente do addEventListener.
    let erroName = "";
    // Verifica se o campo não está em branco ou vazio e se o nome tem no máximo 50 caracteres.
    if (name.trim() === "") {
        erroName = "O campo não pode ficar em branco ou vazio.";
    } else if (name.length > 50) {
        erroName = "O máximo é 50 caracteres";
    } 
    return { valido: erroName === "", mensagemErro: erroName };
};

// input-email.
emailInput.addEventListener("input", () => {
    // Função de callback que será executada quando o evento "input" ocorrer.
    const resultado = validarName(nameInput.value); // a função acessa e valida o valor da variável constante de "input". 
    valorErro.textContent = resultado.mensagemErro;
    valorErro.classList.toggle('mostrar-erro', !resultado.valido);
});

// Função de validação do campo de valor.
function validarValor(valorInput) {
    const valorRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const valor = valorInput; // Obtém o valor diretamente do addEventListener. 
    let valorErro = "";
    // Verifica se o campo não está em branco ou vazio e se o e-mail está no formato correto. 
    if (valor.trim() === "") {
        erroValor = "O campo não pode ficar em branco ou vazio.";
    } else if (!valorRegex.test(valor)) {
        erroValor = "O valor precisa conter o caractere ',00', seguido por R$"
    }
    return { valido: erroEmail === "", mensagemErro: erroEmail };
};

// input-imagem.
imagemInput.addEventListener("input", () => {
    // Função de callback que será executada quando o evento "input" ocorrer.
    const resultado = validarImagem(imagemInput.value); // a função acessa e valida o valor da variável constante de "input".
    imagemErro.textContent = resultado.mensagemErro;
    imagemErro.classList.toggle('mostrar-erro', !resultado.valido);
});

// Função de validação do campo de imagem.
function validarImagem(imagemInput) {
    const imagem = imagemInput; // Obtém o valor diretamente do addEventListener. 
    let erroImagem = ""; 
    // Verifica se o campo não está em branco ou vazio ou se a mensagem tem no máximo 300 caracteres.
    if (imagem.trim() === "") {
        erroImagem = "O campo não pode ficar em branco ou vazio."
    } else if (message.length > 300) {
        erroImagem = "O máximo é 300 caracteres."
    }
    return { valido: erroImagem === "", imagemErro: imagemMessage };
};

// event listener.
// submit.
botaoEnviar.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nomeValido = validarName(nameInput.value).valido;
    const valorValido = validarValor(valorInput.value).valido;
    const imagemValida = validarImagem(imagemInput.value).valido;

    if (nomeValido && valorValido && imagemValida) {
        // Todos os campos são válidos, prossiga com o envio.
        const nome = nameInput.value;
        const valor = valorInput.value;
        const imagem = imagemInput.value;
        console.log('Nome:', nome);
        console.log('Valor:', valor);
        console.log('Imagem:', imagem);
        nameInput.value = '';
        valorlInput.value = '';
        imagemInput.value = '';
    } else {
        // Há campos inválidos, exiba as mensagens de erro.
        nameErro.classList.toggle('mostrar-erro', !nomeValido);
        valorErro.classList.toggle('mostrar-erro', !valorValido);
        imagemErro.classList.toggle('mostrar-erro', !imagemValida);
    }
});