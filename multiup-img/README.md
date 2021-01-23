# multiup-img

Plugin desenvolvido por <a href="https://sandergarcia.github.io/" target="_blank">Sander Garcia</a><br>
Página do plugin <a href="https://sandergarcia.github.io/multiup-img/" target="_blank">MULTIUP-IMG</a>

<p>
    Plugin front-end gratuito para visualização de imagem antes de fazer upload.<br>
    MULTIUP-IMG é totalmente responsivo e fácil de aplicar em seu projeto.<br><br>
    Confira abaixo como é prático!
</p>
<h3>Pré-Requisitos</h3>
<p>Como o plugin foi desenvolvido utilizando jQuery, é necessário que você insira-o em seu projeto antes da indicação do MULTIUP-IMG.</p>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="seu_diretorio/mulitup.img.js"></script>
<p>
    É necessário indicar também o arquivo CSS no head do seu projeto, além do FontAwesome.<br>
    Não esqueça de inserir a pasta "webfonts" (FontAwesome) no diretório raiz do seu projeto, pois é utilizado para ícone da imagem.
</p>

    <link rel="stylesheet" href="seu_diretorio/all.min.css">
    <link rel="stylesheet" href="seu_diretorio/multiup.img.css">
    
<p>
    Há duas formas de utilizar o MULTIUP-IMG.<br>
    Para quando o usuário puder somente fazer upload de <b>uma única</b> imagem ou para quando puder fazer upload de <b>múltiplas</b> imagens.
</p>

<h3>Como Desenvolver o Back-End</h3>
<p>
    Como são vários input do tipo file, o envio é normal como qualquer envio de formulário, 
    necessitando somente de implementar um loop para pegar todas as imagens quando por utilizar 
    a forma de múltiplas imagens. Caso for utilizar a forma de única imagem, então é somente o input file normal.
</p>