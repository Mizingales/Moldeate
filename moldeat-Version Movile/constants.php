<?php
// Constantes compartidas para evitar duplicación
class MoldeatConstants {
    
    // Mapeo de items a sus atributos correspondientes
    private static $itemAttributes = [
        'espada reluciente.png' => 'Valiente',
        'espada antigua.png' => 'Reflexivo',
        'gafas magicas.png' => 'Curioso',
        'orbe vibrante.png' => 'Energético',
        'sombrero de mago.png' => 'Sabio',
        'escudo oxidado.png' => 'Resistente',
        'linterna perpetua.png' => 'Esperanzado',
        'pluma dorada.png' => 'Creativo',
        'botella de arena.png' => 'Nostálgico',
        'mapa incompleto.png' => 'Explorador',
        'flor marchita.png' => 'Sensible',
        'campana de cristal.png' => 'Puro',
        'capa comoda.png' => 'Discreto',
        'amuleto de hueso.png' => 'Consciente',
        'cuerda trenzada.png' => 'Adaptable',
        'daga curva.png' => 'Astuto',
        'algo extraño.png' => 'Misterioso',
        'brujula erratica.png' => 'Deseoso',
        'anillo oxidado.png' => 'Leal',
        'corona impecable.png' => 'Orgulloso',
        'cucharon de madera.png' => 'Generoso',
        'rosa de metal.png' => 'Fuerte',
        'piedra pulida.png' => 'Paciente',
        'libro ilegible.png' => 'Enigmático',
        'rama seca.png' => 'Melancólico',
        'gema agrietada.png' => 'Valioso',
        'campanilla ruidosa.png' => 'Tenaz',
        'pergamino quemado.png' => 'Nostálgico',
        'flauta torcida.png' => 'Original',
        'girasol eterno.png' => 'Optimista',
        'balanza antigua.png' => 'Justo',
        'corazon de cristal.png' => 'Empático',
        'caja de engranajes.png' => 'Detallista',
        'alas desmontables.png' => 'Independiente',
        'incienso.png' => 'Tranquilo',
        'frasco de estrellas.png' => 'Soñador',
        'pelota multicolor.png' => 'Juguetón'
        
    ];
    
    public static function getFallbackStory($itemNames = []) {
        if (empty($itemNames)) {
            $itemsText = "tus herramientas";
        } else {
            $itemsText = "tu " . implode(' y tu ', $itemNames);
        }
        
        return "Cada mañana, te despiertas junto al mar. Ajustas $itemsText con cuidado y te pierdes en la plaza del pueblo. La gente te saluda, conocen tu habilidad. En esta pequeña isla donde el viento huele a sal y a pan recién horneado. Pasas las tardes sentado en el muelle, moldeando pequeñas figuras con los restos de tu propia plastilina. Como si quisieras multiplicarte en miniaturas. En tu silencio observas con atención las gaviotas, las olas y las conversaciones ajenas. En tu mundo, cada día es una mezcla de quietud y descubrimiento, como si supieras que algo importante está por suceder, pero sin afurar por llegar.";
    }
    
    public static function processItemNames($items) {
        return array_map(function($item) {
            $name = str_replace('.png', '', $item);
            $name = preg_replace('/[_-]/', ' ', $name);
            return ucfirst($name);
        }, $items);
    }
    
    public static function getItemAttributes($items) {
        $attributes = [];
        foreach ($items as $item) {
            if (isset(self::$itemAttributes[$item])) {
                $attributes[] = self::$itemAttributes[$item];
            }
        }
        return $attributes;
    }
}
?>
