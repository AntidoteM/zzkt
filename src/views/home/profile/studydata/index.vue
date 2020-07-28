<template>
    <div>
        <nav-bar>
            <div slot="title">学习数据</div>
        </nav-bar>
        <div class="learn-information">
          <div class="learn-information-photo">
              <img class="HeadImgs" src="http://vocational-1258108869.cos.ap-shanghai.myqcloud.com/images/6f0c342c-e243-a6ee-7530-3c9fb571fd3d.png">
              <span class="person-info__nickname">184****8123</span>
          </div>
          <div class="learn-information-in">
              <div class="learn-information-in-list">
                  <div>性别</div>
                  <div id="iaSex">男</div>
              </div>
              <div class="learn-information-in-list">
                  <div>出生日期</div>
                  <div id="iaTime">1998-01-01</div>
              </div>
              <div class="learn-information-in-list">
                  <div>身份证号</div>
                  <div id="iaCard">142702199801011530</div>
              </div>
          </div>
          <div class="learn-information-shuju">
              <div class="learn-information-shuju-list">
                  <div>获得学分</div>
                  <div id="studyScore">0<span>分</span></div>
              </div>
              <div class="learn-information-shuju-list">
                  <div>学习时长</div>
                  <div id="studyHour">0<span>学时</span></div>
              </div>
              <div class="learn-information-shuju-list">
                  <div>累计学习</div>
                  <div id="allStudyDay">0<span>天</span></div>
              </div>
              <div class="learn-information-shuju-list">
                  <div>连续学习</div>
                  <div id="allwaysStudyDay">0<span>天</span></div>
              </div>
              <div class="learn-information-shuju-list">
                  <div>完成课程数</div>
                  <div id="completStudyCourse">0<span>门</span></div>
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

        }
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