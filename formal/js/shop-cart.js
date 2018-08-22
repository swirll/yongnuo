$(function(){
    $(".shop input[type='checkbox']").hide();
    $(".minus").click(function(){
        var i = $(this).next(".number input").val();
        if(i>1){
            i--;
            $(this).next(".number input").val(i);
            console.log(i)
        }else{
            $(this).next(".number input").val("1");
            var i = 1;
        }
        var num = $(this).next().val();
        var price = $(this).parent().parent().parent().find(".price");
        var sub = $(this).parent().parent().parent().find(".sub");
        var pricep = price.text();
        var s = parseInt(num*pricep);
        sub.text(s.toFixed(2));
        total();
    })
    //数量的减

    $(".add").click(function(){
        var i = $(this).prev(".number input").val();
        i++;
        $(this).prev(".number input").val(i);
        var num = $(this).prev().val();
        var price = $(this).parent().parent().parent().find(".price");
        var sub = $(this).parent().parent().parent().find(".sub");
        var pricep = price.text();
        var s = parseInt(num*pricep);
        sub.text(s.toFixed(2));
        total();
    })
    //数量的加


    $(".number input").keydown(function(e){
        var code = e.keyCode;
        if((code <= 47 || code >=57) && (code <= 95 || code >= 105) && code != 8){
            return false;
        }
    })
    //让数量框只能输入数字和删除
    $(".number input").each(function(){
        $(this).change(function(){
            if($(this).val()<=1){
                $(this).val("1");
            }
            if(isNaN($(this).val())){
                $(this).val("1");
            }
            var num = $(this).val();
            var price = $(this).parent().parent().parent().find(".price");
            var sub = $(this).parent().parent().parent().find(".sub");
            var pricep = price.text();
            var s = parseInt(num*pricep);
            sub.text(s.toFixed(2));
            total();
        })
    })
    
    //当数量框值改变时，小于1的时候，值变为零


    $(".shop .qx").parent().parent().click(function(){
        if( $(this).next().prop('checked')==false){
            $(".shop li input[type='checkbox']").prop("checked",true);
            $(".shop .xz>img").prop("src","../images/input2.png");
            $(this).find(".qx").prop("src","../images/input2.png");
            $(this).next().prop('checked',true)
            $(".shop li input[type='checkbox']").prop("checked",true);
        }else{
            $(".shop li input[type='checkbox']").prop("checked",false)
            $(".shop .xz>img").prop("src","../images/input1.png");
            $(this).find(".qx").prop("src","../images/input1.png");
            $(this).next().prop('checked',false)
            $(".shop li input[type='checkbox']").prop("checked",false);
        }
        $(".count").text($('.shop ul li input:checked').length);
        total();
    })
    //全选按钮

    $(".shop .xz>img").each(function(){
            $(this).click(function(){
                if($(this).parent().parent().find("input[type='checkbox']").prop("checked")==false){
                    $(this).prop("src","../images/input2.png");
                    $(this).parent().parent().find("input[type='checkbox']").prop("checked",true)
                }else{
                    $(this).prop("src","../images/input1.png");
                    $(this).parent().parent().find("input[type='checkbox']").prop("checked",false)
                     
                }
                if($('.shop ul li input:checked').length == $(".shop .xz").length){
                    $(".shop .qx").prop("src","../images/input2.png");
                    $(".shop .qx").parent().parent().next().prop('checked',true)
                }else{
                    $(".shop .qx").prop("src","../images/input1.png");
                    $(".shop .qx").parent().parent().next().prop('checked',false)
                }
                $(".count").text($('.shop ul li input:checked').length);
                total();
            })
    })
    //商品input框选中的长度等于商品input框的长度时，全选框也被选中

    //反选
    $(".fx").click(function(){
        $(".shop ul li input[type='checkbox']").each(function(){
            $(this).prop('checked',!this.checked)
            if($(this).prop('checked') == true){
                $(this).prev().find("img").prop("src","../images/input2.png")
            }else{
                $(this).prev().find("img").prop("src","../images/input1.png")
            }
            if($('.shop ul li input:checked').length == $(".shop .xz").length){
                $(".shop .qx").prop("src","../images/input2.png");
                $(".shop .qx").parent().parent().next().prop('checked',true)
            }else{
                $(".shop .qx").prop("src","../images/input1.png");
                $(".shop .qx").parent().parent().next().prop('checked',false)
            }
        })
        $(".count").text($('.shop ul li input:checked').length);
        total();
    })
   
    
    //计算价格
    function total(){
        var zj = 0;
        $('.shop ul li input:checked').each(function(){
            zj+=Number($(this).parents('li').find('.sub').text())	
        })
        $(".total").text("￥"+zj.toFixed(2));
    }

    //单项删除
    $(".del").click(function(){
        $(this).parent().parent().parent().parent().remove()
        if($(".del").length == 0){
            $(".ul").css("height","100px");
            $(".ul").css("text-align","center");
            $(".ul").css("line-height","100px");
            $(".ul").css("color","red");
            $(".ul").text("购物车中没有商品！");
        }
        if($('.shop ul li input:checked').length == $(".shop .xz").length){
            $(".shop .qx").prop("src","../images/input2.png");
            $(".shop .qx").parent().parent().next().prop('checked',true)
        }else{
            $(".shop .qx").prop("src","../images/input1.png");
            $(".shop .qx").parent().parent().next().prop('checked',false)
        }
        $(".count").text($('.shop ul li input:checked').length);
        total();
        del();
    })

    //反向删除
    $("#del").click(function(){
        $(".shop ul li input[type='checkbox']").each(function(){
            if($(this).prop('checked') == true){
                $(this).parent().remove();
            }
        $(".count").text($('.shop ul li input:checked').length);
        total();
        })
        if($('.shop ul li input:checked').length == $(".shop .xz").length){
            $(".shop .qx").prop("src","../images/input2.png");
            $(".shop .qx").parent().parent().next().prop('checked',true)
        }else{
            $(".shop .qx").prop("src","../images/input1.png");
            $(".shop .qx").parent().parent().next().prop('checked',false)
        }
        if($(".del").length == 0){
            $(".ul").css("height","100px");
            $(".ul").css("text-align","center");
            $(".ul").css("line-height","100px");
            $(".ul").css("color","red");
            $(".ul").text("购物车中没有商品！");
            $(".shop .qx").prop("src","../images/input1.png");
            $(".shop .qx").parent().parent().next().prop('checked',false)
        }
        del();
    })
    $(".count").text($('.shop ul li input:checked').length);
    function del(){
        if(confirm("确认删除吗")){
        }
        else{
        return;
        }
        }
})