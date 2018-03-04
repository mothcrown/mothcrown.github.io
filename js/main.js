'use strict';

/* global $ React Busqueda buscaDefecto idCategorias*/

function preparaDialogs() {
  $('#loginDialog').dialog({
    title: 'Regístrate en TiendaAdormecida',
    width: 500,
    height: 400
  });
  $('#loginDialog').dialog('close');
}

function activaCategorias() {
  $('.camaras').click(function () {
    buscaDefecto(idCategorias.camaras.eBay);
  });
  $('.relojes').click(function () {
    buscaDefecto(idCategorias.relojes.eBay);
  });
  $('.tablets').click(function () {
    buscaDefecto(idCategorias.tablets.eBay);
  });
}

$(document).ready(function () {
  React.render(React.createElement(Busqueda, null), document.getElementById('barraBusqueda'));
  React.render(React.createElement(Login, null), document.getElementById('login'));
  preparaDialogs();
  activaCategorias();
  buscaDefecto(idCategorias.camaras.eBay);
});