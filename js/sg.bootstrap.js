$(function() {

    //Animações de campos de formulário
    function initInput() {
        var input = $('.input, .textarea');
        var inputLen = $('.input, .textarea').length;
        for (let i = 0; i < inputLen; i++){
            var inputVal = input.eq(i).val();
            if(inputVal !== ""){
                input.eq(i).parent().find('.label').animate({
                    fontSize: '10px',
                    lineHeight: '20px'
                },0);
            }
        }
    }

    $('.input, .textarea').focus(function() {
        $(this).animate({
            borderBottomWidth: '3px'
        },250).css('borderColor','#62758f');
        $(this).parent().find('.label').animate({
            fontSize: '10px',
            lineHeight: '20px'
        },250).css('color','#62758f');
    })

    $('.input, .textarea').blur(function() {
        var inputVal = $(this).val();
        if(inputVal == ''){
            $(this).animate({
                borderBottomWidth: '1px'
            },250).css('borderColor','#888888');
            $(this).parent().find('.label').animate({
                fontSize: '15px',
                lineHeight: '50px'
            },250).css('color','#444');
        }else{
            $(this).animate({
                borderBottomWidth: '1px'
            },250).css('borderColor','#888888');
            $(this).parent().find('.label').css('color','#444');
        }
    })
    
    $('.label').click(function() {
        $(this).parent().find('.input, .textarea').focus();
    })
    ////////////////////////////////////////////////////////////


    //Selecionar todos os checkbox da tabela
    function selecionarTodosExcluir(){
        $('#selectall').click(function(){
            el = $(this).prop('checked');
            if(el == true){
                $(this).parent().parent().parent().find('tr td input[type=checkbox]').prop('checked',true);
            }else{
                $(this).parent().parent().parent().find('tr td input[type=checkbox]').prop('checked',false);
            }
        })
    }

    // Contador e caracteres
    $('.textarea, .input').on("keyup", function() {
        let texto = $(this).val();
        texto = texto.length;
        let n = 524288 - texto;
        $(this).parent().find('.str-length').html(n+' caracteres restante');
    });
    

    selecionarTodosExcluir();
    initInput();
})