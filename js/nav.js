/**
 * Created with JetBrains PhpStorm.
 * User: HeoCoi
 * Date: 11/14/13
 * Time: 8:19 AM
 * To change this template use File | Settings | File Templates.
 */
jQuery(function($){
    $('button.navbar-toggle').click(function(){
        $('#nav-header').slideToggle('fast');
    });
    if ($(window).width() >= 768) {
        $('#nav-header').slideDown('fast');
        $('div#header-container').slideDown('fast');
    }else if(($(window).width() < 768)){
        $('#nav-header').slideUp('fast');

    }
    $(window).resize(function () {
        if ($(window).width() >= 768) {
            $('#nav-header').slideDown('fast');
            $('div#header-container').slideDown('fast');
        }else if(($(window).width() < 768)){
            $('#nav-header').slideUp('fast');

        }
    });
});