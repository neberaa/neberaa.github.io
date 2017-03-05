var scrollMenu = (function () {
	var $article = $('.blog-article'), 
		$item = $('.blog-nav__item'), 
		$wrapMenu = $('.wrap-blog-nav'), 
		body = document.body,
		isPositionArticle = [],
		offsetHeight = 150,

		positionArticle = function(element) {
			var len = element.length;
			for(var i = 0; i < len; i++) {
				isPositionArticle[i] = {};
				isPositionArticle[i].top = element
					.eq(i)
					.offset()
					.top - offsetHeight;
				isPositionArticle[i].bottom = isPositionArticle[i].top + element
					.eq(i)
					.innerHeight(); 
			}
		},

		scrollPageFixMenu = function (e) {
			var scroll = window.pageYOffset;
			if (scroll < $article.offset().top) {
				$wrapMenu.removeClass('fixed');
			} else {
				$wrapMenu.addClass('fixed');
			}
		},

		scrollPage = function (e) {
			var scroll = window.pageYOffset;
			for(var i = 0; i < isPositionArticle.length; i++) {
				if (scroll >= isPositionArticle[i].top && scroll <= isPositionArticle[i].bottom) {
					$item
						.eq(i)
						.addClass('blog-nav__item_active')
						.siblings()
						.removeClass('blog-nav__item_active');
				}
			}
		},

		clickOnMenu = function (e) {
			var index = $(e.target).index();
			var sectionOffset = $article
				.eq(index)
				.offset()
				.top;
			$(document).off('scroll', scrollPage);
			$('body', 'html').animate({
				'scrollTop': sectionOffset
			}, function () {
				$(e.target)
					.addClass('blog-nav__item_active')
					.siblings()
					.removeClass('blog-nav__item_active');
				$(document).on('scroll', scrollPage);
			});
		},

		addListener = function () {
			$('.blog-nav__list').on('click', clickOnMenu);
			$(document).on('scroll', scrollPage);
			$(document).on('scroll', scrollPageFixMenu);

			$(window).on('load', function (e) {
				positionArticle($article);
			})
			$(window).on('resize', function (e) {
				positionArticle($article);
			})
		}

	return {
		init: addListener
	}
})();

scrollMenu.init();