'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global React $ urlBasica apiKey */

/** Representa un producto.
* @author Joel Alberto Armas Reyes.
* @since 16/01/2017.
*/

/** Constructor.
 * @param {*} id
 * @param {*} nombre
 * @param {*} descripcionCorta
 * @param {*} descripcion
 * @param {*} precio
 * @param {*} rutaImagen
 * @param {*} tipo
 */
function Producto(id, nombre, descripcion, descripcionCorta, precio, rutaImagen, tipo) {
  this.id = id;
  this.nombre = nombre;
  this.descripcionCorta = descripcionCorta;
  this.descripcion = descripcion;
  this.precio = precio;
  this.rutaImagen = rutaImagen;
  this.tipo = tipo;
}
/* Setter && Getter */
Producto.prototype = {
  setId: function setId(id) {
    this.id = id;
  },
  getId: function getId() {
    return this.id;
  },

  setNombre: function setNombre(nombre) {
    this.nombre = nombre;
  },
  getNombre: function getNombre() {
    return this.Nombre;
  },

  setDescripcion: function setDescripcion(descripcion) {
    this.descripcion = descripcion;
  },
  getDescripcion: function getDescripcion() {
    return this.descripcion;
  },

  setDescripcionCorta: function setDescripcionCorta(descripcion) {
    this.descripcionCorta = descripcionCorta;
  },
  getDescripcionCorta: function getDescripcionCorta() {
    return this.descripcionCorta;
  },

  setPrecio: function setPrecio(precio) {
    this.precio = precio;
  },
  getPrecio: function getPrecio() {
    return this.precio;
  },

  setRutaImagen: function setRutaImagen(rutaImagen) {
    this.rutaImagen = rutaImagen;
  },
  getRutaImagen: function getRutaImagen() {
    return this.rutaImagen;
  },

  setTipo: function setTipo(tipo) {
    this.tipo = tipo;
  },
  getTipo: function getTipo() {
    return this.tipo;
  }

  // Constantes
};var listaProductos = void 0;
var listaProductosReact = void 0;
var a = [];

var Productos = function (_React$Component) {
  _inherits(Productos, _React$Component);

  function Productos() {
    _classCallCheck(this, Productos);

    return _possibleConstructorReturn(this, (Productos.__proto__ || Object.getPrototypeOf(Productos)).apply(this, arguments));
  }

  _createClass(Productos, [{
    key: 'render',
    value: function render() {
      listaProductosReact = [];
      for (var x = 0; x < listaProductos.length; x += 1) {
        listaProductosReact[listaProductosReact.length] = React.createElement(ProductosDOM, {
          id: listaProductos[x].id,
          nombre: listaProductos[x].nombre,
          precio: listaProductos[x].precio,
          descripcion: listaProductos[x].descripcionCorta,
          cover: listaProductos[x].rutaImagen
        });
      }
      // return (<div className="contenedor_producto">{listaProductos}</div>);
      return React.createElement(
        'div',
        { className: 'contenedor_productos' },
        listaProductosReact
      );
    }
  }]);

  return Productos;
}(React.Component);

var ProductosDOM = function (_React$Component2) {
  _inherits(ProductosDOM, _React$Component2);

  function ProductosDOM(props) {
    _classCallCheck(this, ProductosDOM);

    var _this2 = _possibleConstructorReturn(this, (ProductosDOM.__proto__ || Object.getPrototypeOf(ProductosDOM)).call(this, props));

    _this2.comprarProducto = _this2.comprarProducto.bind(_this2);
    _this2.masDetalleProducto = _this2.masDetalleProducto.bind(_this2);
    return _this2;
  }

  _createClass(ProductosDOM, [{
    key: 'masDetalleProducto',
    value: function masDetalleProducto(id, precio) {
      var productoElegido = void 0;

      for (var i = 0; i < listaProductos.length; i++) {
        if (listaProductos[i]['id'] == id) {
          productoElegido = listaProductos[i];
        }
      }

      $('#detalleDialog').dialog('open');
      $('#detalleNombre').text(productoElegido.nombre);
      $('#detalleDescripcion').text(productoElegido.descripcion);
      $('#detallePrecio').text(precio);
      //alert(productoElegido.descripcion);
    }
  }, {
    key: 'comprarProducto',
    value: function comprarProducto(id, precio) {
      if ($('#name').text() !== '') {
        var productoElegido = void 0;

        for (var i = 0; i < listaProductos.length; i++) {
          if (listaProductos[i]['id'] == id) {
            productoElegido = listaProductos[i];
          }
        }

        $('#comprarDialog').dialog('open');
        var userName = $('#name').text();
        var productoNombre = productoElegido.nombre;
        $('#comprarNombre').text(userName);
        $('#comprarProductoNombre').text(productoNombre);
        $('#comprarPrecio').text(precio);
        // alert("Producto a comprar: "+productoElegido.nombre);
      } else {
        $('#loginDialog').dialog('open');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // <div className="descripcionProducto">{this.props.descripcion}</div>
      var nombre = this.props.nombre.length > 40 ? this.props.nombre.substring(0, 40) + '...' : this.props.nombre;
      return React.createElement(
        'div',
        { className: 'producto' },
        React.createElement(
          'div',
          null,
          React.createElement('img', { src: this.props.cover, alt: 'producto tablet' })
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { className: 'nombreProducto' },
            nombre
          ),
          React.createElement(
            'div',
            null,
            React.createElement(
              'b',
              null,
              'Precio:'
            ),
            ' ',
            React.createElement(
              'span',
              { className: 'precioProducto' },
              this.props.precio
            )
          ),
          React.createElement(
            'div',
            { className: 'enlaces_producto' },
            React.createElement(
              'a',
              {
                className: 'ver_detalles',
                href: 'javascript:void(0);',
                onClick: this.masDetalleProducto.bind(this, this.props.id, this.props.precio) },
              'Ver detalles',
              React.createElement('i', { className: 'fa fa-search-plus' })
            ),
            React.createElement(
              'a',
              {
                className: 'comprar_producto \r ', href: 'javascript:void(0);',
                onClick: this.comprarProducto.bind(this, this.props.id, this.props.precio) },
              'Comprar'
            )
          )
        )
      );
    }
  }]);

  return ProductosDOM;
}(React.Component);

ProductosDOM.defaultProps = {
  id: -1,
  nombre: 'Nombre no asignado',
  precio: 'Precio no asignado',
  descripcion: 'Descripcion no asignada',
  cover: 'Imagen no asignada'
};

function quitarCaracteresRaros(cadena) {
  var textoLimpio = void 0;

  textoLimpio = cadena.replace(/&lt;/gi, '');
  textoLimpio = textoLimpio.replace(/&gt;/gi, '');
  textoLimpio = textoLimpio.replace(/&quot;/gi, '');
  textoLimpio = textoLimpio.replace(/br&gt;/gi, '');
  textoLimpio = textoLimpio.replace(/b&gt;/gi, '');
  textoLimpio = textoLimpio.replace(/li&gt;/gi, '');
  textoLimpio = textoLimpio.replace(/ul&gt;/gi, '');
  textoLimpio = textoLimpio.replace(/\\"/gi, '');
  textoLimpio = textoLimpio.replace(/[""]/gi, '');
  textoLimpio = textoLimpio.replace(/["]/gi, '');
  textoLimpio = textoLimpio.replace(/["\"]/gi, '');
  textoLimpio = textoLimpio.replace(/[\""]/gi, '');
  return textoLimpio;
}

/**
 * Convertir de dolar a euro.
 * JOEL MVP!
 */
function convertirDolarAEuro() {
  var listaPrecios = $('.precioProducto');
  var listaPreciosLength = listaPrecios.length;

  var _loop = function _loop(i) {
    $.getJSON(urlBasica.forex, {
      quantity: parseInt($(listaPrecios[i]).text(), 10),
      api_key: apiKey.Forex,
      format: 'json'
    }).done(function (response) {
      var posA = response.text.indexOf(' USD');
      var dolar = (response.text + "").substring(0, posA);
      var eur = response.value.toFixed(2);
      $(listaPrecios[i]).text(eur + '\u20AC');
    });
  };

  for (var i = 0; i < listaPreciosLength; i += 1) {
    _loop(i);
  }
}

function mostrarProductos() {
  React.render(React.createElement(Productos, null), document.getElementById('productos'));
  convertirDolarAEuro();
}

function moldeProductos(items, api) {
  listaProductos = [];
  var numItems = items.length;
  for (var i = 0; i < numItems; i += 1) {
    if (api === 'eBay') {
      var id = items[i].itemId[0];
      var nombre = items[i].title[0];
      var descripcion = 'No disponible';
      var _descripcionCorta = 'No disponible';
      // descripcionCorta = `${descripcion.substring(0, 20)}...`;
      var precio = items[i].sellingStatus[0].currentPrice[0].__value__;
      var rutaImagen = items[i].galleryURL[0];
      var tipo = 'tipo';
      var producto = new Producto(id, nombre, descripcion, _descripcionCorta, precio, rutaImagen, tipo);
      listaProductos.push(producto);
    }
    if (api === 'eBay-Default') {
      var _id = items[i].itemId;
      var _nombre = items[i].title;
      var _descripcion = 'No disponible';
      var _descripcionCorta2 = 'No disponible';
      // descripcionCorta = `${descripcion.substring(0, 20)}...`;
      var _precio = items[i].buyItNowPrice.__value__;
      var _rutaImagen = items[i].imageURL;
      var _tipo = 'tipo';
      var _producto = new Producto(_id, _nombre, _descripcion, _descripcionCorta2, _precio, _rutaImagen, _tipo);
      listaProductos.push(_producto);
    }
    if (api === 'Walmart') {
      var _id2 = items[i].itemId;
      var _nombre2 = quitarCaracteresRaros(items[i].name);
      var _descripcion2 = quitarCaracteresRaros(items[i].longDescription);
      var _descripcionCorta3 = quitarCaracteresRaros(items[i].shortDescription);
      _descripcionCorta3 = _descripcion2.substring(0, 20) + '...';
      var _precio2 = items[i].salePrice;
      var _rutaImagen2 = items[i].thumbnailImage;
      var _tipo2 = 'tipo';
      var _producto2 = new Producto(_id2, _nombre2, _descripcion2, _descripcionCorta3, _precio2, _rutaImagen2, _tipo2);
      listaProductos.push(_producto2);
    }
  }
  mostrarProductos();
}

function comprarDesdeDetalles(nombre, precio) {
  if ($('#name').text() !== '') {
    var productoElegido = void 0;

    listaProductos.map(function (producto) {
      if (producto.nombre === nombre) {
        productoElegido = producto;
      }
    });

    $('#comprarDialog').dialog('open');
    var userName = $('#name').text();
    var productoNombre = productoElegido.nombre;
    $('#comprarNombre').text(userName);
    $('#comprarProductoNombre').text(productoNombre);
    $('#comprarPrecio').text(precio);
    // alert("Producto a comprar: "+productoElegido.nombre);
  } else {
    $('#loginDialog').dialog('open');
  }
}