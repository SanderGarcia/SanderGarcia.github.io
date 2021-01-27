$(function () {
    var curSlide = 0;
    var maxSlide = $('.banner-single').length - 1;
    var delay = 2;

    changeSlide();
    initSlider();

    function initSlider() {
        $('.banner-single').hide();
        $('.banner-single').eq(0).show();
        for (let i = 0; i < maxSlide+1; i++) {
            var content = $('.bullets').html();
            if(i == 0){
                content+='<span class="selected"></span>';
            }else{
                content+='<span></span>';
            }
            $('.bullets').html(content);
        }
    }

    function changeSlide() {
        setInterval(function() {
            $('.banner-single').eq(curSlide).stop().fadeOut(2000);
            curSlide++;
            if(curSlide > maxSlide)
                curSlide = 0;
            $('.banner-single').eq(curSlide).stop().fadeIn(2000);
            //Trocar bullets da navegação do slider
            $('.bullets > span').removeClass('selected');
            $('.bullets > span').eq(curSlide).addClass('selected');
        },delay * 2000);
    }

    //Bullets
    $('body').on('click','.bullets span',function(){
        var currentBullet = $(this);
        $('.banner-single').eq(curSlide).stop().fadeOut(1000);
        curSlide = currentBullet.index();
        $('.banner-single').eq(curSlide).stop().fadeIn(1000);
        $('.bullets > span').removeClass('selected');
        currentBullet.addClass('selected');
    })

    //Chevron
    $('.btn-prev i, .btn-next i').click(function(){
        var el = $(this).prop('class');
        $('.banner-single').eq(curSlide).stop().fadeOut(2000);
        
        if(el == 'fas fa-chevron-left'){
            curSlide--;
            if(curSlide < 0)
                curSlide = maxSlide;
        }else if (el == 'fas fa-chevron-right'){
            curSlide++;
            if(curSlide > maxSlide)
                curSlide = 0;
        }

        //Alteração do slide
        $('.banner-single').eq(curSlide).stop().fadeIn(1000);
        //Trocar bullets da navegação do slider
        $('.bullets > span').removeClass('selected');
        $('.bullets > span').eq(curSlide).addClass('selected');
    })
})