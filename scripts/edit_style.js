$(document).on('click', '.btn', moveBrand);

function moveBrand(){
  $('.brand').css('width', '25%');
  $('.brand').css('margin', '0 0 0 -1%');
  $('.brand').css('border-radius', '0');
  $('.brand').html('<h1><span class="underline">Jiffy Giphy</span></h1>');
  $('h1').css('font-size', '42px');
  $('.jumbotron').css('padding-top', '-36px !important');
}
