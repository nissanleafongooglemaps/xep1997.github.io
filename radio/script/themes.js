function swapStyleSheet(sheet){
	document.getElementById('pagestyle').setAttribute('href', sheet);
}


function loadthemes() {
if (localStorage.theme==1) {
	theme0001()
}
if (localStorage.theme==2) {
	theme0002()
}
if (localStorage.theme==3) {
	theme0003()
}
if (localStorage.theme==4) {
	theme0004()
}
if (localStorage.theme==5) {
	theme0005()
}
if (localStorage.theme==6) {
	theme0006()
}
if (localStorage.theme==7) {
	theme0007()
}
if (localStorage.theme==8) {
	theme0008()
}
}


function theme0001() {
if (localStorage.theme==0, 2, 3, 4, 5, 6, 7, 8) {
	localStorage.setItem("theme", "1");
	document.getElementById('pagestyle').setAttribute('href', 'themes/theme01.css');
}
}

function theme0002() {
if (localStorage.theme==0, 1, 3, 4, 5, 6, 7, 8) {
	localStorage.setItem("theme", "2");
	document.getElementById('pagestyle').setAttribute('href', 'themes/theme02.css');
}
}

function theme0003() {
if (localStorage.theme==0, 1, 2, 4, 5, 6, 7, 8) {
	localStorage.setItem("theme", "3");
	document.getElementById('pagestyle').setAttribute('href', 'themes/theme03.css');
}
}

function theme0004() {
if (localStorage.theme==0, 1, 2, 3, 5, 6, 7, 8) {
	localStorage.setItem("theme", "4");
	document.getElementById('pagestyle').setAttribute('href', 'themes/theme04.css');
}
}

function theme0005() {
if (localStorage.theme==0, 1, 2, 3, 4, 6, 7, 8) {
	localStorage.setItem("theme", "5");
	document.getElementById('pagestyle').setAttribute('href', 'themes/theme05.css');
}
}

function theme0006() {
if (localStorage.theme==0, 1, 2, 3, 4, 5) {
	localStorage.setItem("theme", "6");
	document.getElementById('pagestyle').setAttribute('href', 'themes/theme06.css');
}
}

function theme0007() {
if (localStorage.theme==0, 1, 2, 3, 4, 5, 6, 8) {
	localStorage.setItem("theme", "7");
	document.getElementById('pagestyle').setAttribute('href', 'themes/theme07.css');
}
}

function theme0008() {
if (localStorage.theme==0, 1, 2, 3, 4, 5, 6, 7) {
	localStorage.setItem("theme", "8");
	document.getElementById('pagestyle').setAttribute('href', 'themes/theme08.css');
}
}