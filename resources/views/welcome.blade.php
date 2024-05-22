<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Document</title>
    <link rel="stylesheet" href="{{ asset('/css/style2.css') }}">

    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Montserrat:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&display=swap" rel="stylesheet">

</head>
<body>
    <div class="contenedorGrid ">
        <div class="elementoNavbarTop navbarTop">
            <nav class="navbarTop"> 
                <span>
                @include('navbar')
                </span>
                
                    <div>
                        <button class="botonMonedas luckiest-guy-regular">
                            <span class="textoEncimaImagen" id="monedas" >100.00</span>
                            <span class="imagen-icono-monedas"></span>
                        </button>
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
                    
                    <button class="botonMenu" onclick="toggleMenu()"></button>
                    <div id="menuOpciones" class="menuOpciones">
                        <img src="./img/menuopc.png" alt="Imagen de opciones de menú">
                        <div class="textoSobreImagen"> 
                        <ul>
                            <li><a href="#">Opción 1</a></li>
                            <li><a href="#">Opción 2</a></li>
                            <li><a href="#">Opción 3</a></li>
                        </ul>
                    </div>
                </div>
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
                <a href="javascript:void(0)" class="button botonExclamacion">.</a>
                <a href="javascript:void(0)" class="button botonMenos" id="botonMenos">-</a>
        
                <div class="panelApuesta">
                    <span class="apuesta">TOTAL BET</span>
                    <span class="apuesta"  id="panelApuesta">100.00</span>
                </div>
        
                <a href="javascript:void(0)" class="button botonMas"  id="botonMas">+</a>
        
                <a href="javascript:void(0)" class="button panelWins">
                    TOTAL WIN<br>
                    200.00
                </a>
                <a href="javascript:void(0)" class="button botonMayorApuesta" id="botonMaximaApuesta">
                    MAX<br>
                    BET
                </a>
                <a href="#" class="button botonJugar" onclick="iniciarAnimacion()" id="spin">SPIN..</a>
            </nav>
        </div>
</body>
<script src="{{ asset('/js/script.js') }}"></script>
</html>