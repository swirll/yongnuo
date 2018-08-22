$(function(){
    $(".choice").parent().parent().find(("input[type = 'checkbox']")).hide();
    $(".open>span").click(function(){
        var h = $(this).parent().parent().find(".include").css("height");
        if(parseInt(h) == 79){
             $(this).parent().parent().find(".include").css("height","auto");
             var hh = $(this).parent().parent().find(".include").css("height");
             $(this).parent().parent().find("small").css("height",hh);
             $(this).parent().parent().find("small").css("line-height",hh);
        }else{
            $(this).parent().parent().find(".include").css("height","79px");
            $(this).parent().parent().find("small").css("height","80px");
            $(this).parent().parent().find("small").css("line-height","80px");
        }
    })


    $(".classify form > input").change(function(){
        if($(".classify form > input").val()<=1){
            $(".classify form > input").val("");
        }
        if(isNaN($(this).val())){
            $(this).val("1");
        }
    })
    

    $(".classify form > input").keydown(function(e){
        var code = e.keyCode;
        if((code <= 47 || code >=57) && (code <= 95 || code >= 105) && code != 8 && code != 110){
            return false;
        } 
    })

    $(".shoplist>.title>a").click(function(){
			$(this).addClass("on").siblings().removeClass("on");
    })

    // $(".choice").click(function(){
    //     if($(this).parent().parent().find("input[type = 'checkbox']").prop("checked") == false){
    //         $(this).parent().parent().find(("input[type = 'checkbox']")).prop("checked",true);
    //         $(this).prop("src","../images/input2.png");
    //     }else{
    //         $(this).parent().parent().find(("input[type = 'checkbox']")).prop("checked",false);
    //         $(this).prop("src","../images/input1.png");
    //     }
    // })

    $(".choice").parent().parent().click(function(){
        if($(this).find("input[type = 'checkbox']").prop("checked") == false){
            $(this).find(("input[type = 'checkbox']")).prop("checked",true);
            $(this).find(".choice").prop("src","../images/input2.png");
        }else{
            $(this).find(("input[type = 'checkbox']")).prop("checked",false);
            $(this).find(".choice").prop("src","../images/input1.png");
        }
    })


    $(".open>button").bind('click',function(){
        if($(this).text()=="单选"){
            $(this).text("多选");        
        }else{
            $(this).text("单选"); 
            $(this).parent().prev().find('span a').removeClass()    
        }
        
    })

    $(".include>span>a").bind('click',function(){
        if($(this).parents('div').next().find('button').text()=='单选'){
           $(this).addClass('on').parent().siblings().find('a').removeClass()
        }else{
            $(this).toggleClass('on')
        }
    })
})