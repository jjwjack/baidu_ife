

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
//生成日期和aqi
var myDate = [];
var myAqi = [];
var json_city = {};
for (var i = 1; i < 32; i++) {
	myDate[i-1] = "2016-01-" + (i<10?("0"+i):i);
	myAqi[i-1] = Math.ceil(Math.random()*400);
	json_city[myDate[i-1]] = myAqi[i-1];
}
// console.log(json_city);
aqiSourceData["北京"] = json_city;

function getColor(){
	//生成颜色
	var colorNum = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
	var strColor = "#";
	for (var i = 0; i < 6; i++) {
		strColor += colorNum[Math.ceil(Math.random()*16)];
	}
	return strColor;
	
}
getColor();
function chartDay(){
	var aqi_beijing = aqiSourceData["北京"];
	console.log(aqi_beijing[0]);
	var i_beijing = 0;
	for(var key in aqiSourceData["北京"]){
		var aqi_day = document.createElement("div");
		// console.log(aqiSourceData["北京"][1]);
		// aqi_day.innerHTML = null;
		aqi_day.innerHTML = "<div style='width:10px; height:"+aqiSourceData["北京"][key]+"px; background-color: " + getColor() +"; position:absolute; bottom:0; left:"+(100+i_beijing*10)+"px;' title='123'>"
		i_beijing += 1;
		// aqi_day.innerHTML = "<div style='width:10px; height:111px; background-color: #f00; position:absolute; bottom:0; left:111px;' title='123'></div>";
		// console.log(aqi_day);
		aqi_chart_wrap.appendChild(aqi_day);
	}
}


function init(){
	chartDay();
}
init();

