document.addEventListener('wheel', (evt) => {
  window_top = $(window).scrollTop()
  subnavscrollTop = window_top + 150
  if (window_top > 0) {
    $('header.header').addClass('small')
  } else {
    $('header.header').removeClass('small')
  }
}, {
  capture: true,
  passive: true
})
$(function () {

  if ($('.produktbox').length > 0) {
    $('#powermail_field_farbauswahl').attr('value', 'Farbe:' + $('#article_id_0').html())
    $('.powermail_fieldwrap_ihrefarbauswahl').html('<span class="color-box" style="' + $('#article_id_0').attr('style') + '"></span> Farbe:' + $('#article_id_0').html())
    $('.colors li').click(function () {
      let styling = $(this).attr('style')
      $('#powermail_field_farbauswahl').attr('value', 'Farbe:' + $(this).html())
      $('.powermail_fieldwrap_ihrefarbauswahl').html('<span class="color-box" style="' + $(this).attr('style') + '"></span>  Farbe:' + $(this).html())
    })


    $('.colors li').click(function () {
      $('#powermail_field_dicke')
        .find('option')
        .remove()
        .end()
      if($(this).data('thickness')) {
        let strengthlist = $(this).data('thickness').split('|')
        $.each(strengthlist, function (key, value) {
          $('#powermail_field_dicke')
            .append($('<option>', {value: value})
              .text(value))
        })
      } else {
        let strengthlist = []
        $('.produktbox li:contains("mm")').each(function () {
          if ($(this).html().endsWith('mm') && $(this).html().length < 9) {
            strengthlist.push($(this).html())
          }
        })
        $.each(strengthlist, function (key, value) {
          $('#powermail_field_dicke')
            .append($('<option>', {value: value})
              .text(value))
        })
      }
    })

    $('.fancybox').fancybox({
      helpers: {
        overlay: {
          locked: false
        }
      }
    })
  }
  $('.button_back').click(function () {
    parent.history.back()
    return false
  })
  $('#inputText').attr('placeholder', 'Suche')

  $('.print').click(function () {
    window.print()
    return false
  })
  $('.routenplaner').append('<form action="https://maps.google.com/maps" method="get" target="_blank"> <label>Startadresse (mit Ort)</label><input class="inputbox" type="text" name="saddr" value="" /><input type="hidden" name="daddr" value="Gewerbeparkstraße 19, 51580 Reichshof-Wehnrath" /><button type="submit">Karte aufrufen</button></form>')
  $('.withsub').click(function () {
    $(this).toggleClass('fa-caret-down').toggleClass('fa-caret-up').toggleClass('active')
    $(this).next().toggleClass('open')
  })
  if (gaanonym.switcher.isActive()) {
    $('.fancybox').click(function () {
      //Bilder
      // _gaq.push(['_trackEvent', 'Bild',window.location.pathname,$(this).attr('title')]);
      ga('send', 'event', 'Bild', window.location.pathname, $(this).attr('title'))
    })
    $('.fancybox-thumb').click(function () {
      //Bilder
      // _gaq.push(['_trackEvent', 'Bild',window.location.pathname,$(this).attr('title')]);
      ga('send', 'event', 'Bild', window.location.pathname, $(this).attr('title'))
    })
    $('.anfrageform').submit(function () {
      //Formulare
      // _gaq.push(['_trackEvent', 'Anfrage',window.location.pathname,$(this).find('input[type=hidden]').val()]);
      ga('send', 'event', 'Anfrage', window.location.pathname, $(this).find('input[type=hidden]').val())
    })
    $('.artikellisting a').click(function () {
      var target = $(this).attr('href')
      if (target.match(/\.(pdf|txt|doc|docx|xls|ppt|js|vsd|vxd|css|rar|zip|tar|gz|dmg|exe|wma|mov|avi|wmv|mp3|mp4|vcf)$/)) {
        //Download
        var artikel = $('.artikellisting h3').html() + ' ' + $(this).html()
        artikel = artikel.replace('<br>', ' ')
        // _gaq.push(['_trackEvent', 'Download',window.location.pathname,artikel]);
        ga('send', 'event', 'Download', window.location.pathname, artikel)
      }
    })
    $('#muenker-6 #mainContent a').click(function (e) {
      var targetpage = $(this).attr('href')
      var linkparent = $(this).parent('h3').length
      var linkchildImg = $(this).has('img').length
      if (linkchildImg > 0) {
        //	_gaq.push(['_trackEvent', 'Startseite Link Klick','Bild',targetpage]);
        ga('send', 'event', 'Startseite Link Klick', 'Bild', targetpage)
      } else {
        if (linkparent > 0) {
          //		_gaq.push(['_trackEvent', 'Startseite Link Klick','Überschrift',targetpage]);
          ga('send', 'event', 'Startseite Link Klick', 'Überschrift', targetpage)
        } else {
          //		_gaq.push(['_trackEvent', 'Startseite Link Klick','Text',targetpage]);
          ga('send', 'event', 'Startseite Link Klick', 'Text', targetpage)
        }
      }
    })
  }
  $('.tx_powermail_pi1_formconfirmation_submit').submit(function () {
    $('.tx-powermail-pi1_confirmation_submit').attr('disabled', 'disabled')
    $('.tx-powermail-pi1_confirmation_submit').css('background-color', 'green')
    $('.tx-powermail-pi1_confirmation_submit').css('box-shadow', 'inset 0px -3px 7px 1px darkGreen')
    $('.tx-powermail-pi1_confirmation_submit').css('-webkit-box-shadow', 'inset 0px -3px 7px 1px darkGreen')
    $('.tx-powermail-pi1_confirmation_submit').css('--moz-box-shadow', 'inset 0px -3px 7px 1px darkGreen')
    $('.tx-powermail-pi1_confirmation_submit').css('cursor', 'pointer')
    $('.tx-powermail-pi1_confirmation_submit').val('Wird bearbeitet')
  })

  $('#productSlider').show(0)
  $('#productSlider').jcarousel({
    wrap: 'circular',
    scroll: 5,
    auto: 15,
    animation: 2000
  })
  $('.flexslider').flexslider({
    slideshowSpeed: 5000,
    animationSpeed: 500,
    useCSS: false,
    controlNav: true,
    directionNav: false,
    pauseOnHover: false,

  })

})

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