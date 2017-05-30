//TODO: make it so buttonArea is 3-xs-col and gifArea col-xs-6 but on same row and height is 100vh

$(document).on('click', '.btn-lg', moveBrand);

function moveBrand(){
  var button = $('#begin');
  button.css('opacity', '0');
  button.attr('disabled', 'true');
  $('.brand').css('width', '25%');
  $('.brand').css('margin', '0 0 0 -1%');
  $('.brand').css('border-radius', '0');
  $('h1').css('font-size', '42px');
  $('.brand').css('padding-top', '.8%');
  $('.brand').addClass('col-xs-3');
  setTimeout(changeButtonArea, 1000); //after the begin button slowly has faded it fades in the new element by getting rid of the begin button
  setTimeout(addButtons, 1500);
  $('.row').append('<div class="gifArea col-xs-9"></div>');
}

function changeButtonArea(){
  $('.buttonArea').html('<input class="addButton" id="searchTerm"></input><button class="btn btn-primary addButton addTag">Add</button>');
  $('.addButton').css('animation', 'fadeIn 2s');
  $('.buttonArea').append('<hr><br><div class="tagArea"></div>');
  $('.brand').css('animation', 'fullHeight 1s');
  $('.brand').css('height', '100vh'); //need to add height of 100vh here so it stays full page
}
