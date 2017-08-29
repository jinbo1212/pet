// tips 弹窗
function layerData(msg) {
    layer.open({
        content: msg
        , skin: 'msg'
        , time: 2 //2秒后自动关闭
    });
}
// 跳转页面
function jumpPage(url) {
    var webview = mui.openWindow({
        url: url,
        extras: {
        }
    });
}