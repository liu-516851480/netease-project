<template>
  <div>
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
  </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'
    import {mapState} from 'vuex'
    export default {
        data(){
            return{
                // indexData:''
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
                })
            })
                 
        },

        computed:{
            ...mapState(['indexData'])
        },

    }
</script>

<style lang="stylus">
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
        // background-color #f00
        padding 0 30px
        display flex
        align-items center
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



</style>