$(function(){
    $(".del>img").click(function(){
        $(this).parent().parent().parent().parent().remove();
        del()
    })
    function del(){
        if(confirm("确认删除吗")){
        }
        else{
        return;
        }
    }
})