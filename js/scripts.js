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

	// OPEN NOTIFICATION MODAL
	bell[0].onclick = function() {
		modalNav[0].style.display = "block";
	};

	// CLOSE NOTIFICATION MODAL
	modalClose[0].onclick = function() {
		modalNav[0].style.display = "none";	
		notificationIndicator[0].style.display = "none";
	};

	// CLOSE NOTIFICATION MODAL BUT LEAVE INDICATOR LIGHT ON
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
	
	// MAKE RESPONSIVE NAV STICK ON SCROLL
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
  NAV NOTIFICATION LIGHT
==================================================================*/
var linkLighterLoop = function () {
	var navLink = document.getElementsByClassName("navLink");
	var navIndicator = document.getElementsByClassName("navIndicator");
	var classes = ["niFirst", "niSecond", "niThird", "niFourth"];

	// GRAB NAV LINKS AND MAKE THEM CLICKABLE TO MOVE NAV INDICATOR LIGHT 
	var linkLighter = function (i, klass) {
		navLink[i].onclick = function() {
			navIndicator[0].classList.remove(navIndicator[0].classList[1]);
			navIndicator[0].classList.add(klass);
		}
	};

	// LOOP THROUGH NAV LINKS AND CALL ABOVE FUNCTION ON EACH
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
	
	// CLOSE ALERT
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
	
	// LOOP THROUGH UL AND MAKE EACH CLICKABLE
	for (var i = 0; i < trafficDuration.length; i++) {
		trafficDuration[i].onclick = function() {
			
			// LOOP THROUGH LI - REMOVE SELECTED CLASS FROM ELEMENT - HIDE ALL CHARTS 
			for(var j = 0; j < trafficDuration.length; j++) {
				trafficDuration[j].classList.remove(trafficDuration[j].classList[2]);
				trafficCharts[j].style.display = "none";
			}
			
			// ADD CLASS SELECTED TO THIS LI
			this.classList.add("durationSelected");
			
			// MATCH CHART TO LI AND DISPLAY
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
	
	// OPEN MESSAGE USER MODAL
	messageUserSubmit[0].onclick = function() {
		modalMessageUser[0].style.display = "block";
		var x = document.forms["messageUserForm"]["messageUserCerch"].value;
		
		// CHECK INPUT - DISPLAY ERROR MESSAGE OR CONFIRMATION MASSEGE
		if (x == null || x == "") {
			modalMessageUserEr[0].style.display = "block";
		} else if (x != null && x != "") {
			modalMessageUserNoEr[0].style.display = "block";
		}
	};
	
	// CLOSE MODAL - RESET FORM INPUTS
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
	var mainWrap = document.getElementsByClassName("mainWrap");
	var mobileUsersLegend = document.getElementsByClassName("mobileUsersLegend");
	var dropDownTimezone = document.getElementsByClassName("dropDownTimezone");
	var newMembersDate = document.getElementsByClassName("newMembersDate");
	var recentActivityAgo = document.getElementsByClassName("recentActivityAgo");
	var settingsP = document.getElementsByClassName("settingsP");
	var settingsThemeHintWrap = document.getElementsByClassName("settingsThemeHintWrap");
	var settingsThemeHint = document.getElementsByClassName("settingsThemeHint");
	var h2 = document.getElementsByTagName("h2");
	var h3 = document.getElementsByTagName("h3");
	var p = document.getElementsByTagName("p");
	var li = document.getElementsByTagName("li");
	var inPut = document.getElementsByTagName("input");
	
	// LOOP THROUGH SETTINGS SWITCHES
	for (var i = 0; i < switchWrap.length; i++) {
		
		// STICK A NUMBERED HAT ON EACH SWITCH
		switchWrap[i].hat = i;
		
		// MAKE EACH SWITCH CLICKABLE
		switchWrap[i].onclick = function() {
			
			// MATCH SWITCH HAT TO SWITCH LABEL AND SWITCH KNOB AND CHANGE STYLING TO TOGGLE SWITCH
			if (switchLabel[this.hat].innerHTML === "OFF") {
				switchLabel[this.hat].setAttribute("style", "text-align: left; margin-left: 5px");
				switchLabel[this.hat].innerHTML = "ON";
				switchKnob[this.hat].setAttribute("style", "float: right");
				
				// CHANGE STYLE TO DARK THEME
				if (this.hat === 4) {
					
					// ADD THEME TO LOCAL STORAGE
					localStorage.setItem("theme", "dark");
					
					// HIDE SETINGS HINT
					settingsThemeHintWrap[0].style.display = "none";
					localStorage.setItem("hint", "taken");
					
					// DARK THEM STYLINGS
					mainWrap[0].style.background = "rgb(50,50,50)";
					h2[0].style.color = "rgb(200,200,200)";
					mobileUsersLegend[0].style.background = "rgba(50,50,50,0.7)";
					
					for (var h = 0; h < newMembersDate.length; h++) {
						newMembersDate[h].style.color = "rgb(120,120,190)";
					}
					
					for (var g = 0; g < recentActivityAgo.length; g++) {
						recentActivityAgo[g].style.color = "rgb(120,120,190)";
					}
					
					for (var k = 0; k < h3.length; k++) {
						h3[k].style.color = "rgb(200,200,200)";
					}
					
					for (var m = 0; m < li.length; m++) {
						li[m].style.color = "rgb(200,200,200)";
					}
					
					for (var n = 0; n < p.length; n++) {
						p[n].style.color = "rgb(200,200,200)";
					}
					
					for (var q = 0; q < settingsP.length; q++) {
						settingsP[q].style.color = "rgb(120,120,190)";
					}
				}
			} else {
				switchLabel[this.hat].setAttribute("style", "text-align: right; margin-left: 12px");
				switchLabel[this.hat].innerHTML = "OFF";
				switchKnob[this.hat].setAttribute("style", "float: left");
				
				// CHANGE STYLE TO LIGHT THEME
				if (this.hat === 4) {
					
					// ADD THEME TO LOCAL STORAGE
					localStorage.setItem("theme", "light");
					
					// VANISH SETINGS HINT
					settingsThemeHintWrap[0].style.display = "none";
					
					// LIGHT THEM STYLINGS
					mainWrap[0].style.background = "rgb(250,250,250)";
					h2[0].style.color = "rgb(100,100,100)";
					mobileUsersLegend[0].style.background = "rgba(250,250,250,0.7)";
					
					for (var hh = 0; hh < newMembersDate.length; hh++) {
						newMembersDate[hh].style.color = "rgb(100,100,100)";
					}
					
					for (var gg = 0; gg < recentActivityAgo.length; gg++) {
						recentActivityAgo[gg].style.color = "rgb(100,100,100)";
					}
					
					for (var kk = 0; kk < h3.length; kk++) {
						h3[kk].style.color = "rgb(100,100,100)";
					}
					
					for (var mm = 0; mm < li.length; mm++) {
						li[mm].style.color = "rgb(100,100,100)";
					}
					
					for (var nn = 0; nn < p.length; nn++) {
						p[nn].style.color = "rgb(100,100,100)";
					}
					
					for (var qq = 0; qq < settingsP.length; qq++) {
						settingsP[qq].style.color = "rgb(100,100,100)";
					}
				}
			}
		};
	}
	
	// LOOP THROUGH SWITCHES AND SET OFF TO OFF
	if (localStorage.getItem("theme") === "dark") {
		
		// SET DARK THEME IF "DARK" IS IN ITEM "THEME" IN LOCAL STORAGE
		mainWrap[0].style.background = "rgb(50,50,50)";
		h2[0].style.color = "rgb(200,200,200)";
		mobileUsersLegend[0].style.background = "rgba(50,50,50,0.7)";
		
		// HIDE, CHANGE AND SHOW SETTINGS HINT
		if (localStorage.getItem("hint") === "taken") {
			settingsThemeHintWrap[0].style.display = "block";
			settingsThemeHint[0].innerHTML = "Pretty cool, huh. <span class='hintSmiley'>: )</span> Now when you refresh the page, this message will be gone forever until you switch the theme back to light, and then refresh the page again, thanks to the awesome powers of JavaScript.";
			localStorage.setItem("hint", "done");
		} else if (localStorage.getItem("hint") === "done") {
			settingsThemeHintWrap[0].style.display = "none";
		}
		
		for (var h = 0; h < newMembersDate.length; h++) {
			newMembersDate[h].style.color = "rgb(120,120,190)";
		}
		
		for (var g = 0; g < recentActivityAgo.length; g++) {
			recentActivityAgo[g].style.color = "rgb(120,120,190)";
		}
		
		for (var k = 0; k < h3.length; k++) {
			h3[k].style.color = "rgb(200,200,200)";
		}
		
		for (var m = 0; m < li.length; m++) {
			li[m].style.color = "rgb(200,200,200)";
		}
		
		for (var n = 0; n < p.length; n++) {
			p[n].style.color = "rgb(200,200,200)";
		}
		
		for (var q = 0; q < settingsP.length; q++) {
			settingsP[q].style.color = "rgb(120,120,190)";
		}
		
		// SET SWITCHES
		for (var j = 2; j < switchWrap.length-1; j++) {
			switchLabel[j].setAttribute("style", "text-align: right; margin-left: 12px");
			switchLabel[j].innerHTML = "OFF";
			switchKnob[j].setAttribute("style", "float: left");
		}
	} else {
		// SET SWITCHES
		for (var jj = 2; jj < switchWrap.length; jj++) {
			switchLabel[jj].setAttribute("style", "text-align: right; margin-left: 12px");
			switchLabel[jj].innerHTML = "OFF";
			switchKnob[jj].setAttribute("style", "float: left");
		}
	}
};

settingsSwitches();


// LOCAL STORAGE ON TIMEZONE SELECTION
var dropDownTimezone = document.getElementsByClassName("dropDownTimezone");	
dropDownTimezone[0].onchange = function() {
	var opt = dropDownTimezone[0].selectedIndex;
	localStorage.setItem("timeZone", opt);
};

dropDownTimezone[0].selectedIndex = localStorage.getItem("timeZone");


// DISABLE CANCEL BUTTON
document.getElementsByClassName("settingsCancelButton")[0].disabled = true;
//* ======================================== *//