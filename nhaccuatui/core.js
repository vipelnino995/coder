type = "text/javascript" >
    $(document).ready(function () {
        TCommon.init();

        TPromote.initSmartAppBanner("", "", "");


        bodyLoadedPlayer();
        if (!TNowplaying.isPageNowplaying) {
            TPlayer.initPlayer("", "playlist");
        }

        $('.banner_3g .ic_close_small').click(function () {
            $('.banner_3g').hide();
        });
        TPromote.initRatingPopup();
        TPage.GA_TOUCH_V2 = "UA-273986-64";
        TPage.GA_TOUCH_V2_3G = "UA-273986-65";



        //            TCommon.showToolTipsApp("https://nhaccuatui.onelink.me/tyQf/7b0b8fad");

        //            gtag('event', 'view', {
        //                'event_category': 'PromoteAppv7_ButtonLogo',
        //                'event_label': ''
        //            });
        //            $("#imgLogoPromoteApp").click(function(){
        //                gtag('event', 'click', {
        //                    'event_category': 'PromoteAppv7_ButtonLogo',
        //                    'event_label': ''
        //                });
        ////                window.location = "https://nhaccuatui.onelink.me/tyQf/b7f8e7b9";
        //                window.location = "http://apps.nhaccuatui.com/install-app.html";
        //            });





    });



type = "text/javascript" >
    window.fbAsyncInit = function () {
        FB.init({
            appId: '414296278689656',
            xfbml: true,
            version: 'v2.10'
        });
    };

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/vi/all.js";
    //                js.src = NCTInfo.STATIC_URL + "js/core/fb_sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
type =>

    window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-273986-64', {
    'page_path': "/"
});



<div id="popupWindowBg" class="bg_popoup">
    <div id="popupWindow" class="box_info_popup">
        <div class="box_title_popup"><label>Thông báo</label></div>
        <div class="box_content_popup">
            <span class="show_info">
                Vui lòng mở JavaScript để truy cập NhacCuaTui.com
            </span>
        </div>
        <div class="box_show_button"></div>
    </div>
</div>



(function ($) {
    $.fn.cancelZoom = function () {
        return this.each(cancelZoom);
    };

    // Usage:
    $('input:text,select,textarea').cancelZoom();
})(jQuery);



!function (t, e, n, s, a, c, i, o, p) { t.AppsFlyerSdkObject = a, t.AF = t.AF || function () { (t.AF.q = t.AF.q || []).push([Date.now()].concat(Array.prototype.slice.call(arguments))) }, t.AF.id = t.AF.id || i, t.AF.plugins = {}, o = e.createElement(n), p = e.getElementsByTagName(n)[0], o.async = 1, o.src = "https://websdk.appsflyer.com?" + (c.length > 0 ? "st=" + c.split(",").sort().join(",") + "&" : "") + (i.length > 0 ? "af_id=" + i : ""), p.parentNode.insertBefore(o, p) }(window, document, "script", 0, "AF", "banners", { banners: { key: "4b028a7b-4ccc-4d55-a72f-96d2a769ce3e" } })
function getDeepLink() {
    var url = window.location.href;
    var newStr = url.split(".");
    var songId = newStr[newStr.length - 2];
    var link = encodeURIComponent("nct://nctcorp/content?type=song&value=" + songId)
    console.log('[ home ]-580', link);
    return link
}
var home_deep_link_value = getDeepLink()
console.log('[ home_deep_link_value ]-577', home_deep_link_value);
AF('banners', 'showBanner', { additionalParams: { deep_link_value: home_deep_link_value, deep_link_sub1: home_deep_link_value, af_dp: home_deep_link_value, af_adset: "my_adset" } })

    (function afFunc() {
        var bannerTimer = null;
        var timerCount = 0;
        var EXIT_TIME = 60 * 10; // s
        bannerTimer = setInterval(function () {
            var afBanner = document.querySelector('.responsive-wrapper')
            var isExitTimer = timerCount >= EXIT_TIME;
            if (afBanner || isExitTimer) {
                clearInterval(bannerTimer);
                if (isExitTimer) return;
                var afBannerPrevEl = afBanner.previousElementSibling;
                var bannerHeight = afBannerPrevEl.clientHeight;
                console.log('bannerHeight', bannerHeight);
                let newBannerHeight = bannerHeight - 82
                afBannerPrevEl.style.height = newBannerHeight >= 0 ? newBannerHeight : 0 + "px";
                console.log('afBannerPrevEl598', afBannerPrevEl)

            } else {
                timerCount++;
            }
        }, 1000)
    })()


