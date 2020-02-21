<template>
    <div>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
<!--            <div class="content">-->
<!--                <div class="colItem" v-for="(item, index) in data" :key="index">-->
<!--&lt;!&ndash;                    <div class="item" v-show="item.look">&ndash;&gt;-->
<!--&lt;!&ndash;                        <img :src="item.look && item.look.picUrl" alt="">&ndash;&gt;-->
<!--&lt;!&ndash;                        <span>{{item.look && item.look.title}}</span>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--                    <div class="item" v-for="(i, index) in item.topics" :key="index" >-->
<!--                        <img :src="i.picUrl" alt="">-->
<!--                        <span>{{i.title}}</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
    import {reqBuyContent} from '../../api'
    export default {
        data () {
            return {
                count: 0,
                data: [],
                busy: false
            }
        },

        methods: {
            loadMore: async function() {
                this.busy = true
                // setTimeout(() => {
                //     for (var i = 0, j = 50; i < j; i++) {
                //         this.data.push({name: this.count++ })
                //     }
                //     console.log(this.data)
                //     this.busy = false
                // }, 1000)
                let rdata = await reqBuyContent()
                let newArr = rdata.data.result
                this.data.push(...newArr)
                console.log(this.data)
                this.busy = false
            }
        },

    }
</script>

<style lang="stylus">
    .content
        width 100%
        /*height 600px*/
        background-color: #fff
        box-sizing border-box
        padding 0 20px
        column-count: 2;
        /*display: flex;*/
        /*flex-flow:column wrap;*/
        /*flex-direction column*/
        /*flex-wrap wrap*/
        .item
            margin 0 0 20px 0
            /*width: calc(100%/2 - 20px);
            box-sizing: border-box;
            break-inside: avoid;
            /*padding: 10px;*/
            width 100%
            img
                width 100%
                height 100%
                border-radius 10px

</style>
