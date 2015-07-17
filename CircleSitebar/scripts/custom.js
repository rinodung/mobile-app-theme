// JavaScript Document

$(document).ready(function(){
	
	$('.close-nav, .close-sidebar, .sidebar-close').click(function(){
		snapper.close();
		return false;
	});

	$('.dropdown-nav').click(function(){
		$(this).parent().find('.nav-item-submenu').toggle(200);
		$(this).parent().find('.dropdown-nav').toggleClass('dropdown-nav-inactive');
	});
	
	$('.wide-image').click(function(){
		$(this).parent().find('.wide-item-content').toggle(50);
		return false;
	});
		
	var snapper = new Snap({
	  element: document.getElementById('content')
	});


	$('.deploy-sidebar').click(function(){
		//$(this).toggleClass('remove-sidebar');
		if( snapper.state().state=="left" ){
			snapper.close();
		} else {
			snapper.open('left');
		}
		return false;
	});

	
});