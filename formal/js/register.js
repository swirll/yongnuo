$(function(){
    $("input[type = 'checkbox']").hide();
    $(".sure>img").parent().parent().click(function(){
        if( $(this).find("input").prop('checked')==false){
            $(this).find("input").prop("checked",true);
            $(this).find("img").prop("src","../images/input2.png");
        }else{
            $(this).find("input").prop("checked",false)
            $(this).find("img").prop("src","../images/input1.png");
        }
    })


    $(".num").each(function(){
        $(this).change(function(){
            if($(this).val()<=1){
                $(this).val(" ");
            }
            if(isNaN($(this).val())){
                $(this).val(" ");
            }
        })
    })

    // $(".num").keydown(function(e){
    //     var code = e.keyCode;
    //     if((code <= 47 || code >=57) && (code <= 95 || code >= 105) && code != 8){
    //         return false;
    //     }
    // })

    $(".num").keyup(function(){
        var c=$(this);  
       if(/[^\d]/.test(c.val())){//替换非数字字符  
        var temp_amount=c.val().replace(/[^\d]/g,'');  
        $(this).val(temp_amount);  
       }  
   })

    //让数量框只能输入数字和删除
    // $("label>input").parent().find("p").hide();
    // $("label>input").parent().find("h1").hide();
    $("label>input").blur(function(){
        if($(this).val() == ""){
            $(this).next("p").css("display","block");
            $(this).parent().find("h1").css("display","none");
        }else{
            $(this).next("p").css("display","none");
        }
    })
    $("label").eq(0).find("input").blur(function(){
        var bb = $(this).val().length;
        if(bb<3 && bb!=0){
           alert("用户名最小长度为3！");
        }
    })

    $("label>input[type='password']").blur(function(){
        var bb = $(this).val().length;
        if(bb<6 && bb!=0){
           alert("密码最小长度为6！");
        }
    })

    $("label>input.tel").blur(function(){
        var bb = $(this).val().length;
        if(bb<9 && bb!=0){
            alert("请输入9位手机号！");
        }
    })

    $(".npsd").blur(function(){
        var a = $(".npsd").val();
        var b = $(".psd").val();
        if(a!=b){
            alert("请确认密码一致！")
        }
    })
    $("#email").blur(function(){
        check();
    })

    

    $("input[type='submit']").click(function(){
        // $("label input").each(function(){
            var val =$("label input").val();
            if(val == "" || $("input[type='checkbox']").prop('checked') == false){
                alert("请完善验证信息！")
            }
        // })
        
    })


    function check(){
        　　var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
        　　var obj = document.getElementById("email"); //要验证的对象
        　　if(obj.value === ""){ //输入不能为空
        　　　　alert("输入不能为空!");
        　　　　return false;
        　　}else if(!reg.test(obj.value)){ //正则验证不通过，格式不对
        　　　　alert("请输入正确的邮箱！");
        　　　　return false;
        　　}else{
        　　　　return true;
        　　}
        }

})