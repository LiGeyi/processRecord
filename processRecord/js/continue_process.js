var material_Json = {
	"material1":{
		"type":"g",
		"id":"g1",
		"materialName":"商品名1",
		"batchList":[
			{
        	   "batch":"7-M-170512-F1v200",
        	   "batchTime":"2017-04-18 09:30:25",
        	   "StockNum":"400"
           	},
           	{
        	   "batch":"7-M-170512-F1v201",
        	   "batchTime":"2017-06-20 11:15:05",
        	   "StockNum":"200"
           	},
           	{
        	   "batch":"7-M-170512-F1v202",
        	   "batchTime":"2017-09-14 15:17:36",
        	   "StockNum":"100"
           	}
		]
	},
	"material2":{
		"type":"g",
		"id":"g2",
		"materialName":"商品名2",
		"batchList":[
			{
        	   "batch":"7-M-170512-F1v203",
        	   "batchTime":"2017-08-08 10:30:25",
        	   "StockNum":"600"
           	},
           	{
        	   "batch":"7-M-170512-F1v204",
        	   "batchTime":"2017-09-23 16:33:21",
        	   "StockNum":"500"
           	}
		]
	},
	"material3":{
		"type":"g",
		"id":"g3",
		"materialName":"商品名3",
		"batchList":[
			{
        	   "batch":"7-M-170512-F1v205",
        	   "batchTime":"2017-04-09 08:30:25",
        	   "StockNum":"666"
           	}
		]
	},
	"material4":{
		"type":"c",
		"id":"c1",
		"materialName":"消耗品1",
		"batchList":[
			{
        	   "batch":"8-M-170512-F1v200",
        	   "batchTime":"2017-07-24 12:30:41",
        	   "StockNum":"420"
           	},
           	{
        	   "batch":"8-M-170512-F1v201",
        	   "batchTime":"2017-09-23 16:23:38",
        	   "StockNum":"590"
           	}
		]
	},
	"material5":{
		"type":"c",
		"id":"c2",
		"materialName":"消耗品2",
		"batchList":[
			{
        	   "batch":"8-M-170512-F1v202",
        	   "batchTime":"2017-06-24 09:15:43",
        	   "StockNum":"800"
           	},
           	{
        	   "batch":"8-M-170512-F1v203",
        	   "batchTime":"2017-08-23 11:23:27",
        	   "StockNum":"900"
           	},
           	{
        	   "batch":"8-M-170512-F1v204",
        	   "batchTime":"2017-09-24 13:28:05",
        	   "StockNum":"750"
           	}
		]
	}
};
var mdata = material_Json;
var materialObj=[];
for(var a in mdata){
	var rs = eval("mdata." + a);
	materialObj.push(rs);
};
var mLength=materialObj.length;

$(function(){
	//获取假数据
//	getMList();
	//获取从哪个模板跳转过来的。
	if (document.referrer === '') {
		$(".site_selectione").html("加工模板");
	}else{
		var urlinfo = window.location.href;//获取url 
		var userName = urlinfo.split("?")[1].split("=")[1];
		if(userName){
			$(".site_selectione").html(decodeURI(userName))
		}
	}
	//—————————————改变份数——————————————————————————
	//获得文本框对象
	var copiesObj=$("#copies");
	//初始化数量为1,并失效减
	$('.cutNum').attr('disabled',true);
	 //数量增加操作
	$(".addNum").click(function(){ 
	  // 给获取的val加上绝对值，避免出现负数
	  	copiesObj.val(Math.abs(parseInt(copiesObj.val()))+1);
	  	if (parseInt(copiesObj.val())!=1){
	  		$('.cutNum').attr('disabled',false);
	  		$('.cutNum').css("background","#fff");
			sumNum(parseInt(copiesObj.val()));
	  	};
	}) 
	 //数量减少操作
	$(".cutNum").click(function(){
	 	copiesObj.val(Math.abs(parseInt(copiesObj.val()))-1);
	 	sumNum(parseInt(copiesObj.val()));
	 	if (parseInt(copiesObj.val())==1){
	 		$('.cutNum').attr('disabled',true);
	 		$('.cutNum').css("background","#ebebe4");
	 	};
	})
	//点击改变按钮颜色
	$('.addNum').on('touchstart',function(e) {
		$(".addNum").css("background","#e8e8e8");
	});
	$(".addNum").on('touchend',function(e) {
		$(".addNum").css("background","#fff");
	})
	$('.cutNum').on('touchstart',function(e) {
		if (parseInt(copiesObj.val())>1){
	 		$(".cutNum").css("background","#e8e8e8");
	 	}	
	});
	$(".cutNum").on('touchend',function(e) {
		if (parseInt(copiesObj.val())>1){
			$(".cutNum").css("background","#fff");
		}
	})
	$(".copiesInput").keyup(function(){
		var inputVal=$(".copiesInput").val();
		sumNum(inputVal)
		if(inputVal<1){
			$(".copiesInput").val("1");
		}
	});
	//—————————————改变份数——————————————————————————
	//点击弹出侧边栏
	$(document).on('click', '.showPop>ul>li .goodsTit', function(){
		$(this).addClass("choose");
		var getBox=$(this).attr("id");
		var getId=getBox.split("_")[1];
		getBatchList(getId);
		$(".mask").attr("getBox",getBox);
		$(".mask").show();
        $(".batchPop").css({
            right: "0",
            transition: "right .5s"
        });
	});
	//点击删除按钮，删除当前行
	$(document).on('click', '.deleteLi', function(){
		var selectList_class = $(this).parent().parent().attr("class");
		$(this).parent().remove();
		var ifHaveInner=$("."+selectList_class).html();
		if (ifHaveInner == "" || ifHaveInner == undefined) { // 当本产品没有被选中的行，将外层div隐藏
			$("."+selectList_class).remove();
		}
	});
	//点击遮罩
	$(".mask").on('click', function() {
		//获取已选择的批次
		var indexArr=[];
		var cHtml="";
		var theBox=$(this).attr("getBox");
		var selectListNum=theBox.split("_")[1];
		$("input:checkbox").each(function() {
			var checked = $(this).is(':checked');
			if(checked){
				var getInputNum=$(this).parent().siblings().find(".number").val();
				var getBatch=$(this).parent().siblings().find(".batchNum").html();
				cHtml+="<li class=\"clearfix\" >";
				cHtml+="<div class=\"batch_text fl\">批号："+getBatch+"</div>";
				cHtml+="<div class=\"num_text fl\">数量："+getInputNum+"</div>";
				cHtml+="<div class=\"deleteLi fr\">";
				cHtml+="<div class=\"list_img_close\"></div>";
				cHtml+="</div>"
				cHtml+="</li>";
				indexArr.push($(this).attr("id"));
			}
		});
		if(indexArr.length>0){
			$("#"+theBox).siblings(".selectList").html("<ul class=\"selectListUl"+selectListNum+"\">"+cHtml+"</ul>");
		}else{
			$("#"+theBox).siblings(".selectList").html("");
		}
		//隐藏侧边栏
		$(".batchPop").css({
            right: "-80%",
            transition: "right .5s"
       	});
        $(".showPop>ul>li .goodsTit").removeClass("choose");
        $(".mask").hide();
	});
	//点击checkBox
	$(document).on('click', 'input:checkbox', function(){
        if($(this).prop('checked')){
            $(this).prop('checked','checked');
            var getBatchNum=$(this).parent().siblings().find(".stock span").html();
            $(this).parent().siblings().find(".number").val(getBatchNum);
        }else{
    		$(this).parent().siblings().find(".number").val(''); 
        }
	});
	$(document).on('click', '.checkbox li', function(){
		$(this).find(".check").click();
	});

	$(document).on('click', '.checkInput', function(){
		$(this).find(".check").click();
	});
	$(document).on('click', '.number', function(){
		//防止事件冒泡
		return false;
	})
	//点击完成
	$(".finishForm").click(function(){
		showMsg("您好，提交成功",0);
	});
	$(document).on('click', '.confirmBtn', function(){
		if($(this).attr("ifhide")=="yes"){	
			hideMsg();
		}else{
			showMsg("您好，提交成功",1);
		}
	});
	$(document).on('click', '.cancelBtn', function(){
		hideMsg();
	});
});
//获取url参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
function checkNum(obj){
	var thisNumStr = $(obj).val(); // input框的值
	var reg = /[^\d.]/g; // 正则验证输入的字符只能为数字和小数点
	var result = thisNumStr.match(reg);
	
	if (result == null) {
		var batchNum=$(obj).parent().parent().siblings().find(".stock").html();// 库存量
		var numArr = thisNumStr.split('.');
		if (numArr.length > 2) { // 限制小数点只能有一位
			$(obj).val('');
			$(obj).parent().parent().parent().siblings().find(".check").prop("checked", false);
			return;
		}
		if (thisNumStr * 1 > batchNum * 1) { // 限制输入数量不能超过库存数量
			$(obj).val(batchNum);
			return;
		}
		if (numArr[1] != undefined && numArr[1].length > 2) { // 如果超过两位小数，四省五入
			$(obj).val((thisNumStr * 1).toFixed(2));
		} else {
			$(obj).val(thisNumStr);
		}
		$(obj).parent().parent().parent().siblings().find(".check").prop("checked", true); // 设置选择框选中
		var newNumStr =$(obj).val(); // 验证新值
		if ("" == newNumStr || newNumStr == ".") {
			$(obj).val('');
			$(obj).parent().parent().parent().siblings().find(".check").prop("checked", false);
		}
	} else {
		$(obj).val(thisNumStr.replace(reg, "")); // 验证错误，删除输入的字符
		var newNumStr = $(obj).val();
		if ('' == newNumStr) {
			$(obj).parent().parent().parent().siblings().find(".check").prop("checked", false);
		}
	}
}
//信息弹框
function showMsg(msg,getType){
	$(".tipsTxt").html(msg);
	$(".showTips").show();
	$(".mask1").show()
	if(getType=="0"){
		
	}else if(getType=="1"){
		$(".cancelBtn").remove();
		$(".confirmBtn").attr("ifhide","yes");
		$(".confirmBtn").css("width","100%");
	}
	var popHeight=-($(".showTips").height()/2);
	$(".showTips").css("margin-top",popHeight);
}
function hideMsg(){
	$(".showTips").hide();
	$(".mask1").hide();
}
//获取假数据
function getMList(){
	var mHtml="";
	var cHtml="";
	for(var i=0;i<mLength;i++){
		if(materialObj[i].type=="g"){
			mHtml+="<li>";
			mHtml+="<div class=\"goodsTit\" id=\"choose_"+materialObj[i].id+"\">"+materialObj[i].materialName+"</div>";
			mHtml+="<div class=\"selectList\"></div>";
			mHtml+="</li>";
		}else if(materialObj[i].type=="c"){
			cHtml+="<li>";
			cHtml+="<div class=\"goodsTit\" id=\"choose_"+materialObj[i].id+"\">"+materialObj[i].materialName+"</div>";
			cHtml+="<div class=\"selectList\"></div>";
			cHtml+="</li>";
		}
	}
	$(".goodsList").html(mHtml);
	$(".consumList").html(cHtml);
}
function getBatchList(getId){
	var bHtml="";
	for(var i=0;i<mLength;i++){
		if(materialObj[i].id==getId){
			for(var a=0;a<materialObj[i].batchList.length;a++){
				bHtml+="<li class=\"clearfix\">";
				bHtml+="<div class=\"checkInput fl\">";
				bHtml+="<input id=\"checkid_"+(a+1)+"\" class=\"check\" type=\"checkbox\">";
				bHtml+="</div>";
				bHtml+="<div class=\"batchMsgBox fl\">";
				bHtml+="<div class=\"top clearfix\">";
				bHtml+="<div class=\"fl\">批号：<span class=\"batchNum\">"+materialObj[i].batchList[a].batch+"</span></div>";
				bHtml+="<div class=\"stock fr\">数量：<span>"+materialObj[i].batchList[a].StockNum+"</span></div>";
				bHtml+="</div>";
				bHtml+="<div class=\"bottom clearfix\">";
				bHtml+="<div class=\"fl\">时间："+materialObj[i].batchList[a].batchTime+"</div>";
				bHtml+="<div class=\"fr\">"
				bHtml+="<input class=\"number\" type=\"text\" onkeyup=\"checkNum(this)\" placeholder=\"输入数量\">"
				bHtml+="</div>";
				bHtml+="</div>";
				bHtml+="</div>";
				bHtml+="</li>";
			}
			
		}
	}
	$(".checkbox").html(bHtml);
}
//份数Input失去焦点时
function lostFocus(){
	var copiesNum=Math.abs(parseInt($(".copiesInput").val()));
	if(copiesNum==""||copiesNum<1||isNaN(copiesNum)){
		$(".copiesInput").val("1");
		$(".cutNum").css("background","#ebebe4");
	}
	sumNum(copiesNum)
}
//所有的input值乘以份数
function sumNum(copiesNum){
	//获取份数，所有input乘以倍数
	if(copiesNum>=1){
		var inputNum=$("input[ifInput]");
		var valArr=[];
		for(var i=0;i<inputNum.length;i++){
			valArr[i]=inputNum[i].defaultValue*copiesNum;
		}
	//	console.log(valArr);
		for(var n=0;n<valArr.length;n++){
			inputNum[n].value=valArr[n];
		}
	}	
}
