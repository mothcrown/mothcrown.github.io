'use strict';

// JSONs simplitos que nos va a ayudar muchito
var apiKey = {
  eBay: 'MarcosDa-TiendaAd-PRD-0df64df3e-523ae795',
  Walmart: 'rrxgpza76z7ea5r2db73jtkz',
  // Forex: 'iNLysfJQdIm1DAyvqvjYZYrh0vncGzC5, 
  Forex: 'POzHNmeHt3Rk5xKTPBbWebMGbk0rrmwG'
};

var urlBasica = {
  ebay: 'https://svcs.ebay.com/services/search/FindingService/v1?',
  walmart: 'https://api.walmartlabs.com/v1/search?callback=?',
  forex: 'https://forex.1forge.com/1.0.3/convert?from=USD&to=EUR'
};

var idCategorias = {
  camaras: {
    eBay: '31388',
    Walmart: '3944_133277_4468'
  },
  relojes: {
    eBay: '31387',
    Walmart: '3891_3906'
  },
  tablets: {
    eBay: '171485',
    Walmart: '3944_1078524'
  }
};