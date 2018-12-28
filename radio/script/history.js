function adToHistory() {
	var inp1 = document.getElementById("inp8").value;
	document.getElementById('history_box').innerHTML += '<div id="log">' + inp1 + '</div>';
	var node = document.getElementById('log'),

htmlContent = node.innerHTML,
textContent = node.textContent;
}
