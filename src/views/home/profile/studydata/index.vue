<template>
    <div>
        <nav-bar>
            <div slot="title">学习数据</div>
        </nav-bar>
        <div class="learn-information">
          <div class="learn-information-photo">
              <img class="HeadImgs" :src="user.profile_photo">
              <span class="person-info__nickname">{{user.phone | setphone}}</span>
          </div>
          <div class="learn-information-in">
              <div class="learn-information-in-list">
                  <div>性别</div>
                  <div id="iaSex">{{user.gender=='1'?'男':'女'}}</div>
              </div>
              <div class="learn-information-in-list">
                  <div>出生日期</div>
                  <div id="iaTime">{{user.birthdate}}</div>
              </div>
              <div class="learn-information-in-list">
                  <div>身份证号</div>
                  <div id="iaCard">{{user.id_card}}</div>
              </div>
          </div>
          <div class="learn-information-shuju">
              <div class="learn-information-shuju-list">
                  <div>获得学分</div>
                  <div id="studyScore">{{user.credit}}<span>分</span></div>
              </div>
              <div class="learn-information-shuju-list">
                  <div>学习时长</div>
                  <div id="studyHour">{{user.duration}}<span>学时</span></div>
              </div>
              <div class="learn-information-shuju-list">
                  <div>累计学习</div>
                  <div id="allStudyDay">{{user.days}}<span>天</span></div>
              </div>
              <div class="learn-information-shuju-list">
                  <div>连续学习</div>
                  <div id="allwaysStudyDay">{{days}}<span>天</span></div>
              </div>
              <div class="learn-information-shuju-list">
                  <div>完成课程数</div>
                  <div id="completStudyCourse">{{course}}<span>门</span></div>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
import navBar from '../../../../components/navbar'
export default {
    data(){
        return {
            days: 0,
            course: 0,
            user: {}
        }
    },
    filters:{
        setphone: (value)=>{
            return value.substring(0, 3) + "****" + value.substring(7, 11);
        }
    },
    created(){
        this.$axios.get('/user/studydata').then((res)=>{
            console.log(res.data.data)
            this.user = res.data.data.user
            this.days = res.data.data.days
            this.course = res.data.data.course
        })
        // this.$axios.get('/user/show').then((res)=>{

        // })
    },
    components: {
        navBar
    }
}
</script>

<style lang="less" scoped>
    .learn-information {
        padding: 0 10px;
        margin-top: 55px;
        margin-bottom: 10px;
        border-bottom: 1px solid #F0F1F8;
        .learn-information-photo {
            display: flex;
            align-items: center;
            padding-bottom: 10px;
            border-bottom: 1px solid #E9ECF3;
            img {
                width: 60px;
                height: 60px;
                border-radius: 50%;
            }
            span {
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: rgba(49,49,49,1);
                margin-left: 15px;
            }
        }
        .learn-information-in-list {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px 0;
            border-bottom: 1px solid #E9ECF3;
            font-size: 15px;
            color: #333333;
            font-weight: bold;
        }
        .learn-information-shuju {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 15px 0;
            .learn-information-shuju-list {
                text-align: center;
                color: #666666;
                font-size: 14px;
                line-height: 1.5;
                div:nth-of-type(2) {
                    color: #4367FD;
                    font-size: 16px;
                    font-weight: bold;
                    span {
                        color: #111111;
                        font-size: 12px;
                    }
                }
            }
        }
    }

</style>