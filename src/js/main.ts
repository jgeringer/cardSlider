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

card.addEventListener('click', function(){
    console.log('clicked');
    var $el = $(this);

    $(cardListing).toggleClass('is-active');
    $el.toggleClass('is-active');

    //toggling (especially for ie9+)
    
});