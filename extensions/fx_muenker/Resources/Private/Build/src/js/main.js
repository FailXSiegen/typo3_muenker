import { initAnchorNavigation } from './modules/navigation';
import { initMaps } from './modules/maps';
import { initAnalytics } from './modules/analytics.js';

document.addEventListener('DOMContentLoaded', () => {
  initAnchorNavigation();
  initMaps();
  initAnalytics();


  // Back button
  document.querySelector('.button_back')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.history.back();
  });

  // Search input placeholder
  document.getElementById('inputText')?.setAttribute('placeholder', 'Suche');

  // Print button
  document.querySelector('.print')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.print();
  });

  // Submenu toggle
  document.querySelectorAll('.withsub').forEach(element => {
    element.addEventListener('click', function() {
      this.classList.toggle('fa-caret-down');
      this.classList.toggle('fa-caret-up');
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('open');
    });
  });
});

 
  
// Header Scroll Effekt
window.addEventListener('scroll', () => {
    const header = document.querySelector('header.header');
    if (window.pageYOffset > 0) {
      header.classList.add('small');
    } else {
      header.classList.remove('small');
    }
});
  
  
  
