// src/js/modules/navigation.js
export function initAnchorNavigation() {
    const header = document.querySelector('header.header');
    const headerHeight = header.offsetHeight;
  
    document.querySelectorAll('a[href^="#"]:not([data-fancybox]):not(.fancybox):not(.lightbox)').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          const scrollTo = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: scrollTo,
            behavior: 'smooth'
          });
          header.classList.add('small');
        }
      });
    });
  
    document.querySelectorAll('h2[id]').forEach(heading => {
      heading.style.scrollMarginTop = `${headerHeight + 20}px`;
    });
  }