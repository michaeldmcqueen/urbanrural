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
    
    console.log(clickedId);

    $(this).toggleClass('active');

    $('.hide').css('display','inline-block');
    
    $('.project-item').addClass('hide-project');

    $('.'+ clickedId).toggleClass('hide-project');

    if ($(this).hasClass('Hide')) {
      $('.project-item').addClass('hide-project');
      //$(this).hide();
    }

  });


  $('.projects-view .filters #all').click(function() {
    $('.project-item').removeClass('hide-project');
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

  $('.sortable').sortable();



});
