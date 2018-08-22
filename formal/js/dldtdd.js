$(function(){
//    var height = $("dl").css("height");
//    $("dt").css("height",height);
//    $(".nav-list").css("display","none");
//    $(".all").hover(function(){
//     $(".nav-list").css("display","block");
//    },function(){
//     $(".nav-list").css("display","none");
//    })
//    $(".nav-list li>a").hover(function(){
//        $("dl").css("display","none");
//        $(this).next().css("display","block");
//    },function(){
//     $("dl").css("display","none");
//    })
//    $("dl").hover(function(){
//     $(this).css("display","block");
//    },function(){
//     $(this).css("display","none");
//    })
    $(".nav-list li>a").each(function(){  
        $(this).click(function(){
            $(this).next("dl").css("display","block");
        }) 
        
    })
    
})