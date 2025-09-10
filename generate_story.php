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

$itemNames = MoldeatConstants::processItemNames($items);







//Promp que se envía a Groq (Llama3)
$prompt = "Crea un relato corto y creativo en español sobre un personaje ficticio. Debe costar de entre 150 y 300 palabras, conservando la coherencia. Ten en cuenta, que los atributos de dicho personaje son determinados por la descripción de los siguientes ítems" . implode(', ', $itemNames) . ". El relato debe estar redactado en tiempo presente, en segunda persona singular. La persona que va a leer esto es en realidad, ese personaje. El relato trata de describir a este personaje y su entorno, en su cotideanidad, como si de pronto pudieramos ver que está haciendo en este momento";







 

$url = 'https://api.groq.com/openai/v1/chat/completions';
$data = [
    'model' => 'llama-3.1-8b-instant', // Modelo actualizado de Groq
    'messages' => [
        [
            'role' => 'user',
            'content' => $prompt
        ]
    ],
    'max_tokens' => 200,
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
    $story = MoldeatConstants::getFallbackStory($itemNames);
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
