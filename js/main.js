$(document).ready(function() {
	$(window).scroll(function() {
    	if ($(this).scrollTop() > 1){
    		$('nav').addClass("sticky");
    	}
    	else{
    		$('nav').removeClass("sticky");
    	}
    });

    // Initialize Materialize stuff
    M.updateTextFields();
    $('.scrollspy').scrollSpy({
        scrollOffset: 64
    });
    $('.sidenav').sidenav();
    // Close sidenav when a menu item is clicked
    $('.mobile-nav-item').click(() => {
        $('.sidenav').sidenav('close');
    });

});
