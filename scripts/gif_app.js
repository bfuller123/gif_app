var gifTagList = ['sponge bob', 'bugs bunny', 'arthur', 'calvin'];
var searchUrl = 'http://api.giphy.com/v1/gifs/search?q=';
var key = '&api_key=dc6zaTOxFJmzC';

function addNewTag() {
  $('.tagArea').empty();
  var searchTerm = $('#searchTerm').val();
  gifTagList.push(searchTerm);
  $('#searchTerm').val('');
  addButtons();
}

function addButtons() {
  for (var i = 0; i < gifTagList.length; i++) {
    var button = $('<button>');
    button.addClass('btn btn-success');
    button.attr('to-search', gifTagList[i]);
    button.text(gifTagList[i]);
    $('.tagArea').append(button);
  }
}

function searchGifs() {
  var tagToSearch = $(this).attr('to-search');
  $.ajax({
    url: searchUrl+tagToSearch+key,
    method: 'GET'
  }).done(function(response){
    console.log(response);
    for (var i = 0; i < response.data.length; i++) {
      $('.divArea').append('<img src="'+response.data[i]+'"></img>');
    }
  })
}

$(document).on('click', '.addTag', addNewTag);
$(document).on('click', '.btn-success', searchGifs);
