<template>
  <div>
    <div class="page-navbar page-index-navbar">
      <img
        src="http://h5.danengshou.com/img/logo.png"
        width="30"
        height="30"
        alt
        style="margin-left: 5px;position: absolute;left: 5px;top: 8px;"
      />
      <h3 class="page-nav-title">
        <div class="search">
          <form action>
            <input type="text" class="sreachs" id placeholder="请输入要搜索的内容" />
          </form>
        </div>
      </h3>
    </div>
    <div class="page-container index-container">
      <div class="module-top">
        <div class="swiper-container">
          <swiper :options="swiperOptions">
            <swiper-slide>
              <div class="pic">
                <img src="http://h5.danengshou.com/img/3759440a79f80e08f5bc9a677ea0ae.jpg" alt />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="pic">
                <img src="http://h5.danengshou.com/img/link_Js.png" alt />
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
      <div class="module">
        <div class="racelist">
          <div>
            <img src="../../../assets/img/1592992525(1).jpg" />
          </div>
          <div>
            <img src="../../../assets/img/1592992557(1).jpg" />
          </div>
          <div>
            <img src="../../../assets/img/1592992583(1).jpg" />
          </div>
        </div>
      </div>
      <hr />
      <div class="news b">
        <div class="title">新闻动态</div>
        <ul class="list">
          <li>
            <img src="../../../assets/img/1592992583(1).jpg" />
            <div class="info">
              <p class="title">传理想汽车将获5.5亿美元D轮融资美团领投双方回应</p>
              <span class="type">通知公告</span>
              <span class="time">2020-6-10</span>
            </div>
          </li>
          <li>
            <img src="../../../assets/img/1592992583(1).jpg" />
            <div class="info">
              <p class="title">传理想汽车将获5.5亿美元D轮融资美团领投双方回应</p>
              <span class="type">通知公告</span>
              <span class="time">2020-6-10</span>
            </div>
          </li>
          <li>
            <img src="../../../assets/img/1592992583(1).jpg" />
            <div class="info">
              <p class="title">传理想汽车将获5.5亿美元D轮融资美团领投双方回应</p>
              <span class="type">通知公告</span>
              <span class="time">2020-6-10</span>
            </div>
          </li>
          <li>
            <img src="../../../assets/img/1592992583(1).jpg" />
            <div class="info">
              <p class="title">传理想汽车将获5.5亿美元D轮融资美团领投双方回应</p>
              <span class="type">通知公告</span>
              <span class="time">2020-6-10</span>
            </div>
          </li>
          <li>
            <img src="../../../assets/img/1592992583(1).jpg" />
            <div class="info">
              <p class="title">传理想汽车将获5.5亿美元D轮融资美团领投双方回应</p>
              <span class="type">通知公告</span>
              <span class="time">2020-6-10</span>
            </div>
          </li>
        </ul>
      </div>
      <hr />
      <div class="curriculum">
        <div class="title">培训课程</div>
        <div class="list">
          <div class="item">
            <div class="stitle">
              技能
              <a href="http://gaosaiedu.wangdoukeji.com/train" class="more">更多视频&gt;&gt;</a>
            </div>
            <ul>
              <li>
                <div class="type">汽车维修工</div>
                <img src="http://gaosaiedu.wangdoukeji.com/home/img/lgRegBg.jpg" />
                <div class="content">
                  <p>title</p>
                  <span>共0课时</span>
                  <span style="float: right;">123</span>
                </div>
              </li>
              <li>
                <div class="type">123</div>
                <img src="http://gaosaiedu.wangdoukeji.com/home/img/lgRegBg.jpg" />
                <div class="content">
                  <p>title</p>
                  <span>共0课时</span>
                  <span style="float: right;">123</span>
                </div>
              </li>
              <li>
                <div class="type">123</div>
                <img src="http://gaosaiedu.wangdoukeji.com/home/img/lgRegBg.jpg" />
                <div class="content">
                  <p>title</p>
                  <span>共0课时</span>
                  <span style="float: right;">123</span>
                </div>
              </li>
              <div class="clr"></div>
            </ul>
          </div>
          <div class="item">
            <div class="stitle">
              技能
              <a class="more">更多视频&gt;&gt;</a>
            </div>
            <ul>
              <li>
                <div class="type">汽车维修工</div>
                <img src="http://gaosaiedu.wangdoukeji.com/home/img/lgRegBg.jpg" />
                <div class="content">
                  <p>title</p>
                  <span>共0课时</span>
                  <span style="float: right;">123</span>
                </div>
              </li>
              <li>
                <div class="type">123</div>
                <img src="http://gaosaiedu.wangdoukeji.com/home/img/lgRegBg.jpg" />
                <div class="content">
                  <p>title</p>
                  <span>共0课时</span>
                  <span style="float: right;">123</span>
                </div>
              </li>
              <li>
                <div class="type">123</div>
                <img src="http://gaosaiedu.wangdoukeji.com/home/img/lgRegBg.jpg" />
                <div class="content">
                  <p>title</p>
                  <span>共0课时</span>
                  <span style="float: right;">123</span>
                </div>
              </li>
              <div class="clr"></div>
            </ul>
          </div>
          <div class="item f4-item">
            <div class="stitle">
              技能
              <a class="more">更多视频&gt;&gt;</a>
            </div>
            <ul>
              <li>
                <div class="type">汽车维修工</div>
                <img src="http://gaosaiedu.wangdoukeji.com/home/img/lgRegBg.jpg" />
                <div class="content">
                  <p>title</p>
                  <span>共0课时</span>
                  <span style="float: right;">123</span>
                </div>
              </li>
              <li>
                <div class="type">123</div>
                <img src="http://gaosaiedu.wangdoukeji.com/home/img/lgRegBg.jpg" />
                <div class="content">
                  <p>title</p>
                  <span>共0课时</span>
                  <span style="float: right;">123</span>
                </div>
              </li>
              <li>
                <div class="type">123</div>
                <img src="http://gaosaiedu.wangdoukeji.com/home/img/lgRegBg.jpg" />
                <div class="content">
                  <p>title</p>
                  <span>共0课时</span>
                  <span style="float: right;">123</span>
                </div>
              </li>
              <li>
                <div class="type">123</div>
                <img src="http://gaosaiedu.wangdoukeji.com/home/img/lgRegBg.jpg" />
                <div class="content">
                  <p>title</p>
                  <span>共0课时</span>
                  <span style="float: right;">123</span>
                </div>
              </li>
              <div class="clr"></div>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div class="newpei b">
        <div class="title">培训课程</div>
        <div class="list">
          <img src="../../../assets/img/1592992525(1).jpg" />
          <img src="../../../assets/img/1592992525(1).jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: true
      }
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="less">
.page-navbar {
  height: 45px;
  border-bottom: 1px solid #e9e9e9;
  line-height: 45px;
  text-align: center;
  color: #fff;
  background-color: #2e87ff;
}
.page-index-navbar {
  background: url(http://h5.danengshou.com/img/logo_bg.png) no-repeat top center;
  background-size: cover;
  .page-nav-title {
    font-size: 15px;
    .search input {
      height: 23px;
      border-radius: 50px;
      width: 62%;
      background: #ffffff;
      border: 0;
      padding: 5px 10px;
    }
  }
}
.page-container {
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 60px;
  .module {
    padding: 5px 0px;
    box-shadow: 0px 20px 20px 0px rgba(20, 109, 255, 0.2),
      inset 0px 2px 0px 0px rgba(46, 135, 255, 0.1);
    .title {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      display: flex;
      justify-content: space-around;
      margin-bottom: 10px;
      .cur {
        color: #007aff;
      }
    }
    .list {
      font-size: 18px;
      padding: 0 10px;
      span {
        font-size: 14px;
        color: #007aff;
      }
    }
  }
  .b {
    & > .title {
      text-align: center;
      font-size: 20px;
      background: url(http://www.danengshou.com/img/title-index-bg.png)
        no-repeat center;
      background-size: 200%;
    }
  }
  .news {
    ul {
      li {
        padding-top: 10px;
        img {
          width: 100px;
          height: 82px;
        }
        .info {
          padding: 10px;
          display: inline-block;
          vertical-align: top;
          width: calc(100% - 100px);
          box-sizing: border-box;
        }
        .time {
          color: #000000;
          margin-left: 100px;
        }
        .title {
          font-size: 16px;
          font-weight: bold;
        }
        span {
          display: inline-block;
          margin-top: 10px;
          font-size: 14px;
          color: #007aff;
        }
      }
    }
    & > .newstitle {
      & > .span {
        padding-right: 20px;
      }
      & > .cur {
        color: #007aff;
      }
    }
  }
  .curriculum {
    clear: both;
    padding: 10px 0;
    .title {
      text-align: center;
      font-size: 20px;
      background: url(http://www.danengshou.com/img/title-index-bg.png)
        no-repeat center;
      background-size: 200%;
    }
    .list {
      .stitle {
        padding-bottom: 2px;
        border-bottom: 1px solid #269abc;
        font-size: 15px;
        a {
          font-size: 12px;
          float: right;
          color: #007aff;
        }
      }
      ul {
        width: 100%;
        margin: 10px 0;
        li {
          overflow: hidden;
          float: left;
          box-sizing: border-box;
          width: 30%;
          margin-left: 2.5%;
          border: 1px solid #dcdcdc;
          border-radius: 10px;
          position: relative;
          transition: all 0.6s;
          .type {
            position: absolute;
            line-height: 20px;
            top: 18%;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(0, 0, 255, 0.5);
            border: 1px solid #ffffff;
            box-shadow: 0 0 0 10px rgba(0, 0, 255, 0.5);
            padding: 0px 5px;
            font-size: 10px;
            color: #ffffff;
            white-space: nowrap;
          }
          img {
            width: 100%;
          }
          .content {
            padding: 5px;
            color: #9d9d9d;
            font-size: 7px;
            p {
              color: #000000;
              font-size: 9px;
              padding-bottom: 5px;
              font-weight: bold;
            }
          }
        }
        .clr {
          clear: both;
        }
      }
      .f4-item ul li {
        overflow: hidden;
        float: left;
        box-sizing: border-box;
        width: 24%;
        margin-left: 1%;
        border: 1px solid #dcdcdc;
        border-radius: 10px;
        position: relative;
        transition: all 0.6s;
        .type {
          position: absolute;
          line-height: 20px;
          top: 15%;
          left: 50%;
          transform: translateX(-50%);
          background-color: rgba(0, 0, 255, 0.5);
          border: 1px solid #ffffff;
          box-shadow: 0 0 0 5px rgba(0, 0, 255, 0.5);
          padding: 0px 5px;
          font-size: 10px;
          color: #ffffff;
          white-space: nowrap;
        }
      }
    }
  }
  .newpei {
    .list {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin: 10px 0;
      img{
          width: 40%;
      }
    }
  }
}
.index-container {
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  .swiper-container {
    overflow: hidden;
    .pic {
      width: 100%;
      img {
        border-radius: 20px;
        width: 100%;
      }
    }
  }
}
.racelist {
  margin-top: 5px;
  overflow: hidden;
  div {
    float: left;
    width: 30%;
    margin-left: 2.5%;
    img {
      width: 100%;
      height: 75px;
    }
  }
}
</style>
