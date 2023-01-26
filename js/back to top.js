	//返回顶部
	$(function() {
		$("#fixed").click(function() {
			$("html,body").animate({
				scrollTop: 0
			}, 1600);
		});
	})