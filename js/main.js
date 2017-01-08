$(function(){
		var menu = $('.menu'),
			menuImg = $('.menu img'),
			responsiveMenu = $('.responsive-menu-items'),
			responsiveMenuImg = $('.responsive-menu-items img');


		menu.click(function (evt) {
			if(menu.hasClass('open')) {
				responsiveMenu.animate({'height':'0px'},200,'linear');
				menuImg.attr('src','img/icons/menu-icon.png');
				menu.removeClass('open');
				responsiveMenuImg.css('display', 'none');
			} else {
				responsiveMenu.animate({'height':'150px'},200,'linear');
				menuImg.attr('src','img/icons/menu-close.png');
				menu.addClass('open');
				responsiveMenuImg.css('display', 'block');
			}
			

			
		});


		function init() {
		    window.addEventListener('scroll', function(e){
		        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
		            shrinkOn = 300,
		            header = document.querySelector("header");
		        if (distanceY > shrinkOn) {
		            classie.add(header,"smaller");
		            $('.menu').addClass('smaller');
		            $('.responsive-menu-items').css('top','51px');
		        } else {
		            if (classie.has(header,"smaller")) {
		                classie.remove(header,"smaller");
		            	$('.menu').removeClass('smaller');
		            	$('.responsive-menu-items').css('top','81px');
		            }
		        }
		    });
		}

		// init();

	});