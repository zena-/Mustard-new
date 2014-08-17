$(function(){

    'use strict';

    var window_height = $(window).height(),
       content_height = window_height - 200;

	$('#wrapper').height(content_height);
	

//////// modal /////////
    $('#myModal').modal('hide');

//////// dropdown /////////
	$('.dropdown-toggle').dropdown();

});