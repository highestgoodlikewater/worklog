/**
 * time:2015-09-15
 * by:qin
 * 第一个参数是select数组
 * 第二个参数是为select赋值的数据
 * ##要求select必须有一个默认的option,不然会出错
 * 只适用于二级三级下拉，其他多级下拉还没做，等后续更新...
 * **/
function selectPickerInit (selectArr,data){
	this.selectArr = selectArr;
	this.data = data;
	this.addOption = addOption;
	var length = this.selectArr.length;
	//对第一个select填充数据
	for(var i = 0; i < data.length; i++){
		this.addOption(selectArr[0],data[i]);
	}
	//设置二级联动
	this.selectArr[0].onchange = changeSelect2;
	
	
	function changeSelect2(){
		selectObj1 = selectArr[0];
		selectObj2 = selectArr[1];
		selectObj3 = selectArr[2];
		selectObj2.onchange = null;
		selectObj2.options.length = 1;
		if(selectObj1.selectedIndex == -1) return;
		if(selectObj1.selectedIndex > 0){
			var item = data[selectObj1.selectedIndex-1].children;
			for(var i=0; i<item.length; i++)
			{
				addOption(selectObj2,item[i]);
			}
			selectObj2.selectedIndex = 1;
			
			//设置三级联动
			if(length > 2){
				changeSelect3();
				selectObj2.onchange = changeSelect3;
			}
		}else{
			//清除后来添加的第三级option
			removeOption(selectObj3);
		}
	}
	
	function changeSelect3(){
		selectObj1 = selectArr[0];
		selectObj2 = selectArr[1];
		selectObj3 = selectArr[2];
		selectObj3.options.length = 1;
		if(selectObj2.selectedIndex == -1) return;
		var item = data[selectObj1.selectedIndex-1].children[selectObj2.selectedIndex-1].children;
		for(var i=0; i<item.length; i++)
		{
			addOption(selectObj3,item[i]);
		}
		selectObj3.selectedIndex = 1;
	}
	
	function addOption(addressEl, obj){
		var option = document.createElement("option");
		addressEl.options.add(option);
		option.innerText = obj.text;
		option.value = obj.value;
	}
	
	function removeOption(addressEl){
		var n = addressEl.options.length;
		
		for(var i = n; i > 0; i --){
			addressEl.remove(i);
		}
		addressEl.selectedIndex = 0;
	}
	
}


