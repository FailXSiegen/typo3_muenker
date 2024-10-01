// Anchor Navigation
function initAnchorNavigation() {
  const header = document.querySelector('header.header');
  const headerHeight = header.offsetHeight;

  document.querySelectorAll('a[href^="#"]:not([data-fancybox]):not(.fancybox):not(.lightbox)').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
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

document.addEventListener('DOMContentLoaded', initAnchorNavigation);

// Header Scroll Effect
document.addEventListener('wheel', (evt) => {
  const windowTop = window.pageYOffset;
  const subnavScrollTop = windowTop + 150;
  const header = document.querySelector('header.header');

  if (windowTop > 0) {
    header.classList.add('small');
  } else {
    header.classList.remove('small');
  }
}, {
  capture: true,
  passive: true
});

// Form Handling
function addThicknessToForm(element) {
  const thicknessSelect = document.getElementById('powermail_field_dicke');
  thicknessSelect.innerHTML = '';

  if(element.dataset.thickness) {
    const strengthList = element.dataset.thickness.split('|');
    strengthList.forEach(value => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = value;
      thicknessSelect.appendChild(option);
    });
  } else {
    const strengthList = Array.from(document.querySelectorAll('.produktbox li'))
      .filter(li => li.textContent.endsWith('mm') && li.textContent.length < 9)
      .map(li => li.textContent);

    strengthList.forEach(value => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = value;
      thicknessSelect.appendChild(option);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const anfrageContainer = document.querySelector('.anfrage-container');
  if (anfrageContainer) {
    const farbauswahlInput = document.getElementById('powermail_field_farbauswahl');
    const farbauswahlWrapper = document.querySelector('.powermail_fieldwrap_ihrefarbauswahl');
    const firstColorElement = document.querySelector('#article_id_0');

    if (firstColorElement) {
      farbauswahlInput.value = 'Farbe:' + firstColorElement.textContent;
      farbauswahlWrapper.innerHTML = `<span class="color-box" style="${firstColorElement.getAttribute('style')}"></span> Farbe:${firstColorElement.textContent}`;
    }

    document.querySelectorAll('.colors li').forEach(colorElement => {
      colorElement.addEventListener('click', function() {
        const styling = this.getAttribute('style');
        farbauswahlInput.value = 'Farbe:' + this.textContent;
        farbauswahlWrapper.innerHTML = `<span class="color-box" style="${styling}"></span> Farbe:${this.textContent}`;
        addThicknessToForm(this);
      });
    });

    const firstColorLi = document.querySelector('.colors li:first-child');
    if (firstColorLi) {
      addThicknessToForm(firstColorLi);
    }

    // Fancybox initialization (you might need to replace this with a vanilla JS lightbox solution)
    // Fancybox.bind("[data-fancybox]", {
    //   // ... options ...
    // });
  }

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

  // Route planner
  const routenplaner = document.querySelector('.routenplaner');
  if (routenplaner) {
    routenplaner.innerHTML = `
      <form action="https://maps.google.com/maps" method="get" target="_blank">
        <label>Startadresse (mit Ort)</label>
        <input class="inputbox" type="text" name="saddr" value="" />
        <input type="hidden" name="daddr" value="Gewerbeparkstraße 19, 51580 Reichshof-Wehnrath" />
        <button type="submit">Karte aufrufen</button>
      </form>
    `;
  }

  // Submenu toggle
  document.querySelectorAll('.withsub').forEach(element => {
    element.addEventListener('click', function() {
      this.classList.toggle('fa-caret-down');
      this.classList.toggle('fa-caret-up');
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('open');
    });
  });

  // Form submission
  document.querySelector('.tx_powermail_pi1_formconfirmation_submit')?.addEventListener('submit', function(e) {
    const submitButton = this.querySelector('.tx-powermail-pi1_confirmation_submit');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.style.backgroundColor = 'green';
      submitButton.style.boxShadow = 'inset 0px -3px 7px 1px darkGreen';
      submitButton.style.cursor = 'pointer';
      submitButton.value = 'Wird bearbeitet';
    }
  });

  // Product slider (you might need to replace this with a vanilla JS carousel solution)
  // const productSlider = document.getElementById('productSlider');
  // if (productSlider) {
  //   productSlider.style.display = 'block';
  //   // Initialize your new carousel here
  // }
});

function gaanon () {
  var obj = this
}

/**
 * gets a cookie value
 * @param String cookieName name of the cookie
 * @return Object cookie value
 */
gaanon.getCookie = function (cookieName) {
  var cookies = document.cookie.split(';')
  var cookie
  for (var i = 0; i < cookies.length; i++) {
    cookie = cookies[i].split('=')
    try {
      if (cookie[0].trim() == cookieName) return cookie[1].trim()
    } catch (e) { }
  }
}
/**
 * sets a cookie value
 * @param Object options {name, value [expires]}
 * @return Boolean when successfull
 */
gaanon.setCookie = function (options) {
  if (!options.name && !options.value)
    return false

  var str = options.name + '=' + options.value + ''
  if (options.expires) {
    str += ';expires=' + options.expires.toGMTString() + ''
  } else {
    str += ';expires=30'
  }
  str += ';path=/'

  document.cookie = str

  return true
}

/**
 * gaanon_switcher extension
 * ---- START ----
 */
/**
 * gaanon_switcher constructor
 */
function gaanon_switcher () {
  this.cookieVariable = 'GA_ANON_SWITCHER'
  this.cookieExpire = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365)
}

/**
 * proofs if its active
 * @return boolean
 */
gaanon_switcher.prototype.isActive = function () {
  var c = gaanon.getCookie(this.cookieVariable)
  var a = (c == '1' || c == undefined)
  return a
}
/**
 * activates the switcher by setting a cookie
 */
gaanon_switcher.prototype.activate = function () {
  gaanon.setCookie({name: this.cookieVariable, value: '1', expires: this.cookieExpire})
}
/**
 * deactivates the switcher by setting a cookie
 */
gaanon_switcher.prototype.deactivate = function () {
  gaanon.setCookie({name: this.cookieVariable, value: '0', expires: this.cookieExpire})
}

/**
 * switches between activate / deactivate depending on the current status
 */
gaanon_switcher.prototype.toggle = function () {
  (this.isActive() ? this.deactivate() : this.activate())
}

/**
 * set status of checkbox
 * @param checkbox
 */

gaanon_switcher.prototype.checkStatus = function (box) {
  if (this.isActive()) {
    box.checked = true
  } else {
    box.checked = false
  }
}

gaanon.prototype.switcher = new gaanon_switcher()

var gaanonym = new gaanon()

/**
 * InternetExplorer String.trim() fix
 */
if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, '')
  }
}

var maps
var geocoder

function load () {
  var styles = {
    'Dark': [
      {
        featureType: 'all',
        elementType: 'all',
        stylers: [
          {hue: '#0008ff'},
          {saturation: -100},
          {gamma: 1.05}
        ]
      },
      {
        featureType: 'all',
        elementType: 'all',
        stylers: []
      }
    ]
  }
  for (var s in styles) {
    var opt = {
      mapTypeControlOptions: {
        mapTypeIds: [s]
      },
      disableDefaultUI: true,
      navigationControl: false,
      center: new google.maps.LatLng(50.980047, 7.654037),
      zoom: 12,
      mapTypeId: s,
      scrollwheel: false,
      disableDoubleClickZoom: true

    }
    var div = document.getElementById('googlemap')
    var point = new google.maps.LatLng(50.96871, 7.6587)
    var map = new google.maps.Map(div, opt)
    var image = 'fileadmin/bilder/muenker.com/muenker-bulleye.png'
    var contentString = '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h1 style="font-size:16px;margin:0;">MÜNKER METALLPROFILE GMBH</h1>' +
      '<div id="bodyContent">' +
      '<p style="margin:0;">Gewerbeparkstrasse 19<br />' +
      '51580 Reichshof-Wehnrath<br />' +
      'Tel.: +49 2265 - 9986 - 0<br />' +
      'Fax: +49 2265 - 9986 - 800<br />' +
      'eMail: <a href="mailto:info@muenker.com">info@muenker.com</a></p>' +
      '</div>' +
      '</div>'
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    })

    var marker = new google.maps.Marker({
      map: map,
      draggable: false,
      position: point,
      icon: image
    })

    var styledMapType = new google.maps.StyledMapType(styles[s], {name: s})
    map.mapTypes.set(s, styledMapType)
    infowindow.open(map, marker)
    google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker)
    })
  }
}