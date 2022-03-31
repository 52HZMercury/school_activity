import '../assets/font/font_anonymous/iconfont'
export const anonymousImg = {
    data() {
        return {
            imgSrc:'',
            anonymous:'',
            anonymousArr:[
                'icon-lanbaimao','icon-lanmao','icon-yinjianceng','icon-jinjianceng','icon-meiduan',
                'icon-buoumao-xiyouse','icon-buoumao-zhongdianse','icon-buoumao-haibaoshuangse','icon-jiafeimao','icon-xianluomao',
                'icon-nainiumao','icon-dajumao','icon-abixiniyamao','icon-shizimao','icon-mianyinmao',
                'icon-sanhuamao','icon-daimaomao','icon-sifenkesiwumaomao','icon-heimao','icon-lihuamao',
            ],
            url:'http://mercuryblog.site:8080/'
        }
    },
    methods: {
        //传进来res.data[index]
        avatar(data){
            // console.log(data.invisible)
            // console.log(data)
            if(!data.invisible){
                this.imgSrc = this.url+data.user.headImg
                // console.log(this.anonymous)
                //考虑覆盖
                this.anonymous = ''
            }else{
                //考虑覆盖
                this.imgSrc = ''
                this.anonymous = '#'+this.anonymousArr[Math.floor(Math.random() * 20 )]
            }
        },
        //改变匿名头像
        changeAnonymous(){
            this.anonymous = '#'+this.anonymousArr[Math.floor(Math.random() * 20 )]
        }
    },
        
}