define(['jquery', 'jquery.fancybox', 'jquery.slides'], function(){
    
    // Slideshow lightbox
    $(".slideshow-lightbox").fancybox({
        fitToView   : false,
        autoSize    : true,
        openEffect  : 'none',
        closeEffect : 'none',
        afterShow   : function(){
            if (this.content) {
                this.content.find(".slideshow").slidesjs({
                    width: 600,
                    height: 500,
                    pagination: {
                        active: false
                    },
                    navigation: {
                        active: false
                    }
                });
            }
        }
    });

    // Video lightbox

    // Graphic lightbox
    $(".graphic-lightbox").fancybox({
        fitToView   : false,
        // width       : '90%',
        // height      : '90%',
        autoSize    : true,
        openEffect  : 'none',
        closeEffect : 'none'
    });
});