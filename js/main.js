$('.logo').hover(function(e){
	if( $('a[href="/"]').hasClass('cur') ){ $('a[href="/"]').toggleClass('hover'); }
	else { $('a[href="/"]').toggleClass('hover'); }
})

var pathArray = String(window.location.pathname);
pathArray.split('/');
$('a[href="'+pathArray+'"]').addClass('cur');