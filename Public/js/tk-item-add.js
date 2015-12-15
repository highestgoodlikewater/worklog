function initAdd(){
	//添加意向区域
	var districtNum = 0;
	$('#addaddress').click(function(){
		districtNum++;
		$("#addaddress").before('<div class="form-group col-lg-4">'+
								'	<label>意向区域</label>'+
								'	<select class="form-control" id="address'+districtNum+'-1" style="width:33%; float:left">'+
                                '    	<option>请选择</option>'+
                                '    </select>'+
                                '    <select class="form-control" id="address'+districtNum+'-2" style="width:33%; float:left">'+
                                '    	<option>请选择</option>'+
                                '    </select>'+
                                '    <select class="form-control" id="address'+districtNum+'-3" style="width:33%; float:left">'+
                                '    	<option>请选择</option>'+
                                '    </select>'+
								'</div>');
		
		var addressSelectArr = [
			document.getElementById('address'+districtNum+'-1'),
			document.getElementById('address'+districtNum+'-2'),
			document.getElementById('address'+districtNum+'-3'),
		]
		selectPickerInit(addressSelectArr,cityData3);							
	})
	
	//添加产业分类
	var industryNum = 0;
	$('#addindustry').click(function(){
		industryNum++;
		$("#addindustry").before('<div class="form-group col-lg-4">'+
								'	<label>产业分类</label>'+
								'	<select class="form-control" id="industry'+industryNum+'-1" style="width:50%; float:left">'+
                                '    	<option>请选择</option>'+
                                '    </select>'+
                                '    <select class="form-control" id="industry'+industryNum+'-2" style="width:50%; float:left">'+
                                '    	<option>请选择</option>'+
                                '    </select>'+
								'</div>');
		
		var industrySelectArr = [
			document.getElementById('industry'+industryNum+'-1'),
			document.getElementById('industry'+industryNum+'-2'),
		]
		selectPickerInit(industrySelectArr,industryData);							
	})
	
	//添加加联系人
	var personNum = 0;
	$('#addperson').click(function(){
		personNum++;
		$("#addperson").before(
		'<div class="col-lg-11" style="margin:15px 10px;border-top:1px dashed #BDC4C9 ;"></div>'+
		'<div class="col-lg-6">'+
			'<div class="form-group col-lg-5"><label>联系人</label><input type="text" class="form-control" id="name'+personNum+'" placeholder="请输入联系人姓名"></div>'+
			'<div class="form-group col-lg-5"><label>职务</label><input type="text" class="form-control" id="zhiwu'+personNum+'" placeholder="请输联系人职务"></div>'+
		'</div>'+
		'<div class="col-lg-6">'+
			'<div class="form-group col-lg-5"><label>手机</label><input type="text" class="form-control" id="mobile'+personNum+'" placeholder="请输联系人入手机号码"></div>'+
			'<div class="form-group col-lg-5"><label>邮箱</label><input type="text" class="form-control" id="email'+personNum+'" placeholder="请输邮箱地址"></div>'+
		'</div>'+
			'<div class="col-lg-6">'+
				'<div class="form-group col-lg-2"><label>座机</label><input type="tel" class="form-control" id="quhao'+personNum+'" placeholder="区号"></div>'+
				'<div class="form-group col-lg-5"><label>&nbsp;</label><div class="input-group"><span class="input-group-addon">-</span><input type="tel" class="form-control" id="zuoji'+personNum+'" placeholder="座机号"></div></div>'+
				'<div class="form-group col-lg-3"><label>&nbsp;</label><div class="input-group"><span class="input-group-addon">-</span><input type="tel" class="form-control" id="fenji'+personNum+'" placeholder="分机号"></div></div>'+
			'</div>'+
			'<div class="col-lg-6"><div class="form-group col-lg-10"><label>备注</label><input type="text" class="form-control" id="remark0" placeholder="请输入备注"></div>'+
		'</div>');
		
	})
	
	
}
