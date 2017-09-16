var preloader = (function() {
	var preloader = $('.preloader');
	var percentsTotal = 0;

	var imgPath = $('*').map(function (ndx, element) {
		var background = $(element).css('background-image');
		var path = '';
		var isImg = $(element).is('img');

		if (background !='none') {
			path = background.replace('url("', '').replace('")', '');
		}

		if (isImg) {
			path = $(element).attr('src');
		}

		if (path) return path;
	});

	var setPercents = function(total, current) {
		var percents = Math.ceil(current / total * 100);

		$('.preloader__percents').text(percents + '%');

		if (percents >= 100) {
			preloader.fadeOut();
		} 
	}

	var loadImages = function(images) {
		if (!images.length) preloader.fadeOut();

		images.forEach(function(img, i, iamges) {
			var fakeImage = $('<img>', {
				attr : {
					src : img 
				}
			});
			fakeImage.on('load error', function() {
				percentsTotal++;
				setPercents(images.length, percentsTotal);
			});
		});
	}

	return {
		init: function() {
			var imgs = imgPath.toArray();
			loadImages(imgs);
		}
	}
})();

$(function () {
	preloader.init();
});