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
    cardListing = document.querySelector('.CardListing');
card.addEventListener('click', function () {
    console.log('clicked');
    var $el = $(this);
    $(cardListing).toggleClass('is-active');
    $el.toggleClass('is-active');
    //toggling (especially for ie9+)
});

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
