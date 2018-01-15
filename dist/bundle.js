/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _App = __webpack_require__(1);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Gif from './components/Gif';
//import Search from './components/Search';


var root = document.getElementById('app');
var DOM = ReactDOM;

var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main(props) {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));
    }

    _createClass(Main, [{
        key: 'render',
        value: function render() {
            return React.createElement(_App2.default, null);
        }
    }]);

    return Main;
}(React.Component);

DOM.render(React.createElement(Main, null), root);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Gif = __webpack_require__(2);

var _Gif2 = _interopRequireDefault(_Gif);

var _Search = __webpack_require__(3);

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GIPHY_API_URL = 'http://api.giphy.com';
var GIPHY_PUB_KEY = 'oNyYjKawmgOFnXM8KKB5L0ojcXOarymE';

var styles = {
    margin: '0 auto',
    textAlign: 'center',
    width: '90%'
};

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            loading: false,
            searchingText: '',
            gif: {}
        };
        _this.handleSearch = _this.handleSearch.bind(_this);
        _this.getGif = _this.getGif.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'handleSearch',
        value: function handleSearch(searchingText) {
            // 1.
            this.setState({
                loading: true // 2.
            });
            this.getGif(searchingText, function (gif) {
                // 3.
                this.setState({ // 4
                    loading: false, // a
                    gif: gif, // b
                    searchingText: searchingText // c
                });
            }.bind(this));
        }
    }, {
        key: 'getGif',
        value: function getGif(searchingText, callback) {
            // 1.
            var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&rating=G' + '&tag=' + searchingText; // 2.
            var xhr = new XMLHttpRequest(); // 3.
            xhr.open('GET', url);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText).data; // 4.
                    var gif = { // 5.
                        url: data.fixed_width_downsampled_url,
                        sourceUrl: data.url
                    };
                    callback(gif); // 6.
                }
            };
            xhr.send();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { style: styles },
                React.createElement(
                    'h1',
                    null,
                    'Wyszukiwarka GIFow!'
                ),
                React.createElement(
                    'p',
                    null,
                    'Znajd\u017A gifa na ',
                    React.createElement(
                        'a',
                        { href: 'http://giphy.com' },
                        'giphy'
                    ),
                    '. Naciskaj enter, aby pobra\u0107 kolejne gify.'
                ),
                React.createElement(_Search2.default, {
                    onSearch: this.handleSearch
                }),
                React.createElement(_Gif2.default, {
                    loading: this.state.loading,
                    url: this.state.gif.url,
                    sourceUrl: this.state.gif.sourceUrl
                })
            );
        }
    }]);

    return App;
}(React.Component);

;

exports.default = App;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';
var styles = {
    minHeight: '310px',
    margin: '0.5em'
};

var Gif = function (_React$Component) {
    _inherits(Gif, _React$Component);

    function Gif(props) {
        _classCallCheck(this, Gif);

        return _possibleConstructorReturn(this, (Gif.__proto__ || Object.getPrototypeOf(Gif)).call(this, props));
    }

    _createClass(Gif, [{
        key: 'getUrl',
        value: function getUrl() {
            return this.props.sourceUrl || GIPHY_LOADING_URL;
        }
    }, {
        key: 'render',
        value: function render() {
            var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;

            return React.createElement(
                'div',
                { style: styles },
                React.createElement(
                    'a',
                    { href: this.getUrl(), title: 'view this on giphy', target: 'new' },
                    React.createElement('img', { id: 'gif', src: url, style: { width: '100%', maxWidth: '350px' } })
                )
            );
        }
    }]);

    return Gif;
}(React.Component);

exports.default = Gif;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    fontSize: '1.5em',
    width: '90%',
    maxWidth: '350px'
};

var Search = function (_React$Component) {
    _inherits(Search, _React$Component);

    function Search(props) {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

        _this.state = { searchingText: '' };

        // This binding is necessary to make `this` work in the callback
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleKeyUp = _this.handleKeyUp.bind(_this);
        return _this;
    }

    _createClass(Search, [{
        key: 'handleChange',
        value: function handleChange(event) {
            var searchingText = event.target.value;
            this.setState({
                searchingText: searchingText
            });
            if (searchingText.length > 2) {
                this.props.onSearch(searchingText);
            }
        }
    }, {
        key: 'handleKeyUp',
        value: function handleKeyUp(event) {
            if (event.keyCode === 13) {
                this.props.onSearch(this.state.searchingText);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement('input', {
                type: 'text',
                onChange: this.handleChange,
                onKeyUp: this.handleKeyUp,
                placeholder: 'Tutaj wpisz wyszukiwan\u0105 fraz\u0119',
                style: styles,
                value: this.state.searchTerm
            });
        }
    }]);

    return Search;
}(React.Component);

;

exports.default = Search;

/***/ })
/******/ ]);