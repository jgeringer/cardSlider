/// <reference path="vendor/jquery.d.ts" />

//import { sayHello } from "./myquery";

// console.log(sayHello("TypeScript!"));

// function showHello(divName: string, name: string){
//     const elt = document.getElementById(divName);
//     elt.innerText = sayHello(name);
// }

//showHello("greeting", "TypeScript LAND!");





var card = document.querySelector('.Card'),
    cardListingWrapper = document.querySelector('.CardListingWrapper');

card.addEventListener('click', function(){
    console.log('clicked');
    var $el = $(this);

    $(cardListingWrapper).toggleClass('is-active');
    $el.toggleClass('is-active');

    //toggling (especially for ie9+)
    
});