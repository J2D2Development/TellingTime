//hexadecimal based color clock


window.onload = function displayTime() {
	var d, regH, h, m, s, color, regDate;
	
	d = new Date();
	h = d.getHours();
	regH = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();
	
	if (h <= 9) {
		h = '0' + h;
	}
	if (m <= 9) {
		m = '0' + m;
	}
	if (s <= 9) {
		s = '0' + s;
	}
	if (regH > 12) {
		regH -= 12;
	}
	
	color = "#" + h + m + s;
	time = regH + ":" + m + ":" + s;
	document.body.style.backgroundColor = color;
	document.getElementById("hex").innerHTML = time + "<br />" + "(" + color + ")";
	
	setTimeout(displayTime, 1000);
}

displayTime();