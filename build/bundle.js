(function (exports) {
  'use strict';

  /**
   * Create an element with attributes and events, and append elements or
   * strings to it.
   * 
   * Usage:
   *  const el = element(
   *    'button',
   *    { 'class': 'button' },
   *    { click: () => { ... } },
   *    'Takki'
   *   );
   *  returns
   *  <button class="button">Takki</button> with a click handler.
   * 
   * @param {string} name Element name
   * @param {object} attributes Object containing attributes to attach to element.
   * @param {object} events Object of events to add to element.
   * @param  {...any} children List of elements or strings to append to element.
   * @returns {object} HTML element.
   */
  function element(name) {
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var events = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var el = document.createElement(name);

    for (var _len = arguments.length, children = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      children[_key - 3] = arguments[_key];
    }

    for (var _i = 0, _children = children; _i < _children.length; _i++) {
      var child = _children[_i];

      if (!child) {
        continue;
      }

      if (attributes) {
        for (var attrib in attributes) {
          console.log('attrib :>> ', attrib);
          el.setAttribute(attrib, attributes[attrib]);
        }
      }

      if (events) {
        for (var event in events) {
          el.addEventListener(event, events[event]);
        }
      }

      if (typeof child === 'string') {
        el.appendChild(document.createTextNode(child));
      } else {
        el.appendChild(child);
      }
    }

    return el;
  }
  /**
   * Simplified element function.
   * Creates an element and append elements or strings to it.
   * 
   * @param {string} name Element name
   * @param  {...any} children List of elements or strings to append to element.
   * @returns {object} HTML element.
   */

  function el(name) {
    for (var _len2 = arguments.length, children = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      children[_key2 - 1] = arguments[_key2];
    }

    return element.apply(void 0, [name, null, null].concat(children));
  }
  /**
   * Creates a random integer between min and max.
   * 
   * @param {number} min
   * @param {number} max 
   * @returns {integer} random integer between min and max.
   */

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  		path: basedir,
  		exports: {},
  		require: function (path, base) {
  			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
  		}
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.6.12' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject = function (it) {
    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  var document$1 = _global.document;
  // typeof document.createElement is 'object' in old IE
  var is = _isObject(document$1) && _isObject(document$1.createElement);
  var _domCreate = function (it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive = function (it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;

  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) try {
      return dP(O, P, Attributes);
    } catch (e) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _objectDp = {
  	f: f
  };

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty = {}.hasOwnProperty;
  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var id = 0;
  var px = Math.random();
  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var _shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = _global[SHARED] || (_global[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: _core.version,
    mode:  'global',
    copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
  });
  });

  var _functionToString = _shared('native-function-to-string', Function.toString);

  var _redefine = createCommonjsModule(function (module) {
  var SRC = _uid('src');

  var TO_STRING = 'toString';
  var TPL = ('' + _functionToString).split(TO_STRING);

  _core.inspectSource = function (it) {
    return _functionToString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if (O === _global) {
      O[key] = val;
    } else if (!safe) {
      delete O[key];
      _hide(O, key, val);
    } else if (O[key]) {
      O[key] = val;
    } else {
      _hide(O, key, val);
    }
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || _functionToString.call(this);
  });
  });

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  // optional / simple context binding

  var _ctx = function (fn, that, length) {
    _aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
      // extend global
      if (target) _redefine(target, key, out, type & $export.U);
      // export
      if (exports[key] != out) _hide(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };
  _global.core = _core;
  // type bitmap
  $export.F = 1;   // forced
  $export.G = 2;   // global
  $export.S = 4;   // static
  $export.P = 8;   // proto
  $export.B = 16;  // bind
  $export.W = 32;  // wrap
  $export.U = 64;  // safe
  $export.R = 128; // real proto method for `library`
  var _export = $export;

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // 7.1.13 ToObject(argument)

  var _toObject = function (it) {
    return Object(_defined(it));
  };

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  var max = Math.max;
  var min = Math.min;
  var _toAbsoluteIndex = function (index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  };

  // 7.1.15 ToLength

  var min$1 = Math.min;
  var _toLength = function (it) {
    return it > 0 ? min$1(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var _arrayFill = function fill(value /* , start = 0, end = @length */) {
    var O = _toObject(this);
    var length = _toLength(O.length);
    var aLen = arguments.length;
    var index = _toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
    var end = aLen > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : _toAbsoluteIndex(end, length);
    while (endPos > index) O[index++] = value;
    return O;
  };

  var _wks = createCommonjsModule(function (module) {
  var store = _shared('wks');

  var Symbol = _global.Symbol;
  var USE_SYMBOL = typeof Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] =
      USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
  };

  $exports.store = store;
  });

  // 22.1.3.31 Array.prototype[@@unscopables]
  var UNSCOPABLES = _wks('unscopables');
  var ArrayProto = Array.prototype;
  if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});
  var _addToUnscopables = function (key) {
    ArrayProto[UNSCOPABLES][key] = true;
  };

  // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)


  _export(_export.P, 'Array', { fill: _arrayFill });

  _addToUnscopables('fill');

  var color = [];

  function createColor(n) {
    color = [];

    for (var i = 0; i < n; i++) {
      color.push('white');
    }
  }

  function selectionSort(array) {
    var n = array.length;
    createColor(n);

    var _loop = function _loop(i) {
      setTimeout(function () {
        // Finding the smallest number in the subarray
        var min = i;

        for (var j = i + 1; j < n; j++) {
          if (array[j] < array[min]) {
            min = j;
          }
        }

        if (min != i) {
          // Swapping the elements
          var tmp = array[i];
          array[i] = array[min];
          array[min] = tmp; // give color

          color[i] = 'blue';
          color[min] = 'red';
          draw(color);
          color[i] = 'green';
          color[min] = 'white;';
        }

        if (i === n - 1) {
          color.fill('green');
          draw(color);
          disableButtons(false);
        }
      }, 100 * i);
    };

    for (var i = 0; i < n; i++) {
      _loop(i);
    }
  }

  var slider = document.querySelector('.slider');
  var sliderValue = document.querySelector('.slider-value');
  var arrayEl = document.querySelector('.array');
  var randomBtn = document.querySelector('#randomBtn');
  var selectionBtn = document.querySelector('#selectionBtn');
  var height = window.innerHeight / 100;
  sliderValue.textContent = slider.value; // slider that changes array size

  slider.addEventListener('input', function (e) {
    sliderValue.textContent = e.target.value;
    arrayLength = e.target.value;
    createArray(arrayLength);
  }); // button that creates a new random array

  randomBtn.addEventListener('click', function () {
    createArray(arrayLength);
  });
  var array = []; // array to be sorted

  var arrayLength = slider.value; // length of array
  // creates a new random array

  function createArray(arrayLength) {
    array = [];

    for (var i = 0; i < arrayLength; i++) {
      array.push(getRandomInt(1, 80));
    }

    draw(array);
  }

  function disableButtons(bool) {
    slider.disabled = bool;
    randomBtn.disabled = bool;
    selectionBtn.disabled = bool;
  } // draws the array as bars

  function draw(color) {
    while (arrayEl.firstChild) {
      arrayEl.removeChild(arrayEl.lastChild);
    }

    for (var i = 0; i < arrayLength; i++) {
      if (color[i] === 'green') {
        var barEl = el('div');
        barEl.setAttribute('class', 'bar-green');
        barEl.setAttribute('style', "height: ".concat(array[i] * height, "px"));
        arrayEl.appendChild(barEl);
      } else if (color[i] === 'red') {
        var _barEl = el('div');

        _barEl.setAttribute('class', 'bar-red');

        _barEl.setAttribute('style', "height: ".concat(array[i] * height, "px"));

        arrayEl.appendChild(_barEl);
      } else if (color[i] === 'blue') {
        var _barEl2 = el('div');

        _barEl2.setAttribute('class', 'bar-blue');

        _barEl2.setAttribute('style', "height: ".concat(array[i] * height, "px"));

        arrayEl.appendChild(_barEl2);
      } else {
        var _barEl3 = el('div');

        _barEl3.setAttribute('class', 'bar');

        _barEl3.setAttribute('style', "height: ".concat(array[i] * height, "px"));

        arrayEl.appendChild(_barEl3);
      }
    }
  } // selection sort button

  selectionBtn.addEventListener('click', function () {
    disableButtons(true);
    selectionSort(array);
  }); // main

  document.addEventListener('DOMContentLoaded', function () {
    console.log('Refresh');
    console.log("height: ".concat(height));
    createArray(arrayLength);
  });

  exports.disableButtons = disableButtons;
  exports.draw = draw;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
//# sourceMappingURL=bundle.js.map
