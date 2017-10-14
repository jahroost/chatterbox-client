var app = {};

var chatlog = document.querySelector('.chatlog');
var input = document.querySelector('input');
var button = document.querySelector('button');
var main = document.querySelector('main');

// $.ajaxPrefilter(function (settings, _, jqXHR) {
//   jqXHR.setRequestHeader('X-Parse-Application-Id', '28f10c64a8b1b900a057b74cabaebaf474573436');
//   jqXHR.setRequestHeader('X-Parse-REST-API-Key', '7543f778eede3b2723e3018977563e69738d7c1b');
// });

$(document).ready(function(){};


app.init = function() {

}

// send is a POST /update http call
app.send = function() {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages',
    type: 'POST',
    // dataType: 'json',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
}

var url = "http://parse.atx.hackreactor.com/chatterbox/classes/messages";

app.fetch = function() {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.

  }

    url: url,
    type: 'GET',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });

  // $.getJSON("ajax/index.html", function(data) {
  //   var items = [];
  //   $.each(data, function(key, value) {
  //     items.push("<li id='" + key + "'>" + val + "</li>");
  //   });
  //   $("<ul/>", {
  //     "class": "chats",
  //     html: items.join("")
  //   }).appendTo("body");
  // });

}

app.clearMessages = function() {
  $("#chats").remove()
}



//
// {
// "args" : {},
// "headers" : {
//   "host" : "parse.atx.hackreactor.com",
//   "cache-control" : no-cache,
//   // token
//   // user-agent :
//   "accept" : "*/*",
//   // cookie :
//   "accept-encoding" : "gzip, deflate"
// },
// url: 'http://parse.atx.hackreactor.com/get',
// }

// app.renderMessage = function() {
//   $("#chats").append(message)
// }

// app.selectRoom = function() {
//   $(document).ajaxSend(function() {
//     $(".log").text("Triggered selectRoom handler");
//   });
//   $(".roomSelector").click(function() {
//     $(".roomSelect").load("../index.html");
//   });
// };

// app.renderRoom = function() {
//
// }

// var message = {
//   username: 'Mel Brooks',
//   text: 'Never underestimate the power of the Schwartz!',
//   roomname: 'lobby'
// };
}
