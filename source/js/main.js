

var card = document.querySelector('.Card');

card.addEventListener('click', function(){
    console.log('clicked');
    var el = this;

    //toggling (especially for ie9+)
    if (el.classList) {
        el.classList.toggle('is-active');
    } else {
        var classes = el.className.split(' ');
        var existingIndex = classes.indexOf('is-active');
        if (existingIndex >= 0) {
            classes.splice(existingIndex, 1);
        }
        else {
            classes.push('is-active');
        }
        el.className = classes.join(' ');
    }

});