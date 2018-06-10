$(function () {
  $('.header-button').click(function () {
    $('.popup').show();
  });
  $('.popup-window__exit').click(function () {
    $('.popup').hide();
  });
  // $('.button-all').click(function () {
  //     $('.button-all').css('background-color', 'lighten ($colorbutton , 5)')
  // }) 
  // $('.customers-img__self').mouseenter(function() {
  //     $(this).attr('src','../img/our_client/imageCol-1.png');

  // });

  $('.manufac-slid__self').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.manufac-slid__mini',
    infinite: true,
    responsive: [{
      breakpoint: 992,
      settings: {        
        centerMode: false,
        arrows: true
        
      }
    }]

  });
  $('.manufac-slid__mini').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.manufac-slid__self',
    // dots: true,
    arrows: true,
    centerMode: false,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: true,
        infinite: true
      }
    }]
  });
  $('.main-slid__self').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    variableWidth: false,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: false,
    cssEase: 'linear',
    asNavFor: '.main-img'
  });
  $('.main-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.main-slid__self',
    dots: false,
    fade: true,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    autoplaySpeed: 2000,
    autoplay: true,
    cssEase: 'linear'

  });
  $('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: false,
    arrows: true,

    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
        arrows: true,
        infinite: true
      }
    } ,
    { 
    
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: true,
        infinite: true
      }
    }],

    prevArrow: "<button type='button' class='reviews-slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='reviews-slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });
  //   $('.left').click(function(){
  //     $('.reviews-slider').slick('slickPrev');
  //   })

  //   $('.right').click(function(){
  //     $('.reviews-slider').slick('slickNext');
  //   })




  // $('.slick-prev').mouseenter(function () {
  //     $('.slick-prev:before').css('content', 'url(../img/slider/ArrowRight.svg)');

  // });

  var menuMiniButton = $('.menu-button');
  var menuMini= $('.manu-mini');
  menuMiniButton.click(function () {
    menuMiniButton.toggleClass('menu-active');
    menuMini.toggleClass('manu-mini-active');
  });

  

});


function changePicture(number) {

}
function initMap() {
  var coordinates = {lat: 54.684584, lng: 55.796723},
  
      map = new google.maps.Map(document.getElementById('map'), {
          center: coordinates,
          zoom: 15
          
      });
      image = '../img/maps.png';
      console.log("tyt");
      marker = new google.maps.Marker({
        position: {lat: 54.684584, lng: 55.796723},
        map: map,
        icon:image
    });
}
