<template>
  <div>
    <nav-bar>
      <div slot="title">学习成就</div>
    </nav-bar>
    <div class="page-container">
      <div class="user-learing-back"></div>
      <div class="subsidy-wrapper scroll-inner">
        <div class="flex_tow">
          <div
            class="flex_tow_lf"
            :class="showrank?'flex_tow_active':''"
            @click="showrank=true"
          >学习排行榜</div>
          <div
            class="flex_tow_lr"
            :class="!showrank?'flex_tow_active':''"
            @click="showrank=false"
          >我的学习证书</div>
        </div>
        <div class="showranking" v-if="showrank">
          <div class="showranking-up">
            <div class="showranking-up-lf">
              <img src="http://h5.danengshou.com/img/photo-book.png" />
            </div>
            <div class="showranking-up-lr">
              <div>
                今日您已完成
                <span class="learingToday">{{duration}}学时</span>的学习
              </div>
              <div>
                您已累计完成
                <span class="total_study">{{user.duration}}学时</span>的学习
              </div>
            </div>
          </div>
          <div class="showranking-down">
            <div class="showranking-down-up">
              <div class="showranking-down-up-lf" @click="today=true">
                <img src="http://h5.danengshou.com/img/left_lf+f.png" />
              </div>
              <div class="showranking-down-up-middle">
                <img src="http://h5.danengshou.com/img/noNum1.png" />
                <span class="aligenName">{{today?'今日排行榜TOP10':'累计排行榜TOP10'}}</span>
              </div>
              <div class="showranking-down-up-lr" @click="today=false">
                <img src="http://h5.danengshou.com/img/right_lr+r1.png" />
              </div>
            </div>
            <!--          今日排行              -->
            <div class="today-Ranking today-Ranking-show" v-if="today">
              <ul class="today-Ranking-list">
                <li v-for="(item, index) in todayList" :key="index">
                  <img class="today-Ranking-1" :src="index<=2?`http://h5.danengshou.com/img/nob${index+1}.png`:''" />
                  <div class="today-Ranking-tip">
                    <div>NO.{{index+1}}</div>
                    <div>{{item.name}}</div>
                    <div>{{item.duration}}学时</div>
                  </div>
                </li>
              </ul>
            </div>
            <!--          累计排行              -->
            <div class="today-Ranking cumulative-Ranking-show" v-else>
              <ul class="cumulative-Ranking-list">
                <li v-for="(item, index) in userList" :key="index">
                  <img class="today-Ranking-1" :src="index<=2?`http://h5.danengshou.com/img/nob${index+1}.png`:''" />
                  <div class="today-Ranking-tip">
                    <div>NO.{{index+1}}</div>
                    <div>{{item.name}}</div>
                    <div>{{item.duration}}学时</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="certificate" v-else>
          <div class="showranking-up">
            <div class="showranking-up-lf">
              <img src="http://h5.danengshou.com/img/photo-ip.jpg" />
            </div>
            <div class="showranking-up-lr">
              <div>
                恭喜,您已经获得
                <span class="earn-more">{{ccie.length}}个</span>证书
              </div>
            </div>
          </div>
          <!--    证书列表  -->
          <div class="certificateList">
            <div class="item" v-for="(item,index) in ccie" :key="index">
              <img :src="item.img_src" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "../../../../components/navbar";
export default {
  data() {
    return {
      showrank: true,
      today: true,
      todayList: [],
      userList: [],
      duration: '',
      user:{},
      ccie: []
    };
  },
  created() {
    this.$axios.get("/user/studyachi").then((res) => {
      console.log(res.data);
      this.todayList = res.data.data.todaydata;
      this.userList = res.data.data.userstudy;
      this.duration = res.data.data.duration;
      this.user = res.data.data.user;
      this.ccie = res.data.data.ccie;
    });
  },
  components: {
    navBar,
  },
};
</script>

<style lang="less" scoped>
.page-container {
  margin-top: 45px;
}
.user-learing-back {
  width: 100%;
  height: 75px;
  background-image: linear-gradient(#2e87ff, #63a1f7);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
}
.subsidy-wrapper {
  padding: 15px;
  .flex_tow {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: -75px;
    div {
      font-size: 13px;
      text-align: center;
      padding: 5px 15px;
      background: #7fadf7;
      border-radius: 1.1rem;
      color: #fff;
    }
    .flex_tow_active {
      background: #2152c4 !important;
    }
  }
  .showranking-up {
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0px 3px 10px 0px rgba(31, 113, 225, 0.28);
    padding: 15px 5px 15px 15px;
    margin-top: 15px;
    .showranking-up-lf {
      width: 75px;
      height: 75px;
      margin-right: 30px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .showranking-up-lr {
      div {
        padding: 5px;
        color: #292726;
        font-size: 11px;
        span {
          padding: 5px;
          color: #3474da !important;
        }
      }
    }
  }
  .showranking-down {
    margin-top: 30px;
    .showranking-down-up {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
      .showranking-down-up-lf,
      .showranking-down-up-lr {
        img {
          width: 13px;
          vertical-align: middle;
        }
      }
      .showranking-down-up-middle {
        img {
          width: 20px;
          height: 25px;
          vertical-align: middle;
        }
        .aligenName {
          margin-left: 10px;
          color: #027fdd;
          font-size: 16px;
          font-weight: bold;
          vertical-align: middle;
        }
      }
    }
    .today-Ranking ul li {
      width: 100%;
      height: 35px;
      .today-Ranking-1 {
        width: 15px;
        height: 15px;
        margin-right: 10px;
      }
      .today-Ranking-tip {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 84%;
        float: right;
        margin-right: 25px;
      }
    }
  }
  .certificateList {
    display: flex;
    flex-wrap: wrap;
    .item{
      display: inline-block;
      box-sizing: border-box;
      width: 50%;
      padding: 10px;
      img{
        width: 100%;
      }
    }
  }
}
</style>