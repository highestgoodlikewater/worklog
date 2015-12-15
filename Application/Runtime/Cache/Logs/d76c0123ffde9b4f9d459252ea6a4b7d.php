<?php if (!defined('THINK_PATH')) exit();?>  <!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<title>Centaurus - Bootstrap Admin Template</title>

		<!-- bootstrap -->
		<link rel="stylesheet" type="text/css" href="/Logs/Public/css/bootstrap/bootstrap.css" />

		<!-- RTL support - for demo only -->
		<script src="/Logs/Public/js/demo-rtl.js"></script>

		<link rel="stylesheet" type="text/css" href="/Logs/Public/css/base.css" />
		<link rel="stylesheet" type="text/css" href="/Logs/Public/css/user.css" />
		<!-- libraries -->
		<link rel="stylesheet" type="text/css" href="/Logs/Public/css/libs/font-awesome.css" />

		<!-- global styles -->
		<link rel="stylesheet" type="text/css" href="/Logs/Public/css/compiled/theme_styles.css" />

		<!-- this page specific styles -->
		<link rel="stylesheet" href="/Logs/Public/css/libs/datepicker.css" type="text/css" />
		<link rel="stylesheet" href="/Logs/Public/css/libs/daterangepicker.css" type="text/css" />
		<link rel="stylesheet" href="/Logs/Public/css/libs/bootstrap-timepicker.css" type="text/css" />
		<link rel="stylesheet" type="text/css" href="/Logs/Public/css/libs/nifty-component.css"/>

		<link rel="stylesheet" href="/Logs/Public/css/libs/fullcalendar.css" type="text/css" />
    	<link rel="stylesheet" href="/Logs/Public/css/libs/fullcalendar.print.css" type="text/css" media="print" />
    	<link rel="stylesheet" href="/Logs/Public/css/compiled/calendar.css" type="text/css" media="screen" />

		<!-- google font libraries -->

		<!--[if lt IE 9]>
		<script src="js/html5shiv.js"></script>
		<script src="js/respond.min.js"></script>
	<![endif]-->
	</head>

	<body class="pace-done theme-blue">	
		<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="background-color: rgba(29, 29, 29, 0.77);">
			<div class="md-content" style="width:30%;top:20%">
			  	<div class="modal-header">
					<button id="closeModal" class="md-close close">&times;</button>
					<h4 class="modal-title">添加计划/总结</h4>
				</div>
				<div class="modal-body">
					<form id="logForm" role="form">
						<div class="frome-group" style="display:none">
						<input id="eventId" name="id">
						</div>
						<div class="frome-group" style="display:none">
						<input id="eventType" name="eventType">
						</div>
						<div class="form-group">
							<label for="exampleInputEmail1">开始时间</label>
							<input class="form-control" id="startTime" name="startTime" placeholder="startTime">
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">结束时间</label>
							<input class="form-control" id="endTime" name="endTime" placeholder="endTime">
						</div>
						<div class="form-group">
							<label for="exampleTextarea">内容</label>
							<textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" onclick="removeEvent()" class="btn btn-primary">清除</button>
					<button type="button" onclick="submitForm()" class="btn btn-primary">保存</button>
				</div>
			</div>
		</div>

		<div id="theme-wrapper" id="top">
			<header class="navbar" id="header-navbar">
				<div class="container">
					<a href="index.html" id="logo" class="navbar-brand  ">
						<!-- <img src="img/logo.png" alt="" class="normal-logo logo-white"/>
					<img src="img/logo-black.png" alt="" class="normal-logo logo-black"/>
					<img src="img/logo-small.png" alt="" class="small-logo   hidden"/> -->
						招商网PMS
					</a>
					<div class="clearfix">
						<div class="nav-no-collapse navbar-left pull-left  ">
							<ul class="nav navbar-nav pull-left">
								<li>
									<a class="btn" id="make-small-nav">
										<i class="fa fa-bars"></i>
									</a>
								</li>
							</ul>
						</div>
						<div class="nav-no-collapse navbar-left pull-left hidden-xxs ">
							<ul class="nav navbar-nav pull-left">
								<li class="dropdown   "><a href="pms-index.html"><span>首页</span></a>
								</li>
								<li class="dropdown   "><a href="pms-search.html"><span>土地</span></a>
								</li>
								<li class="dropdown   "><a href="pms-project-view.html"><span>厂房</span></a>
								</li>
								<li class="dropdown   "><a><span>写字楼</span></a>
								</li>
								<li class="dropdown  "><a><span>注册</span></a>
								</li>
								<li class="dropdown   "><a href="pms-usr-add.html"><span>商业</span></a>
								</li>
								<li class="dropdown   "><a><span>单位</span></a>
								</li>
								<li class="dropdown   "><a><span>办公</span></a>
								</li>
							</ul>
						</div>

						<div class="nav-no-collapse pull-right" id="header-nav">
							<ul class="nav navbar-nav pull-right">
								<li class="mobile-search">
									<a class="btn">
										<i class="fa fa-search"></i> 搜素
									</a>
									<div class="drowdown-search">
										<form role="search">
											<div class="form-group">
												<input type="text" class="form-control" placeholder="Search...">
												<i class="fa fa-search nav-search-icon"></i>
											</div>
										</form>
									</div>

								</li>

								<li class="dropdown ">
									<a class="btn dropdown-toggle" data-toggle="dropdown">
										<i class="fa fa-user"></i> 个人中心<b class="caret"></b>
									</a>
									<ul class="dropdown-menu">
										<li><a href="user-profile.html"><i class="fa fa-user"></i>用户中心</a>
										</li>
										<li><a href="#"><i class="fa fa-cog"></i>修改密码</a>
										</li>
										<li><a href="#"><i class="fa fa-envelope-o"></i>消息（<span class="count">16</span>）</a>
										</li>
										<li><a href="#"><i class="fa fa-power-off"></i>注销</a>
										</li>
									</ul>
								</li>

								<li class="dropdown ">
									<a class="btn dropdown-toggle" data-toggle="dropdown">
										<i class="fa fa-envelope-o"></i>
										<span class="count">16</span> 短消息
									</a>
									<ul class="dropdown-menu notifications-list messages-list">
										<li class="pointer">
											<div class="pointer-inner">
												<div class="arrow"></div>
											</div>
										</li>
										<li class="item first-item">
											<a href="#">
												<img src="/Logs/Public/img/samples/messages-photo-1.png" alt="" />
												<span class="content">
											<span class="content-headline">
												George Clooney
											</span>
												<span class="content-text">
												Look, just because I don't be givin' no man a foot massage don't make it 
												right for Marsellus to throw...
											</span>
												</span>
												<span class="time"><i class="fa fa-clock-o"></i>13 min.</span>
											</a>
										</li>
										<li class="item-footer">
											<a href="#">
												View all messages
											</a>
										</li>
									</ul>
								</li>

								<li class="dropdown ">
									<a class="btn dropdown-toggle" data-toggle="dropdown">
										<i class="fa fa-mobile"></i> 手机版
									</a>
									<ul class="dropdown-menu notifications-list messages-list">
										<li class="pointer">
											<div class="pointer-inner">
												<div class="arrow"></div>
											</div>
										</li>
										<li class="item first-item" style="text-align: center;">
											<img src="/Logs/Public/img/secode.jpg" width="300" height="300">
										</li>
										<li class="item-footer">
											<a href="#">
												获取选址版招商app
											</a>
										</li>
									</ul>
								</li>

								<li class="dropdown ">
									<a class="btn dropdown-toggle" data-toggle="dropdown">
										<i class="fa fa-power-off"></i> 退出

									</a>
								</li>

								<li>
									<div class="nav-no-collapse navbar-left pull-left  hidden-lg" id="rock-left">
										<ul class="nav navbar-nav pull-left">
											<li>
												<a>
													<i class="fa fa-bars" id="bars"></i>
												</a>
											</li>
										</ul>
									</div>
								</li>

							</ul>
						</div>
					</div>
				</div>
			</header>
			<div id="page-wrapper" class="container">
				<div class="row">
					<div id="nav-col">
						<div id="page-wrapper" class="container1   hidden-xxs">
							<section id="col-left" class="col-left-nano">
								<div id="col-left-inner" class="col-left-nano-content">
									<div id="user-left-box" class="clearfix  ">
										<div class="user-box">
											<span class="name">
												用户
											</span>
										</div>
									</div>
									<div class="collapse navbar-collapse navbar-ex1-collapse navbar-ex1-collapse2" id="sidebar-nav">
										<ul class="nav nav-pills nav-stacked">
											<li class="active">
												<a href="#" class="dropdown-toggle">
													<i class="fa fa-table"></i>
													<span>用户管理</span>
												</a>
											</li>
											<li>
												<a href="#" class="dropdown-toggle">
													<i class="fa fa-book"></i>
													<span>添加用户</span>
												</a>
											</li>
											<li>
												<a href="#" class="dropdown-toggle">
													<i class="fa fa-paper-plane-o"></i>
													<span>验证码列表</span>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</section>
						</div>
					</div>
					<div id="content-wrapper">
						<div class="row">
							<div class="col-md-2">
								<div id="nestable">
									<ol class="dd-list">
										<li id="item-list" class="dd-item" data-id="2">
											<div id="department" class="dd-handle">
											<span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>
												部门
											</div>
											<ol class="dd-list">
												<li class="dd-item" data-id="3">
													<div class="dd-handle">
														<i class="glyphicon glyphicon-user"></i>
														人员1
													</div>
												</li>
												<li class="dd-item" data-id="4">
													<div class="dd-handle">
														<i class="glyphicon glyphicon-user"></i>
														人员2
													</div>
												</li>
											</ol>
										</li>
									</ol>
								</div>
							</div>


							<div class="col-md-10">
								<div class="main-box">
									<div class="main-box-body clearfix">
										<div id="calendar">
											
										</div>
									</div>
								</div>
							</div>
						</div>
						<footer id="footer-bar" class="row">
							<p id="footer-copyright" class="col-xs-12">
								&copy; 2015 <a href="http://www.zhaoshang.net/" target="_blank">Tanikawa.</a> Powered by <a href="http://www.xuannaer.com" target="_blank">xuannaer.com.</a>
							</p>
						</footer>
					</div>
				</div>
			</div>
		</div>
		<div id="addUserBox" style="display: none;">
			<div class="form-group col-lg-12">
				<div class="col-lg-2">
					<label>姓名</label>
					<div class="input-group">
						<input type="text" class="form-control" id="plant_height" placeholder="请输入姓名">
					</div>
				</div>
				<div class="col-lg-2">
					<label>手机号</label>
					<div class="input-group">
						<input type="text" class="form-control" id="plant_height" placeholder="请输入手机号">
					</div>
				</div>
				<div class="col-lg-2">
					<label>单位(ID)</label>
					<div class="input-group">
						<input type="text" class="form-control" id="plant_height" placeholder="请输入单位(ID)">
					</div>
				</div>
				<div class="col-lg-2">
					<label>部门(ID)</label>
					<div class="input-group">
						<input type="text" class="form-control" id="plant_height" placeholder="请输入部门(ID)">
					</div>
				</div>
			</div>
		</div>
		<script src="/Logs/Public/js/jquery.js"></script>
		<script src="/Logs/Public/js/bootstrap.js"></script>
		<script src="/Logs/Public/js/fullcalendar1.js"></script>
		<script src="/Logs/Public/js/modernizr.custom.js"></script>
		<!-- this page specific scripts -->
		<script src="/Logs/Public/js/jquery-ui.custom.min.js"></script>
		<script src="/Logs/Public/js/jquery.nestable.js"></script>
		<!-- this page specific scripts -->
		<script src="/Logs/Public/js/classie.js"></script>
		<script src="/Logs/Public/js/modalEffects.js"></script>

		<script>
			$('#userAddBut').click(function() {
				var add = $("#addUserBox").html();
				var a = $("#addUserNum").val();
				for(var i=0;i<a;i++){
					$('#beforeAddUser').before(add);
				}
			})
		</script>

	<script>
	$('#department').click(function(){
		if($("#item-list").hasClass('dd-collapsed')){
			$("#item-list").removeClass('dd-collapsed');
		}else{
			$("#item-list").addClass('dd-collapsed');
		}
	});

	function removeEvent(){
		$('#calendar').fullCalendar('removeEvents',1);
		$('#myModal').modal('hide');
	}
	/**
	 * [showModal 显示模态框事件]
	 * @param  {[type]} obj [获得的点击的view或event]
	 * @return {[type]}     [description]
	 */
	function showModal(obj = null){
		var clickEvent = obj;
		console.log(clickEvent);
		$('#myModal').modal('show');
	}

	$(document).ready(function() {

		$('#closeModal').click(function(){
			$('#myModal').modal('hide');
		}); 


		// activate Nestable for list 1
		$('#nestable').nestable({
			group: 1
		});

		/* initialize the calendar
		-----------------------------------------------------------------*/
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();

		var calendar = $('#calendar').fullCalendar({
			header: {
				left: 'prev,next, today',
				center: 'title',
				right: 'month,agendaDay'
			},
			defaultView:'agendaDay',
			monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],    
            monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],    
           	dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],    
            dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],    
            today: ["今天"],    
            firstDay: 1,    
            buttonText: {
                today: '今天',
                month: '月',
				week: '周',
				day: '日',
				prev: '<i class="fa fa-chevron-left"></i>',
				next: '<i class="fa fa-chevron-right"></i>'  
         	},
         	minTime:8,//每天开始的时间
 			maxTime:21,//每天结束的时间
			isRTL: $('body').hasClass('rtl'), //rtl support for calendar
			selectable: true,
			selectHelper: false,
			allDaySlot:true,
			allDayText:"备注",

			//event点击触发事件
			eventClick: function(calEvent, jsEvent, view) {
				showModal(calEvent);
		    },
			/**
			 * [select description] 点击或滑动格子触发事件
			 * @param  {[type]} start  [开始的时间]
			 * @param  {[type]} end    [结束的时间]
			 * @param  {[type]} allDay [是否是一整天]
			 * @return {[type]}        [description]
			 */
			select: function(start, end, allDay,jsEvent,view) {
				var type;
				if(allDay){
					//日视图中不存在allday属性
				}else{
					var width = $('#day-view-head').width();
					console.log(jsEvent.offsetX+"and the width is "+width);
					if(jsEvent.offsetX>(width/2-27)){
						type = 'summary';
						className = 'label-info';
					}else{
						type = 'plan';
						className = 'label-success';
					}
				
					$('#startTime').val($.fullCalendar.formatDate(start, "yyyy-MM-dd-HH:mm"));
					$('#endTime').val($.fullCalendar.formatDate(end, "yyyy-MM-dd-HH:mm"));
					$('#eventType').val(type);

					showModal();
				}
				calendar.fullCalendar('unselect');
			},
			timeFormat: {
				agenda: 'HH:mm{ - HH:mm}'
			},
			weekMode:'variable',
			editable: false,
			droppable: true, // this allows things to be dropped onto the calendar !!!
		});

  		var source = eval(<?php echo $monthEventsSource ?>);
  		

  		console.log(source);
		$('#calendar').fullCalendar('addEventSource',source['plan']); 
		$('#calendar').fullCalendar('addEventSource',source['summary']); 
	});
	//Modal页提交按钮触发提交数据事件
	function submitForm(){
		$.ajax({
            cache: true,
            type: "POST",
            url:"http://127.0.0.1/Logs/Public/index.php/Logs/Index/getEvent.html",
            data:$('#logForm').serialize(),
            async: false,
            error: function(request) {
                alert("Connection error");
            },
            success: function(data) {
            	var eventData = JSON.parse(data);
            	
            	var start = new Date(eventData.startTime.year, eventData.startTime.month-1, eventData.startTime.day, eventData.startTime.hour, eventData.startTime.minute);
            	var end = new Date(eventData.endTime.year, eventData.endTime.month-1, eventData.endTime.day, eventData.endTime.hour, eventData.endTime.minute);

            	console.log(start);
			 	$('#calendar').fullCalendar('renderEvent',//动态添加一个事件，可以添加className属性，自定义事件样式
			 		{
			 			id:eventData.id,
			 			title: eventData.title,
			 			start: start,
			 			end: end,
			 			allDay: false,
			 			className:eventData.className,
			 			type:eventData.type,
			 			//width:width/2,
					},
					true // make the event "stick"
				);
            }
        });
		$('#myModal').modal('hide');
	}
	</script>
	</body>

</html>