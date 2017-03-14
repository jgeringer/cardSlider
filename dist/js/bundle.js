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
    //cardListing.style.width = cardListingInitWidth;

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

    //NEW SWIPER
    var swiper = new Swiper('.swiper-container', {
        //pagination: '.swiper-pagination',
        slidesPerView: 4,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30
    });

    // var mySwiper = new Swiper ('.swiper-container', {
    //     // Optional parameters
    //     direction: 'horizontal',
    //     loop: true,

    //     // If we need pagination
    //     pagination: '.swiper-pagination',

    //     // Navigation arrows
    //     nextButton: '.swiper-button-next',
    //     prevButton: '.swiper-button-prev',

    //     // And if we need scrollbar
    //     scrollbar: '.swiper-scrollbar',
    //   });


    //Tapping begin!
    $(document).on("click.cardOpen", ".swiper-slide", function (e) {
        //$('.Card').off("click.cardOpen").on("click.cardOpen", function(e){
        console.log('hammer time');
        e.preventDefault();
        e.stopPropagation();

        var $el = $(this);

        //cardListing.style.width = cardListingFullWidth;

        var $currY = $(window).scrollTop(),
            $elX = $el.offset().left,
            $elY = $el.offset().top - $currY;

        console.log($elX);
        console.log($elY);

        $el.siblings().removeClass('is-selected');
        $el.addClass('is-selected');

        var $elClone = $el.clone().appendTo('body');
        //var $elClone = $el.appendTo('body');

        $elClone.prepend('<button class="Button Button--close">close me</button>');

        $elClone.css({
            top: $elY,
            left: $elX
        });

        return;

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
            //moduleSticky.enable("body > .Card .Card--footer");  //find a better way to target this
        }, 500);

        //Button Close Click...    
        $('.Button--close').off('click.closeClone').on('click.closeClone', function (e) {
            e.preventDefault();

            moduleSticky.disable("body > .Card .Card--footer");

            cardListing.style.width = cardListingInitWidth;

            cardDetail.classList.remove('is-active');

            //first giv it a position fixed, with the top position of exactly where it is in the viewport
            $('html, body').scrollTop($currY);

            $elClone.removeClass('is-now-abs');
            $elClone.removeClass('is-top');

            console.log('top:', $('.CardListingWrapper .Card.is-selected').offset().top);
            console.log('stop:', $(window).scrollTop());

            $elClone.css({
                top: $('.CardListingWrapper .Card.is-selected').offset().top - $(window).scrollTop()
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

},{}]},{},[4])

//# sourceMappingURL=bundle.js.map
