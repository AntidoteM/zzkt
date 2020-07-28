<template>
    <div class="navbar">
        <div class="page-nav-operate page-nav-back">
            <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="page-nav-operate page-nav-search">
            <i class="iconfont icon-sousuo"></i>
        </div>
        <div class="title">
            <slot name='title'></slot>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props: {
        isback: {
            type: Boolean,
            default: false
        },
        issearch: {
            type: Boolean,
            default: false
        }
    },
    components: {
        
    },
    methods: {

    }
}
</script>

<style lang="less" scope>
    .navbar{
        overflow: hidden;
        background: #2e87ff;
    }
    .page-nav-operate {
        width: 90px;
        height: 90px;
        color: #ffffff;
        text-align: center;
        .iconfont {
            font-size: 30px;
            line-height: 90px;
        }
    }
    .page-nav-back{
        float: left;
    }
    .page-nav-search{
        float: right;
    }
    .title{
        color: white;
        font-size: 42px;
        line-height: 90px;
        padding: 0 90px;
        text-align: center;
        background: #2e87ff;
    }
    // .mint-navbar{
    //     .mint-tab-item {
    //         padding: 17px 0;
    //         font-size: 42px;
    //     }
    // }
</style>