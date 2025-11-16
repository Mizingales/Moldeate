<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Moldeate - Elige tus Objetos</title>
    <!-- Fuente estilo Minecraft -->
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <!-- CSS personalizado -->
    <link rel="stylesheet" href="css/seleccion.css">
</head>
<body>
    <div class="main-container">
        <div class="content-area">
            <!-- Panel izquierdo: Biblioteca -->
            <div class="left-panel">
                <div class="biblioteca-section">
                    <h2 class="section-title">BIBLIOTECA</h2>
                    <div class="biblioteca-wrapper">
                        <div class="biblioteca-scrollbar" id="biblioteca-scrollbar">
                            <div class="scrollbar-thumb" id="scrollbar-thumb"></div>
                        </div>
                        <div class="biblioteca-container" id="biblioteca-container">
                            <div class="items-grid" id="biblioteca">
                                <!-- Los items se cargarán aquí dinámicamente -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Panel derecho: Inventario, Masa y botón -->
            <div class="right-panel"> 
               <div class="" style="width: 100%;">
  <h2 class="section-title text-center">INVENTARIO</h2>


               </div>

                <div class="top-right-section">
                    
                    <div class="inventario-wrapper inventario-left">
                      
                        <div class="inventario-container">
                            <div class="inventario-grid inventario-grid-left">
                                <div class="item-slot" data-slot="0"></div>
                                <div class="item-slot" data-slot="1"></div>
                                <div class="item-slot" data-slot="2"></div>
                                <div class="item-slot" data-slot="3"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="masa-wrapper">
                        <div class="masa-display empty" id="masa-display">
                            <!-- La imagen de masa aparecerá aquí -->
                        </div>
                    </div>
                    
                    <div class="inventario-wrapper inventario-right">
                     
                        <div class="inventario-container">
                            <div class="inventario-grid inventario-grid-right">
                                <div class="item-slot" data-slot="4"></div>
                                <div class="item-slot" data-slot="5"></div>
                                <div class="item-slot" data-slot="6"></div>
                                <div class="item-slot" data-slot="7"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="bottom-right-section">
                    <div class="items-counter" id="items-counter">Faltan 8</div>
                    <button class="btn-listo" onclick="finalizarSeleccion()">LISTO!</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Popup de bienvenida -->
    <div class="welcome-popup" id="welcome-popup">
        <div class="welcome-content">
            <h2 class="welcome-title">ELIGE TUS<br>OBJETOS</h2>
            <button class="btn-comenzar-seleccion" onclick="cerrarPopup()">OK</button>
        </div>
    </div>

    <!-- Overlay de item -->
    <div class="item-overlay" id="item-overlay" style="display: none;">
        <div class="overlay-content">
            <div class="overlay-item-icon" id="overlay-icon"></div>
            <div class="overlay-item-info">
                <h3 class="overlay-item-name" id="overlay-name"></h3>
                <p class="overlay-item-desc" id="overlay-desc"></p>
            </div>
            <button class="overlay-btn-add" id="overlay-btn" onclick="addFromOverlay()">+</button>
        </div>
    </div>

    <!-- JavaScript personalizado -->
    <script src="scripts/seleccion.js"></script>
</body>
</html>
