/*hefancn.com- hefan dialog js
create date:2013-08-08*/
/* hfDialog common set */
(function($){
hfDialogConfig = {
		id:null,/*点击事件ID*/
		opacity: 0.1,/*遮盖层背景透明度值为*/
		bordercolor:"#c5c5c5",/*对话框边框颜色*/
		background:"#fff",/*对话框背景颜色*/
		showClose:true,/*是否显示右边关闭按钮*/
		dragDialog:true,/*是否可以拖动窗口*/
		title:"温馨提示", /*对话框信息标题*/
		width:500, /* 窗口的宽度，值为'auto'或表示像素的整数*/
		height:"auto", /* 窗口的宽度，值为'auto'或表示像素的整数 */
		content:"",/*对话框内容*/
		btnText:"确定", /*按钮内容*/
		clstext:"取消",/*关闭对话框内容*/
		submit:function(){return true;}, //点击确定按钮后的回调函数*/
		closed:function(){}, /*窗口关闭后执行的函数*/
		outid:"blackout",
		boxid:"block_box",
		clstitle:true,
		clsfood:true,
		clscancel:true
};
//对话框坐标动态设置
var mouse={x:0,y:0};
var showdialog=function(i){
	if(i==0){var dialog=$("."+hfDialogConfig.boxid)}else if(i==1){var dialog=$(".cfm")}else if(i==2){var dialog=$(".art")};
	dialog.find("h2").mousedown(function(event){
   	var e = window.event || event;
    mouse.x = e.clientX;mouse.y = e.clientY;
    $("html").css("overflow","hidden");document.onselectstart=new Function("event.returnValue=false");
    $(document).bind("mousemove",moveDialog)});
	$(document).mouseup(function(event){$(document).unbind("mousemove",moveDialog)});
	//移动对话框
	function moveDialog(event){
	   var e = window.event || event;
	   var top = parseInt(dialog.css('top')) + (e.clientY - mouse.y);
	   var left = parseInt(dialog.css('left')) + (e.clientX - mouse.x);
	   if(dialog.position().left<0){left=0};if(dialog.position().top-$(document).scrollTop()<0){top=$(document).scrollTop()};
	   if(dialog.position().left+dialog.width()-$(document).scrollLeft()>$(window).width()){left=$(window).width()-dialog.width()+$(document).scrollLeft()};
	   if(dialog.position().top+dialog.height()-$(document).scrollTop()>$(window).height()){top=$(window).height()-dialog.height()+$(document).scrollTop()};
	   dialog.css({top:top,left:left});
	   mouse.x = e.clientX;
	   mouse.y = e.clientY;
	};
	DialogCenter(dialog);
}
//对话框居中定位
function DialogCenter(dialog){
	var left = ($(window).width()-dialog.width())/2;
	var top = ($(window).height()-dialog.height())/2+$(document).scrollTop();
	dialog.css({top:top,left:left});
}
//生成对话框HTML代码
var DialogHtml=function(s,i){
	if(i==1){var bid=" cfm";var btext="<div class=\"blackout\"></div>\n"}else if(i==2){var bid=" art";var btext=""}else{var bid="";var btext="<div class=\"blackout\"></div>\n"};
	if(s.showClose){var clscode="<a href=\"javascript:;\" title=\"关闭\" class=\"close\">×</a>"}else{clscode=""};
	if(s.clstitle){var ch2="<h2>"+s.title+"</h2>"}else{ch2=""};
	if(s.clscancel){var clsbtn="<a href=\"javascript:;\" class=\"cancel\">"+s.clstext+"</a>"}else{clsbtn=""};
	if(s.clsfood){var ch3="<h3><a href=\"javascript:;\" class=\"diaok\">"+s.btnText+"</a>"+clsbtn+"</h3>"}else{ch3=""};
	var	html=btext+"<div class=\"block_box"+bid+"\" style=\"width:"+s.width+"px;height:"+s.height+"px\">"+clscode+ch2;
	html+="<div>"+s.content+"</div>";
	html+=ch3+"</div>";$("body").append(html);
};
var showbox=function(i){
	Dialogcss(hfDialogConfig);$(".Dstyle").not($(".Dstyle").first()).remove();
	if(i==0){DialogHtml(hfDialogConfig)};if(i==1){DialogHtml(hfDialogConfig,1)};if(i==2){DialogHtml(hfDialogConfig,2);};
	$("."+hfDialogConfig.outid).css({"width":$(document).width(),"height":$(document).height()});
	window.onresize=function(){$("."+hfDialogConfig.outid).css({"width":$(document).width(),"height":$(document).height()})};
	$("."+hfDialogConfig.outid+",."+hfDialogConfig.boxid).show();
	if(hfDialogConfig.dragDialog){if(i==0){showdialog(0)}else if(i==1){showdialog(1)}else if(i==2){showdialog(2)}}else{DialogCenter($("."+hfDialogConfig.boxid))};
};
var closebox=function(i){
	if(i==0){$("."+hfDialogConfig.outid+",."+hfDialogConfig.boxid).not(".cfm,.art").remove()}else if(i==1){$("."+hfDialogConfig.outid+",.cfm").remove()}else if(i==2){$(".art").remove()};
	$("html").css("overflow","auto");document.onselectstart=new Function("event.returnValue=true");
};
//对话框CSS样式
var Dialogcss=function(s){
	if(s.dragDialog){var cursor="cursor:move"}else{cursor=""}
	var css="<style class=\"Dstyle\">.blackout{display:none;background:#000;filter:alpha(opacity="+s.opacity*100+");opacity:"+s.opacity+";position:absolute;top:0;left:0;z-index:999;}.block_box{display:none;background:"+s.background+";position:absolute;z-index:1000;border:"+s.bordercolor+" 1px solid;border-radius:2px;box-shadow:0 0 5px rgba(0,0,0,0.1);overflow:hidden}.block_box h2{height:32px;line-height:32px;text-indent:12px;font-weight:bold;border-bottom:#f2f2f2 1px solid;color:#333;background:#fcfcfc;"+cursor+"}.block_box .close{height:18px;width:18px;overflow:hidden;display:block;text-align:center;color:#666;text-indent:0;border-radius:18px;margin-right:8px;font:16px/18px simsun;position:absolute;right:0;top:8px}.block_box .close:hover{text-decoration:none;color:#fff;background:#c0c0c0;}.block_box div{padding:15px;line-height:22px;font-size:14px;color:#404040}.art div b{width:32px;height:32px;display:inline-block;overflow:hidden;vertical-align:top;margin-right:8px}.art div span{display:inline-block;width:160px;margin-right:-10px;padding-top:4px;line-height:22px;font-size:14px;color:#404040}.block_box h3{padding:15px 15px 20px 15px;text-align:center}.block_box h3 a{height:25px;line-height:25px;text-align:center;display:inline-block;padding:0 20px;color:#fff;border:#ff6701 1px solid;text-align:center;cursor:pointer;background:#f98b3b;box-shadow:0 0 2px #dfdfdf;border-radius:2px;}.block_box h3 .cancel{margin-left:20px}.block_box h3 a:hover{border-color:#f30;background:#f60;text-decoration:none}.block_box h3 .cancel{border-color:#c8c8c8;background:#f9f9f9;text-decoration:none;color:#333}.block_box h3 .cancel:hover{border-color:#999;background:#f2f2f2;text-decoration:none;color:#000}</style>";$("body").append(css);}
//显示对话框
$.hfDialog={
	//自定义弹窗显示方法
	show:function(h,s,f){
		if(h!=undefined){hfDialogConfig.content=h};
		if(s!=undefined){
			if(s.id!=undefined){hfDialogConfig.id=s.id};if(s.opacity!=undefined){hfDialogConfig.opacity=s.opacity};if(s.bordercolor!=undefined){hfDialogConfig.bordercolor=s.bordercolor};
			if(s.background!=undefined){hfDialogConfig.background=s.background};if(s.showClose!=undefined){hfDialogConfig.showClose=s.showClose};if(s.dragDialog!=undefined){hfDialogConfig.dragDialog=s.dragDialog};
			if(s.title!=undefined){hfDialogConfig.title=s.title};if(s.width!=undefined){hfDialogConfig.width=s.width};if(s.height!=undefined){hfDialogConfig.height=s.height};
			if(s.clstitle!=undefined){hfDialogConfig.clstitle=s.clstitle};if(s.clsfood!=undefined){hfDialogConfig.clsfood=s.clsfood};if(s.clscancel!=undefined){hfDialogConfig.clscancel=s.clscancel};
			if(s.btnText!=undefined){hfDialogConfig.btnText=s.btnText};if(s.clstext!=undefined){hfDialogConfig.clstext=s.clstext};if(s.closed!=undefined){hfDialogConfig.closed=s.closed}};			
			if(s!=undefined && s.id!=null){$("."+s.id).bind("click", EventDialog)}else{EventDialog()};
			function EventDialog(){showbox(0);
				$("."+hfDialogConfig.boxid).find(".diaok").click(function(){if(f()){closebox(0)}});
				$("."+hfDialogConfig.boxid).find(".cancel,.close").click(function(){closebox(0);hfDialogConfig.closed()});
			}
	},
	//确认框提示
	confirm:function(c,t,f){
		if(c!=undefined){hfDialogConfig.content=c;};if(t!=undefined){hfDialogConfig.title=t;};
		hfDialogConfig.showClose=true;hfDialogConfig.width=300;hfDialogConfig.clsfood=true;hfDialogConfig.clstitle=true;hfDialogConfig.btnText="确定";hfDialogConfig.clstext="取消";
		showbox(1);$("."+hfDialogConfig.boxid).find(".diaok").click(function(){if(f()){closebox(1)}});$("."+hfDialogConfig.boxid).find(".cancel,.close").click(function(){closebox(1)});
		},
	//alert提示框
	alert:function(c,s){
		if(s==undefined){var stateimg=""};
		if(s=="loadding"){var stateimg="background:url(images/user_center_img.gif) 0 -178px no-repeat;"};
		if(s=="success"){var stateimg="background:url(images/user_center_img.gif) 0 -178px no-repeat;"};
		if(s=="failed"){var stateimg="background:url(images/user_center_img.gif) 0 -86px no-repeat;"};
		if(c!=undefined){hfDialogConfig.content="<b style=\""+stateimg+"\"></b><span class=\"ttip\">"+c+"</span>"};
		hfDialogConfig.clsfood=false;hfDialogConfig.clstitle=false;hfDialogConfig.showClose=true;hfDialogConfig.width=240;showbox(2);
		window.setTimeout(function(){closebox(2)},3000);$("."+hfDialogConfig.boxid).find(".close").click(function(){closebox(2)});
	},
	//自定义关门对话框
	close:function(i){
		if(i==0){$("."+hfDialogConfig.outid+",."+hfDialogConfig.boxid).remove()}else if(i==1){$("."+hfDialogConfig.outid+",.cfm").remove()}else if(i==2){$(".art").remove()};
		$("html").css("overflow","auto");document.onselectstart=new Function("event.returnValue=true");
	}
}
})(jQuery);