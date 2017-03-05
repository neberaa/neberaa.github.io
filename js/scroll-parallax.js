var parallax = (function () {
	var bg = document.querySelector('.hero__bg');
	var cloud = document.querySelector('.hero__decor-cloud');
	var decorText = document.querySelector('.hero__decor');

	return {
		move: function (block, windowScroll, strafeAmount) {
			var strafe = windowScroll / -strafeAmount + '%';
			var transformString = 'translate3d(0,' + strafe + ',0)';
			var strafeScroll = window.pageYOffset;
			var opacity = 1 - (strafeScroll/1000);
			var style = block.style;

			style.opacity = opacity;
			style.transform = transformString;
			style.webkitTransform = transformString;
		}, 

		init: function(wScroll)  {
			this.move(bg, wScroll, 45);
			this.move(cloud, wScroll, 20);
			this.move(decorText, wScroll, 10);
		}
	}
}());

window.onscroll = function () {
	var wScroll = window.pageYOffset;
	parallax.init(wScroll);
}