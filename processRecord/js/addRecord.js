//时间下拉框
var yearMonth="{2016=[11-12],2017=[01-02]}";
var timeArr=(yearMonth.substring(1,yearMonth.length-1)).split(",");
var arryY=[];
for(var i=0;i<timeArr.length;i++){
	var getY=timeArr[i].split("=")[0];
	arryY.push(getY);
}
var adjust_json={
	"good1":{
		"matrixName":"名称1",
    	"batch":"1-E-10254-PT100-4",
		"time":"2016-11-04 09:29:34",
		"outPutList":[
           	{
        	   "outPutName":"产出商品1",
        	   "outPutBatch":"11-E-10254-PT100-4"
           	},
           	{
        	   "outPutName":"产出商品2",
        	   "outPutBatch":"12-E-10255-PT100-4"
           	},
           	{
        	   "outPutName":"产出商品3",
        	   "outPutBatch":"13-E-10255-PT100-4"
           	}
		],
		"outConsumList":[
			{
				"outConsumName":"产出消耗品1",
        	   	"outConsumBatch":"11-Y-10254-PT100-4"
			},
			{
				"outConsumName":"产出消耗品2",
        	   	"outConsumBatch":"12-Y-10254-PT100-4"
			}
		]
    },
    "good2":{
		"matrixName":"名称2",
    	"batch":"2-E-10254-PT100-4",
		"time":"2016-11-20 16:21:26",
		"outPutList":[
           	{
        	   "outPutName":"产出商品1",
        	   "outPutBatch":"21-E-10254-PT100-4"
           	},
           	{
        	   "outPutName":"产出商品2",
        	   "outPutBatch":"22-E-10255-PT100-4"
           	},
           	{
        	   "outPutName":"产出商品3",
        	   "outPutBatch":"23-E-10255-PT100-4"
           	}
		],
		"outConsumList":[
			{
				"outConsumName":"产出消耗品1",
        	   	"outConsumBatch":"21-Y-10254-PT100-4"
			},
			{
				"outConsumName":"产出消耗品2",
        	   	"outConsumBatch":"22-Y-10254-PT100-4"
			}
		]
    },
    "good3":{
		"matrixName":"名称3",
    	"batch":"3-E-10254-PT100-4",
		"time":"2016-11-30 08:11:00",
		"outPutList":[
           	{
        	   "outPutName":"产出商品1",
        	   "outPutBatch":"31-E-10254-PT100-4"
           	},
           	{
        	   "outPutName":"产出商品2",
        	   "outPutBatch":"32-E-10255-PT100-4"
           	}
		],
		"outConsumList":[
			{
				"outConsumName":"产出消耗品1",
        	   	"outConsumBatch":"31-Y-10254-PT100-4"
			},
			{
				"outConsumName":"产出消耗品2",
        	   	"outConsumBatch":"32-Y-10254-PT100-4"
			},
			{
				"outConsumName":"产出消耗品3",
        	   	"outConsumBatch":"33-Y-10254-PT100-4"
			}
		]
    },
    "good4":{
		"matrixName":"名称4",
    	"batch":"4-E-10254-PT100-4",
		"time":"2016-12-01 13:44:03",
		"outPutList":[
           	{
        	   "outPutName":"产出商品1",
        	   "outPutBatch":"41-E-10254-PT100-4"
           	},
           	{
        	   "outPutName":"产出商品2",
        	   "outPutBatch":"42-E-10255-PT100-4"
           	}
		],
		"outConsumList":[
			{
				"outConsumName":"产出消耗品1",
        	   	"outConsumBatch":"41-Y-10254-PT100-4"
			}
		]
    },
    "good5":{
		"matrixName":"名称5",
    	"batch":"5-E-10254-PT100-4",
		"time":"2017-01-02 08:16:36",
		"outPutList":[
           	{
        	   "outPutName":"产出商品1",
        	   "outPutBatch":"51-E-10254-PT100-4"
           	},
           	{
        	   "outPutName":"产出商品2",
        	   "outPutBatch":"52-E-10255-PT100-4"
           	},
           	{
        	   "outPutName":"产出商品3",
        	   "outPutBatch":"53-E-10255-PT100-4"
           	},
           	{
        	   "outPutName":"产出商品4",
        	   "outPutBatch":"54-E-10255-PT100-4"
           	}
		],
		"outConsumList":[
			{
				"outConsumName":"产出消耗品1",
        	   	"outConsumBatch":"51-Y-10254-PT100-4"
			},
			{
				"outConsumName":"产出消耗品2",
        	   	"outConsumBatch":"51-Y-10254-PT100-4"
			},
			{
				"outConsumName":"产出消耗品3",
        	   	"outConsumBatch":"51-Y-10254-PT100-4"
			}
		]
    },
    "good6":{
		"matrixName":"名称6",
    	"batch":"6-E-10254-PT100-4",
		"time":"2017-02-12 09:33:22",
		"outPutList":[
           	{
        	   "outPutName":"产出商品1",
        	   "outPutBatch":"61-E-10254-PT100-4"
           	},
           	{
        	   "outPutName":"产出商品2",
        	   "outPutBatch":"62-E-10255-PT100-4"
           	},
           	{
        	   "outPutName":"产出商品3",
        	   "outPutBatch":"63-E-10255-PT100-4"
           	},
           	{
        	   "outPutName":"产出商品4",
        	   "outPutBatch":"64-E-10255-PT100-4"
           	}
		],
		"outConsumList":[
			{
				"outConsumName":"产出消耗品1",
        	   	"outConsumBatch":"61-Y-10254-PT100-4"
			},
			{
				"outConsumName":"产出消耗品2",
        	   	"outConsumBatch":"61-Y-10254-PT100-4"
			},
			{
				"outConsumName":"产出消耗品3",
        	   	"outConsumBatch":"61-Y-10254-PT100-4"
			}
		]
    }
}
var adJsonObj=[];
for(var a in adjust_json){
	var rs = eval("adjust_json." + a);
	adJsonObj.push(rs);
};
//
$(function(){
	//1205add——tab选择添加/调整
	$(".chooseTab div").click(function(){
		$(this).addClass('act1').siblings().removeClass('act1');
		var num =$(this).index();
		if(num==0){
			$(".adjustBox").hide();
			$(".recordBox").show();
		}else{
			$(".recordBox").hide();
			$(".adjustBox").show();
		}
	});
	//
	$(".outPutShop").on("click",'input[name="outPutRadiog0"]',function(){ 
		var radioName  = $('input[name="outPutRadiog0"]:checked').val();
		if(radioName=="pro"){
			$("#hasStorage0").prop("checked","false");
			$("#noStorage0").prop("checked",'true');
			$("#noStorage0").prop("disabled", "disabled");
			$("#hasStorage0").prop("disabled", "disabled");
		}else if(radioName=="sale"){
			console.log("1");
			$("#noStorage0").prop("disabled", null);
			$("#hasStorage0").prop("disabled", null);
		}
	});
	//点击选择添加/调整
	$('input[name="chooseRadio"]').click(function(){
		var choseVal  = $('input[name="chooseRadio"]:checked').val(); 
		if(choseVal=="add"){
			$(".adjustBox").hide();
			$(".recordBox").show();
		}else if(choseVal=="adjust"){
			$(".recordBox").hide();
			$(".adjustBox").show();
		}
	})
	//点击商品列表——出现侧边栏
	$(".recordBox").on("click",".shopList li",function(){  
		$(this).addClass("liActive").siblings().removeClass("liActive");
		$(".mask").show();
        $(".batchPop").css({
            right: "0",
            transition: "right .5s"
        });
        $(".chooseBox").hide();
        $(".shopName").html("名称："+$(this).html());
	}); 
	
	//只能选择一个批次
	$(':checkbox[name="batchCheckbox"]').each(function(){
        $(this).click(function(){  	
            if($(this).prop('checked')){
                $(':checkbox[name="batchCheckbox"]').removeAttr('checked');
                $(this).prop('checked','checked');
            }
        });
    });
    
    //点击遮罩
	$(".mask").click(function(){
		$(".batchPop").css({
            right: "-80%",
            transition: "right .5s"
       	});
       	$(".mask").hide();
       	$(".shopList li").removeClass("liActive")
       	var chooseBatch="";
        $.each($(':checkbox[name="batchCheckbox"]'),function(){
            if(this.checked){
                chooseBatch=$(this).attr("id");
                var batchObj=$("#"+chooseBatch).parent().parent();
				$(".shopBatch").html("批次："+batchObj.find(".batchNum").html());
				$(".shopTime").html(batchObj.find(".bottom div").html());
				$(".chooseBox").show();
            }
        });
	});
	//隐藏被选中信息
	$(".deleteMsg").click(function(){
		$(".chooseBox").hide();
	});
	
	//调整部分
	//点击时间列表
	var thes=0;
	$(".timeBox").on("click",".timeList li",function(){ 
		var getTime=$(this).html();
		$(this).addClass("timeActive").siblings().removeClass("timeActive");
		if(thes==0){
   			getContent(getTime);
   			thes=1;
   		}else{
   			$(".timeResult").stop(true, true).slideUp(700);
   			setTimeout(function () {
				getContent(getTime);
			},710);
   		}
	});
	//选择年月
	//切换年份
	var thef=0;
	$(".selectY").change(function(){ 
		var getYear = $(".selectY").val();
		thef=0;
		thes=0;
		$(".selectM").html("");
		$(".timeBox").stop().slideUp(500);
		$(".timeResult").stop().slideUp(500);
		$(".selectM").append("<option value='0'>- - 选择月份 - -</option>");
		getMonth(getYear);
	});
	
	//切换月份
	$(".selectM").change(function(){ 
	    var getMonth=$(this).val();
	    thes=0;
	    $(".timeBox").stop().slideUp(500);
	    $(".timeResult").stop().slideUp(500);
	    var getYear=$(".selectY").val();
	    if(getMonth!="0"){
	   		if(thef==0){
	   			getTime(getYear,getMonth);
	   			thef=1;
	   		}else{
	   			$(".finishList").stop().slideUp(500);
	   			setTimeout(function () {
		    		getTime(getYear,getMonth);
		    	},510);
	   		}
	    }else{
	    	$(".finishList").stop().slideUp();
	    	$(".finishList").html("");
	    }
	});
});
//获取月份
function getMonth(getYear){
	for(var i=0;i<arryY.length;i++){
		if(arryY[i]==getYear){
			var month = timeArr[i].split("=")[1];	
			var monthStr = month.substring(1,month.length-1);	
			var monthArr = monthStr.split("-");
			for(var mon=0;mon<monthArr.length;mon++){
				$(".selectM").append("<option value='"+monthArr[mon]+"'>"+monthArr[mon]+"月</option>");
			}
		}
	}
}
//获取时间列表
function getTime(getYear,getMonth){
	var thtml="";
	var timeObj=[];
	for(var i=0;i<adJsonObj.length;i++){
		timeObj.push((adJsonObj[i].time).substring(0,7));
	}
	for(var i=0;i<adJsonObj.length;i++){
		if(timeObj[i]==getYear+"-"+getMonth){
			thtml+="<li>"+adJsonObj[i].time+"</li>";
		}
		
	}
	$(".timeList").html(thtml);
	$(".timeBox").css("height","auto");
	$(".timeBox").stop().slideDown(400,function(){
		$(".timeBox").css("height","auto");
    });
}
//获取内容
function getContent(getTime){
	var mhtml="";
	var ohtml="";
	var chtml="";
	var a="";
	for(var i=0;i<adJsonObj.length;i++){
		if(getTime==adJsonObj[i].time){
			mhtml+="<div>名称："+adJsonObj[i].matrixName+"</div>";
			mhtml+="<div>批号："+adJsonObj[i].batch+"</div>";
			mhtml+="<div>数量："+"2222222"+"</div>";
			a=i;
		}
	}
	for(var b=0;b<adJsonObj[a].outPutList.length;b++){
		ohtml+="<li>";
		ohtml+="<div>名称："+adJsonObj[a].outPutList[b].outPutName+"</div>";
		//1205
		ohtml+="<div>";
		ohtml+="<div>批号："+adJsonObj[a].outPutList[b].outPutBatch+"</div>";
		ohtml+="<div class=\"numInput\">";
		ohtml+="<span>数量：</span>";
		ohtml+="<input type=\"text\" name=\"ourPutGoods1\" id=\"ourPutGoods1\" placeholder=\"数量\">";
		ohtml+="</div></div>";
		ohtml+="<div class=\"lineBox\">";
		ohtml+="<span>状态：</span>";
		ohtml+="<label>";
		ohtml+="<input name='stateRadiog"+b+"' type=\"radio\" value=\"hasStorage\" id='hasStorage"+b+"' checked=\"\">";
		ohtml+="<span>已入库</span>";
		ohtml+="</label><label>";
		ohtml+="<input name='stateRadiog"+b+"' type=\"radio\" value=\"noStorage\" id='noStorage"+b+"'>";
		ohtml+="<span>无</span>";
		ohtml+="</label></div><div>";
		ohtml+="<span>用途：</span>";
		ohtml+="<label>";
		ohtml+="<input name='outPutRadiog"+b+"' type=\"radio\" value=\"sale\" id=\"OsaleRadiog1\" checked=\"\">";
		ohtml+="<span>用于出售</span>";
		ohtml+="</label>";
		ohtml+="<label>";
		ohtml+="<input name='outPutRadiog"+b+"' type=\"radio\" value=\"pro\" id=\"OproRadiog1\">";
		ohtml+="<span>用于加工</span></label></div></li>";
	}
	for(var c=0;c<adJsonObj[a].outConsumList.length;c++){
		chtml+="<li>";
		chtml+="<div>名称："+adJsonObj[a].outConsumList[c].outConsumName+"</div>";
		chtml+="<div>";
		chtml+="<div class=\"\">批号："+adJsonObj[a].outConsumList[c].outConsumBatch+"</div>";
		chtml+="<div class=\"numInput\">";
		chtml+="<span>数量：</span>";
		chtml+="<input type=\"text\" name=\"outPutConsum1\" id=\"outPutConsum1\" placeholder=\"数量\">";
		chtml+="</div></div><div>";
		chtml+="<span>用途：</span>";
		chtml+="<label>";
		chtml+="<input name='outPutConsumRadiog"+c+"' type=\"radio\" value=\"sale\" id=\"OCsaleRadiog1\" checked=\"\">";
		chtml+="<span>用于出售</span>";
		chtml+="</label>";
		chtml+="<label>";
		chtml+="<input name='outPutConsumRadiog"+c+"' type=\"radio\" value=\"pro\" id=\"OCproRadiog1\">";
		chtml+="<span>用于加工</span>";
		chtml+="</label></div></li>";
	}
	console.log(a);
	$(".matrixMsg").html(mhtml);
	$(".outPutShop").html(ohtml);
	$(".outPutConsum").html(chtml);
	$(".timeResult").css("height","auto");
	$(".timeResult").stop().slideDown(500,function(){
		$(".timeResult").css("height","auto");
    });
}

