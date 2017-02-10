/**
* aqiData，存储用户输入的空气指数数据
* 示例格式：
* aqiData = {
*    "北京": 90,
*    "上海": 40
* };
*/
var aqiData = {};

/**
* 从用户输入中获取数据，向aqiData中增加一条数据
* 然后渲染aqi-list列表，增加新增的数据
*/
function addAqiData() {
	var input_city = document.getElementById("aqi-city-input").value;
	var input_value = document.getElementById("aqi-value-input").value;
	aqiData['"'+input_city+'"'] = input_value;
	// aqiData.push({input_city,input_value});
	return aqiData;
	// console.log(aqiData);
}
var btn_add = document.getElementById("btn_add");
btn_add.onclick = function(){
	addAqiData();
};

/**
* 渲染aqi-table表格
*/
function renderAqiList() {
	var aqi_table = document.getElementById("aqi-table");
	var aqi_th = document.createElement("th");
	// <td>城市</td><td>空气质量</td><td>操作</td>
	aqi_th.innerHTML = "<td>城市</td><td>空气质量</td><td>操作</td>";
	aqi_table.appendChild(aqi_th);
	for (var i = 0; i < aqiData.length; i++) {
		var aqi_tr = document.createElement("tr");
		// <td>北京</td><td>90</td><td><button>删除</button></td>
		aqi_tr.innerHTML = "<td>"+aqiData[i][0]+"</td><td>"+aqiData[i][1]+"</td><td><button>删除</button></td>";
		aqi_table.appendChild(aqi_tr);
	}
	
}



/**
* 点击add-btn时的处理逻辑
* 获取用户输入，更新数据，并进行页面呈现的更新
*/
function addBtnHandle() {
	addAqiData();
	renderAqiList();
}

/**
* 点击各个删除按钮的时候的处理逻辑
* 获取哪个城市数据被删，删除数据，更新表格显示
*/
function delBtnHandle() {
	// do sth.

	renderAqiList();
}

function init() {

	// 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
	
	// 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();

