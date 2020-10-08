$(document).ready(function () {
  $('#tab-2').click(function(){
    $(this).toggleClass('active');
    $('#tab-1').toggleClass('active');
    $('.personal-tabs__line span').animate({
      right: '0',
      left: '55%',
      width: '45%'
    }, 200);
    $('.personal_block_two').show();
    $('.personal-content__orders').hide();
  })
  $('#tab-1').click(function(){
    $(this).toggleClass('active');
    $('#tab-2').toggleClass('active');
    $('.personal-tabs__line span').animate({
      left: '0',
      right: '55%',
      width: '55%'
    }, 200);
    $('.personal-content__orders').show();
    $('.personal_block_two').hide();
  })
});
