$(function () {
    $('.collapse').click(function(){
        $('.mobile').slideToggle();
    })

    $('button').click(function(){
        alert('Esse formulário é apenas demonstrativo, portanto nenhuma mensagem foi enviada!');
        return false;
    })
})