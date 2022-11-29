$(function(){

	$(window).resize(function(){
		$('aside.sidenav').css({
			'top' : $('.headerFW').outerHeight(),
			'height' : viewport.height - $('.headerFW').outerHeight()
		})
	})
});