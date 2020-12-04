$(function(){

	//よくある質問のアコーディオンメニュー
	$('.panel').click(function(){
		var $answer = $(this).find('.response')
		if($answer.hasClass('open')){
			$answer.removeClass('open');
			$answer.slideUp(slow);
		} else{
			$answer.addClass('open');
			$answer.slideDown(slow);
		}
	});

});