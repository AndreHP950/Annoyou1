let $inputEmail = $('#Email');
let $inputSenha = $('#Senha');
let $botaoEnviar = $('#enviar-cadastro');

$botaoEnviar.click(() => {
    localStorage.setItem('email', $inputEmail.val());
    localStorage.setItem('senha', $inputSenha.val());

    if ($inputEmail.val() != '' && $inputSenha != '') {
        window.location.href = 'login.html';
    } else
        $inputEmail.focus();
});