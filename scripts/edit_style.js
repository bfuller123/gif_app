$(document).on('click', '.btn', moveBrand);

function moveBrand(){
  var button = $('#begin')
  button.css('opacity', '0');
  button.attr('disabled', 'true');
  $('.brand').css('width', '25%');
  $('.brand').css('margin', '0 0 0 -1%');
  $('.brand').css('border-radius', '0');
  $('h1').css('font-size', '42px');
  $('.brand').css('padding-top', '.8%');
  setTimeout(changeButtonArea, 500);
}

function changeButtonArea(){
  $('.buttonArea').html('<input class="addButton"></input><button class="btn btn-primary addButton">Add</button>');
  $('.addButton').css('animation', 'fadeIn 2s');
}
