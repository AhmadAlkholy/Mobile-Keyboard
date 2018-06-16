// changing keyboard characters
function keysChange(){

	$('#keyboard ul li .on').toggle();

	$('#keyboard ul li .off').toggle();
	$('#keyboard ul li .off').toggleClass('active');

	$('.keyline2, .keyline3').toggleClass('no-padding')

	$('#uppercase').toggle();

	$('.num-key').toggle();
	$('#delete').toggleClass('big-del');

};

//uppercasing characters
function uppercaser() {
	$('#keyboard').toggleClass('uppercase');

	$('#uppercase .on').toggle();
	$('#uppercase .off').toggle();
}

$('#keyboard li').on('click', function(){

	var screen = $('#screen');	
	screen.focus();

	var key = $(this).find('span');
	var keyvalue = key.html();

	//to write in uppercase
	if ($('#keyboard').hasClass('uppercase')) {
		keyvalue = keyvalue.toUpperCase()
	}

	if ($(this).hasClass('change-keys')) {

		keysChange();
	}
	else if($(this).attr('id')=='return'){
		alert('letters typed successfully ^_^');
	}
	else if($(this).attr('id') == 'uppercase'){
		
		uppercaser();
		//return;
	}
	//for spacing
	else if ($(this).hasClass('space')) {
		screen.val(screen.val() + ' ');
		//return;
	}
	//backspace function
	else if($(this).attr('id') == 'delete'){
		
		screen.val((screen.val().slice(0, -1)));
	}

	//for first faze characters
	else if (key.css("display") == "block") {

		//screen.append(keyvalue);
		screen.val(screen.val() + keyvalue);
	}

	//for second faze characters
	else{			
		//screen.append($(this).find('.active').html());
		screen.val(screen.val() + $(this).find('.active').html());
	}

});