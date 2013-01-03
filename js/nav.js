$(document).ready(function(){

	function showmenu(id)
	{
		var hidden = !!($('#'+id+'-menu').filter(':hidden').length);
		$('#notifications').removeClass('cur');
		$('#userbar').removeClass('cur');
		$('#login').removeClass('cur');
		$('#signup').removeClass('cur');
		$('#notifications-menu').hide();
		$('#userbar-menu').hide();
		$('#login-menu').hide();
		$('#signup-menu').hide();
		if (id && hidden)
		{
			$('#'+id+'-menu').show();
			$('#'+id).addClass('cur');
		}
	}
		
	$(window).click(function(e){
		var closest = $(e.target).closest('.topnavmenu, .topnavcol');
		if (closest.length)
		{
			return;
		}
		showmenu();
	});
	
	$('#notifications').click(function(e){
		e.preventDefault();
		showmenu('notifications');
	});
	$('#userbar').click(function(e){
		e.preventDefault();
		showmenu('userbar');
	});
	$('#login').click(function(e){
		e.preventDefault();
		showmenu('login');
	});
	$('#signup').click(function(e){
		e.preventDefault();
		showmenu('signup');
	});

    $(function() {

        $("form input[id=emailtooltip]").tooltip({
            position: "center right",
            offset: [-2, 10],
            effect: "fade",
            opacity: 0.9
        });
    });
});
