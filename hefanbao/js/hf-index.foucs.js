//hefancn.com-index.html-js-start
/*============网站首页大图轮换所依赖的JS代码片断=======================================================================*/
var curIndex=0;
var time=800;
var slideTime=5000;
var int=setInterval("autoSlide()", slideTime);
$(function(){
	$(".Slide-link").eq(0).prev("b").stop(false,true).animate({top:"100px"},time);
	$("#hf_Slide_nav>li").click(function(){
			$(this).addClass("selected").siblings().removeClass("selected");
			show($(this).index("#hf_Slide_nav>li"));
			window.clearInterval(int);
			int=setInterval("autoSlide()", slideTime);
		});
});
function autoSlide(){
    curIndex + 1>=$("#hf_banner>li").size()?curIndex=-1:false;
    show(curIndex+1);
}
function show(index) {
	$("#hf_Slide_nav>li").eq(index).addClass("selected").siblings(this).removeClass("selected");
    $("#hf_banner>li").eq(curIndex).stop(false,true).fadeOut(time);
    $(".Slide-link").eq(curIndex).prev("b").stop(false,true).animate({top:"300px"},time);
    setTimeout(function(){
        $("#hf_banner>li").eq(index).stop(false,true).fadeIn(time);
        $(".Slide-link").eq(index).prev("b").css({top:"0",opacity:"0"}).stop(false,true).animate({top:"100px",opacity:"1"},time);
    },200);
    curIndex=index;
}
/*============网站首页大图轮换所依赖的JS代码结束=======================================================================*/

//特色食谱
$(function(){
	$(".tcfood>li").hover(function(){
			$(this).addClass("hover").siblings(this).removeClass("hover");
			});
	$(".drink_left>li").hover(function(){
			$(this).addClass("hover").siblings(this).removeClass("hover");
			$(".drink_left>li>img").click(function(){
					window.location.href=$(this).attr("data-link");
				 })
			});
	//收起和展开类目
	$("#sider").click(function(){
			$("#category").slideToggle("slow");
			$(this).toggleClass("b");
			})

	//首页搜索框效果JS代码
	$("#s_txt").click(function(){
				$(this).css({"color":"#000","font-weight":"bold"});				
				$(this).prev("label").css("color","#ccc");
				$(this).keydown(function(){$(this).prev("label").hide()})
			});
	$("#s_txt").blur(function(){
				$(this).prev("label").css("color","#999");	
				if($(this).val()==""){$(this).prev("label").show()};
			})
	$("#s_txt").keydown(function(){$(this).prev("label").hide();$(this).css({"color":"#000","font-weight":"bold"})})
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
	//餐厅分类卡hover效果；
	$(".plg_08_shop_cate_card .card_cnt .lft_bd .top_list ul li").hover(function(){
			    $(this).children("span").show();																	 
		   },function(){
			    $(this).children("span").hide();   
		   });
	//美食街首页本周关注排行榜 折叠效果
	$(".plg_08_shop_cate_card .card_cnt .rgt_bd ul li").hover(function(){
			    $(this).addClass("hover_li").siblings().removeClass("hover_li");
				$(this).children("span").children(".name_a").css('color','#333');	
				$(this).siblings().children("span").children(".name_a").css('color','#656565');																	 
		   });
		   
	//二级菜单切换效果
	$("#dish_ad .submenulist .list_li").hover(function(){
		$(this).css('background-color','#f8f8f8').css('cursor','pointer');
		$(this).find(".listbox").show();
		},function(){
        $(this).css('background-color','#fff');
		$(this).find(".listbox").hide();
	});
	
	//全部类目选项卡滑动效果
    $("#category .cate_txt .cat_list").hover(function(){
		$(this).find(".mod_bd").show();
	},function(){
        $(this).find(".mod_bd").hide();
	});	
	//类目当鼠标滑上去的效果
	$("#category").find(".cat_list").hover(function(){
	     $(this).addClass("selected");
	 },function(){
		 $(this).removeClass("selected");
	 });	
	 
	 //店铺累积评分鼠标点上去的效果
	  $("#shop_page_nav .page_nav .score").hover(function(){
       $(this).css('background-color','#915a40');
	   $(this).find(".arrow_l").hide();
	   $(this).find(".arrow_v").show();
   },function(){
	   $(this).css('background-color','');
	   $(this).find(".arrow_l").show();
	   $(this).find(".arrow_v").hide();
   });   
  
   //收藏商品成功对话框效果
      $(".pdct_cnt .middle .num_dw font").click(function(){
		  $(".pdct_cnt .middle .sc_box").show();
		  setTimeout(function(){$(".pdct_cnt .middle .sc_box").hide(2000)},2000);
	  });

  //餐厅页面中所有分类的三级下拉菜单效果
  $(".fst_cat").hover(function(){
		$(this).css('background','#d6aa91');
		$(this).children(".fst_cat_bg").children(".cat_icon").css('background-color','#fff');
	    $(this).children(".fst_cat_bg").children(".fst_cat_name").css('color','#fff');
		$(this).children(".snd_pop").show();
   },function(){
	   $(this).css('background','#fff');
	  $(this).children(".fst_cat_bg").children(".cat_icon").css('background-color','#a66c51');
	   $(this).children(".fst_cat_bg").children(".fst_cat_name").css('color','#a66c51');
	   $(this).children(".snd_pop").hide(); 
	});
	
  $(".snd_cat").hover(function(){
		$(this).css('background','#d6aa91');
		$(this).children(".cat_icon").css('background-color','#fff');
	    $(this).children(".fst_cat_name").css('color','#fff');
   },function(){
	   $(this).css('background','#fff');
	   $(this).children(".cat_icon").css('background-color','#a66c51');
	   $(this).children(".fst_cat_name").css('color','#a66c51'); 
	});
	
	$(".list_li").hover(function(){
		$(this).children(".shop_pbsm_shop_nav_ch").show();
        $(this).children(".arrow_i").show();
		$(this).children(".down_arr").hide();
	},function(){
	    $(this).children(".shop_pbsm_shop_nav_ch").hide();
	    $(this).children(".arrow_i").hide();
		$(this).children(".down_arr").show();
	});

	
   
	//下拉条效果
	$(".plg_08_shop_cate_card .card_cnt .lft_bd .btm_list").hover(function(){
				$(this).children(".list_bar").animate({height:'40px'},"fast");																	 
		   },
		   function(){
				$(this).children(".list_bar").animate({height:'17px'},"fast");	
		   });
	//餐品详细页面中的展开、关闭送餐范围弹框
	$("#product .pdct_cnt .up .send a").click(function(){
	     $("#product").find(".list_map").show();
	});
	$("#product").find(".close_btn1").click(function(){
	     $("#product").find(".list_map").hide();
	});
	
	//餐品搜索列表页面中的展开、关闭送餐范围弹框
	$("#plg_18_shop_list_card").find(".range").click(function(){
	     $("#plg_18_shop_list_card").find(".list_map").show();
	});
	$("#plg_18_shop_list_card").find(".close_btn1").click(function(){
	     $("#plg_18_shop_list_card").find(".list_map").hide();
	}); 
	
	//快餐首页热销商品列表折叠效果
	$(".plg_10_dish_cate_card .top_list ul li").hover(function(){$(this).addClass("quk").siblings().removeClass("quk");});		
	//美食街 图片滑动效果；
/*	$("#plg_04_weekhot #list").css('padding','0 7px 0 6px');
	$("#plg_04_weekhot #arl").css('left','8px');
	function imgslide(pbox,arl,arr){
			$(pbox).jCarouselLite({
			btnPrev: arl,
			btnNext: arr,
			visible: 5,
			speed:1200,
			scroll:5
		});		
	};
	//美食街 箭头隐藏和显示效果；
	function showArrow(str_id){
		$(str_id).hover(function(){$("#list .ar").show()},function(){$("#list .ar").hide()});
	};
	showArrow("#plg_04_weekhot");
	imgslide("#list","#arl","#arr");
	
	
	//快餐主页样式调整函数；
    function getarrow(arrowleftID,arrowrightID){	
		    $(".plg_09_hot_sale_board .floor_cont").css('width','950px');
		    $(".plg_09_hot_sale_board .floor_cont").css('margin','0 auto');
		    $(".plg_09_hot_sale_board .floor_cont").css('padding-top','20px');
			$(".plg_09_hot_sale_board "+arrowleftID).css('left','0px');
			$(".plg_09_hot_sale_board "+arrowrightID).css('right','10px');	
			$(".plg_09_hot_sale_board .arrow_up").css('left','10px');
			$(".plg_09_hot_sale_board .arrow_down").css('right','20px');
    }
	getarrow("#bang_prev3","#bang_next3");
	getarrow("#bang_prev2","#bang_next2");
	//小吃主页 图片滑动效果；
	imgslide("#tab_bd3","#bang_prev3","#bang_next3");
	imgslide("#tab_bd2","#bang_prev2","#bang_next2");
	imgslide("#tab_bd3","#arrow_up3","#arrow_down3");
	imgslide("#tab_bd2","#arrow_up2","#arrow_down2");
	
*/		
	//菜品详细页份数添加效果,点击加一个按钮时加一个1；点击减一个按钮时减一个1；
	$("#product .pdct_cnt .middle .num_up label em").click(function(){
		var txtobj = $(this).siblings("i").children("input"); //获取份数所在的元素
		var txt_val = parseInt(txtobj.val());
		var isadd = $(this).hasClass("lose_btn");
		
		isadd?txt_val -= 1:txt_val += 1;
		if(txt_val<=0){txt_val=1};
		txtobj.val(txt_val);
		
	});
	//菜品详细页份数数据类型检查；
	var prev_num=1;
	$("#product .pdct_cnt .middle .num_up label i .numtxt").on('keyup',this,function(){
		var txtobj = parseInt($(this).val());
		var is_int =/^\d+$/.test(txtobj); //正则表达式判断份数元素中的值是不是一个数字符串;
			if(is_int && txtobj >= 0){//如果份数是正整数且大于等于0；
				if(parseInt(txtobj) > parseInt(999999)){
						alert("当前库存"+999999+"份!");
						$(this).val(999999);	
						prev_num = parseInt($(this).val());//将修改前的份数存入全局变量prev_num;
						return false;
				};
						if(parseInt(txtobj) == 0){$(this).val(1)};//如果份数为0，使份数等于1；
						prev_num = parseInt($(this).val());//将修改前的份数存入全局变量prev_num;
						return true;
			}else{
				if(isNaN(txtobj)){	//如果份数被改为非数；
						if(isNaN(prev_num)){
							$(this).val(1);
							prev_num = parseInt($(this).val());//将修改前的份数存入全局变量prev_num;
						}else{
							$(this).val(prev_num);
							prev_num = parseInt($(this).val());//将修改前的份数存入全局变量prev_num;
						}
				};
				
				if(txtobj.length >= 7){
					if(parseInt(txtobj) > parseInt(g_ary[6])){
							alert("当前库存"+999999+"份!");
							$(this).val(999999);	
							return false;
					};	
				}
				
				if(txtobj == ''){//如果份数为空，使份数等于1；如果份数为除NaN以外的量，将份数改为修改前的份数；
						$(this).val(1)
				}else{
						prev_num = parseInt($(this).val());//将修改前的份数存入全局变量prev_num;
						$(this).val(prev_num);//将修改后的份数替换为修改前的份数；
						return false;	
				};
			};
	});
	
	$("#product .pdct_cnt .middle .num_up label i input").blur(function(){
		var txtobj = $(this).val();
		var is_int =/^\d+$/.test(txtobj); //正则表达式判断份数元素中的值是不是一个正整数字符串;
		if(is_int|| !isNaN(txtobj)){return false}else{if(isNaN(prev_num)){$(this).val(1)}else{$(this).val(prev_num)}};//将修改后的份数替换为修改前的份数；
	});
	
	//菜品详细页历史订单表隔行变色效果；
	$("#food_dscrib .history_sale #table_list table tr:even").css('background','#fafafa');
	//检查小图片的个数，如果只有一张图片，小图片栏就自动隐藏；
	function check_litimg(){
		var litimg_size = $("#product .showimg .litimg a");
		if(parseInt(litimg_size.size()) > 1){litimg_size.parent(".litimg").show();}else{litimg_size.parent(".litimg").hide();};
	};check_litimg();
	
	//菜品详细页选项卡切换效果
	$("#dish_detail .dp_xq span").click(function(){
		var iss = $(this).attr("id");
		$(this).addClass("hover_span").siblings("span").removeClass("hover_span");
		 switch(iss){
		   case 'dish_btn1':
			   $("#dish_detail .pingjia").hide();
			   $("#food_dscrib").show();
			   $("#dp_list").hide();
		   break;
		   
		   case 'dish_btn2':
			   $("#dish_detail .pingjia").show();
			   $("#food_dscrib").hide();
			   $("#dp_list").show();
		   break;
		   
		   case 'dish_btn3':
			   $("#dish_detail .pingjia").hide();
			   $("#food_dscrib").show();
			   $("#dp_list").hide();
		       location.hash="table_list";
		   break;
		   
		   default:
			   $("#dish_detail .pingjia").hide();
			   $("#food_dscrib").show();
			   $("#dp_list").hide();	 
		 }
	});
		
});
