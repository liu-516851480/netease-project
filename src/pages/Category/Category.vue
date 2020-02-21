<template>
  <div class="categoryContainer">
      <div class="header">
          <div class="search">
              <i class="iconfont icon-search"></i>
              <span>搜索物品，共20261款好物</span>
          </div>
      </div>
      <div class="content">
          <div class="categoryNav">
              <div class="scroll-wrapper">
                  <div class="scroll-content">
                      <div class="scroll-item" :class="{active:id2 == item.id+''}" v-for="(item, index) in categoryNav && categoryNav.categoryL1List" :key="index" @click="toId(item.id)">
                          {{item.name}}
                      </div>
                  </div>
              </div>
          </div>
          <div class="categoryContent">
              <div class="scroll-wrapper1">
                  <div class="scroll-content">
                      <div class="banner">
                          <img :src="banner && banner" alt="">
                      </div>
                      <div class="scroll-item" v-for="(item, index) in contentData && contentData.categoryList || contentData && contentData.subCateList" :key="index">
                          <img :src="item.bannerUrl || item.wapBannerUrl" alt="">
                          <span>{{item.name}}</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    import BScroll from '@better-scroll/core'
    import {mapState} from 'vuex'

    export default {
        data () {
            return {
                id2:'',
                contentData:[],
                banner:''
            }
        },
        updated(){
            const id = this.$route.query.category * 1
            const {categoryL1List} = this.$store.state.categoryNav
            let result = categoryL1List && categoryL1List.find(item => item.id === id)
            if(result){
                this.banner = result.bannerUrl
            }
            const {categoryContent} = this.$store.state
            this.contentData = categoryContent && categoryContent.find(item => item.id === id)
            this.bs && this.bs.refresh()
        },
        mounted() {
            this.$store.dispatch('getCategoryContent',() => {
                new BScroll('.scroll-wrapper1', {
                    scrollY: true,
                    click: true,
                })
            })
            this.$store.dispatch('getCategoryNav', () =>{
                new BScroll('.scroll-wrapper', {
                    scrollY: true,
                    click: true,
                })
            })
        },

        methods:{
            toId(id){
                if(id+'' === this.$route.query.category){
                    return
                }
                else {
                    this.$router.replace('/category?category='+id)
                    this.id2 = id
                }
            }
        },

        computed:{
            ...mapState(['categoryNav','categoryContent']),

        },

        watch:{
            categoryNav(){
                this.id2 = this.$route.query.category || this.$store.state.categoryNav.categoryL1List[0].id
                if(this.id2 +'' === this.$route.query.category){
                    return
                }
                else {
                    this.$router.replace('/category?category='+this.id2)
                }
                const id = this.$route.query.category * 1
                const {categoryL1List} = this.$store.state.categoryNav
                let result = categoryL1List && categoryL1List.find(item => item.id === id)
                this.banner = result.bannerUrl
            },
            categoryContent(){
                const id = this.$route.query.category * 1
                const {categoryContent} = this.$store.state
                this.contentData = categoryContent && categoryContent.find(item => item.id === id)
                this.$nextTick(() => {
                    this.bs = new BScroll('.scroll-wrapper1', {
                        scrollY: true,
                        click: true,
                        refresh:true
                    })
                })
            },

            $route: {
                handler: function(val){
                    const id = val.query.category * 1
                    const {categoryL1List} = this.$store.state.categoryNav
                    let result = categoryL1List && categoryL1List.find(item => item.id === id)
                    this.banner = result.bannerUrl
                    const {categoryContent} = this.$store.state
                    this.contentData = categoryContent && categoryContent.find(item => item.id === id)
                },
                // 深度观察监听
                deep: true
            },
        }
    }
</script>


<style lang="stylus">
    @import "../../common/stylus/mixins.styl"
    .categoryContainer
        height 100%
        /*background-color: #f00*/
        .header
            width 100%
            height 88px
            box-sizing border-box
            padding 0 30px
            display flex
            align-items center
            border 1px solid #eee
            .search
                width 100%
                height 56px
                background-color #ededed
                border-radius 10px
                display flex
                justify-content center
                align-items center
                margin-right 16px
                i
                    color #666
                    margin-right 10px
                span
                    font-size 28px
                    color #666
        .content
            width 100%
            /*background-color: #000*/
            height calc(100% - 188px )
            overflow hidden
            .categoryNav
                width 162px
                height 100%
                overflow hidden
                box-sizing border-box
                float left
                border-right 1px solid #eee
                .scroll-wrapper
                    width 162px
                    height 100%
                    overflow hidden
                    .scroll-content
                        ///*box-sizing border-box*/
                        padding 40px 0
                        .scroll-item
                            width 100%
                            height 50px
                            margin-bottom 40px
                            font-size 28px
                            color #333
                            line-height 50px
                            text-align center
                            box-sizing border-box
                            /*position relative*/
                            &:last-child
                                margin-bottom 0
                            &.active
                                /*border-left 6px solid #ab2b2b*/
                                position relative
                                color #ab2b2b
                                &::before
                                    content ''
                                    width 6px
                                    height 50px
                                    background-color: #ab2b2b
                                    display block
                                    position absolute
                                    left 0
                                    top 0


            .categoryContent
                float right
                width 588px
                height 100%
                .scroll-wrapper1
                    height 100%

                    overflow hidden
                    overflow hidden
                    .scroll-content
                        width 110%
                        overflow hidden
                        box-sizing border-box
                        padding 30px
                        .banner
                            width 528px
                            height 192px
                            margin-bottom 32px
                            img
                                width 100%
                                height 100%
                        .scroll-item
                            width 144px
                            height 216px
                            line-height 50px
                            font-size 24px
                            font-weight bold
                            /*border-bottom 1px solid #eee*/
                            text-align center
                            float left
                            margin-right 34px
                            img
                                width 144px
                                height 144px

    /*background-color: #000*/

</style>
