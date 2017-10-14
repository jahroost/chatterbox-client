var app = {};

var chatlog = document.querySelector('.chatlog');
var input = document.querySelector('input');
var button = document.querySelector('button');
var main = document.querySelector('main');

app.init = function() {
  // set handlers
  $("#submit").on('click', function(event) {
    var message = {
      username: window.location.search.split('=')[1],
      roomname: $(".roomSelector")[0].value,
      text: $("#message")[0].value
    };
    app.send(message)
  });

  // set variables
  var errorLog = [];
  var ajaxLog = [];
}

app.fetch = function() {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: "http://parse.atx.hackreactor.com/chatterbox/classes/messages",
    type: 'GET',
    data: {
      order: "-createdAt"
    },
    dataType: 'json',
    // contentType: 'application/json',
    // complete: function() {
    //
    // },
    // dataFilter: function() {
    //
    // },
    success: function (data) {
      console.log('chatterbox: Message sent');
      $("#results").append("<li></li>");
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
}

// send is a POST /update http call
app.send = function(message) {
  console.log(message);

  // var content =
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    type: 'POST',
    url: "http://parse.atx.hackreactor.com/chatterbox/classes/messages",
    // dataType: 'json',
    data: message,
    // contentType: 'application/json',
    // beforeSend: function() {
    //
    // },
    // complete: function() {
    //
    // },
    // dataFilter: function() {
    //
    // },
    success: function (data) {
      // console.log('chatterbox: Message sent');

    },
    dataType: 'json',
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
}

app.clearMessages = function() {
  $(".chatlog").remove()
}

app.renderMessage = function() {
  $(".chatlog").append(message)
}

$(document).ready(function(){
  app.init();
});
