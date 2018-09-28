var $ = require('jquery');
$('.toggleSocial').hide();
$('.Social-button').click(function(e) {
  e.preventDefault();
  $('.toggleSocial').animate({ width: 'toggle' });
});

// $('.Social-button').click(function() {
//   // $('.CircleSocialIcon').RemoveClass('moved-social');
//   if ($('.toggleSocial').hasClass('transformed-social')) {
//     $('.CircleSocialIcon').removeClass('moved-social');
//     $('.toggleSocial').removeClass('transformed-social');
//   } else {
//     $('.toggleSocial').addClass('transformed-social');
//     $('.CircleSocialIcon').addClass('moved-social');
//   }
// });
