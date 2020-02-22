<template>
    <div class="container-water-fall">
        <waterfall :col='col' :width="itemWidth" height="100%" :gutterWidth="gutterWidth"  :data="data"  @loadmore="loadmore"  @scroll="scroll"  >
            <template >
                <div class="item" v-for="(i, index) in data" :key="index" >
                    <img :src="i.picUrl" alt="">
                    <span>{{i.title}}</span>
                    <div class="author">
                        <div class="left">
                            <img :src="i.avatar" alt="">
                            <p>{{i.nickname}}</p>
                        </div>
                        <div class="right">
                            {{i.readCount > 1000 ? Math.floor(i.readCount / 1000) : i.readCount}}
                        </div>
                    </div>
                </div>
            </template>
        </waterfall>

    </div>
</template>

<script>
    import {reqBuyContent} from '../../api'
    // import _ from 'lodash'
    export default{
        name:'BuyContent',
        data(){
            return{
                data:[],
                col:2,
                page:1,
                size:5
            }
        },
        computed:{
            itemWidth(){
                console.log((document.documentElement.clientWidth))
                return (document.documentElement.clientWidt/2)  //#rem布局 计算宽度
            },
            gutterWidth(){
                return ((document.documentElement.clientWidth/375))	//#rem布局 计算x轴方向margin(y轴方向的margin自定义在css中即可)
            }
        },

        mounted(){
            this.loadmore()
        },

        methods:{
            scroll(){
            },
            switchCol(col){
                this.col = col
            },
            async loadmore(){
                console.log(11)
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
                if(this.data.length > 0){
                    this.data.push(...newArr)
                }else {
                    this.data = newArr
                }
                console.log(this.data)
                this.page ++
            }
        }
    }
</script>

<style>
    .vue-waterfall{
        overflow-y: auto;
    }
    .container-water-fall{
        width: 100%;
        height: 100%;
        background-color: #eee;
    }
    #vueWaterfall{
        box-sizing: border-box;
        padding: 0 0px 0 20px;
    }
    .colItem{
        width: 750px;
        /*column-count: 2;*/
    }
    .item{
        /*width: 100%;*/
        margin-right: 20px;
        margin-bottom: 20px;
        background-color: #fff;
        border-radius: 10px;
        box-sizing: border-box;
        padding-bottom: 20px;
    }
    .item img{
        width: 100%;
        height: 100%;
        border-radius: 10px 10px 0 0 ;
        margin-bottom: 15px;
    }
    .item span{
        display: block;
        padding: 0 16px;
        box-sizing: border-box;
        line-height: 36px;
        font-size: 28px;
        color: #333;
        margin-bottom: 10px;
    }
    .item .author{
        width: 100%;
        box-sizing: border-box;
        padding: 10px 16px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .item .author .left{
        display: flex;
    }
    .item .author .left img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 5px;
    }
    .item .author .left p{
        font-size: 24px;
        color: #999;
        line-height: 54px;
    }
    .item .author .right{
        font-size: 22px;
        color: #999;
    }
    .vue-waterfall  .vue-waterfall-column{
        width: 100%;
    }

</style>
