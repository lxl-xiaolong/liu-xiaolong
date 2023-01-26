	/*-------------------------------------------------*/
	/* 鼠标点击显示字体特效！
	/*-------------------------------------------------*/
	var a_idx = 0;
	jQuery(document).ready(function($) {
		$("body").click(function(e) {
			var a = new Array("欢迎您", "么么哒", "你真好", "棒棒哒", "真可爱", "你最美", "喜欢你", "真聪明", "爱你哦", "好厉害", "你真帅", "祝福你");
			var $i = $("<span/>").text(a[a_idx]);
			a_idx = (a_idx + 1) % a.length;
			var x = e.pageX,
				y = e.pageY;
			$i.css({
				"z-index": 99999,
				"top": y - 20,
				"left": x,
				"position": "absolute",
				"font-weight": "bold",
				"font-size": "2.2rem",
				"color": "#ff6651"
			});
			$("body").append($i);
			$i.animate({
				"top": y - 180,
				"opacity": 0
			}, 1500, function() {
				$i.remove();
			});
		});
	});