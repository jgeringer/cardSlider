//global vars
let cardListingWrapper = document.querySelector('.CardListingWrapper'),
    cardListing = document.querySelector('.CardListing'),
    card = document.querySelectorAll('.Card');

//set the width the of the card container.
cardListing.style.width = card.length * 70 +'%';



//sample data
let dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'Hardy', age: 6 },
  { name: 'Chloe', age: 8 }
];

let html = `
  <ol>
    ${dogs.map(dog => `
      <li>
        ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
        ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
        ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
        ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
        ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
        ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
        ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
      </li>
    `).join('')}
  </ol>
`;    


    


//Tapping begin!
$('.Card').hammer().off("tap.cardOpen").on("tap.cardOpen", function(e){
    console.log('hammer time');
    e.preventDefault();e.stopPropagation();

    //need to clone the active card, assign it an fixed position with the top of where it is.

    let $el = $(this);

    // if (cardListingWrapper.classList.contains('is-active')){
    //     $('.CardListingWrapper--offset').height(0);
    //     $('.CardListingWrapper').css({
    //         top: 0
    //     });
    // } else {
    //     $('.CardListingWrapper--offset').height(cardListingWrapper.offsetHeight);
    //     $('.CardListingWrapper').css({
    //         top: $('.CardListingWrapper').position().top
    //     }).addClass('is-animating');
    // }

    $el.siblings().removeClass('is-selected');
    $el.addClass('is-selected');

    let $currY = $(window).scrollTop(),
        $elX = $el.offset().left,
        $elY = $el.offset().top - $currY;

    cardListingWrapper.classList.toggle('is-hiding');

    var $elClone = $el.clone().appendTo('body');

    $elClone.prepend('<button class="Button Button--close">close me</button>');

    $elClone.css({
        top: $elY,
        left: $elX
    });

    // $elClone.css({
    //     'transform': 'translateY('+$elY+'px)' + ' translateX('+ $elX +'px)'
    // });

    $elClone.addClass('is-fixed');


    let data = html,
        cardDetailContainer = '<article id="Card-detail"></article>';

    //$elClone.append(cardDetailContainer);

    let cardDetail = document.getElementById('Card-detail');

    cardDetail.insertAdjacentHTML('beforeend', data);
    


    setTimeout(function(){
        $elClone.addClass('is-top');
        setTimeout(function(){
            $('html, body').scrollTop(0);
            $elClone.addClass('is-now-abs');
            cardDetail.classList.add('is-active');
        }, 100);
    }, 20);




        


    

        //might need to shoot the user to the top of the page

        //next, apply the card data to a div...


    // //original...
    // cardListingWrapper.classList.toggle('is-active');

    // $el.toggleClass('is-active');

    // //if is-active, then inject it's html to the page...
    // if($el.is('.is-active')){
    //     let data = html;
    //     cardDetail.insertAdjacentHTML('beforeend', data);
    // } else {
    //     setTimeout(function(){
    //         //console.log('html cleared');
    //         cardDetail.innerHTML = '';
    //     }, 500);
    // }

    
    $('.Button--close').hammer().off('tap.closeClone').on('tap.closeClone', function(e){
    //$elClone.off('click.closeClone').on('click.closeClone', function(e){
        e.preventDefault();
        
        cardDetail.classList.remove('is-active');

        //first giv it a position fixed, with the top position of exactly where it is in the viewport
        $('html, body').scrollTop($currY);
        $elClone.removeClass('is-now-abs');

        $elClone.removeClass('is-top');

        //$elClone.removeClass('is-fixed');
        
        // setTimeout(function(){
        //     $elClone.removeClass('is-top');
        // }, 20);

        $elClone.css({
            top: $('.Card.is-selected').offset().top- $(window).scrollTop(),
            left: $('.Card.is-selected').offset().left
        });

        console.log('yoo yoo!!!!!');
        
        
        //$elClone.addClass('is-going-back');

        cardListingWrapper.classList.toggle('is-hiding');

                    

        setTimeout(function(){            
            $elClone.remove();
            $el.removeClass('is-selected');
        
            //console.log('html cleared');
            cardDetail.innerHTML = '';
        
        }, 500);
    });



    

});

// var myElement = document.querySelectorAll('.Card');
// var mc = new Hammer(myElement);

// // listen to events...
// mc.on("panleft panright tap press", function(ev) {
//     console.log(ev.type +" gesture detected.");
// });

// create a simple instance
// by default, it only adds horizontal recognizers
// var mc = new Hammer(myElement);

// // listen to events...
// mc.on("panleft panright tap press", function(ev) {
//     myElement.textContent = ev.type +" gesture detected.";
// });

// //var myElement = $('.Card');

// // We create a manager object, which is the same as Hammer(), but without the presetted recognizers. 
// var mc = new Hammer.Manager( '.Card' );


// // Single tap recognizer
// mc.add( new Hammer.Tap({ event: 'singletap' }) );


// // we want to recognize this simulatenous, so a quadrupletap will be detected even while a tap has been recognized.
// //mc.get('doubletap').recognizeWith('singletap');
// // we only want to trigger a tap, when we don't have detected a doubletap
// mc.get('singletap');


// let card = $('.Card'),
//     cardListingWrapper = document.querySelector('.CardListingWrapper'),
//     cardDetail =  document.getElementById('Card-detail'); 

// mc.on("singletap", function(ev) {
//     //myElement.textContent += ev.type +" ";
//     console.log('hi! ' + ev.type);
//     console.log(this);


//     //let el = this;

//     //$(cardListingWrapper).toggleClass('is-active');
//     cardListingWrapper.classList.toggle('is-active');

//     //$el.toggleClass('is-active');
//     $(this).toggleClass('is-active');




//     // $el.toggleClass('is-active');

//     // //if is-active, then inject it's html to the page...
//     // if($el.is('.is-active')){
//     //     let data = html;
//     //     cardDetail.insertAdjacentHTML('beforeend', data);
//     // } else {
//     //     setTimeout(function(){
//     //         //console.log('html cleared');
//     //         cardDetail.innerHTML = '';
//     //     }, 500);
//     // }


// });





// card.on('click', function(){
//     console.log('clicked card!!!');
    
//     let $el = $(this);

//     $(cardListingWrapper).toggleClass('is-active');
//     $el.toggleClass('is-active');

//     //if is-active, then inject it's html to the page...
//     if($el.is('.is-active')){
//         let data = html;
//         cardDetail.insertAdjacentHTML('beforeend', data);
//     } else {
//         setTimeout(function(){
//             //console.log('html cleared');
//             cardDetail.innerHTML = '';
//         }, 500);
//     }
    
// });