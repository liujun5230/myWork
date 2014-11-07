/*hefancn.com-hefanbao js
create date:2013-08-08*/
$(function(){
/*============网站顶部公用文件所依赖的JS代码片断=======================================================================*/
$(".s_nav .s_menu").hover(function(){
	$(this).addClass("s_hover");
	$(this).children(".s_down").css("min-width",$(this).width()-1);
	if(!-[1,]&&!window.XMLHttpRequest){$(this).children(".s_down").css("width",$(this).width()-1);};//判断是否为IE6
	//当浏览器为IE6~7的时候a标签的宽度
	if(navigator.appVersion.match(/6./i)!="6.0" || navigator.appVersion.match(/7./i)!="7.0"){
		$(this).children(".s_down").children("a,li").css("width",$(this).children(".s_down").width()-10);
		$(this).children(".mydesk").children("li").css("width","210px");
	};
	},function(){$(this).removeClass("s_hover");
	if(navigator.appVersion.match(/6./i)!="6.0" || navigator.appVersion.match(/7./i)!="7.0"){
		$(this).children(".s_down").children("a,li").css("width","auto");
	};
});
/*============网站顶部公用文件所依赖的JS代码结束=======================================================================*/
/*首页选项卡切换效果*/
$("#content .c_btm .t_tab span").click(function(){
$(this).addClass("hover").siblings("span").removeClass("hover");
switch($(this).attr("class"))
{
case "traderecode hover":
  $(".mobilepay").hide();
  $(".traderecode").show();
  break;
case "r_mobilepay hover":
  $(".traderecode").hide();
  $(".mobilepay").show();
  break;
default:
  $(".mobilepay").hide();
  $(".traderecode").show();
}
})
/*转入框效果*/
$(":text").focus(function(){$(this).css({"border-color":"#7eb4ea","box-shadow":"0 0 2px rgba(0,0,0,0.1)"})})
$(":text").blur(function(){$(this).css({"border-color":"#c8c8c8","box-shadow":"none"})})
/*验证说明效果*/
$("li.auth span").hover(function(){$(this).children(".explain").show()},function(){$(this).children(".explain").hide()})
/*不可用金额弹出效果*/
$("li.money #explain").hover(function(){
	if($(this).attr("isindex")=="true"){
		$(this).next(".explain").show().css({"top":"2px","left":"288px"})
	}else{
		$(this).next(".explain").show().css({"top":"-8px","left":"254px"})
	}},function(){$(this).next(".explain").hide()})
/*首页最近交易列表效果*/
$(".tradelist li:odd").not(".more").css("background","#fafafa");
/*选择支付方式click效果*/
$("#recharge label span,#payment label span").not(".hfpay span").click(function(){$("#recharge label span,#payment label span").removeClass("hover");$(this).addClass("hover")})
/*支付方式切换效果*/
$(".recharge ul a").not("h2").click(function(){
		$(this).addClass("hover").siblings(this).removeClass("hover");
		$(".paytext"+$(this).index()).show().siblings("#recharge").hide();
	})
/*单击充值帮助效果*/
$(".re_help").click(function(){$("#recharge .right,#payment .right").fadeOut().fadeIn();})
/*付款订单详情效果*/
$(".payment .tname a").click(function(){$(this).children("u").toggleClass("u");$(".payment ul li").not(".tname").toggle()})
/*选择余额支付余额不足提示效果*/
$("#payment .hfpay :checkbox").click(function(){
		if(parseFloat($("#payment .hfpay").find("font").text())<parseFloat($(".payment .payprice").text())){$("#payment .hfpay").next().toggle()}							 
	});
/*提现选择银行卡效果*/
$("#drawcash .card span").click(function(){
			$(this).addClass("select").siblings(this).removeClass("select");
			$("#drawcash .card input").val($(this).attr("id"));//赋值给表单input
			$(this).parent().next().find(".err").hide()});
$("#drawcash .card .add").hover(function(){$(this).css({"border-color":"#bbbbbb","background":"#fcfcfc"})},function(){$(this).css({"border-color":"#dddddd","background":"#ffffff"})});
//收支明高级细筛选效果
$(".m_right .srh h2 #mselect").click(function(){$("#content .m_right .srh li").toggle()});
//首页手机充值效果
$(".c_btm .ten").click(function(){
	$(this).addClass("ten_hover").siblings("a").removeClass("ten_hover");
})
$(".c_btm .select font,.c_btm .select b").click(function(){
	$(this).parent("a").addClass("ten_hover").siblings("a").removeClass("ten_hover");
})


//首页下拉框效果
$(".c_btm .select font,.c_btm .select b").click(function(){
		var obj=$(this);obj.siblings(".downlist").toggle().parent().css("z-index","10");
		obj.siblings(".downlist").children("i").hover(function(){
				$(this).css("background","#f2f2f2");$(this).click(function(){
				$(this).parent().hide();//$(this).parent().parent().siblings("label").hide();
				$(this).parent().next("input").val($(this).attr("id"));//赋值给表单input
				$(this).parent().parent().children("font").text($(this).text())})},function(){$(this).css("background","none")});
		obj.parents().siblings().click(function(){obj.siblings(".downlist").hide();obj.parent().css("z-index","0")});
	});
//其他页面下拉框效果
$(".c_right .select font,.c_right .select b").click(function(){
		var obj=$(this);obj.siblings(".downlist").toggle().parent().css("z-index","10");
		obj.siblings(".downlist").children("i").hover(function(){
				$(this).css("background","#f2f2f2");$(this).click(function(){
				$(this).parent().hide();$(this).parent().parent().siblings("label").hide();
				$(this).parent().parent().next("input").val($(this).attr("id"));//赋值给表单input
				$(this).parent().parent().children("font").text($(this).text())})},function(){$(this).css("background","none")});
		obj.parents().siblings().click(function(){obj.siblings(".downlist").hide();obj.parent().css("z-index","0")});
	});
//我的银行卡效果
$(".mybankcard li").not(".mybankcard .add").hover(function(){$(this).children(".ctime").show()},function(){$(this).children(".ctime").hide()})
$(".mybankcard .add").hover(function(){$(this).css({"border-color":"#bbbbbb","background":"#f5f5f5"})},function(){$(this).css({"border-color":"#dddddd","background":"#fcfcfc"})});
$(".mybankcard .m").hover(function(){$(this).css("width","auto");$(this).siblings(".ctime").hide();
	$(this).children(".setdf").click(function(){
			$(this).hide();$(this).next().show();$(this).parents("li").find(".default").show();
			$(this).parents("li").siblings().find(".default").hide();$(this).parents("li").siblings().find(".setdf").show();
			$(this).parents("li").siblings().find(".clsdf").hide();
			//设为默认数据异步加载代码写放下面
			});
	$(this).children(".clsdf").click(function(){
			$(this).hide();$(this).prev().show();$(this).parents("li").find(".default").hide();
			//取消默认数据异步加载代码写放下面
			})
	},function(){$(this).css("width","25px");$(this).siblings(".ctime").show()});
});
