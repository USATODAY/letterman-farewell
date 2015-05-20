define(
    ["jquery", "underscore"], 
    function(jQuery, _) {
        /******
         
          project head and chatter
         
         *****/
        var head= "Tales from Letterman’s guests",
        chatter = "During his 33 years as a late-night host, the weatherman from Indianapolis has shot the breeze with Bill Murray, Barack Obama and Bruce Willis. Here's how his guests, and in some cases friends, remember him.";
        
        
        /******
         
          static info
         
         *****/



        var staticInfo = JSON.parse($('.staticinfo').html());
        var isMobile = staticInfo.platform === 'mobile';
        var isTablet = false;
        if (!isMobile && window.Modernizr.touch) {
            if (window.innerHeight < 1300 && window.innerWidth < 1300) {
                isTablet = true;
            }
        }

        return _.extend(staticInfo, {
            isMobile: isMobile,
            isTablet: isTablet,
            head: head,
            chatter: chatter
        });
});
