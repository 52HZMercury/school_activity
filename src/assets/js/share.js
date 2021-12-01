// 去获取微信分享配置信息
let wxShare = async () => {
    // 请求接口时我把页面访问令牌也传过来了，如果不需要可以不用串
    // 分享链接也可以不编码
    const res = await Axios.get('/wx/share?url=' + encodeURIComponent(window.location.href))
    return res.data.data
}
// 初始化分享
let initWx = async (shareData) => {
    // 这个是我们需要分享的外部域名
    let _url = window.location.href

    // 获取配置信息
    const wxSign = await wxShare()
    // 这个不引入也可以吧，之前我的项目就没引入，还是引入吧万一哪里出错了呢
    const wxData = new Promise((resolve, reject) => {
        let script = document.createElement('script')
        script.src = 'http://res.wx.qq.com/open/js/jweixin-1.4.0.js'
        document.head.appendChild(script)
        script.onload = () => {
            resolve(window.wx)
        }
    })
    const wx = await wxData
    // 这一步其实可以后端配好
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: wxSign.appId, // 必填，公众号的唯一标识
        timestamp: wxSign.timestamp, // 必填，生成签名的时间戳
        nonceStr: wxSign.nonceStr, // 必填，生成签名的随机串
        signature: wxSign.signature, // 必填，签名
        jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage'
        ] // 必填，需要使用的JS接口列表
    })

    wx.ready(() => {
        // 分享给好友
        wx.onMenuShareAppMessage({
            title: shareData.title, // 分享标题
            desc: shareData.desc, // 分享描述
            link: _url,
            imgUrl: shareData.imgUrl, // 分享图标
            success: function () {
                console.log('分享成功')
            },
            cancel: function () {
                console.log('分享失败')
            }
        })

        // 分享到朋友圈
        wx.onMenuShareTimeline({
            title: shareData.title, // 分享标题
            link: _url,
            imgUrl: shareData.imgUrl, // 分享图标
            success: function () {
                console.log('分享成功')
            },
            cancel: function () {
                console.log('分享失败')
            }
        })
    })
}
