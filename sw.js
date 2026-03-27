self.addEventListener('install', (e) => {
    console.log('[Hestia] Service Worker Instalado');
});

self.addEventListener('fetch', (e) => {
    // Deja pasar todas las peticiones de red normalmente
});
