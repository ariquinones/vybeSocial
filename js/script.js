// document.querySelector('button').addEventListener('click', function() {
// 	var input = document.querySelector('input')
// 	input.value = ''
// })
$('.showMobileMenu').on('change', function() {
	if (document.querySelector(".showMobileMenu").checked == true) {
		$('.menuIcon').addClass('rotate')
		$('.mobileMenu').css('display', 'inline-block')
		function slow() {
			$('.mobileMenu').css('right', '0px')
			$('.mobileMenu').css('top', '95%')
		}
		setTimeout(slow, 500)
	}
	if (document.querySelector(".showMobileMenu").checked == false) {
		$('.menuIcon').removeClass('rotate')
		$('.mobileMenu').css('top', '-1000%')
		function hide() {
			$('.mobileMenu').css('display', 'none')
		}
		setTimeout(hide, 1000)
	}
})
$(document).scroll(function() {
	$('.guestInfo').css('opacity', '1')
})

$(function() {
	var $window = $(window), $document = $(document),
		transitionSupported = typeof document.body.style.transitionProperty === "string", // detect CSS transition support
		scrollTime = 1; // scroll time in seconds

	$(document).on("click", "a[href*=\\#]:not([href=\\#])", function(e) {
		var target, avail, scroll, deltaScroll;
		$('.guestInfo').css('opacity', '0')
   		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
			target = $(this.hash);
			target = target.length ? target : $("[id=" + this.hash.slice(1) + "]");

			if (target.length) {
				avail = $document.height() - $window.height();

				if (avail > 0) {
					scroll = target.offset().top;
          
					if (scroll > avail) {
						scroll = avail;
					}
				} else {
					scroll = 0;
				}

				deltaScroll = $window.scrollTop() - scroll;

				// if we don't have to scroll because we're already at the right scrolling level,
				if (!deltaScroll) {
					return; // do nothing
				}

				e.preventDefault();
				
				if (transitionSupported) {
					$("html").css({
						"margin-top": deltaScroll + "px",
						"transition": scrollTime + "s ease-in-out"
					}).data("transitioning", scroll);
				} else {
					$("html, body").stop(true, true) // stop potential other jQuery animation (assuming we're the only one doing it)
					.animate({
						scrollTop: scroll + "px"
					}, scrollTime * 1000);
					
					return;
				}
			}
		}
	});

	if (transitionSupported) {
		$("html").on("transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd", function(e) {
			var $this = $(this),
				scroll = $this.data("transitioning");
			
			if (e.target === e.currentTarget && scroll) {
				$this.removeAttr("style").removeData("transitioning");
				
				$("html, body").scrollTop(scroll);
			}
		});
	}




});