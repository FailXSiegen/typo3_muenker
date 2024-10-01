// src/js/modules/forms.js
export function initFormHandling() {
    function addThicknessToForm(element) {
      const select = document.getElementById('powermail_field_dicke');
      select.innerHTML = '';
  
      if (element.dataset.thickness) {
        const strengthList = element.dataset.thickness.split('|');
        strengthList.forEach(value => {
          const option = document.createElement('option');
          option.value = value;
          option.textContent = value;
          select.appendChild(option);
        });
      } else {
        const strengthList = Array.from(document.querySelectorAll('.produktbox li'))
          .filter(li => li.textContent.endsWith('mm') && li.textContent.length < 9)
          .map(li => li.textContent);
  
        strengthList.forEach(value => {
          const option = document.createElement('option');
          option.value = value;
          option.textContent = value;
          select.appendChild(option);
        });
      }
    }
  
    const anfrageContainer = document.querySelector('.anfrage-container');
    if (anfrageContainer) {
      const farbauswahl = document.getElementById('powermail_field_farbauswahl');
      const farbauswahlWrapper = document.querySelector('.powermail_fieldwrap_ihrefarbauswahl');
      const firstColor = document.getElementById('article_id_0');
  
      if (firstColor) {
        farbauswahl.value = 'Farbe:' + firstColor.textContent;
        farbauswahlWrapper.innerHTML = `<span class="color-box" style="${firstColor.getAttribute('style')}"></span> Farbe:${firstColor.textContent}`;
      }
  
      document.querySelectorAll('.colors li').forEach(colorElement => {
        colorElement.addEventListener('click', function() {
          const styling = this.getAttribute('style');
          farbauswahl.value = 'Farbe:' + this.textContent;
          farbauswahlWrapper.innerHTML = `<span class="color-box" style="${styling}"></span> Farbe:${this.textContent}`;
          addThicknessToForm(this);
        });
      });
  
      const firstColorLi = document.querySelector('.colors li:first-child');
      if (firstColorLi) {
        addThicknessToForm(firstColorLi);
      }
    }
  
    // Andere Formularverarbeitungslogik hier...
  }