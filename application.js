$(document).ready(function(){
        var $body = $('body');
        var initialtweet;
        var tweet;
        var index = streams.home.length - 1;
        var $tweet;
        var $user;
        var $date;
        var username;
        var user;


        while(index >= 0){
          initialtweet = streams.home.shift();
          $date = $('<p class = "date"></p>');
          $tweet = $('<p class = "tweet"></p>');
          $user = $('<p class = "user ' + initialtweet.user + '"></p>');
          $user.text('@' + initialtweet.user + ': ');
          $tweet.text(initialtweet.message);
          $tweet.appendTo($user);
          $date.text(initialtweet.created_at);
          $date.appendTo($user);
          $user.prependTo($('.newtweet'));
          index -= 1;
        }

        $('.button').click(function() {
          tweet = streams.home.shift();
          $date = $('<p class = "date"></p>');
          $tweet = $('<p class = "tweet"></p>');
          $user = $('<p class = "user ' + tweet.user + '"></p>');
          $user.text('@' + tweet.user + ': ');
          $tweet.text(tweet.message);
          $tweet.appendTo($user);
          $date.text(tweet.created_at);
          $date.appendTo($user);
          $user.prependTo($('.newtweet'));
          $('.newtweet').show();
          });

        $('.newtweet').on('click', '.user', function() {
          username = $(this).attr("class").substring(5);
          $('.usertweet').html("");
          $('.user.' + username).clone().appendTo('.usertweet');
          $('.usertweet').show();
          });

        $('.hide').click(function() {
          $('.usertweet').hide();
        });

});
        
