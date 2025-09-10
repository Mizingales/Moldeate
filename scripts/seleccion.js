// Configuración de items con sus tooltips
const items = {
    'espada.png': {
        name: 'Espada',
        description: 'Una espada afilada y poderosa.\nIdeal para aventureros valientes.\nAumenta tu fuerza de ataque.'
    },
    'gafas.png': {
        name: 'Gafas',
        description: 'Gafas mágicas de sabiduría.\nMejoran tu visión y percepción.\nRevelan secretos ocultos.'
    },
    'orbe.png': {
        name: 'Orbe Mágico',
        description: 'Un orbe lleno de energía mística.\nPuede lanzar hechizos poderosos.\nBrilla con luz propia.'
    },
    'sombrero.png': {
        name: 'Sombrero',
        description: 'Sombrero de mago experimentado.\nOtorga conocimiento arcano.\nProtege de maldiciones.'
    },
     'espada2.png': {
        name: 'Espada 2',
        description: 'Espada nueva que estoy probando. \nOtorga algo. \nProtege de algo.'
    },
         'espada reluciente.png': {
        name: 'Espada Reluciente',
        description: 'Afilada y poderosa. \nIdeal para aventureros valientes.'
    },
      'orbe.png': {
        name: 'Escudo Oxidado',
        description: 'Ha pasado mil batallas, pero aún aguanta mil más.'
      
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
