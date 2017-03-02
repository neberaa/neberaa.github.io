/*var parallax = (function () {
	var bg = document.querySelector('.hero-bg');
	var user = document.querySelector('.hero-wrapper');
	var decorText = document.querySelector('.hero__img-decor');

	return {
		move: function (block, windowScroll, strafeAmount) {
			var strafe = windowScroll / -strafeAmount + '%';
			var transformString = 'translate3d(0,' + strafeAmount + ',0)';
			var style = block.style;

			style.transform = transformString;
			style.webkitTransform = transformString;
		}, 

		init: function(wScroll)  {
			this.move(bg, wScroll, 45);
			this.move(user, wScroll, 3);
			this.move(decorText, wScroll, 20);
		}
	}
}());

window.onscroll = function () {
	var wScroll = window.pageYOffset;
	parallax.init(wScroll);
}*/