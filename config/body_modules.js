// 加载JQ，低版本，兼容ie8https://code.jquery.com/jquery-1.12.4.min.js
document.write('<script src="' + dotsSum + 'jquery/jquery-1.12.4.min.js"></script>')
// 加载rem
document.write('<script src="' + dotsSum + 'config/flexible.js"></script>')
// 访问后端
document.write('<script src="' + dotsSum + 'config/ajax.js"></script>')
// 页面跳转
document.write('<script src="' + dotsSum + 'config/routers.js"></script>')



function shangQiao() {
    // var _hmt = _hmt || [];
    // (function () {
    //     var hm = document.createElement("script");
    //     hm.src = "https://hm.baidu.com/hm.js?55e3045ecc2368c8841840cf18cbe5f4";
    //     var s = document.getElementsByTagName("script")[0];
    //     s.parentNode.insertBefore(hm, s);
    // })();
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b8e1e0c8c872f0faf4d5aabda6b9de45";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);

        setTimeout(function () {
            $('#nb_invite_ok').click();
        }, 6000);

    })();
}
// setTimeout(() => {
// shangQiao();
// }, 4000);