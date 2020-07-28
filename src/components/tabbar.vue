<template>
    <div class="page-tabbar in">
        <router-link class="pure-u-1-4" to="/home">
            <div class="item">
                <i class="iconfont icon-shouye"></i><br>
                <span>首页</span>
            </div>
        </router-link>

        <router-link class="pure-u-1-4" to="/news">
            <div class="item">
                <i class="iconfont icon-Icon-jiaoyupeixun"></i><br>
                <span>信息发布</span>
            </div>
        </router-link>

        <router-link class="pure-u-1-4" to="/classes">
            <div class="item">
                <i class="iconfont icon-dashizaixian"></i><br>
                <span>培训课堂</span>
            </div>
        </router-link>

        <router-link class="pure-u-1-4" to="/profile">
            <div class="item">
                <i class="iconfont icon-wode"></i><br>
                <span>我的</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    created(){
    },
    methods: {
    }
}
</script>

<style lang="less" scope>
.page-tabbar{
  bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-top: 1px solid #e9e9e9;
  background-color: #fff;
  -webkit-transition: -webkit-transform .2s linear;
  transition: -webkit-transform .2s linear;
  -o-transition: transform .2s linear;
  transition: transform .2s linear;
  transition: transform .2s linear, -webkit-transform .2s linear;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  transform: translateY(0);
  height: 60px;
  text-align: center;
  .pure-u-1-4{
    width: 25%;
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-right: 5px;
    padding-left: 5px;
    color: #c8cacd;
    .item{
      padding-top: 5px;
      display: block;
      font-size: 14px;
      .iconfont{
        font-size: 24px;
      }
    }
  }
  .router-link-active{
      color: #0099FF;
  }
}
</style>