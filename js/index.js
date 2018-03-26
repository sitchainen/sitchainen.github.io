var type = navigator.appName;

　　if (type == "Netscape"){
    　　var lang = navigator.language;//获取浏览器配置语言，支持非IE浏览器
　　}else{
    　　var lang = navigator.userLanguage;//获取浏览器配置语言，支持IE5+ == navigator.systemLanguage
　　};
　　var lang = lang.substr(0, 2);//获取浏览器配置语言前两位
　　if (lang == "en"){
   　　window.location.replace('http://www.sharinglease.com');
　　//}else{//其他语言编码时打开以下链接
   　//　 window.location.replace('url');
　　};

$(document).ready(function () {
    var scrollTop = $(document).height() - $(window).height();
    var scrollOffset = 25;
    var scrollTracking = {"25": false, "50": false, "75": false};

    $(window).scroll(function () {
        if ($(window).scrollTop() > scrollOffset) {
            if ($(window).scrollTop() > 3 * (scrollTop / 4) && scrollTracking['75'] == false) {
                // Scrolled 75%
                scrollTracking['75'] = true;
                _paq.push(["trackEvent", "scroll", "scroll75", 75]);
            } else if ($(window).scrollTop() > 2 * (scrollTop / 4) && scrollTracking['50'] == false) {
                // Scrolled 50%
                scrollTracking['50'] = true;
                _paq.push(["trackEvent", "scroll", "scroll50", 50]);
            } else if ($(window).scrollTop() > (scrollTop / 4) && scrollTracking['25'] == false) {
                // Scrolled 25%
                scrollTracking['25'] = true;
                _paq.push(["trackEvent", "scroll", "scroll25", 25]);
            }
        }
    });


    $('.trackData').click(function(){
        var trackItem = $(this).data('name');
        _paq.push(['trackEvent',trackItem,'click','1']);
    });

});

var swiper = new Swiper('.js__swiper-clients', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3
});
