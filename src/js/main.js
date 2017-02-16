//global vars
let cardListingWrapper = document.querySelector('.CardListingWrapper'),
    cardListing = document.querySelector('.CardListing'),
    card = document.querySelectorAll('.Card'),
    cardLength = card.length,
    cardInitWidth = 70,
    cardFullWidth = 100,
    cardListingInitWidth = `${cardLength * cardInitWidth}%`,
    cardListingFullWidth = `${cardLength * cardFullWidth}%`;

//set the width the of the card container.
cardListing.style.width = cardListingInitWidth;


//sample data
let dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'Hardy', age: 6 },
  { name: 'Chloe', age: 8 }
];

let html = `
  <div class="Card-detailContent">
    ${dogs.map(dog => `
      <p>
        ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
        ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
        ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
        ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
        ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
        ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
        ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
        ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
        ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
        ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
        ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
        ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
        ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
        ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
      </p>
    `).join('')}
  </ol>
`;    


    


//Tapping begin!
$('.Card').hammer().off("tap.cardOpen").on("tap.cardOpen", function(e){
    console.log('hammer time');
    e.preventDefault();e.stopPropagation();

    let $el = $(this);

    cardListing.style.width = cardListingFullWidth;

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

    $elClone.addClass('is-fixed');

    let data = html,
        cardDetailContainer = '<article id="Card-detail"></article>',
        cardDetail = document.getElementById('Card-detail');
       
    setTimeout(function(){
        $elClone.addClass('is-top');
        setTimeout(function(){
            $('html, body').scrollTop(0);
            $elClone.addClass('is-now-abs');
            cardDetail.classList.add('is-active');

            //simulate slow connection...
            //setTimeout(function(){
                cardDetail.insertAdjacentHTML('beforeend', data);
            //}, 200);
            

        }, 100);
    }, 20);



    //Button Close Click...    
    $('.Button--close').hammer().off('tap.closeClone').on('tap.closeClone', function(e){
        e.preventDefault();
        
        cardListing.style.width = cardListingInitWidth;

        cardDetail.classList.remove('is-active');

        //first giv it a position fixed, with the top position of exactly where it is in the viewport
        $('html, body').scrollTop($currY);
        $elClone.removeClass('is-now-abs');

        $elClone.removeClass('is-top');

        $elClone.css({
            top: $('.Card.is-selected').offset().top- $(window).scrollTop(),
            left: $('.Card.is-selected').offset().left
        });

        cardListingWrapper.classList.toggle('is-hiding');                  

        setTimeout(function(){            
            $elClone.remove();

            $el.removeClass('is-selected');
        
            //console.log('html cleared');
            cardDetail.innerHTML = '';
        
        }, 500);
    });


});