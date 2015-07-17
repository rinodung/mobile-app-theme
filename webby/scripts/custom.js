$(document).ready(function(){
			
	$('.bxslider').bxSlider({
		pager:false,
		controls:true,
		touchEnabed:true,
		infiniteLoop: true,
		preventDefaultSwipeX:true
	});	
	
	$('.bx-next').click(function(){
		return false;
	});
	
	$('.bx-prev').click(function(){
		return false;
	});	
	
	$('.deploy-navigation').click(function(){
		$('.navigation').toggle(150);
		return false;
	});
			
		
	$('.show-drop-one').click(function(){
		$('.drop-one').toggle(200);
		$('.drop-two').hide(200);
		$('.drop-three').hide(200);
		return false;
	});
	
	$('.show-drop-two').click(function(){
		$('.drop-one').hide(200);
		$('.drop-two').toggle(200);
		$('.drop-three').hide(200);
		return false;
	});
	
	$('.show-drop-three').click(function(){
		$('.drop-one').hide(200);
		$('.drop-two').hide(200);
		$('.drop-three').toggle(200);
		return false;
	});
	

	
});












