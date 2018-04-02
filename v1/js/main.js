$(document).ready(function() {
	$('#searchButton').click(function(){
		$(this).prev().animate({padding:'0 10px'},20);
		$(this).prev().animate({width:'250px'},350);
		$(this).prev().focus();
	});
	$('#searchText').blur(function(){
		$(this).hide().animate({width:'0'},50);
		$(this).css('padding','0');
		$(this).val('');
	});
});
