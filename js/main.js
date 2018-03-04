'use strict';

/* global $ React Busqueda buscaDefecto idCategorias comprarDesdeDetalles */

function preparaDialogs() {
  $('#loginDialog').dialog({
    title: 'Regístrate en TiendaAdormecida',
    width: 500,
    height: 400
  });
  $('#loginDialog').dialog('close');

  $('#comprarDialog').dialog({
    title: '¡Producto comprado!',
    width: 500,
    height: 400
  });
  $('#comprarDialog').dialog('close');
}

function activaBotones() {
  $('#botonComprar').click(function () {
    $('#comprarDialog').dialog('close');
  });
  $('#detalleComprar').click(function () {
    var nombre = $('#detalleNombre').text();
    var precio = $('#detallePrecio').text();
    comprarDesdeDetalles(nombre, precio);
  });
  $('#detalleVolver').click(function () {
    $('#detalleDialog').dialog('close');
  });
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
  activaBotones();
  activaCategorias();
  buscaDefecto(idCategorias.camaras.eBay);
});