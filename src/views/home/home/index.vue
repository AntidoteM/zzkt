<template>
  <div>
    <div class="page-navbar page-index-navbar">
      <h3 class="page-nav-title">
        <div>智造课堂</div>
      </h3>
    </div>
    <div class="page-container index-container">
      <div class="module-top">
        <div class="swiper-container">
          <swiper :options="swiperOptions">
            <swiper-slide v-for="(item,index) in banners" :key="'bannar'+index">
              <div class="pic">
                <a :href="item.links">
                  <img :src="item.img_src" alt />
                </a>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
      <div class="module">
        <div class="racelist">
          <div v-for="(item,index) in games" :key="'race'+index" @click="togame(item.id)">
            <img :src="item.img_src" />
          </div>
        </div>
      </div>
      <div class="news b">
        <div class="title">信息发布</div>
        <ul class="list">
          <li v-for="(item, index) in articles" :key='"news"+index' @click="tonewsdetail(item.id)">
            <img :src="item.img_src" />
            <div class="info">
              <p class="title">{{item.title}}</p>
              <span class="type">{{item.cate.name}}</span>
              <span class="time">{{item.updated_at}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="curriculum">
        <div class="title">赛前培训</div>
        <div class="list" style="padding-top: 10px">
          <div class="item" v-for="(item,index) in cates" :key="'list'+index">
            <template v-if="item.son.length>0">
              <div class="stitle">
                {{item.name}}
                <router-link :to="{path: '/classes'}">更多视频&gt;&gt;</router-link>
              </div>
              <ul>
                  <li v-for="(sonitem) in item.son" :key="sonitem.id" @click="toclasseslist(sonitem.id)">
                    <div>
                      <div class="type">{{clear(sonitem.name)}}</div>
                      <img :src="sonitem.img_src" />
                      <div class="content">
                        <p v-html="format(sonitem.name)"></p>
                        <span>共{{sonitem.video_count}}课时</span>
                      </div>
                    </div>
                  </li>
                  <div class="clr"></div>
              </ul>
            </template>
          </div>
        </div>
      </div>
      <div class="newpei b">
        <div class="title">新职业培训</div>
        <ul class="list">
          <li v-for="(item,index) in newscates" :key="'newpei'+index">
            <div>
              <div class="type">{{clear(item.name)}}</div>
              <img :src="item.img_src" />
              <div class="content">
                <p v-html="format(item.name)"></p>
                <span>共{{item.video_count}}课时</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="page-footer">
      <div class="wrapper">
        <div class="qrcode" style="text-align:center">
          <img :src="about" />
        </div>
        <div class="clr"></div>
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
          el: ".swiper-pagination",
        },
        autoplay: true,
      },
      banners: [],
      articles: [],
      games: [],
      cates: [],
      newscates: [],
      about: ''
    };
  },
  created() {
    this.$axios.get('/index').then((res)=>{
      let data = res.data.data;
      console.log(data)
      if(res.data.status == 200){
        this.banners = data.banner
        this.articles = data.article
        this.games = data.game
        this.cates = data.cate
        this.newscates = data.newscate
        this.about = data.about
      }
    })
  },
  methods: {
    toclasses(){
      this.$router.push({path: '/classes'})
    },
    togame(id){
      this.$router.push({path:`/competition/${id}`})
    },
    toclasseslist(id){
      this.$router.push({path: `/classeslist/${id}`})
    },
    tonewsdetail(id){
      this.$router.push({path: `/news_details/${id}`})
    },
    clear(text){
      return text.slice(text.indexOf('（')+1,text.indexOf('）'));
    },
    format(text){
      return text.slice(0,text.indexOf('（'))+'<p>'+text.slice(text.indexOf('（'),text.indexOf('）')+1)+'</p>'
    }
  },
};
</script>

<style lang="less" scoped>
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
  margin-bottom: 10px;
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
    margin-top: 10px;
    ul {
      li {
        padding-top: 10px;
        img {
          width: 100px;
          height: 70px;
          vertical-align: middle;
        }
        .info {
          padding-left: 10px;
          display: inline-block;
          width: calc(100% - 100px);
          height: 70px;
          box-sizing: border-box;
          vertical-align: middle;
        }
        .time {
          float: right;
          font-size: 10px;
          color: #9baab6;
        }
        .title {
          color: #31424e;
          height: 36px;
          font-size: 16px;
          font-weight: bold;
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        span {
          display: inline-block;
          margin-top: 10px;
          font-size: 14px;
          color: #9baab6;
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
        font-size: 14px;
        font-weight: bold;
        a {
          font-size: 12px;
          float: right;
          color: #007aff;
        }
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin: 10px 0;
        li {
          overflow: hidden;
          float: left;
          box-sizing: border-box;
          width: 48%;
          margin-left: 1%;
          margin-bottom: 10px;
          border: 1px solid #dcdcdc;
          border-radius: 10px;
          position: relative;
          transition: all 0.6s;
          .type {
            position: absolute;
            line-height: 20px;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 255, 0.5);
            padding: 0px 5px;
            font-size: 10px;
            color: #ffffff;
            white-space: nowrap;
            text-align: left;
          }
          img {
            width: 100%;
            height: 100px;
          }
          .content {
            padding: 5px;
            color: #9d9d9d;
            font-size: 7px;
            p {
              color: #000000;
              font-size: 10px;
              height: 26px;
              font-weight: bold;
              overflow : hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
        }
        .clr {
          clear: both;
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
      li {
          overflow: hidden;
          float: left;
          box-sizing: border-box;
          width: 48%;
          margin-left: 1%;
          margin-bottom: 10px;
          border: 1px solid #dcdcdc;
          border-radius: 10px;
          position: relative;
          transition: all 0.6s;
          .type {
            position: absolute;
            line-height: 20px;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 255, 0.5);
            padding: 0px 5px;
            font-size: 10px;
            color: #ffffff;
            white-space: nowrap;
            text-align: left;
          }
          img {
            width: 100%;
            height: 100px;
          }
          .content {
            padding: 5px;
            color: #9d9d9d;
            font-size: 7px;
            p {
              color: #000000;
              font-size: 10px;
              height: 36px;
              font-weight: bold;
              overflow : hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
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
        height: 200px;
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
      height: 80px;
    }
  }
}
.page-footer {
  padding-top: 20px;
  background: #333333;
  margin-bottom: 60px;
  .wrapper {
    width: 90%;
    margin: 0 auto;
    .footer {
      p {
        color: #ffffff;
        margin-bottom: 20px;
        span {
          margin-left: 20px;
          vertical-align: middle;
        }
        img {
          width: 80px;
          height: 40px;
          margin-left: 20px;
          vertical-align: middle;
        }
      }
    }
    .qrcode {
      img {
        box-sizing: border-box;
        padding: 10px;
        width: 45%;
      }
    }
  }
  .copyright {
    background: #222222;
    height: 36px;
    text-align: center;
    color: #999999;
    line-height: 36px;
    font-size: 12px;
    margin-top: 20px;
  }
}
</style>
