<template>
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
        <div class="content" @getNewData = 'getNewData'>
            <div class="con">
                <p v-for="(el,key) in arr" :key="key">{{el}}</p>
            </div>
            <BuyContent v-on:getNewData="getNewData" :loadMoreObj="loadMoreObj"></BuyContent>
        </div>
        <div class="kong"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import {mapState} from 'vuex'
    import _ from 'lodash'
    // import ajax from '../../api/ajax'
    // import $ from 'jquery'
    import BuyContent from "../../components/BuyContent/BuyContent";

    export default {
        comments:{
            BuyContent
        },

        data() {
            return {
                buyNavArr: [],
                buyContentArr: [],
                arr:[],
                loadMoreObj:{
                    url:'/api/getInfo',
                    pageSize:10,
                }
            }
        },

        // eslint-disable-next-line no-mixed-spaces-and-tabs
        mounted() {
            this.$store.dispatch('getBuyNav')
            // this.$store.dispatch('getBuyContent')
        },

        computed: {
            ...mapState(['buyNav','buyContent'])
        },

        methods:{
            getNewData(_arr){
                this.arr=this.arr.concat(_arr);
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
            // buyContent(){
            //     const {buyContent} = this.$store.state
            //     this.buyContentArr = buyContent
            // }
        }
    }
</script>

<style lang="stylus" scoped>
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
            background-color #f00
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
</style>
