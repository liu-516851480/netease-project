<template>
    <div id="app">
        <div class="photos">
            <div class="item" v-for="(item, index) in photos" :key="index">
                <img :src="item.picUrl" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import {reqBuyContent} from '../../api'
    import $ from 'jquery'
    export default {
        data(){
            return{
                photos:[],
                page:1,
                size:5
            }

        },
        methods:{
            async req(){
                let result = await reqBuyContent(this.page, this.size)
                let arr = result.data.result
                let newArr = []
                arr.map((item) => {
                    if(item.look !== null){
                        newArr.push(item.look)
                    }
                    item.topics.map(i => {
                        newArr.push(i)
                    })
                })
                if(this.photos.length > 0){
                    this.photos.push(...newArr)
                }else {
                    this.photos = newArr
                }
                console.log(this.photos)
                this.page ++
            },
            scroll(){
                window.onscroll = async () =>{
                    // console.log("滚动条滚动距离",document.documentElement.scrollTop)
                    // console.log("窗口可视高度",window.innerHeight)
                    // console.log("元素的高度",document.documentElement.offsetHeight)
                    // console.log($('.photos').height())
                    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight + 1  >  $('.photos').height()
                    // console.log("滑动到最底部",bottomOfWindow)
                    if(bottomOfWindow){//用户下拉触底
                        this.req()
                    }
                }
            }
        },

        updated(){
            this.scroll()
        },

        mounted(){
            this.req()
            this.scroll()//每次用户下拉触底后再次发送ajax请求获取数据
        }
    }

</script>

<style scoped>
    .photos{
        width:100%;
        column-count: 2;
        column-gap: 10px;
    }
    .photos .item{

    }
    .photos .item img{
        width: 100%;
    }
</style>
