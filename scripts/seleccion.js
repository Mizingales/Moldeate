// Configuración de items con sus tooltips
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
'cucharon de madera.png': { 
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
'corazon de cristal.png': { 
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









// Arrays para las masas
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




let inventoryItems = [];
let currentMasa = null;

// Inicializar la biblioteca
function initializeBiblioteca() {
    const biblioteca = document.getElementById('biblioteca');
    
    Object.keys(items).forEach((itemFile, index) => {
        const slot = document.createElement('div');
        slot.className = 'item-slot';
        slot.draggable = true;
        slot.dataset.item = itemFile;
        
        const img = document.createElement('img');
        img.src = `items/${itemFile}`;
        img.alt = items[itemFile].name;
        
        slot.appendChild(img);
        biblioteca.appendChild(slot);
        
        // Event listeners para drag and drop
        slot.addEventListener('dragstart', handleDragStart);
        slot.addEventListener('mouseover', showTooltip);
        slot.addEventListener('mousemove', moveTooltip);
        slot.addEventListener('mouseout', hideTooltip);
    });
}

// Drag and Drop handlers
function handleDragStart(e) {
    const slot = e.target.closest('.item-slot');
    const itemFile = slot.dataset.item;
    
    // No permitir arrastrar si el item ya está en el inventario
    if (inventoryItems.includes(itemFile)) {
        e.preventDefault();
        return false;
    }
    
    e.dataTransfer.setData('text/plain', itemFile);
    e.dataTransfer.effectAllowed = 'move';
    slot.classList.add('dragging');
}

// Setup drag and drop para el inventario
function setupInventario() {
    const inventorySlots = document.querySelectorAll('#inventario .item-slot');
    
    inventorySlots.forEach(slot => {
        slot.addEventListener('dragover', handleDragOver);
        slot.addEventListener('drop', handleDrop);
        slot.addEventListener('dragleave', handleDragLeave);
        slot.addEventListener('dragenter', handleDragEnter);
        slot.addEventListener('click', handleSlotClick);
    });
}

function handleDragEnter(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    e.target.classList.add('drag-over');
}

function handleDragLeave(e) {
    // Solo remover la clase si realmente salimos del elemento
    if (!e.currentTarget.contains(e.relatedTarget)) {
        e.target.classList.remove('drag-over');
    }
}

function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove('drag-over');
    
    const itemFile = e.dataTransfer.getData('text/plain');
    const slot = e.target.closest('.item-slot');
    
    // Solo permitir drop en slots vacíos
    if (slot && !slot.querySelector('img')) {
        addItemToInventory(itemFile, slot);
    }
    
    // Remover clase dragging
    document.querySelectorAll('.dragging').forEach(el => {
        el.classList.remove('dragging');
    });
}

function handleSlotClick(e) {
    const slot = e.target.closest('.item-slot');
    const img = slot.querySelector('img');
    
    if (img) {
        removeItemFromInventory(slot);
    }
}

function addItemToInventory(itemFile, slot) {
    const img = document.createElement('img');
    img.src = `items/${itemFile}`;
    img.alt = items[itemFile].name;
    img.dataset.item = itemFile;
    
    slot.appendChild(img);
    slot.classList.add('occupied');
    slot.dataset.item = itemFile;  // Añadimos el dataset al slot para el tooltip
    
    // Añadimos los event listeners para los tooltips
    slot.addEventListener('mouseover', showTooltip);
    slot.addEventListener('mousemove', moveTooltip);
    slot.addEventListener('mouseout', hideTooltip);
    
    inventoryItems.push(itemFile);
    updateMasa();
    updateBibliotecaState();
}

function removeItemFromInventory(slot) {
    const img = slot.querySelector('img');
    const itemFile = img.dataset.item;
    
    slot.removeChild(img);
    slot.classList.remove('occupied');
    
    // Removemos los event listeners y el dataset
    slot.removeEventListener('mouseover', showTooltip);
    slot.removeEventListener('mousemove', moveTooltip);
    slot.removeEventListener('mouseout', hideTooltip);
    delete slot.dataset.item;
    
    const index = inventoryItems.indexOf(itemFile);
    if (index > -1) {
        inventoryItems.splice(index, 1);
    }
    
    updateMasa();
    updateBibliotecaState();
}

function updateBibliotecaState() {
    const bibliotecaSlots = document.querySelectorAll('#biblioteca .item-slot');
    
    bibliotecaSlots.forEach(slot => {
        const itemFile = slot.dataset.item;
        if (inventoryItems.includes(itemFile)) {
            slot.classList.add('disabled');
            slot.draggable = false;
        } else {
            slot.classList.remove('disabled');
            slot.draggable = true;
        }
    });
}

function updateMasa() {
    const masaDisplay = document.getElementById('masa-display');
    
    if (inventoryItems.length === 0) {
        masaDisplay.style.backgroundImage = '';
        masaDisplay.classList.add('empty');
        currentMasa = null;
    } else {
        // Seleccionar una masa aleatoria
        const masaIndex = Math.floor(Math.random() * masas.length);
        const selectedMasa = masas[masaIndex];
        masaDisplay.style.backgroundImage = `url('masas/${selectedMasa}')`;
        masaDisplay.classList.remove('empty');
        currentMasa = selectedMasa;
    }
}

// Tooltip functions
function showTooltip(e) {
    const tooltip = document.getElementById('tooltip');
    const slot = e.target.closest('.item-slot');
    const itemFile = slot.dataset.item;
    
    // No mostrar tooltip si el item está deshabilitado
    if (slot.classList.contains('disabled')) {
        return;
    }
    
    if (itemFile && items[itemFile]) {
        tooltip.innerHTML = items[itemFile].description.replace(/\n/g, '<br>');
        tooltip.style.display = 'block';
        moveTooltip(e);
    }
}

function moveTooltip(e) {
    const tooltip = document.getElementById('tooltip');
    const tooltipRect = tooltip.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    let left = e.clientX + 10;
    let top = e.clientY - 30;
    
    // Ajustar si se sale por la derecha
    if (left + tooltipRect.width > viewportWidth) {
        left = e.clientX - tooltipRect.width - 10;
    }
    
    // Ajustar si se sale por arriba
    if (top < 0) {
        top = e.clientY + 20;
    }
    
    // Ajustar si se sale por abajo
    if (top + tooltipRect.height > viewportHeight) {
        top = e.clientY - tooltipRect.height - 10;
    }
    
    // Ajustar si se sale por la izquierda
    if (left < 0) {
        left = 10;
    }
    
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
}

function hideTooltip() {
    document.getElementById('tooltip').style.display = 'none';
}

function finalizarSeleccion() {
    if (inventoryItems.length === 0) {
        alert('¡Debes seleccionar al menos un item para continuar!');
        return;
    }
    
    console.log('Items seleccionados:', inventoryItems);
    console.log('Masa actual:', currentMasa);
    
    // Guardar en localStorage como respaldo
    localStorage.setItem('selectedItems', JSON.stringify(inventoryItems));
    localStorage.setItem('selectedMasa', currentMasa || 'masa.png');
    
    // Navegar a la página de resultado con parámetros
    const itemsParam = inventoryItems.join(',');
    const masaParam = currentMasa || 'masa.png';
    window.location.href = `resultado.php?items=${encodeURIComponent(itemsParam)}&masa=${encodeURIComponent(masaParam)}`;
}

// Inicializar todo cuando carga la página
document.addEventListener('DOMContentLoaded', function() {
    initializeBiblioteca();
    setupInventario();
    
    // Prevenir el comportamiento por defecto del drag & drop en toda la página
    document.addEventListener('dragover', function(e) {
        e.preventDefault();
    });
    
    document.addEventListener('drop', function(e) {
        e.preventDefault();
    });
});
