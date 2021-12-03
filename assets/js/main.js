$(document).ready(function(){

    var glider = new Glider(document.querySelector('.glider'), {
      slidesToShow: 1,
      dots: '#dots',
      draggable: true,
      duration: 0.15,
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
    });
    
    function arrowBounce() {
        setInterval(function() {
            $('.swipe-arrow').effect('bounce', 2000, 1000)
        }, 3000);
    }
    arrowBounce();
    window.scrollTo(0,1)
});