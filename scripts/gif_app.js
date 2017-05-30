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
  $('.gifArea').empty();
  $.ajax({
    url: searchUrl+tagToSearch+key,
    method: 'GET'
  }).done(function(response){
    console.log(response);
    for (var i = 0; i < response.data.length; i++) {
      $('.gifArea').append('<img class="gif" playing="stopped" src="'+response.data[i].images.fixed_height_small_still.url+'"></img>');
    }
  })
}

function playGif(gif){
  var source = $(gif).attr('src');
  var newSource = source.split('/');
  newSource.pop();
  newSource = newSource.join('/') + '/giphy.gif';
  $(gif).attr('src', newSource);
}

function stopGif(gif){
  var source = $(gif).attr('src');
  var newSource = source.split('/');
  newSource.pop();
  newSource = newSource.join('/') + '/100_s.gif';
  $(gif).attr('src', newSource);
}

function checkIfGifPlaying() {
  var that = this;
  var gifPlaying = $(this).attr('playing');
  if (gifPlaying === 'stopped') {
    playGif(that);
    $(this).attr('playing', 'playing');
  }
  else {
    stopGif(that);
    $(this).attr('playing', 'stopped');
  }
}

$(document).on('click', '.addTag', addNewTag);
$(document).on('click', '.btn-success', searchGifs);
$(document).on('click', '.gif', checkIfGifPlaying);
// $(document).on('mouseenter', '.gif', playGif);
// $(document).on('mouseleave', '.gif', stopGif);
