// JavaScript Document

$(window).load(function() {    

	var theWindow        = $(window),
	    $bg              = $("#bg"),
	    aspectRatio      = $bg.width() / $bg.height();
	    			    		
	function resizeBg() {		
		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		    $bg
		    	.removeClass()
		    	.addClass('bgheight');
		} else {
		    $bg
		    	.removeClass()
		    	.addClass('bgwidth');
		}			
	}            			
	theWindow.resize(resizeBg).trigger("resize");
});

$(document).ready(function(){

	var wow = new WOW(
	  {
		boxClass:     'animate',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       0,          // distance to the element when triggering the animation (default is 0)
		mobile:       true,        // trigger animations on mobile devices (true is default)
	  }
	);
	wow.init();

	
	$('.deploy-navigation, .close-navigation').click(function(){
		$('.page-navigation').toggleClass('page-navigation-active');
		$(this).find('i').toggleClass('deploy-navigation-active');
		return false;
	});
	
	$('.page-navigation a').hover(function(){
		$(this).find('i:first-child').toggleClass('hover-icon');		
	});
	
	$('.submenu-deploy').click(function(){
		$(this).parent().find('.submenu-items').toggleClass('submenu-items-active');
		$(this).find('.fa-angle-down').toggleClass('deploy-navigation-active');
		return false;
	});
	
	var endDate = "June 7, 2015 15:03:25";
	
	$('.countdown').countdown({
	  date: endDate,
	  render: function(data) {
		$(this.el).html(
		"<div class='countdown-box box-years'><div class='countdown-years'>" + this.leadingZeros(data.years, 2) + 
		"</div><span>years</span></div><div class='countdown-box box-days'><div class='countdown-days'>" + this.leadingZeros(data.days, 2) + 
		"</div><span>days</span></div><div class='countdown-box box-hours'><div class='countdown-hours'>" + this.leadingZeros(data.hours, 2) + 
		"</div><span>hours</span></div><div class='countdown-box box-minutes'><div class='countdown-minutes'>" + this.leadingZeros(data.min, 2) + 
		"</div><span>min</span></div><div class='countdown-box box-seconds'><div class='countdown-seconds'>" + this.leadingZeros(data.sec, 2) + 
		"</div><span>sec</span></div>");
	  }
	});

});