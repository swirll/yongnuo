$(function(){
    $("label>input").parent().find("p").hide();
    $("label>input").blur(function(){
        if($(this).val() == ""){
            $(this).parent().find("p").show();
        }else{
            $(this).parent().find("p").hide();
        }
    })
})