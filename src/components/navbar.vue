<template>
    <div class="navbar">
        <div class="page-nav-operate page-nav-back" @click="back()">
            <i class="iconfont icon-fanhui"></i>
        </div>
        <!-- <div class="page-nav-operate page-nav-search">
            <i class="iconfont icon-sousuo"></i>
        </div> -->
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
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less" scope>
    .navbar{
        overflow: hidden;
        background: #2e87ff;
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 999;
    }
    .page-nav-operate {
        width: 45px;
        height: 45px;
        color: #ffffff;
        text-align: center;
        .iconfont {
            font-size: 16px;
            line-height: 45px;
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
        font-size: 16px;
        line-height: 45px;
        padding: 0 45px;
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