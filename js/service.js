jQuery(function($){
    $(function(){
        $('#service').equalHeights();
    });
    $(window).resize(function(){
       if($(window).width() <= 768 ){
           $('div#list-service').insertAfter('p.content');
       } else{
           $('div#list-service').insertAfter('#text');
       }
    });
});