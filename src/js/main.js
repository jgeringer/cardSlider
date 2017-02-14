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
        ${dog.name} is ${dog.age * 7} dog years old.
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
$('.Card').hammer().bind("tap", function(){
    console.log('hammer time');

    let $el = $(this);

    cardListingWrapper.classList.toggle('is-active');

    $el.toggleClass('is-active');

    //if is-active, then inject it's html to the page...
    if($el.is('.is-active')){
        let data = html;
        cardDetail.insertAdjacentHTML('beforeend', data);
    } else {
        setTimeout(function(){
            //console.log('html cleared');
            cardDetail.innerHTML = '';
        }, 500);
    }

})

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