import $ from 'jquery'
import AOS from 'aos'
import 'aos/dist/aos.css'
import bootstrap from 'bootstrap'



(function ($, talonUtil) {

  //Sticky header
  var header = $("header");
  var fix = $(".fix-element")

  var check  = function() {
    return $(window).width() >=768
  }

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 250) {
      header.addClass("fixed");
      fix.addClass("fixed");
    }
    if (scroll == 0) {
      header.removeClass("fixed");
      fix.removeClass("fixed");
    }
  });


  ///Navigation
  $(".menu-hamburger").on('click keypress', function (e) {
    e.preventDefault();
    if (e.which === 1 || e.which === 13) {
      if ($("body").hasClass("menu-active")) {
        $('body').removeClass('menu-active');
        $('.menu-hamburger').removeClass('close');
      } else {
        $('body').addClass('menu-active');
        $('.menu-hamburger').addClass('close');
      }
    }
  });

  $(document).on('click', function(event){
    var $trigger = $('.has-dropdown');
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $('.has-dropdown').removeClass('active');
    }            
  });

  $('nav ul li').click(function(){
    if (check()) {
      $(this).siblings().removeClass('active');
      $(this).toggleClass('active');
      $(this).focus();
    }
  })

  $('nav ul li').hover(
    function () {
      if (check()) {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
      }
    }, 

    function () {
      if (check()) {
        $(this).siblings().removeClass('active');
        
      }
    }
  );
  
  AOS.init({ once: true });


})($, window.talonUtil);
