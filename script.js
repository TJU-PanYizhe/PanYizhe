var myDate = new Date();

// Birthday | New Year
window.onload = function () {
    if (myDate.getMonth() + 1 == 7 && myDate.getDate() == 28) {
        alert("🥂今天是博主的生日哦!🥂")
    }
    else if (myDate.getMonth() + 1 == 1 && myDate.getDate() == 1) {
        alert("😊新的一年祝您身体健康, 心想事成, 阖家团圆, 万事如意!😊")
    }
}

// Jarvis
function Jarvis() {
    console.log('Jarvis is my co-pilot')
}

// 客户端跳转
// (function () {
//     var ua = window.navigator.userAgent,
//         agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPod', 'iPad'],
//         isPC = true
//     if (/\sVR\s/g.test(ua)) return
//     for (var i = 0, len = agents.length; i < len; i++) {
//         if (ua.indexOf(agents[i]) > 0) {
//             isPC = false
//             break
//         }
//     }
//     if (!isPC) {
//         window.location.href = 'https://m.panyizhe.com'
//     }
// })();

// 输出客户端信息
(function () {
    var ua = navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isChrome = /(?:Chrome|CriOS)/.test(ua),
        isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian && !isTablet;
    console.log({
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc
    });
})();
