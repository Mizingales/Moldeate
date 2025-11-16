<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Moldeate - Tu Historia</title>
    <!-- Fuente estilo Minecraft -->
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <!-- jsPDF para generar PDF -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <!-- html2canvas para screenshots -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <!-- CSS personalizado -->
    <link rel="stylesheet" href="css/resultado.css">
</head>
<body>
    <!-- Pantalla de carga -->
    <div class="loading-screen" id="loadingScreen">
        <div class="loading-text">ESTAMOS CREANDO TU HISTORIA</div>
        <div class="loading-spinner"></div>
        <div class="loading-dots">
            <span class="dot">.</span>
            <span class="dot">.</span>
            <span class="dot">.</span>
        </div>
    </div>

    <!-- Pantalla final -->
    <div class="final-screen" id="finalScreen">
        <div class="content-horizontal">
            <!-- Panel izquierdo: Historia -->
            <div class="left-panel">
                <!-- Historia generada -->
                <div class="story-container" id="storyContainer">
                    <!-- La historia generada por AI aparecerá aquí -->
                </div>
            </div>

            <!-- Panel derecho: Masa e Inventario -->
            <div class="right-panel">
                <div class="masa-inventory-section">
                    <!-- Masa generada -->
                    <div class="masa-display" id="masaFinal">
                        <!-- La imagen de masa aparecerá aquí -->
                    </div>

                    <!-- Inventario final -->
                    <div class="inventario-display">
                        <div class="inventario-grid" id="inventarioFinal">
                            <!-- Los items seleccionados aparecerán aquí -->
                        </div>
                    </div>
                </div>

                <!-- Botones -->
                <div class="buttons-container">
                    <a href="seleccion.php" class="btn-action">Editar.me</a>
                    <button class="btn-action" onclick="descargarPDF()">Descargar.me</button>
                </div>
            </div>
        </div>

        <!-- Sección de items (oculta al descargar PDF) -->
        <div class="items-info-section">
            <div id="itemsInfo" class="items-info-container">
                <!-- La información detallada aparecerá aquí -->
            </div>
        </div>
    </div>

    <!-- JavaScript personalizado -->
    <script src="scripts/resultado.js"></script>
</body>
</html>
