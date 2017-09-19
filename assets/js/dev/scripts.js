$(document).ready(function() {
// Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  }

  $('.projects-view .filters li').click(function() {
    $('.projects-view .filters li').removeClass('active');
   
    var clickedId= $(this).attr("id");
    
    $(this).toggleClass('active');
    $('.Hide').css('display','inline-block');
    $('.project-item').hide();

    $('.'+ clickedId).show();
    
    if ($(this).hasClass('Hide')) {
      $('.project-item').show();
      $(this).hide();
    }

  });

  $('.filters li:empty').hide()
  

  var seen = {};
  $('.filters li').each(function() {
      var txt = $(this).text();
      if (seen[txt])
          $(this).remove();
      else
          seen[txt] = true;
  });


});
