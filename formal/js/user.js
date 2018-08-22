$(function(){
    $(".npsd").blur(function(){
        var pss = $(".npsd").val();
        var newp = $(".psd").val();
        if(pss!=newp){
           $(this).next().next("p").css("display","block");
           $(this).next().css("display","none");
        }else{
            $(this).next().next("p").css("display","none");
            $(this).next().css("display","none");
        }
    })


    $(".psd").blur(function(){
        var pad = $(".pad").val();
        var psd = $(".psd").val();
        // if(pad == psd){
        //     alert("新密码与旧密码不可一样！")
        // }

        if(pad==psd){
            $(this).next().next("p").css("display","block");
            $(this).next().css("display","none");
         }else{
             $(this).next().next("p").css("display","none");
             $(this).next().css("display","block");
         }
    })
})