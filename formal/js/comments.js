$(function(){
    $(".evaluate ul>li").click(function(){
		if($(this).prop("class") == ""){
			$(this).addClass("on");
		}else{
			$(this).removeClass("on");
		}
    })
    
    $("textarea").keyup(function(ev){
     $(".num").text($("textarea").val().length);
    })

    // $(".unload").click(function(){

    // })

})