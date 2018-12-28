function exitPlayer() {

	document.getElementById('main_player').style.display = 'none';
	document.getElementById('main_player').style.visibility="hidden"
	document.getElementById('main_player').style.opacity = "0"

}

function switchPlayer() {

	document.getElementById('main_player').style.display = 'block';
	document.getElementById('main_player').style.visibility="visible"
	document.getElementById('main_player').style.opacity = "1"

}

function switchStations() {
	document.getElementById('main_stations').style.display = 'block';
	document.getElementById('main_player').style.display = 'none';
	document.getElementById('main_settings').style.display = 'none';
	document.getElementById('bottom_player').style.display = 'block';
	document.getElementById('main_recent').style.display = 'none';
	
}

function switchFavorites() {

	document.getElementById('main_stations').style.display = 'block';
	document.getElementById('main_player').style.display = 'none';
	document.getElementById('main_settings').style.display = 'none';
	document.getElementById('bottom_player').style.display = 'block';
	document.getElementById('main_recent').style.display = 'none';
}

function switchSettings() {

	document.getElementById('main_stations').style.display = 'none';
	document.getElementById('main_player').style.display = 'none';
	document.getElementById('main_settings').style.display = 'block';
	document.getElementById('bottom_player').style.display = 'block';
	document.getElementById('main_recent').style.display = 'none';
}

function switchRecent() {

	document.getElementById('main_stations').style.display = 'none';
	document.getElementById('main_player').style.display = 'none';
	document.getElementById('main_settings').style.display = 'none';
	document.getElementById('bottom_player').style.display = 'block';
	document.getElementById('main_recent').style.display = 'block';
	
}

function listFavorites() {
	$('.ch_sweden').css('display','none');
	$('.ch_denmark').css('display','none');
	$('.ch_germany').css('display','none');
	$('.ch_france').css('display','none');
	$('.ch_uk').css('display','none');
	$('.ch_norway').css('display','none');
	$('.ch_favorites').css('display','block');
	document.getElementById('ch_title').innerHTML = "Favorites";
}

function listNorway() {
	$('.ch_favorites').css('display','none');
	$('.ch_sweden').css('display','none');
	$('.ch_denmark').css('display','none');
	$('.ch_germany').css('display','none');
	$('.ch_france').css('display','none');
	$('.ch_uk').css('display','none');
	$('.ch_norway').css('display','block');
	document.getElementById('ch_title').innerHTML = "Norway";

}

function listSweden() {
	$('.ch_favorites').css('display','none');
	$('.ch_sweden').css('display','block');
	$('.ch_denmark').css('display','none');
	$('.ch_germany').css('display','none');
	$('.ch_france').css('display','none');
	$('.ch_uk').css('display','none');
	$('.ch_norway').css('display','none');
	document.getElementById('ch_title').innerHTML = "Sweden";
}

function listDenmark() {
	$('.ch_favorites').css('display','none');
	$('.ch_sweden').css('display','none');
	$('.ch_denmark').css('display','block');
	$('.ch_germany').css('display','none');
	$('.ch_france').css('display','none');
	$('.ch_uk').css('display','none');
	$('.ch_norway').css('display','none');
	document.getElementById('ch_title').innerHTML = "Denmark";
}

function listGermany() {
	$('.ch_favorites').css('display','none');
	$('.ch_sweden').css('display','none');
	$('.ch_denmark').css('display','none');
	$('.ch_germany').css('display','block');
	$('.ch_france').css('display','none');
	$('.ch_uk').css('display','none');
	$('.ch_norway').css('display','none');
	document.getElementById('ch_title').innerHTML = "Germany";
}

function listFrance() {
	$('.ch_favorites').css('display','none');
	$('.ch_sweden').css('display','none');
	$('.ch_denmark').css('display','none');
	$('.ch_germany').css('display','none');
	$('.ch_france').css('display','block');
	$('.ch_uk').css('display','none');
	$('.ch_norway').css('display','none');
	document.getElementById('ch_title').innerHTML = "France";
}

function listUK() {
	$('.ch_favorites').css('display','none');
	$('.ch_sweden').css('display','none');
	$('.ch_denmark').css('display','none');
	$('.ch_germany').css('display','none');
	$('.ch_france').css('display','none');
	$('.ch_uk').css('display','block');
	$('.ch_norway').css('display','none');
	document.getElementById('ch_title').innerHTML = "United Kingdom";
}

function listAll() {
	$('.ch_favorites').css('display','block');
	$('.ch_sweden').css('display','block');
	$('.ch_denmark').css('display','block');
	$('.ch_germany').css('display','block');
	$('.ch_france').css('display','block');
	$('.ch_uk').css('display','block');
	$('.ch_norway').css('display','block');
	document.getElementById('ch_title').innerHTML = "Stations";
}


function justFun() {
	document.getElementById('justforfun').style.display = 'block';
}

function navDrop() {
	if ($(window).width() < 700) {
	if (document.getElementById('channel_nav').style.width === '300px') {
		document.getElementById('channel_nav').style.width = '0px';
		document.getElementById('main_stations').style.marginLeft = '0px';
		document.getElementById('main_settings').style.marginLeft = '0px';
		document.getElementById('main_recent').style.marginLeft = '0px';
		document.getElementById('channel_nav').style.opacity = '0';
	} else {
		document.getElementById('channel_nav').style.width = '300px';
		document.getElementById('main_stations').style.marginLeft = '300px';
		document.getElementById('main_settings').style.marginLeft = '300px';
		document.getElementById('main_recent').style.marginLeft = '300px';
		document.getElementById('channel_nav').style.opacity = '1';
	}
	}
}

function hideSidebar() {
	if ($(window).width() < 700) {
		document.getElementById('channel_nav').style.width = '0px';
		document.getElementById('main_stations').style.marginLeft = '0px';
		document.getElementById('main_settings').style.marginLeft = '0px';
		document.getElementById('main_recent').style.marginLeft = '0px';
		document.getElementById('channel_nav').style.opacity = '0';
	}
}

function settingVisual() {
	document.getElementById('setting_visual').style.display = 'block';
	document.getElementById('setting_audio').style.display = 'none';
	document.getElementById('setting_legal').style.display = 'none';
}
function settingAudio() {
	document.getElementById('setting_visual').style.display = 'none';
	document.getElementById('setting_audio').style.display = 'block';
	document.getElementById('setting_legal').style.display = 'none';
}
function settingLegal() {
	document.getElementById('setting_visual').style.display = 'none';
	document.getElementById('setting_audio').style.display = 'none';
	document.getElementById('setting_legal').style.display = 'block';
}


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function startTime2() {
    var today2 = new Date();
    var h2 = today2.getHours();
    var m2 = today2.getMinutes();
    var s2 = today2.getSeconds();
    m2 = checkTime2(m2);
    s2 = checkTime2(s2);
    document.getElementById('player_clock').innerHTML =
    h2 + ":" + m2 + ":" + s2;
    var t2 = setTimeout(startTime2, 500);
}
function checkTime2(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
