<template>
  <div class="appContainer">
    <router-view></router-view>
    <div class="kong"></div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './components/Footer/Footer';
  export default {
    components:{
      Footer
    }
  }
</script>

<style lang="stylus">
  .kong
    height 100px
</style>