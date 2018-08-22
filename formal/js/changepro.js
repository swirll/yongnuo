$(function(){
    $(".information>ul>li").eq(0).find("a").addClass("on");
    $(".eval li>a").eq(0).addClass("on");
    $(".information>ul>li").click(function(){
        $(".information>ul>li").find("a").removeClass("on");
        $(this).find("a").addClass("on");
        $(".information>div").hide();
        $(".information>div").eq($(this).index()).show();
    })
$(".eval li>a").click(function(){
    $(".eval li>a").removeClass("on");
    $(this).addClass("on")
})

})