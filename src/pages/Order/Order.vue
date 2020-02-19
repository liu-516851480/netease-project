<template>
  <div class="horizontal-container">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content">
        <!-- <div class="scroll-item" v-for="(item, index) in emojis" :key="index">{{item}}</div> -->
        <div class="scroll-item">👉🏼</div>
        <div class="scroll-item">😁</div>
        <div class="scroll-item">😂</div>
        <div class="scroll-item">🤣</div>
        <div class="scroll-item">😄</div>
        <div class="scroll-item">😅</div>
        <div class="scroll-item">😉</div>
        <div class="scroll-item">🤑</div>
        <div class="scroll-item">😲</div>
        <div class="scroll-item">😣</div>
        <div class="scroll-item">👉🏼</div>
        <div class="scroll-item">👉🏼</div>
        <div class="scroll-item">👉🏼</div>
        <div class="scroll-item">👉🏼</div>
        <div class="scroll-item">👉🏼</div>
        <div class="scroll-item">👉🏼</div>
      </div>
    </div>
  </div>
</template>

<script>
   import BScroll from '@better-scroll/core'

  export default {
    data () {
      return {
      }
    },
    mounted() {
      this.init()
    },
    beforeDestroy() {
      this.bs.destroy()
    },
    methods: {
      init() {
        this.bs = new BScroll('.scroll-wrapper', {
          scrollX: true,
          probeType: 3 // listening scroll hook
        })
      },
    }
  }
</script>

<style lang="stylus">
  // .horizontal-container
  // .scroll-wrapper
  //   width 90%
  //   margin 80px auto
  //   white-space nowrap
  //   border 3px solid #f00
  //   border-radius 5px
  //   overflow hidden
  //   .scroll-content
  //     display inline-block
  //   .scroll-item
  //     height 50px
  //     line-height 50px
  //     font-size 24px
  //     display inline-block
  //     text-align center
  //     padding 0 10px
</style>