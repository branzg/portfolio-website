$(document).ready(function() {
		$('.promo > a').click(function(event){
		event.preventDefault();//stop browser to take action for clicked anchor
					
		//get displaying tab content jQuery selector
		var active_tab_selector = $('.promo > a.active').attr('href');	
		$('div.promo a').click(function(){
			dc($(this).attr("href"));
		});

		function dc(id){
			
			$("div.tab-content").hide();
			
			$('div.repo  h1  a').click(); 
			$("div" + id).fadeIn("slow").then("div" + id).show().then('div.repo  h1  a').click();
			
			
			
		}
				
		//find actived navigation and remove 'active' css
		var actived_nav = $('.promo > a.active');
		actived_nav.removeClass('active');
		$('div.repo  h1  a').click();			
		//add 'active' css into clicked navigation
		$(this).parents('div').addClass('active');
					
		//hide displaying tab content
		$(active_tab_selector).removeClass('active');
		$(active_tab_selector).addClass('hide');
					
		//show target tab content
		var target_tab_selector = $(this).attr('href');
		$(target_tab_selector).removeClass('hide');
		$(target_tab_selector).addClass('active');
	     });
	  });