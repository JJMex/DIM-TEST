/* =========================================
   Archivo: js/main.js
   Proyecto: DIM-TEST (Funcionalidad Global)
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Funcionalidad del Menú Móvil (Hamburguesa a X y Overlay)
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const navLinksContainer = document.querySelector('.nav-links-container');
    const body = document.body;

    if (hamburgerBtn && navLinksContainer) {
        hamburgerBtn.addEventListener('click', () => {
            // Alternar las clases activas
            hamburgerBtn.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
            
            // Prevenir el scroll del fondo cuando el menú móvil está abierto
            if (navLinksContainer.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
            }
        });

        // Cerrar el menú si se hace clic en un enlace (útil en navegación local)
        const navLinks = document.querySelectorAll('.nav-links li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                navLinksContainer.classList.remove('active');
                body.style.overflow = 'auto';
            });
        });
    }
});
