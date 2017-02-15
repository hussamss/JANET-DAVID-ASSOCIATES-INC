$(function () {

	$("#navbarToggle").blur(function (event){
		var screenWidth = window.innerWidth;
		if(screenWidth < 768 ){
			$('#collapsable-nav').collapse('hide')
		}
	});
});

// $(function () {

// 	$("button.mybtn").blur(function (event){
// 		$(this).next().toggle();
		
// 	});
// });