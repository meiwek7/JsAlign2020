$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.collapsible').collapsible();

    let modalBtns = document.querySelectorAll('.modal-trigger');
    modalBtns.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            //console.log(btn.dataset.art);
            $('#art').text("Артикул: " + btn.dataset.art);
            $('#art-input').text(btn.dataset.art);
        })
    })

  });

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 300
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows:false,
    centerMode: true,
    focusOnSelect: true
  });

  $('.slider-for2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav2'
  });
  $('.slider-nav2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for2',
    dots: false,
    arrows:false,
    centerMode: true,
    focusOnSelect: true
  });

  $('.slider-for3').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav3'
  });
  $('.slider-nav3').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for3',
    dots: false,
    arrows:false,
    centerMode: true,
    focusOnSelect: true
  });

