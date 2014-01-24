jQuery(function($){
    $('#fixed').click(function(){
        $('ul.text-content li input').prop('disabled',false).addClass('fixing');
    });

    /*fix height 2 div*/
    $(function(){
        $('#order-content').equalHeights();
    });
});
