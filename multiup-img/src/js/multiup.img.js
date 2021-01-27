$(document).ready(function() {
    //Multiple Images
    //Preview de Imagem Function
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $(input).parent().prepend(`
                    <div class="multiup-img-single">
                        <img src="`+e.target.result+`" alt="">
                        <span class="remove-multiup-img"><i class="fas fa-times"></i></span>
                    </div>
                `);
            }
            
            reader.readAsDataURL(input.files[0]);
        }
        var qtde = $('.multiup-single').length;
        $('.master-multiup-content').append(`
            <div class="multiup-single">
                <label class="multiup-inputfile" for="multiplefile`+qtde+`"><i class="fas fa-camera"></i>Selecionar Imagem</label>
                <input class="multiplefileinput" type="file" id="multiplefile`+qtde+`" name="multiplefile[]" >
            </div>
        `);
    }
    
    //Preview of image input change
    $(document).on('change','.multiplefileinput',(function(){
        $(this).parent().parent().find('label').remove();
        readURL(this);
    }));

    //Remove input and image to post
    $(document).on('click', '.remove-multiup-img', function() {
        $(this).parent().parent().find('.multiplefileinput').remove();
        $(this).parent().parent().remove();
    })

    ///////////////////////////////////////////////////////////////////////
    //Single Image
    //Preview de Imagem Function
    function readURLSingle(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $(input).parent().prepend(`
                    <div class="multiup-img-single-single">
                        <img src="`+e.target.result+`" alt="">
                        <span class="remove-multiup-img-single"><i class="fas fa-times"></i></span>
                    </div>
                `);
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    //Preview of image input change
    $(document).on('change','.multiplefileinput-single',(function(){
        $(this).parent().parent().find('label').remove();
        readURLSingle(this);
    }));

    //Remove input and image to post
    $(document).on('click', '.remove-multiup-img-single', function() {
        $(this).parent().parent().find('.multiplefileinput-single').remove();
        $(this).parent().parent().remove();
        $('.master-multiup-content-single').append(`
            <div class="multiup-single-single">
                <label class="multiup-inputfile-single" for="image"><i class="fas fa-camera"></i>Selecionar Imagem</label>
                <input class="multiplefileinput-single" type="file" id="image" name="imagem" >
            </div>
        `);
    })
})