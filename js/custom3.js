$(document).ready(function() {
		$('.flow > div').click(function(event){
		event.preventDefault();
		var active_tab_selector = $('.flow > div.active').attr('href');					
					
	
		var actived_nav = $('.flow > div.active');
		actived_nav.removeClass('active');
					
		
		$(this).parents('div').addClass('active');
					

		$(active_tab_selector).removeClass('active');
		$(active_tab_selector).addClass('hide');

		var target_tab_selector = $(this).attr('href');
		$(target_tab_selector).removeClass('hide');
		$(target_tab_selector).addClass('active');
	     });
	  });