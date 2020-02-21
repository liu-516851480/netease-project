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
      <div class="scroll-wrapper" v-show="!isBottom" ref="nav">
        <div class="scroll-content">
          <div class="scroll-item" @click="id = '999'" :class="{active3:id === '999'}" :id="id">
          <span>
            <router-link to="/index/home">
              推荐
            </router-link>
          </span>
          </div>
          <div class="scroll-item" :class="{active3:id === item.id+''}" v-for="(item, index) in indexNav" @click="toId" :key="index" :id="item.id">
          <span>
            <router-link :to="'/index/item/' + item.id">{{item.name}}</router-link>
          </span>
          </div>
        </div>
      </div>
      <div class="drop-down" v-show="isBottom">
        <div class="title">
          全部频道
        </div>
        <div class="content">
          <div class="scroll-item" @click="id = '999'" :class="{active1:id === '999'}">
          <span>
            <router-link to="/index/home">
              推荐
            </router-link>
          </span>
          </div>
          <div class="scroll-item" :class="{active1:id === item.id+''}" v-for="(item, index) in indexNav" @click="toId" :key="index" >
          <span>
            <router-link :to="'/index/item/' + item.id">{{item.name}}</router-link>
          </span>
          </div>
        </div>
      </div>
      <div class="btn">
        <i class="iconfont icon-jiantou" :class="{active2:isBottom}" @click="isBottom = !isBottom"></i>
      </div>
    </div>
    <div class="kong1"></div>
    <router-view></router-view>
    <div class="kong"></div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import {mapState} from 'vuex'

  export default {
    data(){
      return{
        id:'999',
        isBottom:false
      }
    },

    mounted(){
      this.$store.dispatch('getIndexNav', () => {

      })
      this.id = this.$route.params.id || '999'
    },

    computed:{
      ...mapState(['indexNav'])
    },

    methods:{
      toId(){
        if(this.$route.params.id){
          this.id = this.$route.params.id
        }
        // console.log(this.$route.params.id)
      }
    },

    watch:{ //
      indexNav(){   // 你state(请求回来的数据)的数据名
        this.$nextTick(() => {  // 一个固定的语法
          if(this.$refs.nav){
            new BScroll('.scroll-wrapper', {
              scrollX: true,
              click:true
            })
          }
        })
      }
    }
  }
</script>

<style lang="stylus">
@import '../../common/stylus/mixins.styl';
  /*.Header*/
  /*  position fixed*/
  /*  top 0*/
  /*  left 0*/
  /*  background-color: #fff*/
  /*  z-index 999*/

  .hearder
    width 100%
    height 88px
    background-color #fff
    padding 16px 30px
    box-sizing border-box
    display flex
    align-items center
    position fixed
    z-index 99
    top 0
    left 0
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
    background-color #fff
    position fixed
    top 88px
    left 0
    z-index 99
    .drop-down
      position absolute
      top 0
      left 0
      width 100%
      height 370px
      background-color #fff
      z-index 10
      .title
        width 100%
        height 60px
        // background-color yellow
        padding-left 30px
        box-sizing border-box
        line-height 60px
        font-size 20px
      .content
        width 100%
        height 310px
        // background-color pink
        display flex
        flex-wrap wrap
        box-sizing border-box
        padding-top 24px
        .scroll-item
          width 150px
          height 56px
          box-sizing border-box
          border 1px solid #ccc
          background-color #FAFAFA
          margin 0 0 40px 30px
          text-align center
          line-height 56px
          // border-radius 5px
          &.active1
            color $red
            border-color $red
            background-color #fff
            span
              color $red
              a
                color $red
    .btn
      width 100px
      height 60px
      /*background-color #f00*/
      position absolute
      top 0
      right 0
      display flex
      justify-content center
      align-items center
      z-index 11
      i
        transition all 0.5s
        color #333
        &.active2
          transform rotate(180deg)
    .scroll-wrapper
      width 100%
      white-space nowrap
      overflow hidden
      .scroll-content
        display inline-block
        padding-left 30px
        // padding-right 30px
        // background-color #dadada
        .scroll-item
          height 60px
          font-size 26px
          display inline-block
          margin-right 20px
          box-sizing border-box
          color red
          &.active3
            color $red
            &::after
              content ''
              display block
              width 100%
              height 4px
              background-color $red
            span
              color $red
              a
                color $red
          span
            line-height 56px
            padding 0 16px
            // color #333
            a
              // color #333
  .kong1
    height 150px
</style>
