/*===============================================
SCRIPTS.JS
===============================================*/
"use strict";

var width = window.innerWidth;
var height = window.innerHeight;



/*==============================================
NOTIFICATION BELL
==============================================*/
var notificationBellBiz = function() {
	
	var bell = document.getElementsByClassName("bell");
	var modalNav = document.getElementsByClassName("modalNav");
	var modalClose = document.getElementsByClassName("modalClose");
	var lightOn = document.getElementsByClassName("lightOn");
	var notificationIndicator = document.getElementsByClassName("notificationIndicator");

	bell[0].onclick = function() {
		modalNav[0].style.display = "block";
	};

	modalClose[0].onclick = function() {
		modalNav[0].style.display = "none";	
		notificationIndicator[0].style.display = "none";
	};

	lightOn[0].onclick = function () {
		modalNav[0].style.display = "none";
		notificationIndicator[0].style.display = "inline-block";
	};
};

notificationBellBiz();

//* ======================================== *//



/*==============================================
STICKY NAV
==============================================*/
var stickyNav = function() {
	var navInnerWrap = document.getElementsByClassName("navInnerWrap");
	var mainWrap = document.getElementsByClassName("mainWrap");
	var distance = document.getElementsByTagName("html")[0].scrollTop;
	
	if (width < 750) {
		if (distance > 87) {
			navInnerWrap[0].style.position = "fixed";
		} else if (distance < 88) {
			navInnerWrap[0].style.position = "relative";
		}
	} else if (width > 749) {
		if (distance > 60) {
			navInnerWrap[0].style.position = "fixed";
		} else if (distance < 61) {
			navInnerWrap[0].style.position = "relative";
		}
	}
};

window.onscroll = function() {stickyNav()};

//* ======================================== *//



/*================================================================
  NAV NOTIFICATION SWITCH ON CLICK AND PERSIST AFTER WINDOW RESIZE
==================================================================*/
var linkLighterLoop = function () {
	var navLink = document.getElementsByClassName("navLink");
	var navIndicator = document.getElementsByClassName("navIndicator");

	var classes = ["niFirst", "niSecond", "niThird", "niFourth"];

	var linkLighter = function (i, klass) {
		navLink[i].onclick = function() {
			navIndicator[0].classList.remove(navIndicator[0].classList[1]);
			navIndicator[0].classList.add(klass);
			console.log(document.getElementsByTagName("html")[0].scrollTop);
		}
	};

	for (var i = 0; i < navLink.length; i++) {
		linkLighter(i, classes[i]);
	}
};

linkLighterLoop();

//* ======================================== *//





/*==============================================
DASHBOARD
==============================================*/
var dashboard = function() {
	var alertClose = document.getElementsByClassName("alertClose");
	var alertWrap = document.getElementsByClassName("alertWrap");

	alertClose[0].onclick = function() {
		alertWrap[0].style.display = "none";
	};
};

dashboard();

//* ======================================== *//





/*==============================================
TRAFFIC -- CHART CODE IN js/chart.js
==============================================*/
var trafficChartsLoop = function() {
	
	var trafficDuration = document.getElementsByClassName("trafficDuration");

	var cHourly = document.getElementById("cHourly");
	var cDaily = document.getElementById("cDaily");
	var cWeekly = document.getElementById("cWeekly");
	var cMonthly = document.getElementById("cMonthly");

	var trafficCharts = [cHourly, cDaily, cWeekly, cMonthly];
	
	for (var i = 0; i < trafficDuration.length; i++) {
		
		trafficDuration[i].onclick = function() {
			
			for(var j = 0; j < trafficDuration.length; j++) {
				trafficDuration[j].classList.remove(trafficDuration[j].classList[2]);
				trafficCharts[j].style.display = "none";
			}
			this.classList.add("durationSelected");
			
			if (this.classList[0].match(/hourly/g)) {
				cHourly.style.display = "block";
			} else if (this.classList[0].match(/daily/g)) {
				cDaily.style.display = "block";
			} else if (this.classList[0].match(/weekly/g)) {
				cWeekly.style.display = "block";
			} else if (this.classList[0].match(/monthly/g)) {
				cMonthly.style.display = "block";
			}
		};
	}
};

trafficChartsLoop();

//* ======================================== *//





/*==============================================
MESSAGE USER
===============================================*/
var sendUserMessage = function() {
	
	var messageUserSubmit = document.getElementsByClassName("messageUserSubmit");
	var modalMessageUser = document.getElementsByClassName("modalMessageUser");
	var closeModalMessageUser = document.getElementsByClassName("closeModalMessageUser");
	var modalMessageUserNoEr = document.getElementsByClassName("modalMessageUserNoEr");
	var modalMessageUserEr = document.getElementsByClassName("modalMessageUserEr");
	var messageUserForm = document.getElementsByClassName("messageUserForm");
	
	messageUserSubmit[0].onclick = function() {
		modalMessageUser[0].style.display = "block";
		var x = document.forms["messageUserForm"]["messageUserCerch"].value;
		
		if (x == null || x == "") {
			modalMessageUserEr[0].style.display = "block";
		} else if (x != null && x != "") {
			modalMessageUserNoEr[0].style.display = "block";
		}
	};
	
	closeModalMessageUser[0].onclick = function() {
		modalMessageUser[0].style.display = "none";
		modalMessageUserEr[0].style.display = "none";
		modalMessageUserNoEr[0].style.display = "none";
		messageUserForm[0].reset();
	};
};

sendUserMessage();

//* ======================================== *//





/*==============================================
SETTINGS
===============================================*/
var settingsSwitches = function() {
	var switchWrap = document.getElementsByClassName("switchWrap");
	var switchLabel = document.getElementsByClassName("switchLabel");
	var switchKnob = document.getElementsByClassName("switchKnob");
	
	for (var i = 0; i < switchWrap.length; i++) {
		switchWrap[i].hat = i;
		switchWrap[i].onclick = function() {
			if (switchLabel[this.hat].innerHTML === "OFF") {
				switchLabel[this.hat].setAttribute("style", "text-align: left; margin-left: 5px");
				switchLabel[this.hat].innerHTML = "ON";
				switchKnob[this.hat].setAttribute("style", "float: right");
			} else {
				switchLabel[this.hat].setAttribute("style", "text-align: right; margin-left: 12px");
				switchLabel[this.hat].innerHTML = "OFF";
				switchKnob[this.hat].setAttribute("style", "float: left");
			}
		};
	}
};

settingsSwitches();

//* ======================================== *//




























