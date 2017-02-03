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
var card = document.querySelector('.Card'),
    cardListingWrapper = document.querySelector('.CardListingWrapper'),
    cardDetail = document.getElementById('Card-detail');
card.addEventListener('click', function () {
    console.log('clicked');
    var $el = $(this);
    $(cardListingWrapper).toggleClass('is-active');
    $el.toggleClass('is-active');
    //if is-active, then inject it's html to the page...
    if ($el.is('.is-active')) {
        var data = '<p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p>';
        cardDetail.insertAdjacentHTML('beforeend', data);
    } else {
        setTimeout(function () {
            console.log('html cleared');
            cardDetail.innerHTML = '';
        }, 500);
    }
});

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
