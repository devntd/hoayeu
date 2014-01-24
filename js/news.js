/**
 * Created with JetBrains PhpStorm.
 * User: HeoCoi
 * Date: 11/20/13
 * Time: 10:35 PM
 * To change this template use File | Settings | File Templates.
 */
/*Windows scroll*/
// Call function scrollTo
jQuery(function($){
    $('a.scrollTo').click(function () {
        $('body').scrollTo($(this).attr('href'), 800);
        return false;
    });

    $(window).scroll(function(){
        var $top = $(this).scrollTop();
        /*alert($top);*/
        if($top >= 350){
            $("aside").addClass("col-lg-push-8 col-md-push-8 col-sm-push-8 scroll");
        }else if ($top <430){
            $("aside").removeClass("col-lg-push-8 col-md-push-8 col-sm-push-8 scroll");
        }
    });
});
