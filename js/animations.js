$(document).ready(function(){



	var charcount = $('#char-count');
	charcount.hide();//css( "display", "none" );

	var tweetsub = $("#tweet-submit"); 
	tweetsub.hide();//css( "display", "none" );

	var tweetActions = $('.tweet-actions');
	tweetActions.css('visibility', 'hidden');  //.css('display', 'none');
	
	var textarea = $('.tweet-compose');

	$('.reply').hide();
	$('.stats').hide();

	$('body').on('mouseup', '.tweet-body', function(){
		$('.reply', $(this).parent()).slideToggle('normal');
		$('.stats', $(this).parent()).slideToggle('normal');		
	});

	$('body').on('mouseenter', '.tweet', function(){
		$('.tweet-actions', this).css('visibility', 'visible');//css('display', 'inline-block');
	});

	$('body').on('mouseleave', '.tweet', function(){
		$('.tweet-actions', this).css('visibility', 'hidden');//css('display', 'none');
	});

	$('body').on('click', '.action-reply', function(){
		$('.tweet-compose', $(this).parent().parent()).focus();
	});


	$('body').on('click', '#user-tweet', function(){
		$(this).animate( {height: "5em"}, 300 );
		charcount.show();
		tweetsub.show();
		// alert("I work");
	});


	$('body').on('click', '.tweet-compose', function(){
		$(this).animate( {height: "5em"}, 300 );
	});

	textarea.focus(function(){
		$('#user-tweet').trigger("click");
	});

	textarea.keyup(function(){
		var max = 40;
	    var len = $(this).val().length;	    
	    var char = max - len;
    	charcount.text(char);
    	if (len > max) {
	    	tweetsub.prop('disabled', true);
	    } else {
    		tweetsub.prop('disabled', false);
    		if ( event.which == 13 ) {
				event.preventDefault();
	   			tweetsub.trigger('click');
	   		}
    	}
    	if(len > 29) {
	    	charcount.css('color', 'red');
	    } else {
	    	charcount.css('color', '#999');
	    }
		
	}).keydown(function(event){
		if ($(this).val().length > 39 && event.which == 13) {
			event.preventDefault();
		}
	});

	tweetsub.click(function(){
		var tweetText = $('#tweet-content > textarea').val();
		var newTweetObj = {
			avatarURL: "img/alagoon.jpg",
			fullName: "Wilson Parrish",
			userName: "@the_coolest",
			tweetText: tweetText,
			reTweetNum: "100",
			favorites: "9",
			favoriters: getFavoriters(),
			tweetTimeStamp: "1:04 PM - 19 Sep 13",
			replyPlaceholder: "Reply to @the_coolest"
		};
		makeNewTweet(newTweetObj);
		$('.tweet-actions').css('visibility', 'hidden');
		$('#user-tweet').val("").focus();
		charcount.text(40);
		// charcount.css('color', '#999'); //WHY WONT THIS BE GREY
	});

	var getFavoriters = function(){
		var avatars = ["img/alagoon.jpg", "img/alagoon.jpg", "img/alagoon.jpg"];
		return avatars;
	};



	var makeNewTweet = function(tweet){
		var tweet = '<div class="tweet">' +
	'<div class="content">' +
		'<div class="tweet-body">' +
			'<img class="avatar" src="' + tweet.avatarURL + '">' +		
			'<strong class="fullname">' + tweet.fullName + '</strong>' +
			'<span class="username">&nbsp;' + tweet.userName + '</span>' +
			'<p class="tweet-text">' + tweet.tweetText + '</p>' +
			'<div class="tweet-actions">' +
				'<ul>' +
					'<li><span class="icon action-reply"></span> Reply</li>' +
					'<li><span class="icon action-retweet"></span> Retweet</li>' +
					'<li><span class="icon action-favorite"></span> Favorite</li>' +
					'<li><span class="icon action-more"></span> More</li>' +
				'</ul>' +
			'</div>' +
		'</div>' +
		'<div class="stats">' +
			'<div class="retweets">' +
				'<p class="num-retweets">' + tweet.reTweetNum + '</p>' +
				'<p>RETWEETS</p>' +
			'</div>' +
			'<div class="favorites">' +
				'<p class="num-favorites">' + tweet.favorites + '</p>' +
				'<p>FAVORITES</p>' +
			'</div>' +
			'<div class="users-interact">' +				
				'<img src="' + tweet.avatarURL + '">' +	
			'</div>' +
			'<div class="time">' + tweet.tweetTimeStamp + '</div>' +
		'</div>' +
		'<div class="reply">' +
			'<img class="avatar" src="' + tweet.avatarURL + '">' +
			'<textarea class="tweet-compose" placeholder="' + tweet.replyPlaceholder + '""></textarea>' +
		'</div>' +
	'</div>' +
'</div>';
		$('#stream').prepend(tweet);
		$('.reply').hide();
		$('.stats').hide();
	};	

});



//####################### WORKSHOP #########################



// var makeNewTweet = $(function(tweet){
// 	var tweetClone = $('.stream:first-child').clone();
// 	}).prependTo("#stream";
 
// 	tweetsub.click(function(){
// 		var newTweet = $('.newTweet'); 
// 		var newTweetObj = {
// 			avatarURL: "img/alagoon.jpg",
// 			fullName: "Wilson Parrish",
// 			userName: "@the_coolest",
// 			tweetText: tweetText,
// 			reTweetNum: "100",
// 			favorites: "9",
// 			favoriters: getFavoriters(),
// 			tweetTimeStamp: "1:04 PM - 19 Sep 13",
// 			replyPlaceholder: "Reply to @the_coolest"
// 		};
// 		$('.stream:first-child').clone();

	

// 	}).prependTo("#stream");

