<DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" >
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Document</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Montserrat:wght@300&display=swap"
            rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('/css/style2.css') }}">
    </head>

    <body>
        <div class="contenedorGrid">
            <div class="elementoNavbarTop navbarTop">
                <nav class="navbarTop">
                @include('navbar')
                <div>
                    @auth
                        <button class="botonMonedas luckiest-guy-regular">
                            <span class="textoEncimaImagen" id="monedas">{{ auth()->user()->puntos }}.00</span>
                            <span class="imagen-icono-monedas"></span>
                        </button>
                    @else
                        <button class="botonMonedas luckiest-guy-regular">
                            <span class="textoEncimaImagen" id="monedas">10000.00</span>
                            <span class="imagen-icono-monedas"></span>
                        </button>
                    @endauth
                </div>
                    <div class="botonCompra">
                        <img src="./img/letras.png" class="imagenLobby" alt="Imagen de Lobby">
                        <div class="textoEncimaImagen"></div>
                    </div>
                    <div class="contenedor-nivel">
                        <div class="imagen-icono-experiencia"></div>
                        <div class="nivel-texto luckiest-guy-regular">52</div>
                        <div class="barra-progreso">
                            <div class="progreso"></div>
                        </div>
                    </div>
                    <button class="menu-button" id="menuButton" onclick="SonidoP()"></button>
                </nav>
            </div>

            <div class="elemento1 imgIzquierda"></div>
            <div class="elemento2 contenedor-principal">
                <div class="contenedor">
                    <div class="riel" id="riel1">
                        <img src="img/cereza.png" alt="siete">
                        <img src="img/siete.png" alt="siete">
                        <img src="img/siete.png" alt="siete">
                    </div>
                </div>
                <div class="contenedor">
                    <div class="riel" id="riel2">
                        <img src="img/cereza.png" alt="siete">
                        <img src="img/siete.png" alt="siete">
                        <img src="img/siete.png" alt="siete">
                    </div>
                </div>
                <div class="contenedor">
                    <div class="riel" id="riel3">
                        <img src="img/cereza.png" alt="siete">
                        <img src="img/siete.png" alt="siete">
                        <img src="img/siete.png" alt="siete">
                    </div>
                </div>
                <div class="contenedor">
                    <div class="riel" id="riel4">
                        <img src="img/cereza.png" alt="siete">
                        <img src="img/siete.png" alt="siete">
                        <img src="img/siete.png" alt="siete">
                    </div>
                </div>
                <div class="contenedor">
                    <div class="riel" id="riel5">
                        <img src="img/cereza.png" alt="siete">
                        <img src="img/siete.png" alt="siete">
                        <img src="img/siete.png" alt="siete">
                    </div>
                </div>
            </div>

            <div class="elemento3 imgDerecha"></div>
            <div class="elementoNavbarBottom">
                <nav class="navbarBottom">
                    <button class="botonMenu" onclick="toggleMenu(),SonidoP()"></button>
                    <div id="menuOpciones" class="menuOpciones" style="display: none;">
                        <div class="closeButton" onclick="toggleMenu(),SonidoP()">X</div>
                        <div class="imageContainer">
                            <img id="menuImage" src="./img/Mesa de trabajo 1.png" alt="">
                            <div class="textoSobreImagen"></div>
                            <div class="arrow left" onclick="prevImage()">&#9664;</div>
                            <div class="arrow right" onclick="nextImage()">&#9654;</div>
                        </div>
                    </div>
                    <a href="javascript:void(0)" class="button botonMenos" id="botonMenos" onclick=" SonidoP()">-</a>
                    <div class="panelApuesta">
                        <span class="apuesta">TOTAL BET</span>
                        <span class="apuesta" id="panelApuesta">100.00</span>
                    </div>
                    <a href="javascript:void(0)" class="button botonMas" id="botonMas" onclick=" SonidoP()">+</a>
                    <a href="javascript:void(0)" class="button panelWins" onclick=" SonidoP()">TOTAL WINS<br>200.00</a>
                    <a href="javascript:void(0)" class="button botonMayorApuesta" id="botonMaximaApuesta"
                        onclick=" SonidoP()">MAX<br>BET</a>
                    <a href="#" class="button botonJugar" onclick="iniciarAnimacion(),Sonido1(),SonidoP()"
                        id="spin">SPIN..</a>
                </nav>
            </div>

            <audio id="Sonido1">
                <source src="sonidos\juego2.mp3" type="audio/mpeg">
            </audio>
            <audio id="SonidoP">
                <source src="sonidos\presionar.mp3" type="audio/mpeg">
            </audio>
</body>
<script src="{{ asset('/js/script.js') }}"></script>
</html>