$(function(){
	$("moment-function").hide();
	$(".right11").click(function(){
		var control=$(this).find(".moment-function");
		$(control).toggle(100)
	});
});
