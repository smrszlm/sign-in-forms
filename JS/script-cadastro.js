const form = document.getElementById("form");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const nome = document.getElementById("username");
const fone = document.getElementById("fone");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    validaCampos();
});

function validaCampos() {
    const valorEmail = email.value;
    const valorSenha = senha.value;
    const valorNome = nome.value;
    const valorFone = fone.value;

    if (valorEmail === "") {
        setErrorFor(email, "Campo Obrigatório.");
    } else if (!validaEmail(valorEmail)) {
        setErrorFor(email, "Por favor, insira um email válido.");
    } else {
        setSuccessFor(email);
    }

    if (valorSenha === "") {
        setErrorFor(senha, "Campo Obrigatório");
    } else {
        setSuccessFor(senha);
    }

    if (valorNome === ""){
        setErrorFor(nome, "Campo Obrigatório");
    }else {
        setSuccessFor(nome);
    }

    if (valorFone === ""){
        setErrorFor(fone, "Campo Obrigatório");
    }else {
        setSuccessFor(fone);
    }

    const todosOsCampos = form.querySelectorAll('.form-control');

    const validaFormulario = [ ... todosOsCampos].every(formControl => {
        return (formControl.className === "form-control success");
    });

    if (validaFormulario) {
        alert("O Cadastro feito com sucesso!");
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //pega o elemento pai
    const small = formControl.querySelector("small");
    //ADICIONA MENSAGEM DE ERRO 
    small.innerText = message;

    //ADICIONA CLASSE DE ERRO 
    formControl.className = "form-control error";
} 

function setSuccessFor(input) {
    const formControl = input.parentElement; 

    //ADICIONA CLASSE DE ERRO 
    formControl.className = "form-control success";
}

function validaEmail (email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

