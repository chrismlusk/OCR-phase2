define(["jquery","jquery.fancybox","jquery.slides","domReady!"],function(){var e=$("article#story .slideshows-wrapper .slideshow"),s=jQuery("article#story .slideshows-wrapper .slideshow figure").length;jQuery("article#story .slideshows-wrapper .total-slides").html(s),e.slidesjs({pagination:{active:!1},navigation:{active:!1},callback:{complete:function(e){jQuery("article#story .slideshows-wrapper .current-slide").html(e)}}}),$("article#story .slideshows-wrapper .fullscreen a").click(function(){$(".slideshows-wrapper")[0].webkitRequestFullscreen()})});