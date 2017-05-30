var gifTagList = ['sponge bob', 'bugs bunny', 'arthur', 'calvin'];
var searchUrl = 'http://api.giphy.com/v1/gifs/search?q=';
var limit = '&limit=100';
var key = '&api_key=dc6zaTOxFJmzC';
var gifsShowing = 0;
var currentGifSet;

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
  gifsShowing = 0;
  var tagToSearch = $(this).attr('to-search');
  $('.gifArea').empty();
  $.ajax({
    url: searchUrl + tagToSearch + limit + key,
    method: 'GET'
  }).done(function(response) {
    console.log(response);
    currentGifSet = response;
    renderGifs(currentGifSet);
  });
  addPageButtons();
}

function renderGifs(object) {
  console.log(object);
  var moreGifs = gifsShowing + 16;
  for (var i = gifsShowing; i < moreGifs; i++) {
    $('.gifArea').append('<img class="gif" playing="stopped" src="' + object.data[i].images.downsized_still.url + '"></img>');
    gifsShowing++;
    if (gifsShowing == 100) {
      return;
    }
  }
}

function showMoreGifs() {
  $('.gifArea').empty();
  renderGifs(currentGifSet);
  addPageButtons();
}

function goBack() {
  gifsShowing = gifsShowing - 32;
  $('.gifArea').empty();
  renderGifs(currentGifSet);
  addPageButtons();
}

function playGif(gif) {
  var source = $(gif).attr('src');
  var newSource = source.split('/');
  newSource.pop();
  newSource = newSource.join('/') + '/giphy.gif';
  $(gif).attr('src', newSource);
}

function stopGif(gif) {
  var source = $(gif).attr('src');
  var newSource = source.split('/');
  newSource.pop();
  newSource = newSource.join('/') + '/giphy-downsized_s.gif';
  $(gif).attr('src', newSource);
}

function checkIfGifPlaying() {
  var that = this;
  var gifPlaying = $(this).attr('playing');
  if (gifPlaying === 'stopped') {
    playGif(that);
    $(this).attr('playing', 'playing');
  } else {
    stopGif(that);
    $(this).attr('playing', 'stopped');
  }
}

$(document).on('click', '.addTag', addNewTag);
$(document).on('click', '.btn-success', searchGifs);
$(document).on('click', '.gif', checkIfGifPlaying);
$(document).on('click', '.forward', showMoreGifs);
$(document).on('click', '.backward', goBack);
