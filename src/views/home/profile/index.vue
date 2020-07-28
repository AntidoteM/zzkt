<template>
    <div>
        <div class="user-center-one" id="logonyes">
            <img src="http://h5.danengshou.com/img/default-avatar.png" alt="" class="head-portrait" width="100%">
            <a href="#" class="login-and-registration" id="username">123</a>
        </div>
        <div class="module outline-border">
            <ul class="and-grade" id="contentlist">
                <li class="apply-for-subsidies tiaozhuan">
                    <router-link to="/profile/data">
                        <img src="http://h5.danengshou.com/img/learn-date.png" alt="">&nbsp;&nbsp;
                        <span class="rapid-development">学习数据</span>
                        <i class="iconfont icon-you right-arrow"></i>
                    </router-link>
                </li>
                <li class="apply-for-subsidies tiaozhuan">
                    <img src="http://h5.danengshou.com/img/learnJilv.png" alt="">&nbsp;&nbsp;
                    <span class="rapid-development">学习记录</span>
                    <i class="iconfont icon-you right-arrow"></i>
                </li>
                <li class="apply-for-subsidies tiaozhuan">
                    <img src="http://h5.danengshou.com/img/learnAchive.png" alt="">&nbsp;&nbsp;
                    <span class="rapid-development">学习成就</span>
                    <i class="iconfont icon-you right-arrow"></i>
                </li>
                <li class="apply-for-subsidies tiaozhuan">
                    <img src="http://h5.danengshou.com/img/personAlone.png" alt="">&nbsp;&nbsp;
                    <span class="rapid-development">个人设置</span>
                    <i class="iconfont icon-you right-arrow"></i>
                </li>
            </ul>
            <div class="rapid-development rapid-development-out" id="logOut">
                <i class="iconfont icon-tuichu"></i>&nbsp;&nbsp;退出登录
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style lang="less" scope>
    .user-center-one {
        width: 100%;
        height: 150px;
        background: url('http://h5.danengshou.com/img/user-venter.png') no-repeat;
        box-sizing: border-box;
        padding: 0 20px 0 20px;
        display: flex;
        align-items: center;
        position: relative;
        .head-portrait {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin-right: 20px;
            border: 1 solid #cccf;
            object-fit: cover;
        }
        .login-and-registration {
            font-size: 20px;
            color: #fff;
            display: inline-block;
            text-decoration: none;
        }
        #realStudiats {
            padding: 0 15px;
            font-size: 12px;
            color: #fff;
            position: absolute;
            right: 20px;
            border: 2px solid rgba(244,244,244,1);
            border-radius: 40px;
            display: flex;
            align-items: center;
        }
    }
    .outline-border{
        width: 100%;
        padding: 20px 20px 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin-bottom: 60px;
        .apply-for-subsidies {
            width: 100%;
            height: 64px;
            border-bottom: 1px solid #ccc;
            line-height: 64px;
            .rapid-development {
                font-size: 15px;
                text-decoration: none;
                color: #002333;
            }
            img {
                width: 35px;
                height: 35px;
                vertical-align: middle;
            }
            .right-arrow{
                float: right;
                font-size: 15px;
                color: #D2D2D2;
            }
        }
    }
    .rapid-development-out {
        width: 250px;
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        background: rgba(67,103,253,1);
        border-radius: 40px;
        font-size: 15px;
        text-align: center;
        margin-top: 20px;
        color: #fff;
    }
</style>