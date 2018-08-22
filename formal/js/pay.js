$(function(){
    $(".money li input").hide();
    $(".money li>span").click(function(){
        $(".money li>span").text(" ");
        $(".money li>span").removeClass("on");
        $("input[type='radio']").prop("checked",false);
        $(this).text("√");
        $(this).addClass("on");
        $(this).next().next().prop("checked",true)
    })
    $(".money li>img").click(function(){
        $(".money li>span").text(" ");
        $(".money li>span").removeClass("on");
        $("input[type='radio']").prop("checked",false);
        $(this).parent().find("span").text("√");
        $(this).parent().find("span").addClass("on");
        $(this).parent().find("input").prop("checked",true)
    })
    var number = 59;
    var number2 = 59;
    function time(){
        var mtime = setInterval(function(){
            number--;
            $(".minu").text(number);
            // console.log(number);
            if(number <= 0){
                clearInterval(mtime);
            }
        },590000);
        var stime = setInterval(function(){
            number2--;
            $(".second").text(number2);
            // console.log(number2);
            if(number2 <= 0){
                clearInterval(stime);
            }
        },1000)
    }
    time()
})