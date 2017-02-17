

var aqiSourceData = {
	// "北京":{
	// 	"2016-01-01":10,
	// 	"2016-01-02":20,
	// 	"2016-01-03":30,
	// 	"2016-01-04":40,
	// 	"2016-01-05":50,
	// 	"2016-01-06":40,
	// 	"2016-01-07":30,
	// 	"2016-01-08":20,
	// 	"2016-01-09":70,
	// 	"2016-01-10":10
	// },
	// "天津":{
	// 	"2016-01-01":10,
	// 	"2016-01-02":20,
	// 	"2016-01-03":30,
	// 	"2016-01-04":40,
	// 	"2016-01-05":50,
	// 	"2016-01-06":40,
	// 	"2016-01-07":30,
	// 	"2016-01-08":20,
	// 	"2016-01-09":70,
	// 	"2016-01-10":10
	// }

};
//获取chart外框div
var aqi_chart_wrap = document.getElementById("aqi_chart_wrap");
var city_select = document.getElementById("city_select");

// console.log(city_selected);
var cities = ["北京", "天津", "上海", "广州"];
//选择城市，画出图表
city_select.onchange = function(){
	aqi_chart_wrap.innerHTML = null;
	var city_selected = city_select.options[city_select.selectedIndex].text;
	chartDay(city_selected);
	init();
};
//生成日期和aqi,添加进aqiSourceData表
function createSource(){
	for (var i = 0; i < cities.length; i++) {
		aqiSourceData[cities[i]] = createAqi();
	}
}
createSource();
// console.log(aqiSourceData["北京"]["2016-01-01"]);
function createAqi(){
	var myDate = [];
	var myAqi = [];
	var json_aqi = {};
	for (var i = 1; i < 32; i++) {
		myDate[i-1] = "2016-01-" + (i<10?("0"+i):i);
		myAqi[i-1] = Math.ceil(Math.random()*400);
		json_aqi[myDate[i-1]] = myAqi[i-1];
	}
	return json_aqi;
}

// console.log(json_city);

function createColor(){
	//生成颜色
	var colorNum = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
	// var strColor = "#";
	var strColor = "#";
	var strColor2 = [];
	var strColor3 = [];
	for (var i = 0; i < 6; i++) {
		var num = Math.ceil(Math.random()*15);
		strColor += colorNum[num];
		// strColor2.push(num);
		// strColor3.push(colorNum[num]);
	}
	return strColor;
	// console.log(strColor);
	// console.log(strColor2);
	// console.log(strColor3);
	
}
// createColor();
function chartDay(city){
	var aqi_city = aqiSourceData[city];
	console.log(aqi_city[0]);
	var i_city = 0;
	for(var key in aqiSourceData[city]){
		var aqi_day = document.createElement("div");
		// console.log(aqiSourceData["北京"][1]);
		// aqi_day.innerHTML = null;
		aqi_day.innerHTML = "<div style='width:10px; height:"+aqiSourceData[city][key]+"px; background-color: " + createColor() +"; position:absolute; bottom:0; left:"+(100+i_city*10)+"px;' title='123'>"
		i_city += 1;
		// aqi_day.innerHTML = "<div style='width:10px; height:111px; background-color: #f00; position:absolute; bottom:0; left:111px;' title='123'></div>";
		// console.log(aqi_day);
		aqi_chart_wrap.appendChild(aqi_day);
	}
}


function init(){
	chartDay();
}
// init();

