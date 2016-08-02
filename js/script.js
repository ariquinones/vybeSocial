document.querySelector('button').addEventListener('click', function() {
	var input = document.querySelector('input')
	input.value = ''
})

document.querySelector(".showMobileMenu").addEventListener('change', function() {
	if (document.querySelector(".showMobileMenu").checked == true) {
		document.querySelector(".mobileMenu").style.display = "inline-block"
		document.querySelector(".mobileMenu").style.right = "5px"
		document.querySelector(".mobileMenu").style.top = "85%"

	}
	if (document.querySelector(".showMobileMenu").checked == false) {
		document.querySelector(".mobileMenu").style.right = "-50%"
		document.querySelector(".mobileMenu").style.display = "none"

	}
})
