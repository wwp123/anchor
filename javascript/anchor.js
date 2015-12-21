// JavaScript Document
jQuery(document).ready(function($) {
	
	nh = $('.anchor_nav').height();
   $(".anchor_nav li a").click(function(event) { 
      var index=$(this).attr("anchor-id");
      var id='#'+'index_'+index;
	  //$(".anchor_nav li a").removeClass('on');
	  //$(this).addClass('on'); 
	  if($('.anchor_nav').css('position') == 'fixed'){
		  $("html,body").animate({scrollTop: $(id).offset().top-nh}, 1000);
	  }else{
		  $("html,body").animate({scrollTop: $(id).offset().top-nh*2}, 1000);
	  }
     
   });
   
$(function() {  
    $(window).scroll(function(){
    t = $(document).scrollTop();
	h = $('.anchor_top').height();
	th = $('.h15').height() + $('#index_1').height();
	var num = 5;
	
    if(t >= h){
		$('.anchor_nav').css({'position':'fixed','top':'0'});
		$('#index').addClass("anchor_ie6");
    }else {
		$('.anchor_nav').css('position', 'relative');
		$('#index').removeClass("anchor_ie6");
	}
	
	var rst = t - h + nh;
	for(var i = 1; i <= num; i++){
		s1 = 0;
		for(var j = 1; j < i; j++){
			s1 += $('.r' + j).height();
		}
		rst1 = s1 + $('.r' + i).height() + i*th;
		rst2 = s1 + (i-1)*th;
		
		if((rst < rst1)&&((rst > rst2)||(i != 1 && rst == rst2))){
			$('#nav' + i).addClass('on');
		}else {
			$('#nav' + i).removeClass('on');
		}
	}

		
})   
   
});
  });