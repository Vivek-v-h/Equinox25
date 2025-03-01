
    $(document).ready(function(){

        $('.gallery > div.bg').each(function(){
            $(this).wrapAll('<a href="" data-fancybox="gallery"></a>');
        });
    
        $('.gallery a').each(function(){
            var link = $(this).children('.bg').css('background-image');
            console.log(link);
            link = link.replace(/(url\(|\)|")/g,'');
            $(this).attr('href', link);
        });
    
        $("[data-fancybox]").fancybox({
            loop: true,
            buttons: [
                "zoom",
                "share",
                "slideShow",
                "fullScreen",
                "download",
                "thumbs",
                "close"
            ]		
        });
    
    });
