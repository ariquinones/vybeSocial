document.querySelector('button').addEventListener('click', function() {
	var input = document.querySelector('input')
	input.value = ''
})

document.querySelector(".showMobileMenu").addEventListener('change', function() {
	if (document.querySelector(".showMobileMenu").checked == true) {
		document.querySelector(".mobileMenu").style.right = "5px"
	}
	if (document.querySelector(".showMobileMenu").checked == false) {
		document.querySelector(".mobileMenu").style.right = "-50%"
	}
})
