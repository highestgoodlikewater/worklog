var citychoose;
var map = new BMap.Map("map");   
function loadJScript() {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "http://api.map.baidu.com/api?v=2.0&ak=lIXbW84tKu6oNCj0bbgTnau7&callback=init";
	document.body.appendChild(script);
}
function init() {
	//ar point = new BMap.Point(116.404, 39.915); // 创建点坐标
	map.addEventListener("click",function(e){
	map.clearOverlays();  
	var marker = new BMap.Marker(new BMap.Point(e.point.lng,e.point.lat));
	map.addOverlay(marker);
	$("#dituAPI").val(e.point.lng+","+e.point.lat);
    });
	map.centerAndZoom(citychoose,11);  
	map.enableScrollWheelZoom();
    map.enableKeyboard();
    map.enableDragging();
    map.enableDoubleClickZoom()               
	map.enableScrollWheelZoom();                 //启用滚轮放大缩小
 } 
var myCity = new BMap.LocalCity();
window.onload = function(){
	myCity.get(myFun);
	setTimeout("$('#mapModal').css('display','none')",500);
	setTimeout("$('#mapModal').css('z-index','1040')",500);
};
var local = new BMap.LocalSearch(map, {
	renderOptions:{map: map}
});

$(".ditubtn").click(function(e) {
	btnsearch($("#ditu").val());
});
$('#map-btn-cancel').click(function(){
	$("#dituAPI").val('');
});
$('#mapmodal-close').click(function(){
	$("#dituAPI").val('');
});

function myFun(result){
	var cityName = result.name;
	citychoose=cityName;
	loadJScript();
}
	
	// 百度地图API功能
function ditusearch(para1){  
	//local.search(para1);
	$('#mapModal').css('z-index','-1');
	$('#mapModal').css('display','block');	
	citychoose=para1;
	loadJScript();
	setTimeout("$('#mapModal').css('display','none')",500);
	setTimeout("$('#mapModal').css('z-index','1040')",500);
}

function btnsearch(para1){  
	//local.search(para1);
	citychoose=para1;
	local.search(citychoose);
	map.centerAndZoom(citychoose,11);  
	
}

