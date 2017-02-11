/**
* aqiData，存储用户输入的空气指数数据
* 示例格式：
* aqiData = {
*    "北京": 90,
*    "上海": 40
* };
*/
var aqiData = {};
var btn_add = document.getElementById("btn_add");
/**
* 从用户输入中获取数据，向aqiData中增加一条数据
* 然后渲染aqi-list列表，增加新增的数据
*/
function addAqiData() {
	var input_city = document.getElementById("aqi-city-input").value;
	var input_value = document.getElementById("aqi-value-input").value;
	//trim方法
	input_city = input_city.replace(/(^\s*)|(\s*$)/g,"");
	input_value = input_value.replace(/(^\s*)|(\s*$)/g,"");
	if (!input_city.match(/(^[a-zA-Z\u4e00-\u9fa5]+$)/)) {
		alert("城市名必须为中英文字符");
		return;
	}
	if (!input_value.match(/^[0-9]+$/)) {
		alert("空气质量指数必须为整数");
		return;
	}
	aqiData[input_city] = input_value;
	console.log(aqiData);

	return aqiData;
}

/**
* 渲染aqi-table表格
*/
function renderAqiList() {
	var aqi_table = document.getElementById("aqi-table");
	var aqi_th = document.createElement("tr");
	//点击添加前判断是否有tr，如果有就清空table
	if (aqi_table.getElementsByTagName("tr")) {
		aqi_table.innerHTML = null;
	}
	// <td>城市</td><td>空气质量</td><td>操作</td>
	aqi_th.innerHTML = "<th>城市</th><th>空气质量</th><th>操作</th>";
	aqi_table.appendChild(aqi_th);
	//用for in遍历json对象
	for (var key in aqiData){
		// console.log(key);
		// console.log(aqiData[key]);
		var aqi_tr = document.createElement("tr");
		// <td>北京</td><td>90</td><td><button>删除</button></td>
		aqi_tr.innerHTML = "<td>"+key+"</td><td>"+aqiData[key]+"</td><td><button>删除</button></td>";
		aqi_table.appendChild(aqi_tr);
	}
	
	
}
function check_input(){
	var input_city = document.getElementById("aqi-city-input").value;
	var input_value = document.getElementById("aqi-value-input").value;
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
	
}
	


function init() {

	// 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
	btn_add.onclick = function(){
		addAqiData();
		renderAqiList();
		var aqi_table = document.getElementById("aqi-table");
		var btns = aqi_table.getElementsByTagName("button");

		for (var i = 0; i < btns.length; i++) {
			btns[i].onclick = function(){
				var del_city = this.parentNode.parentNode.firstChild.innerHTML;
				//删除json中的城市数据
				delete aqiData[del_city];
				//先隐藏这个删除的行，等点击添加时，会清除删掉的城市
				this.parentNode.parentNode.style.display = "none";

			};
		}
	};
	// 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();

