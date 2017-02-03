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
    cardDetail =  document.getElementById('Card-detail');

card.addEventListener('click', function(){
    console.log('clicked');
    var $el = $(this);

    $(cardListingWrapper).toggleClass('is-active');
    $el.toggleClass('is-active');

    //if is-active, then inject it's html to the page...
    if($el.is('.is-active')){
        var data = '<p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p><p>Lipsum text</p>';
        cardDetail.insertAdjacentHTML('beforeend', data);
    } else {
        setTimeout(function(){
            console.log('html cleared');
            cardDetail.innerHTML = '';
        }, 500);
    }
    
});