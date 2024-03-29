$(function($) {
	var storage,
	    fail,
	    uid;
	try {
		uid = new Date;
		(storage = window.localStorage).setItem(uid, uid);
		fail = storage.getItem(uid) != uid;
		storage.removeItem(uid);
		fail && (storage = false);
	} catch(e) {}
	
	if (storage) {
		try {
			var usedSkin = localStorage.getItem('config-skin');
			if (usedSkin != '') {
				$('#skin-colors .skin-changer').removeClass('active');
				$('#skin-colors .skin-changer[data-skin="'+usedSkin+'"]').addClass('active');
			}
			
			var fixedHeader = localStorage.getItem('config-fixed-header');
			if (fixedHeader == 'fixed-header') {
				$('body').addClass(fixedHeader);
				$('#config-fixed-header').prop('checked', true);
			}
			
			var fixedFooter = localStorage.getItem('config-fixed-footer');
			if (fixedFooter == 'fixed-footer') {
				$('body').addClass(fixedFooter);
				$('#config-fixed-footer').prop('checked', true);
			}
			
			var boxedLayout = localStorage.getItem('config-boxed-layout');
			if (boxedLayout == 'boxed-layout') {
				$('body').addClass(boxedLayout);
				$('#config-boxed-layout').prop('checked', true);
			}
			
			var rtlLayout = localStorage.getItem('config-rtl-layout');
			if (rtlLayout == 'rtl') {
				$('body').addClass(rtlLayout);
				$('#config-rtl-layout').prop('checked', true);
			}
			
			var fixedLeftmenu = localStorage.getItem('config-fixed-leftmenu');
			if (fixedLeftmenu == 'fixed-leftmenu') {
				$('body').addClass(fixedLeftmenu);
				$('#config-fixed-sidebar').prop('checked', true);
				
				if ($('#page-wrapper').hasClass('nav-small')) {
					$('#page-wrapper').removeClass('nav-small');
				}
				
				$('.fixed-leftmenu #col-left').nanoScroller({
			    	alwaysVisible: true,
			    	iOSNativeScrolling: false,
			    	preventPageScrolling: true,
			    	contentClass: 'col-left-nano-content'
			    });
			}
		}
		catch (e) {console.log(e); }
	}
	/*验证密码*/
	$('#examplePwdMeter2').on('blur', function(){
		var pwd1 = $(examplePwdMeter1).val();
		var pwd2 = $(examplePwdMeter2).val();
		$('#pwd-check')[pwd1 === pwd2 ?  'addClass':'removeClass']('has-success');
		$('#pwd-check')[pwd1 === pwd2 ?  'removeClass' : 'addClass']('has-error');
	});
//	$('#examplePwdMeter2').on('blur', function(){
//		var pwd1 = $(examplePwdMeter1).val();
//		var pwd2 = $(examplePwdMeter2).val();
//		$('#pwd-input')[pwd1 === pwd2 ?  'addClass':'removeClass']('has-success');
//		$('#pwd-input')[pwd1 === pwd2 ?  'removeClass' : 'addClass']('has-error');
//	});
	/* CONFIG TOOLS SETTINGS */
	$('#rock-left').on('click', function(){
		$('#config-tool').toggleClass('closed');
		$('#bars')[$('#config-tool').hasClass('closed') ? 'removeClass' : 'addClass']('fa-arrow-right');
		$('#bars')[$('#config-tool').hasClass('closed') ? 'addClass' : 'removeClass']('fa-bars');
	});
	var windowwidth = $(window).width();
	if(windowwidth <= 992){
		$('#toggle-hidden-child').addClass('toggle-hidden-search');
		$('#click-toggle-hidden').on('click', function(){
		$('#toggle-hidden-child').toggleClass('toggle-hidden-search');
		$('#click-open-search')[$('#toggle-hidden-child').hasClass('toggle-hidden-search') ? 'removeClass' : 'addClass' ]('hidden');
		$('#click-close-search')[$('#toggle-hidden-child').hasClass('toggle-hidden-search') ?  'addClass' : 'removeClass' ]('hidden');
	});
	}
	if(windowwidth <=992){
		$('#click-toggle-hidden2').on('click', function(){
		$('#toggle-hidden-child').toggleClass('toggle-hidden-search');
		$('#click-open-search')[$('#toggle-hidden-child').hasClass('toggle-hidden-search') ? 'removeClass' : 'addClass' ]('hidden');
		$('#click-close-search')[$('#toggle-hidden-child').hasClass('toggle-hidden-search') ?  'addClass' : 'removeClass' ]('hidden');
	});
	}
	$('#config-fixed-header').on('change', function(){
		var fixedHeader = '';
		
		if ($(this).is(':checked')) {
			$('body').addClass('fixed-header');
			fixedHeader = 'fixed-header';
		}
		else {
			$('body').removeClass('fixed-header');
			
			if ($('#config-fixed-sidebar').is(':checked')) {
				$('#config-fixed-sidebar').prop('checked', false);
				$('#config-fixed-sidebar').trigger('change');
				location.reload();
			}
		}
		
		writeStorage(storage, 'config-fixed-header', fixedHeader);
	});
	$('#config-fixed-footer').on('change', function(){
		var fixedFooter = '';
		
		if ($(this).is(':checked')) {
			$('body').addClass('fixed-footer');
			fixedFooter = 'fixed-footer';
		}
		else {
			$('body').removeClass('fixed-footer');
		}
		
		writeStorage(storage, 'config-fixed-footer', fixedFooter);
	});
	$('#config-boxed-layout').on('change', function(){
		var boxedLayout = '';
		
		if ($(this).is(':checked')) {
			$('body').addClass('boxed-layout');
			boxedLayout = 'boxed-layout';
		}
		else {
			$('body').removeClass('boxed-layout');
		}
		
		writeStorage(storage, 'config-boxed-layout', boxedLayout);
	});
	$('#config-rtl-layout').on('change', function(){
		var rtlLayout = '';
		
		if ($(this).is(':checked')) {
			//$('body').addClass('rtl');
			rtlLayout = 'rtl';
		}
		else {
			//$('body').removeClass('rtl');
		}
		
		writeStorage(storage, 'config-rtl-layout', rtlLayout);
		location.reload();
	});
	$('#config-fixed-sidebar').on('change', function(){
		var fixedSidebar = '';
		
		if ($(this).is(':checked')) {
			if (!$('#config-fixed-header').is(':checked')) {
				$('#config-fixed-header').prop('checked', true);
				$('#config-fixed-header').trigger('change');
			}
			
			if ($('#page-wrapper').hasClass('nav-small')) {
				$('#page-wrapper').removeClass('nav-small');
			}
			
			$('body').addClass('fixed-leftmenu');
			fixedSidebar = 'fixed-leftmenu';
			
			$('.fixed-leftmenu #col-left').nanoScroller({
		    	alwaysVisible: true,
		    	iOSNativeScrolling: false,
		    	preventPageScrolling: true,
		    	contentClass: 'col-left-nano-content'
		    });
			
			writeStorage(storage, 'config-fixed-leftmenu', fixedSidebar);
		}
		else {
			$('body').removeClass('fixed-leftmenu');
			writeStorage(storage, 'config-fixed-leftmenu', fixedSidebar);
			location.reload();
		}
	});
	
	if (!storage) {
		$('#config-fixed-header').prop('checked', false);
		$('#config-fixed-footer').prop('checked', false);
		$('#config-fixed-sidebar').prop('checked', false);
		$('#config-boxed-layout').prop('checked', false);
		$('#config-rtl-layout').prop('checked', false);
	}
	
	$('#skin-colors .skin-changer').on('click', function(){
		$('body').removeClassPrefix('theme-');
		$('body').addClass($(this).data('skin'));
		$('#skin-colors .skin-changer').removeClass('active');
		$(this).addClass('active');
		writeStorage(storage, 'config-skin', $(this).data('skin'));
	});
});

function writeStorage(storage, key, value) {
	if (storage) {
		try {
			localStorage.setItem(key, value);
		}
		catch (e) { console.log(e);}
	}
}

$.fn.removeClassPrefix = function(prefix) {
    this.each(function(i, el) {
        var classes = el.className.split(" ").filter(function(c) {
            return c.lastIndexOf(prefix, 0) !== 0;
        });
        el.className = classes.join(" ");
    });
    return this;
};
//textarea 插入文字
function Insert(str) { 
var obj = document.getElementById('follow-textarea'); 
if(document.selection) { 
obj.focus(); 
var sel=document.selection.createRange(); 
document.selection.empty(); 
sel.text = str; 
} else { 
var prefix, main, suffix; 
prefix = obj.value.substring(0, obj.selectionStart); 
main = obj.value.substring(obj.selectionStart, obj.selectionEnd); 
suffix = obj.value.substring(obj.selectionEnd); 
obj.value = prefix + str + suffix; 
} 
obj.focus(); 
} 