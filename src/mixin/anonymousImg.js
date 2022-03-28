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
        }
    },
    methods: {
        //传进来res.data
        avatar(data,index){
            if(!data[index].invisible){
                this.imgSrc = this.url+data[index].user.headImg
            }else{
                this.anonymous = '#'+this.anonymousArr[Math.floor(Math.random() * 20 )]
            }
        },
        //改变匿名头像
        changeAnonymous(){
            this.anonymous = '#'+this.anonymousArr[Math.floor(Math.random() * 20 )]
        }
    },
        
}