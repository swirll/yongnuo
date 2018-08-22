$(function(){
    banner();
		var timer;
		var a = 0;
		function banner(){
			timer = setInterval(function(){
				if(a == $("#pic>li").length-1){
					a = 0; 
				}else{
					a++;
				}
				$("#pic>li").eq(a).fadeIn(100).siblings().fadeOut(100);
				$("#cir>li").eq(a).addClass("on").siblings().removeClass("on");
			},2000)
		}
		$("#banner").hover(function(){
			clearInterval(timer);
		},function(){
			banner();
		})
		$("#cir>li").mouseover(function(){
			$("#pic>li").eq($(this).index()).fadeIn(100).siblings().fadeOut(100);
			$(this).addClass("on").siblings().removeClass("on");
		})
		$("#right").click(function(){
			if(a == $("#pic>li").length-1){
					a = 0; 
				}else{
					a++;
				}
				$("#pic>li").eq(a).fadeIn(100).siblings().fadeOut(100);
				$("#cir>li").eq(a).addClass("on").siblings().removeClass("on");
		})
		$("#left").click(function(){
			if(a == 0){
				a = $("#pic>li").length-1;
			}else{
				a--;
			}
			$("#pic>li").eq(a).fadeIn(100).siblings().fadeOut(100);
			$("#cir>li").eq(a).addClass("on").siblings().removeClass("on");
		})
})