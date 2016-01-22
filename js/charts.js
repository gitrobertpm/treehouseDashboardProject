/*===============================================
CHARTS.JS
===============================================*/
"use strict";

var width = window.innerWidth;
var height = window.innerHeight;

/*==============================================
TRAFFIC
==============================================*/
// HOURLY CHART
var hourlyTraffic = function() {
	var ctx = document.getElementById("cHourly").getContext("2d");

	var data = {
	 labels: ["1 AM - 6 AM", "7 AM - 12 PM", "1 PM - 6 PM", "7 PM - 12 AM"],
	 datasets: [{
	   label: "Traffic",
	   fillColor: "rgba(225,225,245,0.5)",
	   strokeColor: "rgba(180,180,235,1)",
	   pointColor: "rgb(250,250,250)",
	   pointStrokeColor: "rgba(120,120,190,1)",
	   pointHighlightFill: "rgb(130,220,130)",
	   pointHighlightStroke: "rgb(130,220,130)",
	   data: [28, 48, 40, 65]
	 }]
	};
	
	var options = {
		responsive: true,
		maintainAspectRatio: false,
		bezierCurve : false,
		pointDotRadius : 10,
		pointDotStrokeWidth : 3
	};
	
	var MyNewChart = new Chart(ctx).Line(data, options);
	
};

hourlyTraffic();




// DAILY CHART
var dailyTraffic = function() {
	var ctx = document.getElementById("cDaily").getContext("2d");

	var data = {
	 labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	 datasets: [{
	   label: "Traffic",
	   fillColor: "rgba(225,225,245,0.5)",
	   strokeColor: "rgba(180,180,235,1)",
	   pointColor: "rgb(250,250,250)",
	   pointStrokeColor: "rgba(120,120,190,1)",
	   pointHighlightFill: "rgb(130,220,130)",
	   pointHighlightStroke: "rgb(130,220,130)",
	   data: [128, 148, 140, 135, 175, 150, 200]
	 }]
	};
	
	var options = {
		responsive: true,
		maintainAspectRatio: false,
		bezierCurve : false,
		pointDotRadius : 10,
		pointDotStrokeWidth : 3
	};
	
	var MyNewChart = new Chart(ctx).Line(data, options);
	
};

dailyTraffic();




// WEEKLY CHART
var weeklyTraffic = function() {
	var ctx = document.getElementById("cWeekly").getContext("2d");

	var data = {
	 labels: ["1-7", "8-14", "15-22", "23-30"],
	 datasets: [{
	   label: "Traffic",
	   fillColor: "rgba(225,225,245,0.5)",
	   strokeColor: "rgba(180,180,235,1)",
	   pointColor: "rgb(250,250,250)",
	   pointStrokeColor: "rgba(120,120,190,1)",
	   pointHighlightFill: "rgb(130,220,130)",
	   pointHighlightStroke: "rgb(130,220,130)",
	   data: [728, 748, 740, 800]
	 }]
	};
	
	var options = {
		responsive: true,
		maintainAspectRatio: false,
		bezierCurve : false,
		pointDotRadius : 10,
		pointDotStrokeWidth : 3
	};
	
	var MyNewChart = new Chart(ctx).Line(data, options);
	
};

weeklyTraffic();





// MONTHLY CHART
var monthlyTraffic = function() {
	var ctx = document.getElementById("cMonthly").getContext("2d");

	var data = {
	 labels: ["January", "February", "March", "April", "May", "June", "July"],
	 datasets: [{
	   label: "Traffic",
	   fillColor: "rgba(225,225,245,0.5)",
	   strokeColor: "rgba(180,180,235,1)",
	   pointColor: "rgb(250,250,250)",
	   pointStrokeColor: "rgba(120,120,190,1)",
	   pointHighlightFill: "rgb(130,220,130)",
	   pointHighlightStroke: "rgb(130,220,130)",
	   data: [2800, 2848, 2840, 2819, 2886, 2827, 2990]
	 }]
	};
	
	var options = {
		responsive: true,
		maintainAspectRatio: false,
		bezierCurve : false,
		pointDotRadius : 10,
		pointDotStrokeWidth : 3,
		animation: false
	};
	
	var MyNewChart = new Chart(ctx).Line(data, options);
	
};

monthlyTraffic();

//* ======================================== *//





/*==============================================
DAILY TRAFFIC
===============================================*/
var dailyTrafGraph = function() {
	var ctx = document.getElementById("cDailyTraffic").getContext("2d");

	var data = {
	 labels: ["S", "M", "T", "W", "T", "F", "S"],
	 datasets: [{
	   label: "Daily Traffic",
	   fillColor: "rgba(120,120,190,1)",
	   highlightFill: "rgb(130,220,130)",
	   highlightStroke: "rgb(130,220,130)",
	   data: [128, 148, 140, 135, 175, 150, 200]
	 }]
	};
	
	var options = {
		responsive: true,
		maintainAspectRatio: false,
		scaleBeginAtZero : false,
		barShowStroke : false,
		barValueSpacing : 10,
		animation: false
	};
	
	var myBarChart = new Chart(ctx).Bar(data, options);
	
};

dailyTrafGraph();
//* ======================================== *//






/*==============================================
MOBILE USERS
===============================================*/
var mobileUsersDonut = function() {
	var ctx = document.getElementById("cMobileUsers").getContext("2d");

	var data = [
	    {
		   value: 300,
		   color:"rgb(120,120,190)",
		   highlight: "rgb(150,150,220)",
		   label: "Desktop"
	    },
	    {
		   value: 50,
		   color: "rgb(130,200,145)",
		   highlight: "rgb(160,230,175)",
		   label: "Tablets"
	    },
	    {
		   value: 100,
		   color: "rgb(120,180,190)",
		   highlight: "rgb(130,210,220)",
		   label: "Mobile"
	    }
	]

	
	var options = {
		responsive: true,
		maintainAspectRatio: false,
		segmentShowStroke : false,
		percentageInnerCutout : 60,
		legendTemplate: true,
		animation: false
	};
	
	var myDoughnutChart = new Chart(ctx).Doughnut(data,options);
	
};

mobileUsersDonut();

//* ======================================== *//

