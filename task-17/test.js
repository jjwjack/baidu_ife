

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
//获取城市select标签
var city_select = document.getElementById("city_select");
var cities = ["北京", "天津", "上海", "广州"];
//先定义被选中的城市，不然radioTime改变时显示未定义
var city_selected;
//获取radio的值，日周月切换
var radioTime = document.getElementsByName("gra_time");
//option的onchange事件，选择城市，画出图表
city_select.onchange = function(){
	
	city_selected = city_select.options[city_select.selectedIndex].text;
	switch(true){
		case radioTime[0].checked:
			aqi_chart_wrap.innerHTML = null;
			drawDay(city_selected);
			break;
		case radioTime[1].checked:
			aqi_chart_wrap.innerHTML = null;
			drawWeek(city_selected);
			break;
		case radioTime[2].checked:
			// aqi_chart_wrap.innerHTML = null;
			// drawDay(city_selected);
			break;
		default:
			console.log("error");
	}
		

	// for (var i = 0; i < radioTime.length; i++) {
	// 	if (radioTime[i].checked) {
	// 		// aqi_chart_wrap.innerHTML = null;
	// 		// drawDay(city_selected);
	// 		console.log("checked");
	// 	}else{
	// 		console.log(radioTime[i]);
	// 	}
	// }
	
};
//切换时间，画出图表
// function radioTime(){
	for (var i = 0; i < radioTime.length; i++) {
		radioTime[i].onclick = function(){
			if (this.value == "week") {
				aqi_chart_wrap.innerHTML = null;
				drawWeek(city_selected);
			}else if(this.value == "day"){
				aqi_chart_wrap.innerHTML = null;
				drawDay(city_selected);
			}else{
				console.log("月");
			}
		};
		
	}
// }

//生成日期和aqi,添加进aqiSourceData表
function createSource(){
	for (var i = 0; i < cities.length; i++) {
		aqiSourceData[cities[i]] = createAqi();
	}
}
//调用createSource，生成json格式资源
createSource();
//随机生成aqi数值
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
//随机生成颜色16进制值
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
//参数为城市名，画出每天的图表
function drawDay(city){
	var aqi_city = aqiSourceData[city];
	var i_city = 0;
	for(var key in aqiSourceData[city]){
		var aqi_day = document.createElement("div");
		aqi_day.innerHTML = "<div style='width:10px; height:"+aqiSourceData[city][key]+"px; background-color: " + createColor() +"; position:absolute; bottom:0; left:"+(100+i_city*10)+"px;' title='123'>"
		i_city += 1;
		aqi_chart_wrap.appendChild(aqi_day);
	}
}
//参数为城市名，画出每周的图表
function drawWeek(city){
	var aqi_city = aqiSourceData[city];
	var week1=week2=week3=week4=week5=0;
	var i = 1;
	for(var key in aqi_city){
		// var aqi_week = document.createElement("div");
		switch(true){
			case i<=7:
				week1 += aqi_city[key];
				break;
			case i<=14 :
				week2 += aqi_city[key];
				break;
			case i<=21:
				week3 += aqi_city[key];
				break;
			case i<=28:
				week4 += aqi_city[key];
				break;
			case i<=32:
				week5 += aqi_city[key];
				break;
			default:
				console.log("week error");
		}
		i += 1;
	}
	var weeks = [week1/7,week2/7,week3/7,week4/7,week5/(i-1-28)];
	for (var i = 0; i < weeks.length; i++) {
		var aqi_week = document.createElement("div");
		aqi_week.innerHTML = "<div style = 'width:70px; height:"+ weeks[i]+"px; background-color:"+ createColor() +"; position:absolute; bottom:0; left:"+ (100+i*70) +"px;'></div>";
		aqi_chart_wrap.appendChild(aqi_week);
	}
	
}


function init(){
	drawDay();
	// drawWeek();
}
// init();

