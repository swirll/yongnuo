$(function(){
    $(".order>.title>ul li").click(function(){
       $(".order>.title>ul li").find("a").removeClass("on");
       $(this).find("a").addClass("on");
       $(".goods>ul").css("display","none");
       $(".order>ul.page").css("display","none");
       $(".goods>ul").eq($(this).index()).css("display","block");
    //    if($(".goods>ul.list").css("display") == "block"){
    //        $(".goods>ul.page").css("display","block");
    //    }
       if($(".goods>ul").eq($(this).index()).find("li").length>=3){
        $(".order>ul.page").css("display","block");
    }
       // console.log($(".order>ul").eq($(this).index()))
   })
})