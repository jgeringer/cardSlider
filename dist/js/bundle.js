(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.refreshValue = refreshValue;
exports.isMobile = isMobile;
exports.bpChange = bpChange;
function refreshValue() {
    window.bpValue = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
    return bpValue;
}

function isMobile() {
    if (refreshValue() == 'bpSmall') {
        return true;
    } else {
        return false;
    }
}

function bpChange() {
    var currBpValue = window.bpValue;

    console.log('refreshValue.bpValue:' + refreshValue() + " | currBpValue: " + currBpValue);

    if (window.bpValue != currBpValue) {
        return true;
    } else {
        //console.log('same!');
        return false;
    }
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = cardLoader;

var _constants = require('./constants');

var _moduleSticky = require('./module-sticky.js');

var moduleSticky = _interopRequireWildcard(_moduleSticky);

var _breakpoint = require('./breakpoint.js');

var breakpoint = _interopRequireWildcard(_breakpoint);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function cardLoader() {

    //global vars
    var cardListingWrapper = document.querySelector('.CardListingWrapper'),
        cardListing = document.querySelector('.CardListing'),
        card = document.querySelectorAll('.Card'),
        cardLength = card.length,

    //cardListingInitWidth = `${cardLength * (breakpoint.isMobile() ? CARDINITWIDTH : CARDINITWIDTHMD)}%`,
    cardListingInitWidth = (breakpoint.isMobile() ? cardLength * _constants.CARDINITWIDTH : 100) + '%',
        cardListingFullWidth = cardLength * _constants.CARDINITWIDTH + '%';

    //set the width the of the card container.
    cardListing.style.width = cardListingInitWidth;

    $(window).on('resize.checkBreakpoint', function () {
        if (breakpoint.bpChange()) {
            console.log('changed!!!');
            //cardListingInitWidth = `${cardLength * (breakpoint.isMobile() ? CARDINITWIDTH : CARDINITWIDTHMD)}%`;
            cardListingInitWidth = (breakpoint.isMobile() ? cardLength * _constants.CARDINITWIDTH : 100) + '%', cardListing.style.width = cardListingInitWidth;
        }
    }).trigger('resize.checkBreakpoint');

    // if(breakpoint.isMobile()){
    //     console.log('mobile!');
    // } else{
    //     console.log('NOT mobile!');
    // }


    //sample data
    var dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hardy', age: 6 }, { name: 'Chloe', age: 8 }];

    var html = '\n        <div class="Card-detailContent">\n            ' + dogs.map(function (dog) {
        return '\n            <p>\n                ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old.\n                ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old.\n                ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old.\n                ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old.\n                ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old.\n                ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old.\n                ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old.\n                ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old.\n                ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old.\n                ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old.\n                ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old.\n                ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old.\n                ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old.\n                ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old. ' + dog.name + ' is ' + dog.age * 7 + ' dog years old.\n            </p>\n            ';
    }).join('') + '\n        </ol>\n    ';

    //Tapping begin!
    $('.Card').hammer().off("tap.cardOpen").on("tap.cardOpen", function (e) {
        console.log('hammer time');
        e.preventDefault();
        e.stopPropagation();

        var $el = $(this);

        //cardListing.style.width = cardListingFullWidth;

        var $currY = $(window).scrollTop(),
            $elX = $el.offset().left,
            $elY = $el.offset().top - $currY;

        $el.siblings().removeClass('is-selected');
        $el.addClass('is-selected');
        cardListingWrapper.classList.toggle('is-hiding');

        var $elClone = $el.clone().appendTo('body');

        $elClone.prepend('<button class="Button Button--close">close me</button>');

        $elClone.css({
            top: $elY,
            left: $elX
        });

        $elClone.addClass('is-fixed');

        var data = html,
            cardDetailContainer = '<article id="Card-detail"></article>',
            cardDetail = document.getElementById('Card-detail');

        setTimeout(function () {
            $elClone.addClass('is-top');
            setTimeout(function () {
                $('html, body').scrollTop(0);
                $elClone.addClass('is-now-abs');
                cardDetail.classList.add('is-active');

                //ajax coming soon!
                cardDetail.insertAdjacentHTML('beforeend', data);
            }, 100);
        }, 20);

        setTimeout(function () {
            moduleSticky.enable("body > .Card .Card--footer"); //find a better way to target this
        }, 500);

        //Button Close Click...    
        $('.Button--close').hammer().off('tap.closeClone').on('tap.closeClone', function (e) {
            e.preventDefault();

            moduleSticky.disable("body > .Card .Card--footer");

            cardListing.style.width = cardListingInitWidth;

            cardDetail.classList.remove('is-active');

            //first giv it a position fixed, with the top position of exactly where it is in the viewport
            $('html, body').scrollTop($currY);
            $elClone.removeClass('is-now-abs');

            $elClone.removeClass('is-top');

            $elClone.css({
                top: $('.Card.is-selected').offset().top - $(window).scrollTop()
                //,left: $('.Card.is-selected').offset().left
            });

            cardListingWrapper.classList.toggle('is-hiding');

            setTimeout(function () {
                $elClone.remove();

                $el.removeClass('is-selected');

                //console.log('html cleared');
                cardDetail.innerHTML = '';
            }, 500);
        });
    });
}

},{"./breakpoint.js":1,"./constants":3,"./module-sticky.js":5}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//global vars
var CARDINITWIDTH = exports.CARDINITWIDTH = 70; //Mobile (default)
var CARDINITWIDTHMD = exports.CARDINITWIDTHMD = 50; //Above mobile
var CARDFULLWIDTH = exports.CARDFULLWIDTH = 100;

},{}],4:[function(require,module,exports){
'use strict';

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _card2.default)();

},{"./card":2}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.enable = enable;
exports.disable = disable;
function enable(el) {

    var stickyEl = document.querySelector(el),
        heroHeight = $(el).offset().top - $(window).scrollTop();

    $(window).on('scroll.moduleSticky', function (e) {
        //if it hits the top of the viewport, then add .is-sticky class to the element.

        console.log($(window).scrollTop() + " | " + heroHeight);
        var scrolledY = $(window).scrollTop();

        if (scrollY > heroHeight) {
            stickyEl.classList.add('is-sticky');
        } else {
            stickyEl.classList.remove('is-sticky');
            //document.querySelector('body > .Card').style.backgroundPositionY = scrollY + "px"; //('background-position', 'left ' + ((scrolledY)) + 'px');
        }
    });
}

function disable(el) {
    console.log('disabled sticky and turn off scroll event');

    document.querySelector(el).classList.remove('is-sticky');
    $(window).off('scroll.moduleSticky');
}

},{}],6:[function(require,module,exports){
'use strict';

// 1. Basic object for our stuff
window.slider = {};

// 2. Settings
slider.sliderPanelSelector = '.Card';
slider.sliderPaginationSelector = '.slider-pagination';
slider.sensitivity = 25; // horizontal % needed to trigger swipe

// 2. Placeholder to remember which slide we’re on
slider.activeSlide = 0;

// 3. Slide counter
slider.slideCount = 0;

// 4. Initialization + event listener
slider.init = function (selector) {

  // 4a. Find the container
  slider.sliderEl = document.querySelector(selector);

  // 4b. Count stuff
  slider.slideCount = slider.sliderEl.querySelectorAll(slider.sliderPanelSelector).length;

  // 4c. Populate pagination
  var n = 0;
  for (n; n < slider.slideCount; n++) {
    var activeStatus = n == slider.activeSlide ? ' class="is-active"' : '';
    slider.sliderEl.parentElement.querySelector(slider.sliderPaginationSelector).innerHTML += '<div ' + activeStatus + '></div>';
  }

  // 4d. Set up HammerJS
  var sliderManager = new Hammer.Manager(slider.sliderEl);
  sliderManager.add(new Hammer.Pan({ threshold: 20, pointers: 0, direction: Hammer.DIRECTION_HORIZONTAL })); //direction: Hammer.DIRECTION_RIGHT


  sliderManager.on('pan', function (e) {
    // 4e. Calculate pixel movements into 1:1 screen percents so gestures track with motion
    var percentage = 100 / slider.slideCount * e.deltaX / window.innerWidth;

    // 4f. Multiply percent by # of slide we’re on
    var percentageCalculated = percentage - 100 / slider.slideCount * slider.activeSlide;

    // 4g. Apply transformation
    slider.sliderEl.style.transform = 'translateX( ' + percentageCalculated + '% )';

    // 4h. Snap to slide when done
    if (e.isFinal) {
      if (e.velocityX > 1) {
        slider.goTo(slider.activeSlide - 1);
      } else if (e.velocityX < -1) {
        slider.goTo(slider.activeSlide + 1);
      } else {
        if (percentage <= -(slider.sensitivity / slider.slideCount)) slider.goTo(slider.activeSlide + 1);else if (percentage >= slider.sensitivity / slider.slideCount) slider.goTo(slider.activeSlide - 1);else slider.goTo(slider.activeSlide);
      }
    }
  });
};

// 5. Update current slide
slider.goTo = function (number) {

  // 5a. Stop it from doing weird things like moving to slides that don’t exist
  if (number < 0) slider.activeSlide = 0;else if (number > slider.slideCount - 1) slider.activeSlide = slider.slideCount - 1;else slider.activeSlide = number;

  // 5b. Apply transformation & smoothly animate via .is-animating CSS
  slider.sliderEl.classList.add('is-animating');
  var percentage = -(100 / slider.slideCount) * slider.activeSlide;
  slider.sliderEl.style.transform = 'translateX( ' + percentage + '% )';
  clearTimeout(slider.timer);
  slider.timer = setTimeout(function () {
    slider.sliderEl.classList.remove('is-animating');
  }, 400);

  // 5c. Update the counters
  var pagination = slider.sliderEl.parentElement.querySelectorAll(slider.sliderPaginationSelector + ' > *');
  var n = 0;
  for (n; n < pagination.length; n++) {
    var className = n == slider.activeSlide ? 'is-active' : '';
    pagination[n].className = className;
  }
};

slider.init('.CardListing');

},{}],7:[function(require,module,exports){
"use strict";

function hammerify(el, options) {
    var $el = $(el);
    if (!$el.data("hammer")) {
        $el.data("hammer", new Hammer($el[0], options));
    }
}

$.fn.hammer = function (options) {
    return this.each(function () {
        hammerify(this, options);
    });
};

// extend the emit method to also trigger jQuery events
Hammer.Manager.prototype.emit = function (originalEmit) {
    return function (type, data) {
        originalEmit.call(this, type, data);
        $(this.element).trigger({
            type: type,
            gesture: data
        });
    };
}(Hammer.Manager.prototype.emit);

},{}],8:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
console.log('hello from hammer');
!function (a, b, c, d) {
  "use strict";
  function e(a, b, c) {
    return setTimeout(j(a, c), b);
  }function f(a, b, c) {
    return Array.isArray(a) ? (g(a, c[b], c), !0) : !1;
  }function g(a, b, c) {
    var e;if (a) if (a.forEach) a.forEach(b, c);else if (a.length !== d) for (e = 0; e < a.length;) {
      b.call(c, a[e], e, a), e++;
    } else for (e in a) {
      a.hasOwnProperty(e) && b.call(c, a[e], e, a);
    }
  }function h(b, c, d) {
    var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";return function () {
      var c = new Error("get-stack-trace"),
          d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
          f = a.console && (a.console.warn || a.console.log);return f && f.call(a.console, e, d), b.apply(this, arguments);
    };
  }function i(a, b, c) {
    var d,
        e = b.prototype;d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && la(d, c);
  }function j(a, b) {
    return function () {
      return a.apply(b, arguments);
    };
  }function k(a, b) {
    return (typeof a === "undefined" ? "undefined" : _typeof(a)) == oa ? a.apply(b ? b[0] || d : d, b) : a;
  }function l(a, b) {
    return a === d ? b : a;
  }function m(a, b, c) {
    g(q(b), function (b) {
      a.addEventListener(b, c, !1);
    });
  }function n(a, b, c) {
    g(q(b), function (b) {
      a.removeEventListener(b, c, !1);
    });
  }function o(a, b) {
    for (; a;) {
      if (a == b) return !0;a = a.parentNode;
    }return !1;
  }function p(a, b) {
    return a.indexOf(b) > -1;
  }function q(a) {
    return a.trim().split(/\s+/g);
  }function r(a, b, c) {
    if (a.indexOf && !c) return a.indexOf(b);for (var d = 0; d < a.length;) {
      if (c && a[d][c] == b || !c && a[d] === b) return d;d++;
    }return -1;
  }function s(a) {
    return Array.prototype.slice.call(a, 0);
  }function t(a, b, c) {
    for (var d = [], e = [], f = 0; f < a.length;) {
      var g = b ? a[f][b] : a[f];r(e, g) < 0 && d.push(a[f]), e[f] = g, f++;
    }return c && (d = b ? d.sort(function (a, c) {
      return a[b] > c[b];
    }) : d.sort()), d;
  }function u(a, b) {
    for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) {
      if (c = ma[g], e = c ? c + f : b, e in a) return e;g++;
    }return d;
  }function v() {
    return ua++;
  }function w(b) {
    var c = b.ownerDocument || b;return c.defaultView || c.parentWindow || a;
  }function x(a, b) {
    var c = this;this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
      k(a.options.enable, [a]) && c.handler(b);
    }, this.init();
  }function y(a) {
    var b,
        c = a.options.inputClass;return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z);
  }function z(a, b, c) {
    var d = c.pointers.length,
        e = c.changedPointers.length,
        f = b & Ea && d - e === 0,
        g = b & (Ga | Ha) && d - e === 0;c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c;
  }function A(a, b) {
    var c = a.session,
        d = b.pointers,
        e = d.length;c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);var f = c.firstInput,
        g = c.firstMultiple,
        h = g ? g.center : f.center,
        i = b.center = E(d);b.timeStamp = ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);var j = F(b.deltaTime, b.deltaX, b.deltaY);b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);var k = a.element;o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k;
  }function B(a, b) {
    var c = b.center,
        d = a.offsetDelta || {},
        e = a.prevDelta || {},
        f = a.prevInput || {};b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = { x: f.deltaX || 0, y: f.deltaY || 0 }, d = a.offsetDelta = { x: c.x, y: c.y }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y);
  }function C(a, b) {
    var c,
        e,
        f,
        g,
        h = a.lastInterval || b,
        i = b.timeStamp - h.timeStamp;if (b.eventType != Ha && (i > Da || h.velocity === d)) {
      var j = b.deltaX - h.deltaX,
          k = b.deltaY - h.deltaY,
          l = F(i, j, k);e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b;
    } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g;
  }function D(a) {
    for (var b = [], c = 0; c < a.pointers.length;) {
      b[c] = { clientX: pa(a.pointers[c].clientX), clientY: pa(a.pointers[c].clientY) }, c++;
    }return { timeStamp: ra(), pointers: b, center: E(b), deltaX: a.deltaX, deltaY: a.deltaY };
  }function E(a) {
    var b = a.length;if (1 === b) return { x: pa(a[0].clientX), y: pa(a[0].clientY) };for (var c = 0, d = 0, e = 0; b > e;) {
      c += a[e].clientX, d += a[e].clientY, e++;
    }return { x: pa(c / b), y: pa(d / b) };
  }function F(a, b, c) {
    return { x: b / a || 0, y: c / a || 0 };
  }function G(a, b) {
    return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma;
  }function H(a, b, c) {
    c || (c = Qa);var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];return Math.sqrt(d * d + e * e);
  }function I(a, b, c) {
    c || (c = Qa);var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];return 180 * Math.atan2(e, d) / Math.PI;
  }function J(a, b) {
    return I(b[1], b[0], Ra) + I(a[1], a[0], Ra);
  }function K(a, b) {
    return H(b[0], b[1], Ra) / H(a[0], a[1], Ra);
  }function L() {
    this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments);
  }function M() {
    this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
  }function N() {
    this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments);
  }function O(a, b) {
    var c = s(a.touches),
        d = s(a.changedTouches);return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d];
  }function P() {
    this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments);
  }function Q(a, b) {
    var c = s(a.touches),
        d = this.targetIds;if (b & (Ea | Fa) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];var e,
        f,
        g = s(a.changedTouches),
        h = [],
        i = this.target;if (f = c.filter(function (a) {
      return o(a.target, i);
    }), b === Ea) for (e = 0; e < f.length;) {
      d[f[e].identifier] = !0, e++;
    }for (e = 0; e < g.length;) {
      d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier], e++;
    }return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0;
  }function R() {
    x.apply(this, arguments);var a = j(this.handler, this);this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = [];
  }function S(a, b) {
    a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this, b)) : a & (Ga | Ha) && T.call(this, b);
  }function T(a) {
    var b = a.changedPointers[0];if (b.identifier === this.primaryTouch) {
      var c = { x: b.clientX, y: b.clientY };this.lastTouches.push(c);var d = this.lastTouches,
          e = function e() {
        var a = d.indexOf(c);a > -1 && d.splice(a, 1);
      };setTimeout(e, cb);
    }
  }function U(a) {
    for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
      var e = this.lastTouches[d],
          f = Math.abs(b - e.x),
          g = Math.abs(c - e.y);if (db >= f && db >= g) return !0;
    }return !1;
  }function V(a, b) {
    this.manager = a, this.set(b);
  }function W(a) {
    if (p(a, jb)) return jb;var b = p(a, kb),
        c = p(a, lb);return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb;
  }function X() {
    if (!fb) return !1;var b = {},
        c = a.CSS && a.CSS.supports;return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (d) {
      b[d] = c ? a.CSS.supports("touch-action", d) : !0;
    }), b;
  }function Y(a) {
    this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = [];
  }function Z(a) {
    return a & sb ? "cancel" : a & qb ? "end" : a & pb ? "move" : a & ob ? "start" : "";
  }function $(a) {
    return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : "";
  }function _(a, b) {
    var c = b.manager;return c ? c.get(a) : a;
  }function aa() {
    Y.apply(this, arguments);
  }function ba() {
    aa.apply(this, arguments), this.pX = null, this.pY = null;
  }function ca() {
    aa.apply(this, arguments);
  }function da() {
    Y.apply(this, arguments), this._timer = null, this._input = null;
  }function ea() {
    aa.apply(this, arguments);
  }function fa() {
    aa.apply(this, arguments);
  }function ga() {
    Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
  }function ha(a, b) {
    return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b);
  }function ia(a, b) {
    this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers, function (a) {
      var b = this.add(new a[0](a[1]));a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
    }, this);
  }function ja(a, b) {
    var c = a.element;if (c.style) {
      var d;g(a.options.cssProps, function (e, f) {
        d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[d] || "";
      }), b || (a.oldCssProps = {});
    }
  }function ka(a, c) {
    var d = b.createEvent("Event");d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d);
  }var la,
      ma = ["", "webkit", "Moz", "MS", "ms", "o"],
      na = b.createElement("div"),
      oa = "function",
      pa = Math.round,
      qa = Math.abs,
      ra = Date.now;la = "function" != typeof Object.assign ? function (a) {
    if (a === d || null === a) throw new TypeError("Cannot convert undefined or null to object");for (var b = Object(a), c = 1; c < arguments.length; c++) {
      var e = arguments[c];if (e !== d && null !== e) for (var f in e) {
        e.hasOwnProperty(f) && (b[f] = e[f]);
      }
    }return b;
  } : Object.assign;var sa = h(function (a, b, c) {
    for (var e = Object.keys(b), f = 0; f < e.length;) {
      (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
    }return a;
  }, "extend", "Use `assign`."),
      ta = h(function (a, b) {
    return sa(a, b, !0);
  }, "merge", "Use `assign`."),
      ua = 1,
      va = /mobile|tablet|ip(ad|hone|od)|android/i,
      wa = "ontouchstart" in a,
      xa = u(a, "PointerEvent") !== d,
      ya = wa && va.test(navigator.userAgent),
      za = "touch",
      Aa = "pen",
      Ba = "mouse",
      Ca = "kinect",
      Da = 25,
      Ea = 1,
      Fa = 2,
      Ga = 4,
      Ha = 8,
      Ia = 1,
      Ja = 2,
      Ka = 4,
      La = 8,
      Ma = 16,
      Na = Ja | Ka,
      Oa = La | Ma,
      Pa = Na | Oa,
      Qa = ["x", "y"],
      Ra = ["clientX", "clientY"];x.prototype = { handler: function handler() {}, init: function init() {
      this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler);
    }, destroy: function destroy() {
      this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler);
    } };var Sa = { mousedown: Ea, mousemove: Fa, mouseup: Ga },
      Ta = "mousedown",
      Ua = "mousemove mouseup";i(L, x, { handler: function handler(a) {
      var b = Sa[a.type];b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed && (b & Ga && (this.pressed = !1), this.callback(this.manager, b, { pointers: [a], changedPointers: [a], pointerType: Ba, srcEvent: a }));
    } });var Va = { pointerdown: Ea, pointermove: Fa, pointerup: Ga, pointercancel: Ha, pointerout: Ha },
      Wa = { 2: za, 3: Aa, 4: Ba, 5: Ca },
      Xa = "pointerdown",
      Ya = "pointermove pointerup pointercancel";a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, { handler: function handler(a) {
      var b = this.store,
          c = !1,
          d = a.type.toLowerCase().replace("ms", ""),
          e = Va[d],
          f = Wa[a.pointerType] || a.pointerType,
          g = f == za,
          h = r(b, a.pointerId, "pointerId");e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, { pointers: b, changedPointers: [a], pointerType: f, srcEvent: a }), c && b.splice(h, 1));
    } });var Za = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
      $a = "touchstart",
      _a = "touchstart touchmove touchend touchcancel";i(N, x, { handler: function handler(a) {
      var b = Za[a.type];if (b === Ea && (this.started = !0), this.started) {
        var c = O.call(this, a, b);b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: za, srcEvent: a });
      }
    } });var ab = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
      bb = "touchstart touchmove touchend touchcancel";i(P, x, { handler: function handler(a) {
      var b = ab[a.type],
          c = Q.call(this, a, b);c && this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: za, srcEvent: a });
    } });var cb = 2500,
      db = 25;i(R, x, { handler: function handler(a, b, c) {
      var d = c.pointerType == za,
          e = c.pointerType == Ba;if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
        if (d) S.call(this, b, c);else if (e && U.call(this, c)) return;this.callback(a, b, c);
      }
    }, destroy: function destroy() {
      this.touch.destroy(), this.mouse.destroy();
    } });var eb = u(na.style, "touchAction"),
      fb = eb !== d,
      gb = "compute",
      hb = "auto",
      ib = "manipulation",
      jb = "none",
      kb = "pan-x",
      lb = "pan-y",
      mb = X();V.prototype = { set: function set(a) {
      a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a), this.actions = a.toLowerCase().trim();
    }, update: function update() {
      this.set(this.manager.options.touchAction);
    }, compute: function compute() {
      var a = [];return g(this.manager.recognizers, function (b) {
        k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
      }), W(a.join(" "));
    }, preventDefaults: function preventDefaults(a) {
      var b = a.srcEvent,
          c = a.offsetDirection;if (this.manager.session.prevented) return void b.preventDefault();var d = this.actions,
          e = p(d, jb) && !mb[jb],
          f = p(d, lb) && !mb[lb],
          g = p(d, kb) && !mb[kb];if (e) {
        var h = 1 === a.pointers.length,
            i = a.distance < 2,
            j = a.deltaTime < 250;if (h && i && j) return;
      }return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0;
    }, preventSrc: function preventSrc(a) {
      this.manager.session.prevented = !0, a.preventDefault();
    } };var nb = 1,
      ob = 2,
      pb = 4,
      qb = 8,
      rb = qb,
      sb = 16,
      tb = 32;Y.prototype = { defaults: {}, set: function set(a) {
      return la(this.options, a), this.manager && this.manager.touchAction.update(), this;
    }, recognizeWith: function recognizeWith(a) {
      if (f(a, "recognizeWith", this)) return this;var b = this.simultaneous;return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this;
    }, dropRecognizeWith: function dropRecognizeWith(a) {
      return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this);
    }, requireFailure: function requireFailure(a) {
      if (f(a, "requireFailure", this)) return this;var b = this.requireFail;return a = _(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this;
    }, dropRequireFailure: function dropRequireFailure(a) {
      if (f(a, "dropRequireFailure", this)) return this;a = _(a, this);var b = r(this.requireFail, a);return b > -1 && this.requireFail.splice(b, 1), this;
    }, hasRequireFailures: function hasRequireFailures() {
      return this.requireFail.length > 0;
    }, canRecognizeWith: function canRecognizeWith(a) {
      return !!this.simultaneous[a.id];
    }, emit: function emit(a) {
      function b(b) {
        c.manager.emit(b, a);
      }var c = this,
          d = this.state;qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= qb && b(c.options.event + Z(d));
    }, tryEmit: function tryEmit(a) {
      return this.canEmit() ? this.emit(a) : void (this.state = tb);
    }, canEmit: function canEmit() {
      for (var a = 0; a < this.requireFail.length;) {
        if (!(this.requireFail[a].state & (tb | nb))) return !1;a++;
      }return !0;
    }, recognize: function recognize(a) {
      var b = la({}, a);return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b), void (this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void (this.state = tb));
    }, process: function process(a) {}, getTouchAction: function getTouchAction() {}, reset: function reset() {} }, i(aa, Y, { defaults: { pointers: 1 }, attrTest: function attrTest(a) {
      var b = this.options.pointers;return 0 === b || a.pointers.length === b;
    }, process: function process(a) {
      var b = this.state,
          c = a.eventType,
          d = b & (ob | pb),
          e = this.attrTest(a);return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb;
    } }), i(ba, aa, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Pa }, getTouchAction: function getTouchAction() {
      var a = this.options.direction,
          b = [];return a & Na && b.push(lb), a & Oa && b.push(kb), b;
    }, directionTest: function directionTest(a) {
      var b = this.options,
          c = !0,
          d = a.distance,
          e = a.direction,
          f = a.deltaX,
          g = a.deltaY;return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction;
    }, attrTest: function attrTest(a) {
      return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a));
    }, emit: function emit(a) {
      this.pX = a.deltaX, this.pY = a.deltaY;var b = $(a.direction);b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a);
    } }), i(ca, aa, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
      return [jb];
    }, attrTest: function attrTest(a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob);
    }, emit: function emit(a) {
      if (1 !== a.scale) {
        var b = a.scale < 1 ? "in" : "out";a.additionalEvent = this.options.event + b;
      }this._super.emit.call(this, a);
    } }), i(da, Y, { defaults: { event: "press", pointers: 1, time: 251, threshold: 9 }, getTouchAction: function getTouchAction() {
      return [hb];
    }, process: function process(a) {
      var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          f = a.deltaTime > b.time;if (this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f) this.reset();else if (a.eventType & Ea) this.reset(), this._timer = e(function () {
        this.state = rb, this.tryEmit();
      }, b.time, this);else if (a.eventType & Ga) return rb;return tb;
    }, reset: function reset() {
      clearTimeout(this._timer);
    }, emit: function emit(a) {
      this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)));
    } }), i(ea, aa, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
      return [jb];
    }, attrTest: function attrTest(a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob);
    } }), i(fa, aa, { defaults: { event: "swipe", threshold: 10, velocity: .3, direction: Na | Oa, pointers: 1 }, getTouchAction: function getTouchAction() {
      return ba.prototype.getTouchAction.call(this);
    }, attrTest: function attrTest(a) {
      var b,
          c = this.options.direction;return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga;
    }, emit: function emit(a) {
      var b = $(a.offsetDirection);b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a);
    } }), i(ga, Y, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 }, getTouchAction: function getTouchAction() {
      return [ib];
    }, process: function process(a) {
      var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          f = a.deltaTime < b.time;if (this.reset(), a.eventType & Ea && 0 === this.count) return this.failTimeout();if (d && f && c) {
        if (a.eventType != Ga) return this.failTimeout();var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
            h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;var i = this.count % b.taps;if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function () {
          this.state = rb, this.tryEmit();
        }, b.interval, this), ob) : rb;
      }return tb;
    }, failTimeout: function failTimeout() {
      return this._timer = e(function () {
        this.state = tb;
      }, this.options.interval, this), tb;
    }, reset: function reset() {
      clearTimeout(this._timer);
    }, emit: function emit() {
      this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
    } }), ha.VERSION = "2.0.8", ha.defaults = { domEvents: !1, touchAction: gb, enable: !0, inputTarget: null, inputClass: null, preset: [[ea, { enable: !1 }], [ca, { enable: !1 }, ["rotate"]], [fa, { direction: Na }], [ba, { direction: Na }, ["swipe"]], [ga], [ga, { event: "doubletap", taps: 2 }, ["tap"]], [da]], cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };var ub = 1,
      vb = 2;ia.prototype = { set: function set(a) {
      return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this;
    }, stop: function stop(a) {
      this.session.stopped = a ? vb : ub;
    }, recognize: function recognize(a) {
      var b = this.session;if (!b.stopped) {
        this.touchAction.preventDefaults(a);var c,
            d = this.recognizers,
            e = b.curRecognizer;(!e || e && e.state & rb) && (e = b.curRecognizer = null);for (var f = 0; f < d.length;) {
          c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++;
        }
      }
    }, get: function get(a) {
      if (a instanceof Y) return a;for (var b = this.recognizers, c = 0; c < b.length; c++) {
        if (b[c].options.event == a) return b[c];
      }return null;
    }, add: function add(a) {
      if (f(a, "add", this)) return this;var b = this.get(a.options.event);return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a;
    }, remove: function remove(a) {
      if (f(a, "remove", this)) return this;if (a = this.get(a)) {
        var b = this.recognizers,
            c = r(b, a);-1 !== c && (b.splice(c, 1), this.touchAction.update());
      }return this;
    }, on: function on(a, b) {
      if (a !== d && b !== d) {
        var c = this.handlers;return g(q(a), function (a) {
          c[a] = c[a] || [], c[a].push(b);
        }), this;
      }
    }, off: function off(a, b) {
      if (a !== d) {
        var c = this.handlers;return g(q(a), function (a) {
          b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a];
        }), this;
      }
    }, emit: function emit(a, b) {
      this.options.domEvents && ka(a, b);var c = this.handlers[a] && this.handlers[a].slice();if (c && c.length) {
        b.type = a, b.preventDefault = function () {
          b.srcEvent.preventDefault();
        };for (var d = 0; d < c.length;) {
          c[d](b), d++;
        }
      }
    }, destroy: function destroy() {
      this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
    } }, la(ha, { INPUT_START: Ea, INPUT_MOVE: Fa, INPUT_END: Ga, INPUT_CANCEL: Ha, STATE_POSSIBLE: nb, STATE_BEGAN: ob, STATE_CHANGED: pb, STATE_ENDED: qb, STATE_RECOGNIZED: rb, STATE_CANCELLED: sb, STATE_FAILED: tb, DIRECTION_NONE: Ia, DIRECTION_LEFT: Ja, DIRECTION_RIGHT: Ka, DIRECTION_UP: La, DIRECTION_DOWN: Ma, DIRECTION_HORIZONTAL: Na, DIRECTION_VERTICAL: Oa, DIRECTION_ALL: Pa, Manager: ia, Input: x, TouchAction: V, TouchInput: P, MouseInput: L, PointerEventInput: M, TouchMouseInput: R, SingleTouchInput: N, Recognizer: Y, AttrRecognizer: aa, Tap: ga, Pan: ba, Swipe: fa, Pinch: ca, Rotate: ea, Press: da, on: m, off: n, each: g, merge: ta, extend: sa, assign: la, inherit: i, bindFn: j, prefixed: u });var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};wb.Hammer = ha, "function" == typeof define && define.amd ? define(function () {
    return ha;
  }) : "undefined" != typeof module && module.exports ? module.exports = ha : a[c] = ha;
}(window, document, "Hammer");


},{}]},{},[8,7,4,6])

//# sourceMappingURL=bundle.js.map
