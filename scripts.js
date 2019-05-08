
menu.onclick = function funcc() {
	var navItems = document.getElementsByClassName('nav-item');
	for (var i = 0; i < navItems.length; i++) {
		if (navItems[i].className === "nav-item") {
			navItems[i].className += " responsive";
		} else {
			navItems[i].className = "nav-item";
		}
	}

}