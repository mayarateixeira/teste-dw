function validarCampos() {

    let ret = true;
    let form = document.forms["formContato"];


    let msgErro = document.getElementById("msgErro");
    msgErro.innerHTML = "";



    if (form.nomesobrenome.value.trim() == "") {

        msgErro.innerHTML = "favor, preencher o campo nome <br>";
        form.nomesobrenome.focus();
        ret = false;
    }
    if ((form.email.value.indexOf(".") == -1) ||
        (form.email.value.indexOf("@") == -1) ||
        (form.email.value.indexOf(".") - form.email.value.indexOf("@") == 1)) {
        msgErro.innerHTML = msgErro.innerHTML + "favor preencher o campo e-mail <br>";
        form.email.focus();
        ret = false;
    }
    if (form.telefone.value.trim() == "") {

        msgErro.innerHTML = msgErro.innerHTML + "favor, preencher o campo telefone <br>";
        form.telefone.focus();
        ret = false;
    }
    if (form.mensagem.value.trim() == "") {

        msgErro.innerHTML = msgErro.innerHTML + "favor, preencher o campo mensagem <br>";
        form.mensagem.focus();
        ret = false;
    }
    if (form.contato.value.trim() == "") {

        msgErro.innerHTML = msgErro.innerHTML + ('favor, preencher o campo contato<br>');
        form.mensagem.focus();
        ret = false;
    }
    if (form.periodo.selectedIndex < 0) {

        msgErro.innerHTML = msgErro.innerHTML + ('favor, preencher o campo periodo<br>');
        form.mensagem.focus();
        ret = false;
    }


    return ret;

}