<template>
    <div class="container-water-fall" style="height: 100%">
        <waterfall :width="itemWidth"  height="100%" :data="data"  @loadmore="loadmore"  @scroll="scroll"  >
            <template v-slot:aa>
                <div class="buyContainer">
                    <div class="header">
                        <div class="left">
                            <i class="iconfont icon-shouye"></i>
                        </div>
                        <div class="center">
                            <span>值得买</span>
                        </div>
                        <div class="right">
                            <i class="iconfont icon-search"></i>
                            <i class="iconfont icon-gouwuche"></i>
                        </div>
                    </div>
                    <div class="kong"></div>
                    <div class="bg">
                        <img src="./images/logo.png" alt="">
                        <span>严选好物 用心生活</span>
                    </div>
                    <div class="swiperNav">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" style="width: 168px" v-for="(item, index) in buyNavArr" :key="index">
                                    <div class="item" v-for="(i , index) in item" :key="index">
                                        <img :src="i.picUrl" alt="">
                                        <div class="title">
                                            <p>{{i.mainTitle}}</p>
                                            <span>{{i.viceTitle}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                    <BuyContent/>
                    <!--        <div class="kong"></div>-->
                </div>
            </template>
            <template >
                <div class="item1" v-for="(i, index) in data" :key="index" >
                    <img :src="i.picUrl" alt="">
                    <span>{{i.title}}</span>
                    <div class="author">
                        <div class="left">
                            <img :src="i.avatar" alt="">
                            <p>{{i.nickname}}</p>
                        </div>
                        <div class="right">
                            {{i.readCount > 1000 ? Math.floor(i.readCount / 1000) : i.readCount}}
                        </div>
                    </div>
                </div>
            </template>
        </waterfall>
    </div>
</template>

<script>
    import {reqBuyContent} from '../../api'
    import Swiper from 'swiper'
    import {mapState} from 'vuex'
    import _ from 'lodash'
    import $ from 'jquery'
    export default{
        name:'Order',
        data(){
            return{
                buyNavArr: [],
                data:[],
                col:2,
                page:1,
                size:5
            }
        },
        computed:{
            ...mapState(['buyNav','buyContent']),
            itemWidth(){
                // console.log((document.documentElement.clientWidth))
                return (document.documentElement.clientWidth/2)  //#rem布局 计算宽度
            },

            gutterWidth(){
                return ((document.documentElement.clientWidth/2))	//#rem布局 计算x轴方向margin(y轴方向的margin自定义在css中即可)
            }
        },

        mounted(){
            this.$store.dispatch('getBuyNav')
            this.loadmore()
            console.log($('#vueWaterfall').height())
        },

        methods:{
            scroll(){
            },
            switchCol(col){
                this.col = col
            },
            async loadmore(index){
                console.log('触底', index)
                let result = await reqBuyContent(this.page, this.size)
                let arr = result.data.result
                let newArr = []
                arr.map((item) => {
                    if(item.look !== null){
                        newArr.push(item.look)
                    }
                    item.topics.map(i => {
                        newArr.push(i)
                    })
                })
                if(this.data.length > 0){
                    this.data.push(...newArr)
                }else {
                    this.data = newArr
                }
                this.page ++
            }
        },

        watch: {
            buyNav() {
                // console.log(this.$store.state.buyNav.navList)
                const {navList} = this.$store.state.buyNav
                this.buyNavArr = _.chunk(navList, 2)
                this.$nextTick(() => {
                    new Swiper('.swiper-container', {
                        slidesPerView: 'auto',
                        // spaceBetween: 10,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        },
                    })
                })
            },
        }
    }
</script>

<style lang="stylus">
    .buyContainer
        background-color: #eee

        .header
            width 100%
            height 100px
            background-color #fff
            box-sizing border-box
            padding 0 26px
            display flex
            align-items center
            justify-content space-between
            position fixed
            top 0
            left 0
            z-index 99
            .left
                width 140px

                i
                    font-size 48px
                    color #333

            .center
                span
                    font-size 36px

            .right
                width 140px
                display flex
                justify-content space-between

                i
                    font-size 48px
                    color #333

        .kong
            height 100px

        .bg
            width 100%
            height 524px
            background-image url('./images/bg.png')
            background-size 100% 100%
            position relative

            img
                width 130px
                height 70px
                position absolute
                left 12px
                top 60px

            span
                font-size 30px
                color #fff
                position absolute
                top 89px
                left 146px

        .swiperNav
            width 100%
            height 173px
            margin-bottom 20px
            /*background-color #f00*/
            box-sizing border-box
            padding 0 20px
            position relative

            .swiper-container
                width calc(100% - 40px)
                height 540px
                background-color #fff
                border-radius 15px
                position absolute
                bottom 10px
                left 50%
                transform translateX(-50%)

                .swiper-wrapper
                    width auto !important

                    .swiper-slide
                        width 180px!important
                        height 470px
                        box-sizing border-box
                        padding 36px 6px 6px 6px
                        .item
                            width 168px
                            height 200px
                            &:nth-child(1)
                                margin-bottom 28px
                            img
                                width 120px
                                height 120px
                                margin 0 auto 8px
                            .title
                                display block
                                width 168px
                                height 72px

                                text-align center
                                p
                                    line-height 40px
                                    font-weight 600
                                    font-size 30px
                                span
                                    color #666


        .content
            width 100%
            /*height 600px*/
            background-color: #fff
            box-sizing border-box
            padding 0 20px
            column-count: 2;
            /*column-gap: 10px;*/
            /*.colItem*/
            .con
                p
                    padding: 10px 0;
                    margin-bottom: 10px;
                    height: 50px;
                    background: #f00;
                    color: #fff;
            .item
                /*width 100%*/
                /*height 200px*/
                /*height auto*/
                margin 0 0 20px 0
                /*margin: 10px;*/
                width: calc(100% - 10px);
                img
                    width 100%
                    height 100%
                    border-radius 10px
        .kong
            height 100px



    ::-webkit-scrollbar {
        width: 0 !important;
    }
    ::-webkit-scrollbar {
        width: 0 !important;height: 0;
    }
    .vue-waterfall{
        overflow-y: auto;
    }
    .vue-waterfall-column{
        margin-left:0!important;
        float right!important
        box-sizing border-box
        padding  0 20px 0 20px
    }
    .container-water-fall{
        /*width: 100%;*/
        /*height: 100%;*/
        background-color: #eee;
    }
    #vueWaterfall{
        box-sizing: border-box;
        padding: 0;
    }

    .item1{
        box-sizing border-box;
        background-color: #fff
        margin-bottom 20px
        margin-left -20px
        border-radius 0 0 10px 10px
    }

    .item1 img{
        width: 100%;
        height: 100%;
        border-radius: 10px 10px 0 0 ;
        margin-bottom: 15px;
    }
    .item1 span{
        display: block;
        padding: 0 16px;
        box-sizing: border-box;
        line-height: 36px;
        font-size: 28px;
        color: #333;
        margin-bottom: 10px;
    }
    .item1 .author{
        width: 100%;
        box-sizing: border-box;
        padding: 10px 16px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .item1 .author .left{
        display: flex;
    }
    .item1 .author .left img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 5px;
    }
    .item1 .author .left p{
        font-size: 24px;
        color: #999;
        line-height: 54px;
    }
    .item .author .right{
        font-size: 22px;
        color: #999;
    }
    .vue-waterfall  .vue-waterfall-column{
        width: 100%;
    }

</style>
