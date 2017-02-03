(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/// <reference path="vendor/jquery.d.ts" />
//import { sayHello } from "./myquery";
// console.log(sayHello("TypeScript!"));
// function showHello(divName: string, name: string){
//     const elt = document.getElementById(divName);
//     elt.innerText = sayHello(name);
// }
//showHello("greeting", "TypeScript LAND!");
console.log("hello from main");
var card = $('.Card'),
    cardListingWrapper = document.querySelector('.CardListingWrapper'),
    cardDetail = document.getElementById('Card-detail');
var dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hardy', age: 6 }, { name: 'Chloe', age: 8 }];
var html = '\n  <ol>\n    ' + dogs.map(function (dog) {
    return '\n      <li>\n        ' + dog.name + ' is ' + dog.age * 7 + ' dog years old.\n      </li>\n    ';
}).join('') + '\n  </ol>\n';
card.on('click', function () {
    console.log('clicked card!!');
    var $el = $(this);
    $(cardListingWrapper).toggleClass('is-active');
    $el.toggleClass('is-active');
    //if is-active, then inject it's html to the page...
    if ($el.is('.is-active')) {
        var data = html;
        cardDetail.insertAdjacentHTML('beforeend', data);
    } else {
        setTimeout(function () {
            //console.log('html cleared');
            cardDetail.innerHTML = '';
        }, 500);
    }
});

},{}],2:[function(require,module,exports){
'use strict';

// export function sayHello(name: string) {
//     return `Hello from ${name}`;
// }
console.log('inside my query');
// if (el.classList) {
//         el.classList.toggle('is-active');
//     } else {
//         var classes = el.className.split(' ');
//         var existingIndex = classes.indexOf('is-active');
//         if (existingIndex >= 0) {
//             classes.splice(existingIndex, 1);
//         }
//         else {
//             classes.push('is-active');
//         }
//         el.className = classes.join(' ');
//     }

},{}]},{},[1,2])

//# sourceMappingURL=bundle.js.map
