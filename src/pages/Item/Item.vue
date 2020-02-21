<template>
      <div>
            <div class="content">
                <div class="title">
                    <p>{{listData && listData.name}}</p>
                    <span>{{listData && listData.name}}</span>
                </div>
                <div class="list">
                    <div class="listItem" v-for="(item, index) in listData && listData.subCateList" :key="index">
                        <img :src="item.wapBannerUrl" alt="">
                        <div class="describe">{{item.name}}</div>
                        <div class="itemTitle">{{item.frontDesc}}</div>
                        <div class="price">￥32</div>
                        <div class="category">
                            <span>特价</span>
                        </div>
                    </div>
                </div>
            </div>
      </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data(){
            return{
                listData:{}
            }
        },

        props:['id'],

        mounted() {
            const id = this.$route.params.id * 1
            const listData = this.$store.state.indexNav.find(item => item.id === id)
            this.listData = listData
        },

        computed:{
            ...mapState(['indexNav'])
            //
        },

        watch:{
            $route: {
                handler: function(val){
                    // console.log(val,oldVal);
                    const id = val.params.id * 1
                    const listData = this.$store.state.indexNav.find(item => item.id === id)
                    this.listData = listData
                    // console.log(listData)
                },
                // 深度观察监听
                deep: true
            },
            indexNav(){
                this.$nextTick(() => {
                    const id = this.$route.params.id * 1
                    const listData = this.$store.state.indexNav.find(item => item.id === id)
                    // console.log(listData,this.$store.state.indexNav)
                    this.listData = listData
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../../common/stylus/mixins.styl"
    .content
        width 100%
        .title
            width 100%
            height 120px
            display flex
            flex-direction column
            align-items center
            justify-content center
            p
                font-size 32px
                color #333
                margin-bottom 12px
            span
                font-size 24px
                color #999
        .list
            width 100%
            /*height 500px*/
            padding 0 20px
            box-sizing border-box
            /*background-color: #ff0*/
            display flex
            justify-content space-between
            flex-wrap wrap
            .listItem
                width 345px
                height 575px
                /*background-color: #f00*/
                margin-bottom 33px
                img
                    width 345px
                    height 345px
                    border-radius 5px 5px 0 0
                .describe
                    width 345px
                    height 48px
                    box-sizing border-box
                    padding 0 10px
                    background-color: #F1ECE2
                    color #9F8A60
                    line-height 48px
                    margin-bottom 16px
                    border-radius 0 0 5px 5px
                    white-space nowrap
                    overflow hidden
                .itemTitle
                    font-size 30px
                    color #333
                    line-height 36px
                    //ine-clamp 2 // 需要结合其他属性来使用才有效果
                    //box-orient vertical // 必须结合的属性，设置子元素(在这里指文字)的排列方式
                    //overflow hidden
                    //display box
                    //overflow hidden
                    //text-overflow ellipsis
                .price
                    font-size 32px
                    line-height 48px
                    color $red
                .category
                    span
                        font-size 20px
                        color $red
                        border 1px solid $red
                        padding 0 6px

</style>
