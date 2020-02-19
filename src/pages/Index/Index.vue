<template>
  <div>
    <div class="hearder">
      <img src="./images/logo.png" alt="">
      <div class="search">
        <i class="iconfont icon-search"></i>
        <span>搜索物品，共20261款好物</span>
      </div>
      <div class="btn">
        登录
      </div>
    </div>
    <div class="nav">
      <div class="scroll-wrapper">
        <div class="scroll-content">
          <div class="scroll-item" @click="id = '999'" :class="{active:id === '999'}">
            <span>
              <router-link to="/index/home">
                推荐
              </router-link>
            </span>
          </div>
          <div class="scroll-item" :class="{active:id === item.id+''}" v-for="(item, index) in indexNav" @click="toId" :key="index" >
            <span>
              <router-link :to="'/index/item/' + item.id">{{item.name}}</router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import {mapState} from 'vuex'

  export default {
    data(){
      return{
        id:'999'
      }
    },

    mounted(){
      this.init()
      this.$store.dispatch('getIndexNav')
      this.id = this.$route.params.id || '999'
    },
    
    computed:{
      ...mapState(['indexNav'])
    },

    methods:{
      init() {
        
      },
      aa(){
        console.log('11');
      },
      toId(){
        if(this.$route.params.id){
          this.id = this.$route.params.id
        } 
        console.log(this.$route.params.id)
      }
    },

    watch:{ // 
      indexNav(){   // 你state(请求回来的数据)的数据名
        this.$nextTick(() => {  // 一个固定的语法
          new BScroll('.scroll-wrapper', {
            scrollX: true,
            click:true
          })
        })
      }
    }
  }
</script>

<style lang="stylus">
@import '../../common/stylus/mixins.styl';
  .hearder
    width 100%
    height 88px
    // background-color skyblue
    padding 16px 30px
    box-sizing border-box
    display flex
    align-items center
    img 
      width 138px
      height 40px
      margin-right 20px
    .search
      width 442px
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
        font-size 18px
        color #666
    .btn
      width 72px
      height 38px
      border 1px solid $red
      text-align center
      line-height 38px
      color $red
  .nav
    width 100%
    height 60px
    box-sizing border-box
    padding-right 100px
    // background-color #eee
    .scroll-wrapper
      width 100%
      white-space nowrap
      overflow hidden
      .scroll-content
        display inline-block
        padding-left 30px
        // background-color #dadada
        .scroll-item
          height 60px
          font-size 26px
          display inline-block
          margin-right 20px
          box-sizing border-box
          &.active
            color $red
            &::after
              content ''
              display block
              width 100%
              height 4px
              background-color #f00
          span 
            line-height 56px
            padding 0 16px
            color #333
            a
              color #333
</style>