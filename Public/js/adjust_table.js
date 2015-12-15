(
	
		function adjust(obj){
	   var w  = document.body.clientWidth;  
	   if( w >= '1225'){
		   $('#table-example').css("display","block");
		   }
	   if(w<='1224'){
			$('#table-example').css("display","none");
		}
	   $(window).resize(function () {
			//当浏览器大小变化时
		var w  = document.body.clientWidth;  
		if( w >= '1225'){
			
		   $('#table-example').css("display","block");
		   }
		if(w<='1224'){
		   $('#table-example').css("display","none");
		}         //浏览器时下窗口可视区域宽度
		}); 
	}
)(jQuery);

//
//	formatDate: function(date, format, language){
//			if (typeof format === 'string')
//				format = DPGlobal.parseFormat(format);
//			var val = {
//				d: date.getUTCDate(),
//				D: dates[language].daysShort[date.getUTCDay()],
//				DD: dates[language].days[date.getUTCDay()],
//				m: date.getUTCMonth() + 1,
//				M: dates[language].monthsShort[date.getUTCMonth()],
//				MM: dates[language].months[date.getUTCMonth()],
//				yy: date.getUTCFullYear().toString().substring(2),
//				yyyy: date.getUTCFullYear()
//			};
//			val.dd = (val.d < 10 ? '0' : '') + val.d;
//			val.mm = (val.m < 10 ? '0' : '') + val.m;
//			var date = [],
//				seps = $.extend([], format.separators);
//			for (var i=0, cnt = format.parts.length; i <= cnt; i++) {
//				if (seps.length)
//					date.push(seps.shift());
//				date.push(val[format.parts[i]]);
//			}
//			return date.join('');
//		},
//		headTemplate: '<thead>'+
//							'<tr>'+
//								'<th class="prev">&laquo;</th>'+
//								'<th colspan="5" class="datepicker-switch"></th>'+
//								'<th class="next">&raquo;</th>'+
//							'</tr>'+
//						'</thead>',
//		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
//		footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
//	};
//	DPGlobal.template = '<div class="datepicker">'+
//							'<div class="datepicker-days">'+
//								'<table class=" table-condensed">'+
//									DPGlobal.headTemplate+
//									'<tbody></tbody>'+
//									DPGlobal.footTemplate+
//								'</table>'+
//							'</div>'+
//							'<div class="datepicker-months">'+
//								'<table class="table-condensed">'+
//									DPGlobal.headTemplate+
//									DPGlobal.contTemplate+
//									DPGlobal.footTemplate+
//								'</table>'+
//							'</div>'+
//							'<div class="datepicker-years">'+
//								'<table class="table-condensed">'+
//									DPGlobal.headTemplate+
//									DPGlobal.contTemplate+
//									DPGlobal.footTemplate+
//								'</table>'+
//							'</div>'+
//						'</div>';
//
//	$.fn.datepicker.DPGlobal = DPGlobal;