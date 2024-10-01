// src/js/modules/maps.js

export function initMaps() {
    // Wir führen die Initialisierung nur aus, wenn das Google Maps Skript geladen ist
    if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
      console.warn('Google Maps API is not loaded');
      return;
    }
  
    const mapStyles = {
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
    };
  
    const mapOptions = {
      mapTypeControlOptions: {
        mapTypeIds: ['Dark']
      },
      disableDefaultUI: true,
      navigationControl: false,
      center: { lat: 50.980047, lng: 7.654037 },
      zoom: 12,
      mapTypeId: 'Dark',
      scrollwheel: false,
      disableDoubleClickZoom: true
    };
  
    const mapElement = document.getElementById('googlemap');
    if (!mapElement) {
      console.warn('Map container not found');
      return;
    }
  
    const map = new google.maps.Map(mapElement, mapOptions);
  
    const markerPosition = { lat: 50.96871, lng: 7.6587 };
    const markerImage = 'fileadmin/bilder/muenker.com/muenker-bulleye.png';
  
    const contentString = `
      <div id="content">
        <h1 style="font-size:16px;margin:0;">MÜNKER METALLPROFILE GMBH</h1>
        <div id="bodyContent">
          <p style="margin:0;">
            Gewerbeparkstrasse 19<br />
            51580 Reichshof-Wehnrath<br />
            Tel.: +49 2265 - 9986 - 0<br />
            Fax: +49 2265 - 9986 - 800<br />
            eMail: <a href="mailto:info@muenker.com">info@muenker.com</a>
          </p>
        </div>
      </div>
    `;
  
    const infowindow = new google.maps.InfoWindow({
      content: contentString
    });
  
    const marker = new google.maps.Marker({
      map: map,
      draggable: false,
      position: markerPosition,
      icon: markerImage
    });
  
    const styledMapType = new google.maps.StyledMapType(mapStyles['Dark'], {name: 'Dark'});
    map.mapTypes.set('Dark', styledMapType);
  
    infowindow.open(map, marker);
  
    marker.addListener('click', () => {
      infowindow.open(map, marker);
    });
  }