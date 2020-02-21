<template>
    <div class="indexContainer">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in indexData.focusList" :key="index">
                    <img :src="item.picUrl"/>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <div class="indexServicePolicy">
            <div class="policyItem" v-for="(item, index) in indexData.policyDescList" :key="index">
                <img :src="item.icon">
                <span>{{item.desc}}</span>
            </div>
        </div>
        <div class="categoryNav">
            <ul>
                <li v-for="(item, index) in kingKongList" :key="index">
                    <img :src="item.picUrl" alt="">
                    <span>{{item.text}}</span>
                </li>
            </ul>
        </div>
        <div class="indexBigPromotionModule">
            <div class="floorTop">
                <img src="./images/bg.png" alt="">
                <div class="promGood">
                    <div class="swiper-container1">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item, index) in promGood" :key="index" >
                                <img :src="item.picUrl"/>
                            </div>
                            <!-- <div class="price">￥ {{retailPrice}}</div> -->
                        </div>

                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
            <div class="floorFirst" v-for="(item, index) in floorFirst" :key="index">
                <img :src="item.picUrl">
            </div>
            <div class="floor">
                <div class="floorItem" v-for="(item, index) in floor1" :key="index">
                    <img :src="item.picUrl">
                </div>
                <!-- <div class="floorItem"></div> -->
            </div>
            <div class="floor">
                <div class="floorItem" v-for="(item, index) in floor2" :key="index">
                    <img :src="item.picUrl">
                </div>
            </div>
        </div>
        <div class="newPeopleVIP">
            <div class="title">
                <span>
                    新人专享礼
                </span>
            </div>
            <div class="content">
                <div class="left">
                    <span>新人专享礼包</span>
                    <img src="./images/vipBg.png" alt="">
                </div>
                <div class="right">
                    <div class="rightItem" v-for="(item, index) in peopleVIP" :key="index">
                        <p>{{item.title}}</p>
                        <span class="subTitle">{{item.subTitle}}</span>
                        <span class="tag" v-show="item.tag">{{item.tag}}</span>
                        <img v-show="item.picUrl" :src="item.picUrl" alt="">
                    </div>
                    <!-- <div class="rightItem"></div> -->
                </div>
            </div>
        </div>
        <div class="categoryList">
            <div class="title">
                <span>{{categoryHot.title}}</span>
            </div>
            <div class="content">
                <div class="contentItem" v-for="(item, index) in categoryHot.categoryList" :key="index">
                    <span>{{item.categoryName}}</span>
                    <img :src="item.picUrl" alt="">
                </div>

            </div>
        </div>
        <div class="limitedTime">
            <div class="title">
                <div class="titleLeft">
                    <p>限时购</p>
                    <span>00</span>:
                    <span>00</span>:
                    <span>00</span>
                </div>
                <div class="titleRight">
                    <span>
                        更多
                    </span>
                    <i class="iconfont icon-jiantou1"></i>
                </div>
            </div>
            <div class="content">
                <div class="contentItem" v-for="(item, index) in limitedTime" :key="index">
                    <img :src="item.showPicUrl" alt="">
                    <div class="price">
                        <span class="new">￥{{item.activityPrice}}</span>
                        <span class="old">￥{{item.originPrice}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="newProducts">
            <div class="title">
                <div class="titleLeft">
                    <p>限时购</p>
                </div>
                <div class="titleRight">
                    <span>
                        更多
                    </span>
                    <i class="iconfont icon-jiantou1"></i>
                </div>
            </div>
            <div class="content">
                <div class="contentItem" v-for="(item, index) in newItemList" :key="index">
                    <img :src="item.showPicUrl" alt="">
                    <div class="itemTitle">{{item.name}}</div>
                    <div class="price">￥239</div>
                    <div class="category">
                        <span class="tejia" v-for="(i, index) in item.itemTagList" :key="index">{{i.name}}</span>
                        <!-- <span class="xinpin">{{i.name}}</span>
                        <span class="shunfengbaoyou">{{i.name}}</span> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="shopping">
            <div class="item" v-for="(item, index) in shopping" :key="index">
                <div class="title">
                    {{item.styleItem.title}}
                </div>
                <div class="smallTitle">
                    {{item.styleItem.desc}}
                </div>
                <div class="imgList">
                    <img :src="item" alt="" v-for="(item, index ) in item.styleItem.picUrlList" :key="index">
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="download">
                <button>下载APP</button>
                <button>电脑版</button>
            </div>
            <p>网易公司版权所有 © 1997-2020</p>
            <p>食品经营许可证：JY13301080111719</p>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'
    import {mapState} from 'vuex'
    // const {kingKongModule} = indexData
    export default {
        data(){
            return{
                // list:
            }
        },

        mounted(){
            this.$store.dispatch('getIndexData', () => {
                this.$nextTick(() => {
                    new Swiper('.swiper-container',{
                        pagination: {
                            el: '.swiper-pagination',
                        },
                        loop: true,
                        // autoplay:true
                    })
                    new Swiper('.swiper-container1',{
                        loop: true,
                        autoplay:true,
                        effect : 'fade',
                    })
                })
            })

        },

        computed:{
            ...mapState(['indexData','promGood','kingKongList','floorFirst','floor1','floor2','peopleVIP','categoryHot','limitedTime','newItemList','shopping']),
        },
    }
</script>



<style lang="stylus" scoped>
    @import '../../common/stylus/mixins.styl';
    .indexContainer
        background-color #eee
        .swiper-container
            width 100%
            height 370px
            .swiper-wrapper
                width 100%
                height 370px
                .swiper-slide
                    width 100%
                    height 370px
                    background-color skyblue
                    img
                        width 100%
                        height 370px
            .swiper-pagination
                span
                    width 40px
                    height 4px
                    background-color rgba(255,255,255,0.9)
        .indexServicePolicy
            width 100%
            height 72px
            background-color #fff
            padding 0 30px
            display flex
            align-items center
            box-sizing border-box
            .policyItem
                width 228px
                height 36px
                // background-color blue
                // margin-right 3px
                display flex
                align-items center
                img
                    width 32px
                    height 32px
                    margin-right 8px
                span
                    font-size 16px
        .categoryNav
            width 100%
            height 372px
            boxsizing border-box
            padding-bottom 32px
            background-color #fff
            ul
                width 100%
                height 372px
                display flex
                flex-wrap wrap
                li
                    width 110px
                    height 156px
                    margin 10px 20px
                    // background-color pink
                    text-align center
                    img
                        width 110px
                        height 110px
                        // background-color yellow
                        margin-bottom 10px
                    span
                        color #333
        .indexBigPromotionModule
            background-color #1674e3
            height 828px
            margin-bottom 20px
            .floorTop
                width 100%
                height 240px
                // background-img url('./images/bg.png')
                // background-size 100% 100%
                position relative
                img
                    width 100%
                    height 100%
                .promGood
                    width 168px
                    height 168px
                    // background-color pink
                    position absolute
                    top 34px
                    left 75px
                    overflow hidden
                    .swiper-container1
                        width 100%
                        height 100%
                        .swiper-wrapper
                            position relative
                            .price
                                width 142px
                                height 32px
                                background-color #F48F18
                                border-radius 15px
                                position absolute
                                top 130px
                                left 50%
                                transform translateX(-50%)
                                z-index 2

            .floorFirst
                width 100%
                height 160px
                background-color #1674e3
                text-align center
                margin-top 20px
                margin-bottom 8px
                img
                    width 710px
                    height 160px
                    margin 0 auto

            .floor
                width 750px
                height 186px
                // background-color red
                display flex
                padding 0 20px
                margin-bottom 8px
                box-sizing border-box
                justify-content space-between
                .floorItem
                    width 351
                    height 186px
                    background-color pink
                    img
                        width 351px
                        height 100%
        .newPeopleVIP
            width 100%
            height 558px
            background-color #fff
            padding 0 30px 30px 30px
            box-sizing border-box
            margin-bottom 20px
            .title
                width 100%
                height 90px
                // background-color red
                line-height 90px
                text-align center
                span
                    font-size 32px
                    position relative
                    &::after
                        content ''
                        display block
                        width 32px
                        height 3px
                        background-color #333
                        position absolute
                        top 17px
                        left -50px
                    &::before
                        content ''
                        display block
                        width 32px
                        height 3px
                        background-color #333
                        position absolute
                        top 17px
                        right -50px
            .content
                width 100%
                height 438px
                // background-color #f00
                display flex
                justify-content space-between
                .left
                    width 343px
                    height 434px
                    background-color #F9E9CF
                    border-radius 10px
                    padding 30px 0 0 30px
                    box-sizing border-box
                    position relative
                    span
                        font-size 32px
                        color #333
                    img
                        width 258px
                        height 257px
                        position absolute
                        top 55%
                        left 50%
                        transform translate(-50%, -50%)
                .right
                    width 343px
                    height 437px
                    // background-color pink
                    .rightItem
                        width 100%
                        height 215px
                        background-color #FBE2D3
                        margin-bottom 4px
                        border-radius 10px
                        box-sizing border-box
                        padding 20px 0 0 30px
                        position relative
                        p
                            font-size 32px
                            margin-bottom 10px
                            color #333
                        .subTitle
                            color #7F7F7F
                        .tag
                            display block
                            width  120px
                            height 32px
                            background-color rgba(0,0,0,0.1)
                            text-align center
                            line-height 32px
                            border-radius 5px
                            color #fff
                        img
                            position absolute
                            bottom 0
                            right 0
                            width 200px
                            height 200px
        .categoryList
            width 100%
            height 710px
            background-color #fff
            box-sizing border-box
            padding 0 30px
            overflow hidden
            margin-bottom 20px
            .title
                width 100%
                height 100px
                // background pink
                span
                    font-size 32px
                    line-height 100px
                    color #333
            .content
                width 110%
                height 610px
                display flex
                flex-wrap wrap

                .contentItem
                    width 165px
                    height 180px
                    background-color #F5F5F5
                    margin 0 10px 10px 0
                    border-radius 5px
                    box-sizing border-box
                    padding-top 10px
                    text-align center
                    span
                        color #333
                        display block
                        margin-bottom 10px
                    img
                        // margin-top 10px
                        width 120px
                        height 120px
                        margin 0 auto
                    &:nth-child(1)
                        background-color #F9F3E4
                        width 340px
                        height 200px
                        box-sizing border-box
                        padding 66px 0 0 24px
                        position relative
                        text-align left
                        span
                            font-size 28px
                            color #333

                            position relative
                            &::after
                                content:''
                                display block
                                width 48px
                                height 4px
                                background-color #000
                                position absolute
                                left 0
                                top 50px
                        img
                            position absolute
                            top 0
                            right 0
                            width 200px
                            height 200px

                    &:nth-child(2)
                        // width 340px
                        // height 200px
                        background-color #EBEFF6
                        width 340px
                        height 200px
                        box-sizing border-box
                        padding 66px 0 0 24px
                        position relative
                        // padding-top 0
                        text-align left
                        span
                            font-size 28px
                            color #333
                            position relative
                            &::after
                                content:''
                                display block
                                width 48px
                                height 4px
                                background-color #000
                                position absolute
                                left 0
                                top 50pxposition relative
                            &::after
                                content:''
                                display block
                                width 48px
                                height 4px
                                background-color #000
                                position absolute
                                left 0
                                top 50px
                        img
                            position absolute
                            top 0
                            right 0
                            width 200px
                            height 200px

        .limitedTime
            width 100%
            height 700px
            background-color #fff
            margin-bottom 20px
            box-sizing border-box
            padding 0 30px
            overflow hidden
            .title
                width 100%
                height 100px
                // background-color pink
                display flex
                justify-content space-between
                // line-height 100px
                align-items center
                .titleLeft
                    display flex
                    p
                        font-size 32px
                        color #333
                        margin-right 12px
                    span
                        background-color #000
                        color #fff
                        line-height 36px
                        margin 0 10px
                        padding 0 3px
                        font-size 28px
                        border-radius 5px
                .titleRight
                    display flex
                    span
                        font-size 28px
                        color #333
                    i
                        font-size 28px
            .content
                width 110%
                height 600px
                display flex
                flex-wrap wrap
                .contentItem
                    width 216px
                    // background-color skyblue
                    height 270px
                    margin 0 20px 30px 0
                    display flex
                    align-items center
                    flex-direction column
                    img
                        width 216px
                        height 216px
                        background-color #F5F5F5
                        margin-bottom 10px
                    .price

                        .new
                            color $red
                            font-size 26px
                            margin-right 8px
                        .old
                            color #666
                            text-decoration line-through
        .newProducts
            width 100%
            height 920px
            background-color #fff
            margin-bottom 20px
            padding 0 30px
            box-sizing border-box
            overflow hidden
            .title
                width 100%
                height 100px
                // background-color pink
                display flex
                justify-content space-between
                // line-height 100px
                align-items center
                .titleLeft
                    display flex
                    p
                        font-size 32px
                        color #333
                        margin-right 12px
                    span
                        background-color #000
                        color #fff
                        line-height 36px
                        margin 0 10px
                        padding 0 3px
                        font-size 28px
                        border-radius 5px
                .titleRight
                    display flex
                    span
                        font-size 28px
                        color #333
                    i
                        font-size 28px
            .content
                width 110%
                height 820px
                // background-color #f00
                display flex
                flex-wrap wrap
                .contentItem
                    width 216px
                    height 380px
                    margin 0 20px 13px 0
                    // background-color #eee
                    img
                        width 216px
                        height 216px
                        margin-bottom 12px
                        background-color #f5f5f5
                    .itemTitle
                        width 100%
                        height 68px
                        font-size 24px
                        line-height 32px
                        overflow hidden
                        text-overflow ellipsis
                        margin-bottom 5px
                        color #333
                    // white-space nowrap
                    // display box // 必须结合的属性，将对象作为弹性伸缩盒子模型展示
                    // ine-clamp 2 // 需要结合其他属性来使用才有效果
                    // box-orient vertical // 必须结合的属性，设置子元素(在这里指文字)的排列方式
                    // overflow hidden
                    .price
                        font-size 30px
                        margin-bottom 10px
                        color $red
                    .category
                        span
                            font-size 20px
                            color $red
                            border 1px solid $red
                            padding 0 6px
        .shopping
            width 100%
            height 576px
            background-color: #fff
            box-sizing border-box
            padding 10px 30px 30px 30px
            display flex
            flex-wrap wrap
            justify-content space-between
            margin-bottom 20px
            .item
                width 343px
                height 264px
                background-color: #F5F5F5
                border-radius 10px
                box-sizing border-box
                padding 20px 0 0 20px
                .title
                    width 100%
                    height 48px
                    /*background-color: #e0e*/
                    font-size 32px
                    line-height 48px
                    color #333
                .smallTitle
                    width 100%
                    height 36px
                    /*background-color: #0ff*/
                    line-height 36px
                    color #7f7f7f
                .imgList
                    width 100%
                    height 150px
                    display flex
                    img
                        width 150px
                        height 150px
        .footer
            width 100%
            height 246px
            background-color: #414141
            box-sizing border-box
            padding 54px 20px 28px 20px
            display flex
            align-items center
            flex-direction column
            .download
                width 394px
                height 62px
                margin-bottom 36px
                display flex
                justify-content space-between
                button
                    width 172px
                    height 62px
                    /*border-radius 10px*/
                    border 1px solid #999
                    color #fff
                    background-color: rgba(0,0,0,0)
            p
                color #999
                margin-bottom 5px
</style>
