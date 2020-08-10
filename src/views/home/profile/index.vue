<template>
    <div>
        <div class="user-center-one" id="logonyes">
            <img :src="profile_photo?profile_photo:'http://www.gravatar.com/avatar/9fb311b5af6e1e286f3ae32774af477a?s=100'" alt="" class="head-portrait" width="100%">
            <a href="#" class="login-and-registration" id="username">{{name}}</a>
        </div>
        <div class="module outline-border">
            <ul class="and-grade" id="contentlist">
                <router-link to="/studydata" class="apply-for-subsidies tiaozhuan">
                    <div>
                        <img src="http://h5.danengshou.com/img/learn-date.png" alt="">&nbsp;&nbsp;
                        <span class="rapid-development">学习数据</span>
                        <i class="iconfont icon-you right-arrow"></i>
                    </div>
                </router-link>
                <router-link to="/studyrecord" class="apply-for-subsidies tiaozhuan">
                    <div>
                        <img src="http://h5.danengshou.com/img/learnJilv.png" alt="">&nbsp;&nbsp;
                        <span class="rapid-development">学习记录</span>
                        <i class="iconfont icon-you right-arrow"></i>
                    </div>
                </router-link>
                <router-link to="/studyachi" class="apply-for-subsidies tiaozhuan">
                    <div>
                        <img src="http://h5.danengshou.com/img/learnAchive.png" alt="">&nbsp;&nbsp;
                        <span class="rapid-development">学习成就</span>
                        <i class="iconfont icon-you right-arrow"></i>
                    </div>
                </router-link>
                <router-link to="/setting" class="apply-for-subsidies tiaozhuan">
                    <div>
                        <img src="http://h5.danengshou.com/img/personAlone.png" alt="">&nbsp;&nbsp;
                        <span class="rapid-development">个人设置</span>
                        <i class="iconfont icon-you right-arrow"></i>
                    </div>
                </router-link>
                <router-link to="/aboutus" class="apply-for-subsidies tiaozhuan">
                    <div>
                        <img src="http://h5.danengshou.com/img/personAlone.png" alt="">&nbsp;&nbsp;
                        <span class="rapid-development">关于我们</span>
                        <i class="iconfont icon-you right-arrow"></i>
                    </div>
                </router-link>
            </ul>
            <div class="rapid-development rapid-development-out" id="logOut" @click="logout">
                <i class="iconfont icon-tuichu"></i>&nbsp;&nbsp;退出登录
            </div>
        </div>
    </div>
</template>

<script>
import user from '../../../App'
import { removeToken } from '../../../utils/auth.js'
import { Toast } from 'mint-ui';

export default {
    data(){
        return{
            name: '',
            profile_photo: ''
        }
    },
    created(){
        this.$axios.get('/user/show').then((res)=>{
            console.log(res.data)
            let userobj = res.data.data
            user.user = userobj
            this.name = userobj.name
            this.profile_photo = userobj.profile_photo
        }).catch(()=>{
            Toast({
                message: '未登录',
                position: 'bottom'
            });
            this.$router.replace({ path: '/login' })
        })
    },
    methods: {
        logout(){
            this.$axios.get('/logout').then((res)=>{
                console.log(res)
                removeToken()
                this.$router.replace({ path: '/login' })
            })
        }
    }
}
</script>

<style lang="less" scoped>
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
            line-height: 64px;
            div{
                border-bottom: 1px solid #ccc;
            }
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