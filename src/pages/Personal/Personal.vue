<template>
    <div id="app">
        <span>设置列数:{{colCount}}<input type="range" min="2" max="5" v-model="colCount"></span>
        <div class="photos" >
            <div class="item" v-for="(item, index) in photos" :key="index">
                <img :src="item.picUrl" alt="">
            </div>
        </div>
    </div>
</template>
<script>
    import {reqBuyContent} from '../../api'
    export default {
        data() {
            return{
                photos: [],
                photoHeights: []
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
                this.page ++
            },
        },
        created() {
            this.photos = this.req()
        },
        computed: {
            containerHeight() {
                // 这里的容器高度要根据瀑布流的列数动态计算
                return this.photoHeights.reduce((prev,curr) => prev+ curr, 400) / 3 + 'px'
            }
        }
    }
</script>

<style scoped>
    .photos{
        display: flex;
        flex-flow: row;
        justify-items: center;
        width: 750px;
    }
    .photos .item img{
        width: 100%;
    }
    .col{
        width: 50%;
    }
    .photo{
        display:block;
        margin:5px;
        object-fit:none;
    }
</style>
