// src/js/modules/lightbox.js
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

export function initLightbox() {
  const lightbox = GLightbox({
    selector: '.fancybox',
    touchNavigation: true,
    height: 'auto',
    onOpen: () => {
      updateLightboxSize();
      window.addEventListener('resize', updateLightboxSize);
      
      // Scrollbar fixer ohne Inline-Styles
      const body = document.body;
      const scrollBar = window.innerWidth - document.documentElement.clientWidth;
      if (scrollBar > 0) {
        body.style.marginRight = scrollBar + 'px'; // Setze den margin-right Wert dynamisch
        body.classList.add('gscrollbar-fixer'); // Füge eine Klasse hinzu, um Scroll-Leisten-Anpassungen vorzunehmen
      }
    },
    onClose: () => {
      window.removeEventListener('resize', updateLightboxSize);
      
      // Scrollbar fixer entfernen
      const body = document.body;
      body.style.marginRight = ''; // Entferne den margin-right
      body.classList.remove('gscrollbar-fixer'); // Entferne die Klasse
    }
  });

  function updateLightboxSize() {
    const isMobile = window.innerWidth < 768; // Definieren Sie hier Ihre Breakpoint-Größe
    const lightboxElement = document.querySelector('.goverlay');
    if (lightboxElement) {
      const contentElement = lightboxElement.querySelector('.ginner-container');
      if (contentElement) {
        if (isMobile) {
          contentElement.style.width = '100vw';
          contentElement.style.maxWidth = '100vw';
        } else {
          contentElement.style.width = '50vw';
          contentElement.style.maxWidth = '50vw';
        }
      }
    }
  }

  // Initial size update
  updateLightboxSize();
}
