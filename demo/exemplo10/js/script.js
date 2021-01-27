$(function () {
    $('.collapse').click(function(){
        $('.mobile ul').slideToggle();
    })

    $('input[type=submit]').click(function(){
        alert('Esse formulário é apenas demonstrativo, portanto nenhuma mensagem foi enviada!');
        return false;
    })
})