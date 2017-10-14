var app = {};

var chatlog = document.querySelector('.chatlog');
var input = document.querySelector('input');
var button = document.querySelector('button');
var main = document.querySelector('main');

// $.ajaxPrefilter(function (settings, _, jqXHR) {
//   jqXHR.setRequestHeader('X-Parse-Application-Id', '28f10c64a8b1b900a057b74cabaebaf474573436');
//   jqXHR.setRequestHeader('X-Parse-REST-API-Key', '7543f778eede3b2723e3018977563e69738d7c1b');
// });


// contenet function
// var initChatLogWidgets = function() {
//   $(".chatlog results").fetch(function() {
//     // fix me
//   })
// }

app.init = function() {
  // set handlers
  // $("#testSubmit").click(function() {
  //   alert("button clicked");
  // })
  $("#submit").on('click', function(event) {
    // console.log(event.target);
    console.log($("#message")[0].value)

    //message format:
    var message = {
      username: window.location.search.split('=')[1],
      // roomname: fixme
      text: $("#message")[0].value
    }

    this.send(message)
    // console.log('testing', data.target);
  });

  // $("#submit").on('click', function() {
  //   $("#content").load('app.js', function(response, status) {
  //     success: initChatLogWidgets();
  //   });
  // });

  // $("#submit").button()
  // set variables
  var url = "http://parse.atx.hackreactor.com/chatterbox/classes/messages";
  var errorLog = []; // fix me
  var jqXML = function() { // fix me
  var host; // fix me
  var ajaxLog = []; // fix me
  }

}

app.fetch = function() {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: url,
    type: 'GET',
    data: {
      order: "-createdAt"
    },
    dataType: 'json',
    // contentType: 'application/json',
    complete: function() {

    },
    dataFilter: function() {

    },
    success: function (data) {
      console.log('chatterbox: Message sent');
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
    url: url,
    type: 'POST',
    // dataType: 'json',
    data: JSON.stringify(message),
    dataType: 'json',
    // contentType: 'application/json',
    beforeSend: function() {

    },
    complete: function() {

    },
    dataFilter: function() {

    },
    success: function (data) {
      console.log('chatterbox: Message sent');
      app.renderMessage(message)
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
}

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



app.clearMessages = function() {
  $(".chatlog").remove()
}

app.renderMessage = function() {
  $(".chatlog").append(message)
}

$(document).ready(function(){
  app.init();
  // $("#submit").ajax.send();
});

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
