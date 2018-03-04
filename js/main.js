'use strict';

/* global $ React Busqueda buscaDefecto idCategorias comprarDesdeDetalles */

function preparaDialogs() {
  $('#loginDialog').dialog({
    autoOpen: false,
    title: 'Regístrate en TiendaAdormecida',
    width: 500,
    height: 400
  });

  $('#comprarDialog').dialog({
    autoOpen: false,
    title: '¡Producto comprado!',
    width: 500,
    height: 400
  });

  $('#detalleDialog').dialog({
    autoOpen: false,
    title: 'Información sobre el producto',
    width: 500,
    height: 400
  });
  $('#avanzadaDialog').dialog({
    autoOpen: false,
    title: 'Zzzzzzzz...',
    width: 500,
    height: 400
  });
  $('#ayudaDialog').dialog({
    autoOpen: false,
    title: 'Ayuda!',
    width: 500,
    height: 400
  });
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
  $('#botonAyuda').click(function () {
    $('#ayudaDialog').dialog('close');
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

function activaAyuda() {
  $('#ayuda').click(function () {
    $('#ayudaDialog').dialog('open');
  });
}

$(document).ready(function () {
  React.render(React.createElement(Busqueda, null), document.getElementById('barraBusqueda'));
  React.render(React.createElement(Login, null), document.getElementById('login'));
  preparaDialogs();
  activaBotones();
  activaCategorias();
  activaAyuda();
  buscaDefecto(idCategorias.camaras.eBay);
});