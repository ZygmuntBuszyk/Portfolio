console.log('portfolio on command');

// css do js
require('../css/main.css');
require('../css/dropdowns.css');
var $ = require('jquery');
//js scripts
require('../js/SocialToggle.js');
// const $ = require('jquery');

// About hover end
$('.About-button').one('mouseover', function() {
  setTimeout(function() {
    $('.hov').addClass('displayNone');
  }, 250);
});

//  DROPDOWNS (JQUERY)

// ABOUT PAGE
$('.About-button').click(function() {
  if ($('.bonfire-slideout').hasClass('bonfire-slideout-active')) {
    /* enable browser scroll */
    // Circle Button Click hide
    var html = $('html');
    var scrollPosition = html.data('scroll-position');
    html.css('overflow', html.data('previous-overflow'));
    window.scrollTo(scrollPosition[0], scrollPosition[1]);

    // hide shown Page
    setTimeout(function() {
      $('.bonfire-slideout').removeClass('bonfire-slideout-active');
    }, 650);
    $('.bonfire-slideout').removeClass('bonfire-slideout-active-translate');
    $('.CircleImage').removeClass('zIndex');
    return false;
  } else {
    /* disable browser scroll */
    var scrollPosition = [
      self.pageXOffset ||
        document.documentElement.scrollLeft ||
        document.body.scrollLeft,
      self.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
    ];
    var html = $('html');
    html.data('scroll-position', scrollPosition);
    html.data('previous-overflow', html.css('overflow'));
    html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);

    // show shown Page

    $('.bonfire-slideout').addClass('bonfire-slideout-active');
    $('.bonfire-slideout').addClass('bonfire-slideout-active-translate');

    setTimeout(function() {
      $('.CircleImage').addClass('zIndex');
    }, 2000);
    return false;
  }
});

// Close button click
$('.bonfire-slideout-close').click(function() {
  /* enable browser scroll */
  var html = $('html');
  var scrollPosition = html.data('scroll-position');
  html.css('overflow', html.data('previous-overflow'));
  window.scrollTo(scrollPosition[0], scrollPosition[1]);

  // hide shown Page
  setTimeout(function() {
    $('.bonfire-slideout').removeClass('bonfire-slideout-active');
  }, 650);
  $('.bonfire-slideout').removeClass('bonfire-slideout-active-translate');
  $('.CircleImage').removeClass('zIndex');
  return false;
});

// Close ESCAPE CLICK

/* hide slideout (ESC button) */
$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    /* enable browser scroll */
    var html = $('html');
    var scrollPosition = html.data('scroll-position');
    html.css('overflow', html.data('previous-overflow'));
    window.scrollTo(scrollPosition[0], scrollPosition[1]);

    /* hide shown Page */
    setTimeout(function() {
      $('.bonfire-slideout').removeClass('bonfire-slideout-active');
    }, 650);
    $('.bonfire-slideout').removeClass('bonfire-slideout-active-translate');
    $('.CircleImage').removeClass('zIndex');
    return false;
  }
});

// Icon on dropdown
// $(function() {
//   var header = $('.header');
//   $(window).scroll(function() {
//     var scroll = $(window).scrollTop();

//     if (scroll >= 100) {
//       $('.CircleImage').addClass('zero-opacity');
//     } else {
//       $('.CircleImage').removeClass('zero-opacity');
//     }
//   });
// });
