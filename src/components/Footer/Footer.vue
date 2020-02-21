<template>
  <div class="Footer">
      <div class="navItem" :class="{active : $route.path === '/index'}" @click="$router.replace('/index')">
          <i class="iconfont icon-shouye"></i>
					<span>首页</span>
      </div>
      <div class="navItem" :class="{active : $route.path === '/category'}" @click="$router.replace('/category')">
          <i class="iconfont icon-fenlei1"></i>
					<span>分类</span>
      </div>
      <div class="navItem" :class="{active : $route.path === '/buy'}" @click="$router.replace('/buy')">
          <i class="iconfont icon-zhidemai"></i>
					<span>值得买</span>
      </div>
      <div class="navItem" :class="{active : $route.path === '/order'}" @click="$router.replace('/order')">
          <i class="iconfont icon-gouwuche"></i>
					<span>购物车</span>
      </div>
      <div class="navItem" :class="{active : $route.path === '/personal'}" @click="$router.replace('/personal')">
          <i class="iconfont icon-gerenzhongxinH"></i>
					<span>个人</span>
      </div>
  </div>
</template>

<script>
	export default {
		data(){
			return{

			}
		},

		methods:{
		}
	}
</script>

<style lang="stylus">
@import '../../common/stylus/mixins.styl';

	.Footer
		width 100%
		height 100px
		background-color #fff
		position fixed
		bottom 0
		left 0
		display flex
		box-sizing border-box
		top-border-1px(#d9d9d9)
		.navItem
			flex 1
			display flex
			justify-content center
			align-items center
			// text-align center
			flex-direction column
			&.active
				color #DD1A21
			i
				font-size 40px
				margin-bottom 5px
</style>
