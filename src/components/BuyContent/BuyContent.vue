<template>
    <div>
        <div class="colItem" v-for="(item, index) in buyContent" :key="index">-->
            <div class="item" v-show="item.look">
                <img :src="item.look && item.look.picUrl" alt="">
                <span>{{item.look && item.look.title}}</span>
            </div>
            <div class="item" v-for="(i, index) in item.topics" :key="index" >
                <img :src="i.picUrl" alt="">
                <span>{{i.title}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "BuyContent",

        props: ['loadMoreObj'],

        data(){
            return{
                isEnd:false,
                isLoading:false,
                curPage:1,
            }
        },

        created(){
            var that=this;
            $(window).scroll(function(){
                // scroll at bottom
                if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                    that.startLoad();
                }
            });
            this.startLoad();
        },

        methods:{
            startLoad(){
                if(this.isLoading || this.isEnd){
                    return;
                }
                this.isLoading=true;
                var that=this;
                // ajax需要的参数，自己根据逻辑修改
                var obj={
                    curPage:this.curPage,
                    pageSize:this.loadMoreObj.pageSize,
                    url:this.loadMoreObj.url,
                }
                console.log(obj);
                // 模拟数据请求
                setTimeout(function(){
                    that.isLoading=false;
                    that.curPage++;//当前页码

                    // 假如第四页结束
                    if(that.curPage==4){
                        that.pageEnd();
                        return;
                    }

                    var arr=[
                        "你好1","你好1","你好1","你好1","你好1","你好1","你好1","你好1",
                    ]
                    that.$emit('getNewData',arr);
                },1000)
            },
            // 最后一页
            pageEnd(){
                this.isEnd=true;
            }
        }
    }
</script>

<style scoped>

</style>
