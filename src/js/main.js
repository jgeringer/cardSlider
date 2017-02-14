console.log("hello from es2015 main");


let card = $('.Card'),
    cardListingWrapper = document.querySelector('.CardListingWrapper'),
    cardDetail =  document.getElementById('Card-detail');

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
      </li>
    `).join('')}
  </ol>
`;




    function hammerify(el, options) {
        var $el = $(el);
        if(!$el.data("hammer")) {
            $el.data("hammer", new Hammer($el[0], options));
        }
    }

    $.fn.hammer = function(options) {
        return this.each(function() {
            hammerify(this, options);
        });
    };

    // extend the emit method to also trigger jQuery events
    Hammer.Manager.prototype.emit = (function(originalEmit) {
        return function(type, data) {
            originalEmit.call(this, type, data);
            $(this.element).trigger({
                type: type,
                gesture: data
            });
        };
    })(Hammer.Manager.prototype.emit);


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

    let $elX = $el.offset().left,
        $elY = $el.offset().top - $(window).scrollTop();


    cardListingWrapper.classList.toggle('is-hiding');

    var $elClone = $el.clone().appendTo('body');

    $elClone.css({
        top: $elY,
        left: $elX
    });

    $elClone.addClass('is-fixed');

    setTimeout(function(){
        $elClone.addClass('is-top');
    }, 20);




    
    $elClone.hammer().off('tap.closeClone').on('tap.closeClone', function(e){
    //$elClone.off('click.closeClone').on('click.closeClone', function(e){
        e.preventDefault();
        

        //first giv it a position fixed, with the top position of exactly where it is in the viewport

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
        }, 500);
    });



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