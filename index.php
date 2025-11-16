<?php
// Detectar si es dispositivo móvil
function isMobileDevice() {
    $userAgent = $_SERVER['HTTP_USER_AGENT'];
    
    // Patrones comunes de dispositivos móviles
    $mobilePatterns = array(
        '/android/i',
        '/webos/i',
        '/iphone/i',
        '/ipad/i',
        '/ipod/i',
        '/blackberry/i',
        '/windows phone/i',
        '/mobile/i'
    );
    
    foreach ($mobilePatterns as $pattern) {
        if (preg_match($pattern, $userAgent)) {
            return true;
        }
    }
    
    return false;
}

// Redirigir según el dispositivo
if (isMobileDevice()) {
    header('Location: moldeat-Version Movile/index.php');
} else {
    header('Location: moldeate-web/m/index.php');
}
exit;
?>
