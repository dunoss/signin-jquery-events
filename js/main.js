$(function() {
  $('.signin').on('click',function(){
    $('.modal').fadeIn('slow');
  });
  $('.close').on('click', function(){
    $('.modal').fadeOut('slow');
  });

  $('button.submit').on('click', function() {
    $('input').addClass('error')
  });

  $('input').on('click', function() {
    $(this).removeClass('error')
  });

});
