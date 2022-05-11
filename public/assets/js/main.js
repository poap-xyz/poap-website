import $ from 'jquery'
import AOS from 'aos'
import 'aos/dist/aos.css'
import bootstrap from 'bootstrap'

(function ($, talonUtil) {

  //Sticky header
  var header = $("header");
  var fix = $(".fix-element")

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

  $('nav ul li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
      })
    

  // $('.navbar').on('mouseenter focusin', '.navbar-item.has-dropdown', function (e) {
  //   $(this)
  //       .parent('.navbar-item')
  //       .addClass('active')
  //       .siblings('.navbar-item')
  //       .removeClass('active')
  // });

  /* Scroll to section */
  // NOT WORKING FOR NORMAL LINKS!
  // $(".anchor").click(function (e) {
  //   e.preventDefault();
  //   var anchor = $(this).attr('href');

  //   $('html, body').animate({
  //     scrollTop: $(anchor).offset().top - 150
  //   }, 500);
  //   $('body').removeClass('menu-active');
  //   $('.menu-hamburger').removeClass('close');
  // });

  AOS.init({ once: true });


})($, window.talonUtil);
