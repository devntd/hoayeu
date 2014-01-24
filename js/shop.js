jQuery(function($){
    $("div.side-bar > ul > li").click(function(){
        $(this).children("ul").slideToggle('slow');
        $(this).parent("ul").toggleClass("ul-active");
    });
    $('p.menu-extra-small').click(function(){
        $('div.side-bar > ul').slideToggle("slow");
    });
    $('div.node').click(function(event){
        $('div.node').addClass("col-lg-4 col-md-4 col-sm-4").removeClass("node-active col-lg-8 col-md-8 col-sm-8");
        $("hgroup").removeClass("col-lg-6 col-md-6 col-sm-6 col-xs-6 hgroup-active");
        $(".text-price").removeClass("col-lg-6 col-md-6 col-sm-6 col-xs-6 p-active");
        $("div.content-sp").removeClass("content-sp-active");
        $(this).removeClass("col-lg-4 col-md-4 col-sm-4").addClass("node-active col-lg-8 col-md-8 col-sm-8")
            .find("hgroup").addClass("col-lg-6 col-md-6 col-sm-6 col-xs-6 del-padding hgroup-active")
            .end()
            .find(".text-price").addClass("col-lg-6 col-md-6 col-sm-6 col-xs-6 del-padding p-active")
            .end()
            .find("div.content-sp").slideDown("content-sp-active").addClass("content-sp-active");
    });

});