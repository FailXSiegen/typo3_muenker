// modules/analytics.js

class Gaanon {
    constructor() {
      this.switcher = new GaanonSwitcher();
    }
  
    static getCookie(cookieName) {
      const cookies = document.cookie.split(';');
      for (let cookie of cookies) {
        const [name, value] = cookie.split('=').map(c => c.trim());
        if (name === cookieName) return value;
      }
      return undefined;
    }
  
    static setCookie(options) {
      if (!options.name || !options.value) return false;
  
      let str = `${options.name}=${options.value}`;
      if (options.expires) {
        str += `;expires=${options.expires.toGMTString()}`;
      } else {
        str += ';expires=30';
      }
      str += ';path=/';
  
      document.cookie = str;
      return true;
    }
  }
  
  class GaanonSwitcher {
    constructor() {
      this.cookieVariable = 'GA_ANON_SWITCHER';
      this.cookieExpire = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365);
    }
  
    isActive() {
      const c = Gaanon.getCookie(this.cookieVariable);
      return c === '1' || c === undefined;
    }
  
    activate() {
      Gaanon.setCookie({name: this.cookieVariable, value: '1', expires: this.cookieExpire});
    }
  
    deactivate() {
      Gaanon.setCookie({name: this.cookieVariable, value: '0', expires: this.cookieExpire});
    }
  
    toggle() {
      this.isActive() ? this.deactivate() : this.activate();
    }
  
    checkStatus(box) {
      box.checked = this.isActive();
    }
  }
  
  // Polyfill for String.prototype.trim
  if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function () {
      return this.replace(/^\s+|\s+$/g, '');
    };
  }
  
  export function initAnalytics() {
    const gaanonym = new Gaanon();
    // Hier können Sie weitere Initialisierungen oder Verwendungen von gaanonym hinzufügen
    return gaanonym;
  }