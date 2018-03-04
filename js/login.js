'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global React $ */

function onSignInGoogle(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
  // $('.g-signin2').css('display', 'none');
  $('#login').empty();
  $('#login').append('\n    <div class="data">\n        <p id="name"></p>\n        <img id="pic" class="img-circle" width="50" height="50"/>\n        <button onclick="signOutGoogle()" class="btn btn-danger">Salir</button>\n    </div>\n  ');
  $('.data').css('display', 'block');
  $('#pic').attr('src', profile.getImageUrl());
  $('#name').text(profile.getName());
}

function signOutGoogle() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    $('.g-signin2').css('display', 'block');
    $('#login').empty();
    React.render(React.createElement(Login, null), document.getElementById('login'));
  });
}

var Registro = function (_React$Component) {
  _inherits(Registro, _React$Component);

  function Registro() {
    _classCallCheck(this, Registro);

    return _possibleConstructorReturn(this, (Registro.__proto__ || Object.getPrototypeOf(Registro)).apply(this, arguments));
  }

  _createClass(Registro, [{
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      $('#loginDialog').dialog('open');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'a',
        { href: '#', onClick: this.handleClick },
        'Reg\xEDstrate'
      );
    }
  }]);

  return Registro;
}(React.Component);

var Login = function (_React$Component2) {
  _inherits(Login, _React$Component2);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement('i', { className: 'fa fa-user' }),
        React.createElement(Registro, null)
      );
    }
  }]);

  return Login;
}(React.Component);