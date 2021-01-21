(function ($){

    /*Dropdown*/

    var drop= $('.drop').find('a'),
    dropContent = $('.content');

    drop.on('click',function(){

    dropContent.toggle( "fast", function() {
    });

    });


})(jQuery);