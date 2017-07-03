(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("businesslayer", [], factory);
	else if(typeof exports === 'object')
		exports["businesslayer"] = factory();
	else
		root["businesslayer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _service2 = __webpack_require__(1);

var _service3 = _interopRequireDefault(_service2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bookservice = function (_service) {
    _inherits(bookservice, _service);

    function bookservice() {
        _classCallCheck(this, bookservice);

        return _possibleConstructorReturn(this, (bookservice.__proto__ || Object.getPrototypeOf(bookservice)).apply(this, arguments));
    }

    _createClass(bookservice, [{
        key: 'GetAllBooks',
        value: function GetAllBooks(pageinit, pagesize) {
            return { totalize: 0, items: [] };
        }
    }, {
        key: 'GetBooksByName',
        value: function GetBooksByName(name, pageinit, pagesize) {
            return { totalize: 0, items: [] };
        }
    }, {
        key: 'GetBooksByAuthorName',
        value: function GetBooksByAuthorName(name, pageinit, pagesize) {
            return { totalize: 0, items: [] };
        }
    }, {
        key: 'GetBooksByGenre',
        value: function GetBooksByGenre(genre, pageinit, pagesize) {
            return { totalize: 0, items: [] };
        }
    }, {
        key: 'GetBooksByGenreAndPublishedDate',
        value: function GetBooksByGenreAndPublishedDate(genre, publishdate, pageinit, pagesize) {
            return { totalize: 0, items: [] };
        }
    }], [{
        key: 'ONEMILLION',
        get: function get() {
            return 1000000;
        }
    }]);

    return bookservice;
}(_service3.default);

exports.default = bookservice;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var service = function () {
    function service() {
        _classCallCheck(this, service);

        this.list = [];
    }

    _createClass(service, [{
        key: "Save",
        value: function Save(newItemsList) {
            /*  let value = this.list.length;
               newItemsList.forEach(function(element) {
                  element.Id =++value;
              }, this);
               let newlist= newItemsList.map(x=>{ let aux = Object.assign({},x); aux.Id = ++value; return aux });
               this.list = Object.assign({},this.list,newItemsList);
              */
            this.list = newItemsList;
        }
    }, {
        key: "GetAt",
        value: function GetAt(index) {
            return this.list[index];
        }
    }, {
        key: "Count",
        value: function Count() {
            return this.list.length;
        }
    }]);

    return service;
}();

exports.default = service;
module.exports = exports["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _entity2 = __webpack_require__(8);

var _entity3 = _interopRequireDefault(_entity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var namedentity = function (_entity) {
	_inherits(namedentity, _entity);

	function namedentity() {
		_classCallCheck(this, namedentity);

		return _possibleConstructorReturn(this, (namedentity.__proto__ || Object.getPrototypeOf(namedentity)).apply(this, arguments));
	}

	_createClass(namedentity, [{
		key: 'name',
		get: function get() {
			return this._name;
		},
		set: function set(n) {
			if (n) {
				this._name = n;
			}
		}
	}]);

	return namedentity;
}(_entity3.default);

exports.default = namedentity;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //import book from './entities/book'
//import author from './entities/author'
//import authorservice from './services/authorservice'


var _bookservice = __webpack_require__(0);

var _bookservice2 = _interopRequireDefault(_bookservice);

var _randomseed = __webpack_require__(4);

var _randomseed2 = _interopRequireDefault(_randomseed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var businesslibrary = function () {
    function businesslibrary() {
        _classCallCheck(this, businesslibrary);

        this.bookservice = null;
        this.authorservice = null;

        var aux = new _randomseed2.default();
        this.authorservice = aux.GenerateHundredAuthors();
        this.bookservice = aux.GenerateBooks(this.authorservice, _bookservice2.default.ONEMILLION);
    }

    _createClass(businesslibrary, [{
        key: 'Authors',
        get: function get() {
            return this.authorservice;
        }
    }, {
        key: 'Books',
        get: function get() {
            return this.bookservice;
        }

        /*test()
        {
            
            let res = this.authorservice.GetAuthorByGender('male')
            console.log(res)
            res = this.authorservice.GetAuthorByGender('female')
            console.log(res)
        }*/

    }]);

    return businesslibrary;
}();

//var businesslibrary = new _businesslibrary()
//businesslibrary.test()

exports.default = businesslibrary;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bookservice = __webpack_require__(0);

var _bookservice2 = _interopRequireDefault(_bookservice);

var _authorservice = __webpack_require__(5);

var _authorservice2 = _interopRequireDefault(_authorservice);

var _book = __webpack_require__(7);

var _book2 = _interopRequireDefault(_book);

var _author = __webpack_require__(9);

var _author2 = _interopRequireDefault(_author);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var adjectives = ["adamant", "adroit", "amatory", "animistic", "antic", "arcadian", "baleful", "bellicose", "bilious", "boorish", "calamitous", "caustic", "cerulean", "comely", "concomitant", "contumacious", "corpulent", "crapulous", "defamatory", "didactic", "dilatory", "dowdy", "efficacious", "effulgent", "egregious", "endemic", "equanimous", "execrable", "fastidious", "feckless", "fecund", "friable", "fulsome", "garrulous", "guileless", "gustatory", "heuristic", "histrionic", "hubristic", "incendiary", "insidious", "insolent", "intransigent", "inveterate", "invidious", "irksome", "jejune", "jocular", "judicious", "lachrymose", "limpid", "loquacious", "luminous", "mannered", "mendacious", "meretricious", "minatory", "mordant", "munificent", "nefarious", "noxious", "obtuse", "parsimonious", "pendulous", "pernicious", "pervasive", "petulant", "platitudinous", "precipitate", "propitious", "puckish", "querulous", "quiescent", "rebarbative", "recalcitant", "redolent", "rhadamanthine", "risible", "ruminative", "sagacious", "salubrious", "sartorial", "sclerotic", "serpentine", "spasmodic", "strident", "taciturn", "tenacious", "tremulous", "trenchant", "turbulent", "turgid", "ubiquitous", "uxorious", "verdant", "voluble", "voracious", "wheedling", "withering", "zealous"];
var nouns = ["ninja", "chair", "pancake", "statue", "unicorn", "rainbows", "laser", "senor", "bunny", "captain", "nibblets", "cupcake", "carrot", "gnomes", "glitter", "potato", "salad", "toejam", "curtains", "beets", "toilet", "exorcism", "stick figures", "mermaid eggs", "sea barnacles", "dragons", "jellybeans", "snakes", "dolls", "bushes", "cookies", "apples", "ice cream", "ukulele", "kazoo", "banjo", "opera singer", "circus", "trampoline", "carousel", "carnival", "locomotive", "hot air balloon", "praying mantis", "animator", "artisan", "artist", "colorist", "inker", "coppersmith", "director", "designer", "flatter", "stylist", "leadman", "limner", "make-up artist", "model", "musician", "penciller", "producer", "scenographer", "set decorator", "silversmith", "teacher", "auto mechanic", "beader", "bobbin boy", "clerk of the chapel", "filling station attendant", "foreman", "maintenance engineering", "mechanic", "miller", "moldmaker", "panel beater", "patternmaker", "plant operator", "plumber", "sawfiler", "shop foreman", "soaper", "stationary engineer", "wheelwright", "woodworkers"];

var RandomSeed = function () {
    function RandomSeed() {
        _classCallCheck(this, RandomSeed);
    }

    _createClass(RandomSeed, [{
        key: 'randomEl',
        value: function randomEl(list) {
            var i = Math.floor(Math.random() * list.length);
            return list[i];
        }
    }, {
        key: 'randomNum',
        value: function randomNum(max) {
            return Math.floor(Math.random() * max);
        }
    }, {
        key: 'GenerateHundredAuthors',
        value: function GenerateHundredAuthors() {
            var TOTAL = 100;

            var authorservice = new _authorservice2.default();

            var author = null;
            var authors = [];

            for (var i = 0; i < TOTAL; i++) {
                author = new _author2.default();

                author.name = this.randomEl(adjectives) + ' ' + this.randomEl(nouns);
                author.gender = this.randomEl(_author2.default.genderTypes);
                authors.push(author);
            }

            authorservice.Save(authors);

            return authorservice;
        }
    }, {
        key: 'GenerateBooks',
        value: function GenerateBooks(authorservice) {
            var total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;


            var bookservice = new _bookservice2.default();

            var book = null;
            var books = [];
            for (var i = 0; i < total; i++) {
                book = new _book2.default();

                book.name = this.randomEl(adjectives) + ' ' + this.randomEl(nouns);
                book.publishdate = Date.now;
                book.genre = this.randomEl(_book2.default.genreTypes);

                book.author = authorservice.GetAt(this.randomNum(authorservice.Count()));

                books.push(book);
            }

            bookservice.Save(books);

            return bookservice;
        }
    }]);

    return RandomSeed;
}();

exports.default = RandomSeed;

//const aux = new RandomSeed()

//aux.GenerateOneMillionBooks( aux.GenerateHundredAuthors() )

module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _service2 = __webpack_require__(1);

var _service3 = _interopRequireDefault(_service2);

var _exception = __webpack_require__(6);

var _exception2 = _interopRequireDefault(_exception);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var authorservice = function (_service) {
    _inherits(authorservice, _service);

    function authorservice() {
        _classCallCheck(this, authorservice);

        return _possibleConstructorReturn(this, (authorservice.__proto__ || Object.getPrototypeOf(authorservice)).call(this));
    }

    _createClass(authorservice, [{
        key: 'GetAllAuthors',
        value: function GetAllAuthors() {
            var pageinit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var pagesize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

            throw new _exception2.default('Not yet implemented');
            //return { totalize:this.list.length, items:this.list}; 
        }
    }, {
        key: 'GetAuthorByGender',
        value: function GetAuthorByGender(gender) {
            var pageinit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var pagesize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;


            var result = this.list.filter(function (x) {
                return x.gender === gender;
            });

            return { totalSize: result.length, items: result };
        }
    }]);

    return authorservice;
}(_service3.default);

exports.default = authorservice;
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var exception = function exception(message) {
    _classCallCheck(this, exception);

    this.message = message;
};

exports.default = exception;
module.exports = exports["default"];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _namedentity2 = __webpack_require__(2);

var _namedentity3 = _interopRequireDefault(_namedentity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var book = function (_namedentity) {
	_inherits(book, _namedentity);

	function book() {
		_classCallCheck(this, book);

		return _possibleConstructorReturn(this, (book.__proto__ || Object.getPrototypeOf(book)).apply(this, arguments));
	}

	_createClass(book, [{
		key: "author",
		get: function get() {
			return this._author;
		},
		set: function set(a) {
			if (a) {
				this._author = a;
			}
		}
	}, {
		key: "genre",
		get: function get() {
			return this._genre;
		},
		set: function set(g) {
			if (g) {
				this._genre = g;
			}
		}
	}, {
		key: "publishdate",
		get: function get() {
			return this._publishdate;
		},
		set: function set(p) {
			if (p) {
				this._publishdate = p;
			}
		}
	}], [{
		key: "genreTypes",
		get: function get() {
			return ["love", "horror", "finance", "politics", "science"];
		}
	}]);

	return book;
}(_namedentity3.default);

exports.default = book;
module.exports = exports["default"];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var entity = function () {
	function entity() {
		_classCallCheck(this, entity);
	}

	_createClass(entity, [{
		key: "Id",
		get: function get() {
			return this._id;
		},
		set: function set(id) {
			if (id) {
				this._id = id;
			}
		}
	}]);

	return entity;
}();

exports.default = entity;
module.exports = exports["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _namedentity2 = __webpack_require__(2);

var _namedentity3 = _interopRequireDefault(_namedentity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var author = function (_namedentity) {
	_inherits(author, _namedentity);

	function author() {
		_classCallCheck(this, author);

		return _possibleConstructorReturn(this, (author.__proto__ || Object.getPrototypeOf(author)).apply(this, arguments));
	}

	_createClass(author, [{
		key: "gender",
		get: function get() {
			return this._gender;
		},
		set: function set(g) {
			if (g) {
				this._gender = g;
			}
		}
	}], [{
		key: "genderTypes",
		get: function get() {
			return ["male", "female"];
		}
	}]);

	return author;
}(_namedentity3.default);

exports.default = author;
module.exports = exports["default"];

/***/ })
/******/ ]);
});
//# sourceMappingURL=businesslayer.js.map