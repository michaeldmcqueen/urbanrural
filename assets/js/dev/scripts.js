$(document).ready(function() {
// Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  }

  $('.projects-view .filters li').click(function() {
    $('.projects-view .filters li').removeClass('active');
    $(this).toggleClass('active');
    $('.Hide').css('display','inline-block');
    $('.project-item').hide();
    if ($(this).hasClass('Commercial')) {
      $('.project-item.Commercial').show();
    }
    if ($(this).hasClass('Residential')) {
      $('.project-item.Residential').show();
    }
    if ($(this).hasClass('Hide')) {
      $('.project-item').show();
      $(this).hide();
    }

     // $('.project-item').hide();
     // $('.project-item.Commercial').show();
  });

  // if ($('.projects-view .filters li').hasClass('active') {
  //   $('.project-item').hide();
  //   $('.project-item.Commercial').show();
  // });

});
