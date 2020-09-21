<template>
  <div class="page-logon">
    <section class="logon_navbar">
      <div class="page-nav-operate page-nav-back" @click="back">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <h3 class="page-nav-title" style="font-size: 20px;">登录</h3>
    </section>
    <div class="logon_main">
      <div class="logon_container">
        <!-- <img class="img-responsive" src="http://h5.danengshou.com/img/logo.png" width="50" height="50" alt /> -->
        <form class="logon_form">
          <div class="logon_form-wrapper">
            <label class="logon_form-label">手机号</label>
            <input
              class="logon_form-input"
              type="text"
              id="login_phone"
              placeholder="请输入手机号"
              v-model="phone"
              />
            <span class="logon_iconfont clear_btn" @click="phone=''">
              <i class="iconfont icon-cuowu"></i>
            </span>
          </div>
          <div class="logon_form-wrapper">
            <label class="logon_form-label" for>密码</label>
            <input class="logon_form-input" :type="show" id="pass" placeholder="请输入密码" v-model="password" />
            <span class="logon_iconfont" v-if="show=='password'" @click="show='text'">
              <i class="iconfont icon-yincangmima"></i>
            </span>
            <span class="logon_iconfont" v-if="show=='text'" @click="show='password'">
              <i class="iconfont icon-yanjing"></i>
            </span>
          </div>
          <div class="logon_forget-register">
            <!-- <span class="logon_forget j_logon_forget">忘记密码</span> -->
            <span class="logon_register">
              <router-link to="/register">立即注册</router-link>
            </span>
          </div>
          <div class="logon_signin">
            <input class="logon_form-input logon_button" type="button" value="登录" @click="login"/>
          </div>
        </form>
      </div>
    </div>
    <div class="logon_text">
      <span class="text">智造课堂</span>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { setToken } from '../../utils/auth.js'
export default {
  data() {
    return {
      phone: "",
      password: "",
      show: 'password'
    };
  },
  created(){
    console.log(this.$router.history)
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    login(){
      const {phone,password} = this
      const test = /^1[345678][0-9]{9}$/
      if(!test.test(phone)){
        Toast({
          message: '手机号不符合',
          position: 'bottom'
        })
        return
      }
      if(password.length<6){
        Toast({
          message: '密码长度不符合',
          position: 'bottom'
        })
        return
      }
      this.$axios.post('/user/login',{phone,password}).then((res)=>{
        console.log(res.data)
        if(res.data.status==200){
          setToken(res.data.access_token)
          this.$router.replace({ path: '/profile' })
        }else{
          Toast({
            message: res.data.msg,
            position: 'bottom'
          })
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.page-logon {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url("http://h5.danengshou.com/img/logo_bg.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  z-index: -1;
  .logon_navbar {
    position: absolute;
    right: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color: #fff;
    .logon_operate {
      position: absolute;
      top: 0;
      right: 0;
      width: 45px;
      height: 45px;
      color: #ffffff;
      .iconfont {
        font-size: 15px;
        line-height: 45px;
      }
    }
  }
  .logon_main {
    position: relative;
    .logon_container {
      width: 90%;
      margin: 0 auto;
      background: #fff;
      border-radius: 10px;
      padding: 50px 8px;
      position: absolute;
      left: 50%;
      top: 290px;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      .img-responsive {
        position: absolute;
        bottom: 100%;
        left: 50%;
        top: 0;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        border-radius: 50%;
      }
      .logon_form {
        margin: 0 15px;
        padding: 50px 0;
        .logon_form-wrapper {
          position: relative;
          .logon_form-label {
            font-size: 12px;
            opacity: 0.6;
            width: 100%;
            display: block;
            padding: 5px 0;
          }
          .logon_form-input {
            width: 100%;
            border: none;
            border-bottom: 1px solid #eeeeee;
            padding: 5px 0;
            font-size: 14px;
            outline: none;
          }
          .logon_iconfont {
            position: absolute;
            right: 10%;
            color: rgba(112, 112, 112, 0.3);
            .iconfont {
              font-size: 20px;
              color: rgba(112, 112, 112, 0.3);
            }
          }
        }
        .logon_signin {
          .logon_form-input {
            width: 100%;
            border: none;
            border-bottom: 1px solid #eeeeee;
            padding: 5px 0;
            font-size: 5px;
            outline: none;
          }
          .logon_button {
            font-size: 16px;
            line-height: 35px;
            position: relative;
            top: 80px;
            border-radius: 50px;
            color: #fff;
            background: -webkit-linear-gradient(left, #6683ec, #64b6ff);
            background: -o-linear-gradient(right, #6683ec, #64b6ff);
            background: -webkit-gradient(
              linear,
              left top,
              right top,
              from(#6683ec),
              to(#64b6ff)
            );
            background: -o-linear-gradient(left, #6683ec, #64b6ff);
            background: linear-gradient(to right, #6683ec, #64b6ff);
          }
        }
        .logon_forget-register {
          position: relative;
          padding: 5px 0;
          .logon_forget {
            float: left;
          }
          .logon_register {
            float: right;
          }
        }
      }
    }
  }
  .logon_text {
    position: absolute;
    bottom: 3%;
    text-align: center;
    color: #fff;
    width: 100%;
    .text {
      font-size: 20px;
      font-weight: bold;
    }
    .pinyin {
      font-size: 12px;
    }
  }
}
.page-logon .logon_navbar .logon_operate:hover,
.page-logon .logon_navbar .logon_operate:focus {
  color: #2da2fc;
  text-decoration: none;
}
.page-logon
  .logon_main
  .logon_container
  .logon_form
  .logon_forget-register
  span,
.page-logon .logon_main .logon_container .logon_form .logon_forget-register a {
  font-size: 12px;
  color: #027fdd;
}
.page-nav-operate {
    position: absolute;
    top: 0;
    left: 0;
    width: 45px;
    height: 45px;
    color: #ffffff;
    i{
      font-size: 15px;
    }
}
</style>