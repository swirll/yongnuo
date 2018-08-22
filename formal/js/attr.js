$(function(){
	$("#big li").click(function(){
		var llimg = $(this).find("img").attr("src");
		$("#img").attr("src",llimg);
		$("#small").attr("_src",llimg)
		$(this).addClass("on").siblings().removeClass("on");
	})

	$(".minus").click(function(){
        var i = $(this).prev().find(" input").val();
        if(i>1){
            i--;
            $(this).prev().find(" input").val(i);
        }else{
            $(this).prev().find(" input").val("1");
		}
		
    })

    $(".add").click(function(){
        var i = $(this).next().find(" input").val();
        i++;
        $(this).next().find(" input").val(i);
	})
	
	$(".number input").keydown(function(e){
        var code = e.keyCode;
        if((code <= 47 || code >=57) && (code <= 95 || code >= 105) && code != 8){
            return false;
		}
    })
    $(".number input").change(function(){
        if($(".number input").val()<=1){
            $(".number input").val("1");
		}
		if(isNaN($(this).val())){
			$(this).val("1");
		}
	})
	
	$(".favour>span").click(function(){
		$(this).css("border","1px solid #cc0000").siblings().css("border","1px solid #ccc")
	})
	
	$(".evaluate>ul>li").click(function(){
		if($(this).prop("class") == ""){
			$(this).addClass("on");
		}else{
			$(this).removeClass("on");
		}
	})

	$(".information>h1>a").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	})

	
})
var small = document.getElementById("small");
var	img = document.getElementById("img");
var xs = document.getElementById("xs");
	small.onmouseenter = function(e){
		if(!this.span){
			this.span = document.createElement("span");
			this.zoom = document.createElement("div");
			this.span.id = "span";
			this.zoom.id = "zoom";
		}
		//将this.span追加上去  //this.zoom也追加上去
		this.zoom.innerHTML = '<img src="'+this.getAttribute("_src")+'">'
		this.zoom.style.left = this.offsetWidth + this.offsetLeft + "px";
		this.zoom.style.top = this.offsetTop + "px";
		this.appendChild(this.span);
		xs.appendChild(this.zoom)
	}
	//滚动
	small.onmousemove = function(e){
	
		var l = e.clientX - this.offsetLeft - 50;
		var t = e.clientY - this.offsetTop - 50 + window.pageYOffset;
		if(l<0)l=0;
		if(l>this.offsetWidth-100)l=this.offsetWidth-100;
		if(t<0)t=0;
		if(t>this.offsetHeight-100){
			t=this.offsetHeight-100;
		}
		var x,y;//x => img的left  y => img的top
		x = l/(this.offsetWidth-100)*(this.zoom.firstChild.offsetWidth - this.zoom.offsetWidth);
		y = t/(this.offsetHeight-100)*(this.zoom.firstChild.offsetHeight - this.zoom.offsetHeight);
		this.span.style.left = l+"px";
		this.span.style.top = t +"px";
		this.zoom.firstChild.style.left = -x+"px";
		this.zoom.firstChild.style.top = -y+"px";
	}
	small.onmouseleave = function(){
		if(this.span){
				this.removeChild(this.span);
				xs.removeChild(this.zoom);
			}
	}