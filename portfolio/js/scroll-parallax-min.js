var parallax=function(){var e=document.querySelector(".hero__bg"),r=(document.querySelector(".hero-wrapper"),document.querySelector(".hero__decor-img"));return{move:function(e,r,o){var t=r/-o+"%",n="translate3d(0,"+t+",0)",a=window.pageYOffset,i=1-a/1e3,c=e.style;c.opacity=i,c.transform=n,c.webkitTransform=n},init:function(o){this.move(e,o,45),this.move(r,o,20)}}}();window.onscroll=function(){var e=window.pageYOffset;parallax.init(e)};