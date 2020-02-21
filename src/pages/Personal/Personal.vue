<template>
    <div class="box">
        <div class="item">
            <img  src="banner.jpg" alt="" />
        </div>
        <div class="item">
            <img  src="show.jpg" alt="" />
        </div>
        <div class="item">
            <img  src="cloth.jpg" alt="" />
        </div>
        <div class="item">
            <img  src="banner.jpg" alt="" />
        </div>
        <div class="item">
            <img  src="show.jpg" alt="" />
        </div>
        <div class="item">
            <img  src="cloth.jpg" alt="" />
        </div>
        <div class="item">
            <img  src="banner.jpg" alt="" />
        </div>
        <div class="item">
            <img  src="show.jpg" alt="" />
        </div>
        <div class="item">
            <img  src="cloth.jpg" alt="" />
        </div>
        <div class="item">
            <img  src="show.jpg" alt="" />
        </div>
        <div class="item">
            <img  src="cloth.jpg" alt="" />
        </div>
        <div class="item">
            <img  src="banner.jpg" alt="" />
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .box {
        display: flex;
        flex-flow:column wrap;
        height: 100vh;
    }
    .item {
        margin: 10px;
        width: calc(100%/3 - 20px);
    }
    .item img{
        width: 100%;
        height:100%;
    }
</style>
