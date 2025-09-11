// Configuración de items con sus descripciones
const items = {
    'espada reluciente.png': { 
    name: 'Espada Reluciente', 
    description: 'Afilada y poderosa. Ideal para aventureros valientes.',
    atributo: 'Valiente'
},
'espada antigua.png': { 
    name: 'Espada Antigua', 
    description: 'Cargada de victorias y derrotas, porque aprender de los errores es la única salida.',
    atributo: 'Relfexivo'
},
'gafas magicas.png': { 
    name: 'Gafas mágicas', 
    description: 'Revelan secretos ocultos. Podrás saberlo todo, solo de un vistazo.',
    atributo: 'Curioso'
},
'orbe vibrante.png': { 
    name: 'Orbe vibrante', 
    description: 'Un orbe lleno de energía e ideas locas. Si lo llevas encima, nunca más estarás aburrido.',
    atributo: 'Energético'
},
'sombrero de mago.png': { 
    name: 'Sombrero de mago', 
    description: 'Este sombrero carga con el conocimiento absoluto. Y si, huele a humedad.',
    atributo: 'Sabio'
},
'escudo oxidado.png': { 
    name: 'Escudo oxidado', 
    description: 'Ha pasado mil batallas, pero aún aguanta mil más.',
    atributo: 'Resistente'
},
'linterna perpetua.png': { 
    name: 'Linterna perpetua', 
    description: 'Una luz tenue y cálida que nunca, JAMÁS, se apaga.',
    atributo: 'Esperanzado'
},
'pluma dorada.png': { 
    name: 'Pluma dorada', 
    description: 'Todo aquello que dibujes en el aire se materializará. (Por favor no dibujes a Godzilla)',
    atributo: 'Creativo'
},
'botella de arena.png': { 
    name: 'Botella de arena', 
    description: 'Cada grano de arena contiene un recuerdo favorito. Puedes revivirlos en la palma de tu mano.',
    atributo: 'Nostálgico'
},
'mapa incompleto.png': { 
    name: 'Mapa incompleto', 
    description: 'Un mapa con caminos que aún no existen. Solo revela su ruta al ser usado.',
    atributo: 'Explorador'
},
'flor marchita.png': { 
    name: 'Flor marchita', 
    description: 'Sus pétalos están secos, pero su delicioso aroma sigue intacto.',
    atributo: 'Sensible'
},
'campana de cristal.png': { 
    name: 'Campana de cristal', 
    description: 'Al sonar, ahuyenta sombras, males y dudas.',
    atributo: 'Puro'
},
'capa comoda.png': { 
    name: 'Capa cómoda', 
    description: 'Una capa que protege del viento y del juicio de los demás.',
    atributo: 'Discreto'
},
'amuleto de hueso.png': { 
    name: 'Amuleto de hueso', 
    description: 'Amuleto tallado en antiguo hueso. Te recuerda que todo poder nace de lo finito.',
    atributo: 'Consciente'
},
'cuerda trenzada.png': { 
    name: 'Cuerda trenzada', 
    description: 'Robusta y flexible. Puede sostenerte o liberarte, según cómo se use.',
    atributo: 'Adaptable'
},
'daga curva.png': { 
    name: 'Daga curva', 
    description: 'Rápida y silenciosa, útil en las sombras.',
    atributo: 'Astuto'
},
'algo extraño.png': { 
    name: 'Algo extraño', 
    description: 'Se dice que este objeto, en las manos indicadas revelará el mayor misterio.',
    atributo: 'Misterioso'
},
'brujula erratica.png': { 
    name: 'Brújula errática', 
    description: 'Apunta hacia lo que deseas, no hacia el norte.',
    atributo: 'Deseoso'
},
'anillo oxidado.png': { 
    name: 'Anillo oxidado', 
    description: 'Viejo anillo que alguna vez brilló. Aun así, conserva la fuerza de un gran juramento.',
    atributo: 'Leal'
},
'corona impecable.png': { 
    name: 'Corona impecable', 
    description: 'Una corona brillante que encaja perfectamente en tu cabeza. En serio, brilla demasiado.',
    atributo: 'Orgulloso'
},
'cucharón de madera.png': { 
    name: 'Cucharón de madera', 
    description: 'Simple y humilde, quien sabe cuantos usos le podrás dar.',
    atributo: 'Generoso'
},
'rosa de metal.png': { 
    name: 'Rosa de metal', 
    description: 'Una flor hecha de hierro, imposible de marchitar.',
    atributo: 'Fuerte'
},
'piedra pulida.png': { 
    name: 'Piedra pulida', 
    description: 'Suavizada por el tiempo y el agua. Cabe en la palma de la mano.',
    atributo: 'Paciente'
},
'libro ilegible.png': { 
    name: 'Libro ilegible', 
    description: 'Sus páginas están llenas de símbolos que nadie entiende.',
    atributo: 'Enigmático'
},
'rama seca.png': { 
    name: 'Rama seca', 
    description: 'Aunque quebradiza, conserva la memoria del árbol que supo ser.',
    atributo: 'Melancólico'
},
'gema agrietada.png': { 
    name: 'Gema agrietada', 
    description: 'Brilla con fuerza a pesar de sus fisuras internas.',
    atributo: 'Valioso'
},
'campanilla ruidosa.png': { 
    name: 'Campanilla ruidosa', 
    description: 'Su sonido áspero aún logra llamar la atención a kilómetros de distancia.',
    atributo: 'Tenaz'
},
'pergamino quemado.png': { 
    name: 'Pergamino quemado', 
    description: 'Lo poco que queda escrito parece hablar de tiempos gloriosos.',
    atributo: 'Nostálgico'
},
'flauta torcida.png': { 
    name: 'Flauta torcida', 
    description: 'Sus notas suenan únicas, extrañas, a veces incómodas, pero llenas de carácter.',
    atributo: 'Original'
},
'girasol eterno.png': { 
    name: 'Girasol eterno', 
    description: 'Siempre se orienta hacia la luz, incluso en la más oscura de las tormentas.',
    atributo: 'Optimista'
},
'balanza antigua.png': { 
    name: 'Balanza antigua', 
    description: 'Sus platillos tiemblan, pero siempre encuentran el equilibrio justo.',
    atributo: 'Justo'
},
'corazón de cristal.png': { 
    name: 'Corazón de cristal', 
    description: 'Frágil y transparente, pero capaz de reflejar el dolor y la alegría de los demás.',
    atributo: 'Empático'
},
'caja de engranajes.png': { 
    name: 'Caja de engranajes', 
    description: 'Cada pieza encaja con precisión. Al mover una, todo el sistema responde.',
    atributo: 'Detallista'
},
'alas desmontables.png': { 
    name: 'Alas desmontables', 
    description: 'No necesitan permiso para volar. Vienen con un práctico arnés.',
    atributo: 'Independiente'
},
'incienso.png': { 
    name: 'Incienso', 
    description: 'Su aroma suave permanece en el aire, incluso sin haberlo encendido.',
    atributo: 'Tranquilo'
},
'frasco de estrellas.png': { 
    name: 'Frasco de estrellas', 
    description: 'Contiene un puñado de luces diminutas que titilan como promesas. Serán haditas?',
    atributo: 'Soñador'
},
'pelota multicolor.png': { 
    name: 'Pelota multicolor', 
    description: 'Va a toda velocidad. Es imposible predecir su próximo rebote.',
    atributo: 'Juguetón'
},
};

// Array de masas disponibles
const masas = ['masa-001.jpg', 'masa-002.jpg', 'masa-003.jpg', 'masa-004.jpg', 'masa-005.jpg', 'masa-006.jpg', 'masa-007.jpg', 'masa-008.jpg', 'masa-009.jpg', 'masa-010.jpg', 
'masa-011.jpg', 'masa-012.jpg', 'masa-013.jpg', 'masa-014.jpg', 'masa-015.jpg', 'masa-016.jpg', 'masa-017.jpg', 'masa-018.jpg', 'masa-019.jpg', 'masa-020.jpg', 
'masa-021.jpg', 'masa-022.jpg', 'masa-023.jpg', 'masa-024.jpg', 'masa-025.jpg', 'masa-026.jpg', 'masa-027.jpg', 'masa-028.jpg', 'masa-029.jpg', 'masa-030.jpg', 
'masa-031.jpg', 'masa-032.jpg', 'masa-033.jpg', 'masa-034.jpg', 'masa-035.jpg', 'masa-036.jpg', 'masa-037.jpg', 'masa-038.jpg', 'masa-039.jpg', 'masa-040.jpg', 
'masa-041.jpg', 'masa-042.jpg', 'masa-043.jpg', 'masa-044.jpg', 'masa-045.jpg', 'masa-046.jpg', 'masa-047.jpg', 'masa-048.jpg', 'masa-049.jpg', 'masa-050.jpg', 
'masa-051.jpg', 'masa-052.jpg', 'masa-053.jpg', 'masa-054.jpg', 'masa-055.jpg', 'masa-056.jpg', 'masa-057.jpg', 'masa-058.jpg', 'masa-059.jpg', 'masa-060.jpg', 
'masa-061.jpg', 'masa-062.jpg', 'masa-063.jpg', 'masa-064.jpg', 'masa-065.jpg', 'masa-066.jpg', 'masa-067.jpg', 'masa-068.jpg', 'masa-069.jpg', 'masa-070.jpg', 
'masa-071.jpg', 'masa-072.jpg', 'masa-073.jpg', 'masa-074.jpg', 'masa-075.jpg', 'masa-076.jpg', 'masa-077.jpg', 'masa-078.jpg', 'masa-079.jpg', 'masa-080.jpg', 
'masa-081.jpg', 'masa-082.jpg', 'masa-083.jpg', 'masa-084.jpg', 'masa-085.jpg', 'masa-086.jpg', 'masa-087.jpg', 'masa-088.jpg', 'masa-089.jpg', 'masa-090.jpg', 
'masa-091.jpg', 'masa-092.jpg', 'masa-093.jpg', 'masa-094.jpg', 'masa-095.jpg', 'masa-096.jpg', 'masa-097.jpg', 'masa-098.jpg', 'masa-099.jpg', 'masa-100.jpg', 
'masa-101.jpg', 'masa-102.jpg', 'masa-103.jpg', 'masa-104.jpg', 'masa-105.jpg', 'masa-106.jpg', 'masa-107.jpg', 'masa-108.jpg', 'masa-109.jpg', 'masa-110.jpg', 
'masa-111.jpg', 'masa-112.jpg', 'masa-113.jpg', 'masa-114.jpg', 'masa-115.jpg', 'masa-116.jpg', 'masa-117.jpg', 'masa-118.jpg', 'masa-119.jpg', 'masa-120.jpg', 
'masa-121.jpg', 'masa-122.jpg', 'masa-123.jpg', 'masa-124.jpg', 'masa-125.jpg', 'masa-126.jpg', 'masa-127.jpg', 'masa-128.jpg', 'masa-129.jpg', 'masa-130.jpg', 
'masa-131.jpg', 'masa-132.jpg', 'masa-133.jpg', 'masa-134.jpg', 'masa-135.jpg', 'masa-136.jpg', 'masa-137.jpg', 'masa-138.jpg', 'masa-139.jpg', 'masa-140.jpg', 
'masa-141.jpg', 'masa-142.jpg', 'masa-143.jpg', 'masa-144.jpg', 'masa-145.jpg', 'masa-146.jpg', 'masa-147.jpg', 'masa-148.jpg', 'masa-149.jpg', 'masa-150.jpg', 
'masa-151.jpg', 'masa-152.jpg', 'masa-153.jpg', 'masa-154.jpg', 'masa-155.jpg', 'masa-156.jpg', 'masa-157.jpg', 'masa-158.jpg', 'masa-159.jpg', 'masa-160.jpg', 
'masa-161.jpg', 'masa-162.jpg', 'masa-163.jpg', 'masa-164.jpg', 'masa-165.jpg', 'masa-166.jpg', 'masa-167.jpg', 'masa-168.jpg'];

// Variables globales
let selectedItems = [];
let finalMasa = null;
let generatedStory = '';

// Obtener datos de la URL o localStorage
function getSelectionData() {
    const urlParams = new URLSearchParams(window.location.search);
    const itemsParam = urlParams.get('items');
    
    if (itemsParam) {
        selectedItems = itemsParam.split(',');
    } else {
        // Si no hay parámetros, intentar obtener de localStorage
        const savedItems = localStorage.getItem('selectedItems');
        
        if (savedItems) {
            selectedItems = JSON.parse(savedItems);
        } else {
            // Si no hay datos, redirigir a selección
            window.location.href = 'seleccion.php';
            return;
        }
    }
    
    // Seleccionar una masa aleatoria nueva
    const randomIndex = Math.floor(Math.random() * masas.length);
    finalMasa = masas[randomIndex];
}

// Generar historia usando ChatGPT API
async function generateStory() {
    // Llama al backend PHP para obtener la historia generada
    try {
        const response = await fetch('generate_story.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `items=${encodeURIComponent(selectedItems.join(','))}&masa=${encodeURIComponent(finalMasa)}`
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        generatedStory = data.story;
        if (data.fallback) {
            console.warn('Se usó la historia de fallback.');
        }
    } catch (error) {
        console.error('Error generando historia:', error);
        // Fallback local - usar una historia simple
        generatedStory = "Cada mañana, te despiertas junto al mar. En esta pequeña isla donde el viento huele a sal y a pan recién horneado, vives aventuras únicas con tus objetos mágicos. Cada día trae nuevos descubrimientos y la promesa de algo extraordinario.";
    }
}

// Mostrar la masa final
function displayMasa() {
    const masaDisplay = document.getElementById('masaFinal');
    if (!masaDisplay || !finalMasa) return;
    
    // Limpiar cualquier imagen previa
    masaDisplay.style.backgroundImage = '';
    // Establecer la nueva imagen
    masaDisplay.style.backgroundImage = `url('masas/${finalMasa}')`;
}

// Mostrar inventario final
function displayInventory() {
    const inventarioGrid = document.getElementById('inventarioFinal');
    
    // Limpiar slots
    inventarioGrid.innerHTML = '';
    
    // Crear 8 slots
    for (let i = 0; i < 8; i++) {
        const slot = document.createElement('div');
        slot.className = 'item-slot';
        
        if (i < selectedItems.length) {
            const img = document.createElement('img');
            img.src = `items/${selectedItems[i]}`;
            img.alt = selectedItems[i].replace('.png', '');
            slot.appendChild(img);
        }
        
        inventarioGrid.appendChild(slot);
    }

    // Mostrar información de los items
    displayItemsInfo();
}

// Mostrar información detallada de los items
function displayItemsInfo() {
    const itemsInfoContainer = document.getElementById('itemsInfo') || createItemsInfoContainer();
    
    if (selectedItems.length === 0) {
        itemsInfoContainer.innerHTML += '<p>No hay items seleccionados.</p>';
        return;
    }

    const itemsList = document.createElement('ul');
    itemsList.className = 'items-info-list';
    
    selectedItems.forEach(itemFile => {
        if (items[itemFile]) {
            const itemInfo = items[itemFile];
            const listItem = document.createElement('li');
            listItem.className = 'item-info';
            listItem.innerHTML = `
                <h4>${itemInfo.name}</h4>
                <p>${itemInfo.description.replace(/\n/g, '<br>')}</p>
            `;
            itemsList.appendChild(listItem);
        }
    });
    
    itemsInfoContainer.appendChild(itemsList);
}

// Crear el contenedor para la información de los items si no existe
function createItemsInfoContainer() {
    const container = document.createElement('div');
    container.id = 'itemsInfo';
    container.className = 'items-info-container';
    
    // Insertar después del inventario
    const inventarioFinal = document.getElementById('inventarioFinal');
    inventarioFinal.parentNode.insertBefore(container, inventarioFinal.nextSibling);
    
    return container;
}

// Mostrar historia generada
function displayStory() {
    const storyContainer = document.getElementById('storyContainer');
    storyContainer.textContent = generatedStory;
}

// Ocultar pantalla de carga y mostrar resultado
function showFinalScreen() {
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('finalScreen').style.display = 'block';
}

// Generar PDF con screenshot
async function descargarPDF() {
    try {
        // Mostrar indicador de carga
        const downloadButton = document.querySelector('button[onclick="descargarPDF()"]');
        const originalText = downloadButton.textContent;
        downloadButton.textContent = 'Generando PDF...';
        downloadButton.disabled = true;
        
        // Ocultar los botones temporalmente
        const buttonsContainer = document.querySelector('.buttons-container');
        const originalDisplay = buttonsContainer.style.display;
        buttonsContainer.style.display = 'none';
        
        // Pequeña pausa para que se aplique el ocultamiento
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Obtener el elemento que queremos capturar (toda la pantalla final excepto botones)
        const finalScreen = document.getElementById('finalScreen');
        
        // Configurar opciones para html2canvas
        const canvas = await html2canvas(finalScreen, {
            allowTaint: true,
            useCORS: true,
            scale: 1.5, // Reducir escala para que quepa mejor en una página
            backgroundColor: '#2c2c2c', // Color de fondo
            width: finalScreen.scrollWidth,
            height: finalScreen.scrollHeight
        });
        
        // Restaurar los botones
        buttonsContainer.style.display = originalDisplay;
        
        // Crear PDF
        const { jsPDF } = window.jspdf;
        const imgData = canvas.toDataURL('image/png');
        
        // Crear PDF en formato A4
        const doc = new jsPDF('p', 'mm', 'a4');
        
        // Establecer el fondo del PDF del mismo color que la web (#2c2c2c)
        doc.setFillColor(44, 44, 44); // RGB equivalente a #2c2c2c
        doc.rect(0, 0, 210, 297, 'F'); // Llenar toda la página A4 con el color de fondo
        
        // Dimensiones de la página A4 en mm
        const pageWidth = 210;
        const pageHeight = 297;
        
        // Calcular las dimensiones para ajustar todo el contenido en una página
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        
        // Calcular el ratio para ajustar a la página con márgenes
        const margin = 10; // margen en mm
        const availableWidth = pageWidth - (margin * 2);
        const availableHeight = pageHeight - (margin * 2);
        
        let finalWidth, finalHeight;
        
        // Calcular las dimensiones finales manteniendo la proporción
        const widthRatio = availableWidth / (imgWidth * 0.264583); // conversión px to mm
        const heightRatio = availableHeight / (imgHeight * 0.264583);
        const ratio = Math.min(widthRatio, heightRatio);
        
        finalWidth = (imgWidth * 0.264583) * ratio;
        finalHeight = (imgHeight * 0.264583) * ratio;
        
        // Centrar la imagen en la página
        const xOffset = (pageWidth - finalWidth) / 2;
        const yOffset = (pageHeight - finalHeight) / 2;
        
        // Agregar la imagen al PDF ajustada a una sola página
        doc.addImage(imgData, 'PNG', xOffset, yOffset, finalWidth, finalHeight);
        
        // Generar ID único (timestamp + número aleatorio)
        const timestamp = Date.now();
        const randomNum = Math.floor(Math.random() * 1000);
        const uniqueId = `${timestamp}${randomNum}`;
        
        // Nombre del archivo
        const filename = `moldeate_resultado_${uniqueId}.pdf`;
        
        // Descargar el PDF
        doc.save(filename);
        
        // Restaurar el botón
        downloadButton.textContent = originalText;
        downloadButton.disabled = false;
        
    } catch (error) {
        console.error('Error al generar PDF:', error);
        alert('Hubo un error al generar el PDF. Por favor, inténtalo de nuevo.');
        
        // Restaurar el botón en caso de error
        const downloadButton = document.querySelector('button[onclick="descargarPDF()"]');
        downloadButton.textContent = 'Descargar.me';
        downloadButton.disabled = false;
    }
}

// Inicializar cuando carga la página
document.addEventListener('DOMContentLoaded', async function() {
    // Obtener datos de selección
    getSelectionData();
    
    // Mostrar elementos iniciales
    displayMasa();
    displayInventory();
    
    // Generar historia (esto puede tomar tiempo)
    await generateStory();
    
    // Mostrar historia
    displayStory();
    
    // Simular tiempo de carga mínimo para mejor UX
    setTimeout(() => {
        showFinalScreen();
    }, 2000);
});
