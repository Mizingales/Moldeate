<?php
// Recibe items y masa por POST y llama a OpenAI para generar la historia
header('Content-Type: application/json');
require_once 'constants.php';

$debug = isset($_GET['debug']) || isset($_POST['debug']);








// Cambiado a Groq - Necesitas obtener tu API key gratis en groq.com
$apiKey = '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';







$items = isset($_POST['items']) ? $_POST['items'] : [];
$masa = isset($_POST['masa']) ? $_POST['masa'] : '';

 

if (!is_array($items)) {
    $items = explode(',', $items);
}

$itemAttributes = MoldeatConstants::getItemAttributes($items);







//Prompt que se envía a Groq (Llama3)
$prompt = "Genera un breve relato en segunda persona sobre un personaje ficticio. Debe contar acerca de lo que ese personaje está haciendo ahora mismo y que planea hacer el resto del día. Ten en cuenta que el lector de este relato se debe sentir como si se tratara de él mismo.
La personalidad del personaje debe estar definida por los siguientes adjetivos: " . implode(', ', $itemAttributes) . ". 
El relato debe ser poético y evocador, no más de 8 oraciones. 
No hace falta mencionar explícitamente los adjetivos, transmítelos a través de las acciones, emociones y pensamientos del personaje.";







 

$url = 'https://api.groq.com/openai/v1/chat/completions';
$data = [
    'model' => 'llama-3.1-8b-instant', // Modelo actualizado de Groq
    'messages' => [
        [
            'role' => 'user',
            'content' => $prompt
        ]
    ],
    'max_tokens' => 500,
    'temperature' => 0.8
];

$options = [
    'http' => [
        'header'  => "Content-Type: application/json\r\nAuthorization: Bearer $apiKey\r\n",
        'method'  => 'POST',
        'content' => json_encode($data),
        'timeout' => 20
    ]
];
$context  = stream_context_create($options);
$result = @file_get_contents($url, false, $context);

if ($debug) {
    echo "Respuesta HTTP de Groq:\n";
    if ($result === FALSE) {
        echo "ERROR: No se pudo conectar con Groq\n";
        echo "Headers HTTP: " . print_r($http_response_header ?? [], true) . "\n";
    } else {
        echo "Respuesta completa: " . $result . "\n\n";
    }
}

if ($result === FALSE) {
    // Fallback
    $story = MoldeatConstants::getFallbackStory($itemAttributes);
    echo json_encode(['story' => $story, 'fallback' => true]);
    exit;
}

$response = json_decode($result, true);
if (isset($response['choices'][0]['message']['content'])) {
    $story = trim($response['choices'][0]['message']['content']);
    if ($debug) {
        echo "Historia generada por Groq (Llama3):\n" . $story . "\n\n";
        echo "Respuesta JSON final:\n";
    }
    echo json_encode(['story' => $story, 'fallback' => false]);
} else {
    if ($debug) {
        echo "ERROR: No se encontró contenido en la respuesta de Groq\n";
        echo "Estructura de respuesta: " . print_r($response, true) . "\n";
        echo "Usando historia de fallback\n\n";
    }
    // Fallback
    $story = MoldeatConstants::getFallbackStory($itemNames);
    echo json_encode(['story' => $story, 'fallback' => true]);
}
