<template>
  <div class="appContainer">
    <router-view></router-view>
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
  
</style>