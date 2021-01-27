$(function () {
    var curDepoimento = 0;
    var maxDepoimento = $('.depoimento-single').length - 1;
    var delay = 3;

    changeDepoimento();
    initDepoimento();

    function initDepoimento() {
        $('.depoimento-single').hide();
        $('.depoimento-single').eq(0).show();
    }

    function changeDepoimento() {
        setInterval(function() {
            $('.depoimento-single').eq(curDepoimento).stop().css('display','none');
            curDepoimento++;
            if(curDepoimento > maxDepoimento)
                curDepoimento = 0;
            $('.depoimento-single').eq(curDepoimento).stop().fadeIn(2000);
            //Trocar bullets da navegação do slider
            $('.bullets > span').removeClass('selected');
            $('.bullets > span').eq(curDepoimento).addClass('selected');
        },delay * 2000);
    }

    //Chevron
    $('.btn-prev i, .btn-next i').click(function(){
        var el = $(this).prop('class');
        $('.depoimento-single').eq(curDepoimento).stop().css('display','none');
        
        if(el == 'fas fa-chevron-circle-left'){
            curDepoimento--;
            if(curDepoimento < 0)
                curDepoimento = maxDepoimento;
        }else if (el == 'fas fa-chevron-circle-right'){
            curDepoimento++;
            if(curDepoimento > maxDepoimento)
                curDepoimento = 0;
        }

        //Alteração do slide
        $('.depoimento-single').eq(curDepoimento).stop().fadeIn(1000);
    })
})