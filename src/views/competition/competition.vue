<template>
  <div>
    <div class="wrapper">
      <nav-bar>
        <div slot="title">比赛详情</div>
      </nav-bar>
      <img
        style="width:100%;padding-top:45px"
        src="http://gaosaiedu.com/home/img/1593402424(1).jpg"
      />
      <div id="intro" class="intro item">
        <div class="title">比赛简介</div>
        <p v-html="game.content"></p>
      </div>
      <div id="classify" class="classify item">
        <div class="title">比赛分类</div>
        <div class="classify-content">
          <div class="swiper-container-classify">
            <swiper :options="classifyOptions" class="swiper-wrapper">
              <swiper-slide class="swiper-slide" v-for="(item,index) in gamecate" :key="index">
                <img style="width:100%" :src="item.img_src" />
                <p>{{item.name}}</p>
              </swiper-slide>
            </swiper>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
      <div id="news" class="news item">
        <div class="title">新闻现场</div>
        <div class="news-content">
          <div class="left fl">
            <div id="gallery">
              <swiper :options="gallerySwiper" ref="gallerySwiper" class="swiper-wrapper">
                <swiper-slide class="swiper-slide" v-for="(item,index) in img_text" :key="index">
                  <img style="width:100%" :src="item.img_src" />
                </swiper-slide>
              </swiper>
            </div>
            <!-- <div id="thumbs">
							<swiper class="swiper-wrapper">
								<swiper-slide class="swiper-slide" v-for="(item,index) in img_text" :key="index">
									<img :src="item.img_src"/>
								</swiper-slide>
							</swiper>
            </div>-->
          </div>
          <div class="right fr">
            <div v-for="(item,index) in img_text" :key="index">
              <div class="newscontent" v-if="show==index">
                <div class="title">{{item.title}}</div>
                <p class="summary">{{item.content}}</p>
              </div>
            </div>
          </div>
          <div class="clr" style="clear: both;"></div>
        </div>
      </div>
      <div id="moment" class="moment item">
        <div class="title">精彩瞬间</div>
        <div class="moment-content top">
          <div class="swiper swiper-container-momenttop">
            <swiper :options="momenttopswiper" class="swiper-wrapper">
              <swiper-slide class="swiper-slide" v-for="(item,index) in top" :key="index">
                <img style="width:100%" :src="item.img_src" />
                <p>{{item.title}}</p>
              </swiper-slide>
            </swiper>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <div class="moment-content bottom">
          <div class="swiper swiper-container-momentbottom">
            <swiper :options="momentbottomswiper" class="swiper-wrapper">
              <swiper-slide class="swiper-slide" v-for="(item,index) in bottom" :key="index">
                <img style="width:100%" :src="item.img_src" />
                <p>{{item.title}}</p>
              </swiper-slide>
            </swiper>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
      <div id="history" class="history item">
        <div class="title">往届比赛</div>
        <div class="history-content">
          <img v-for="(item, index) in other" :key="index" width="100%" :src="item.img_src" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "../../components/navbar";
export default {
  data() {
    return {
      show: 0,
      classifyOptions: {
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
          nextEl: ".classify .swiper-button-next",
          prevEl: ".classify .swiper-button-prev",
        },
      },
      momentbottomswiper: {
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
          nextEl: ".bottom .swiper-button-next",
          prevEl: ".bottom .swiper-button-prev",
        },
      },
      momenttopswiper: {
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
          nextEl: ".top .swiper-button-next",
          prevEl: ".top .swiper-button-prev",
        },
      },
      gallerySwiper: {
        spaceBetween: 10,
        // thumbs: {
        //     swiper: {
        // 		el: '#thumbs',
        // 		spaceBetween: 5,
        // 		slidesPerView: 4,
        // 		watchSlidesVisibility: true,/*避免出现bug*/
        //     },
        //     autoScrollOffset:1,
        //     slideThumbActiveClass: 'my-active',
        // },
        on: {
          slideChange: () => {
            this.show = this.$refs.gallerySwiper.$swiper.activeIndex;
          },
        },
      },
      game: {},
      gamecate: [],
      img_text: [],
      top: [],
      other: [],
      bottom: [],
    };
  },
  components: {
    navBar,
  },
  created() {
    this.$axios.get(`/game/${this.$route.params.id}`).then((res) => {
      let data = res.data.data;
      console.log(data);
      this.game = data.game;
      this.gamecate = data.gamecate;
      this.img_text = data.img_text;
      this.top = data.top;
      this.other = data.other;
      this.bottom = data.bottom;
    });
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.wrapper {
  background: #1c2440;
  .navbar{
    background: #1c2440;
  }
}
.yp-header {
  background: #1c2440;
}
.yp-header-menu {
  li {
    .sub_a {
      color: #fff;
    }
  }
}
.yp-header-logo {
  span {
    color: #fff;
  }
}
.banner {
  width: 100%;
}
.intro {
  margin-top: 20px;
  p {
    width: 80%;
    margin: 0 auto;
    color: #ffffff;
    text-align: center;
  }
}
.classify {
  margin-top: 20px;
  p {
    text-align: center;
    color: #ffffff;
  }
}
.classify-content {
  position: relative;
}
.item {
  & > .title {
    color: #ffffff;
    text-align: center;
    font-size: 25px;
    margin: 40px 0;
    background: url(http://www.danengshou.com/img/title-index-bg.png) no-repeat
      center;
  }
}
.swiper-container-classify {
  overflow: hidden;
  position: relative;
  width: 80%;
  margin: 0 auto;
}
.classify .swiper-button-prev,
.classify .swiper-button-next {
  transform: scale(0.7);
  color: #ffffff;
}
.news-content {
  width: 80%;
  margin: 0 auto;
  .left {
    width: 100%;
    overflow: hidden;
  }
  .right {
    width: 100%;
    padding: 40px 20px;
    box-sizing: border-box;
    .title {
      font-size: 20px;
      color: white;
    }
    .summary {
      word-break: break-word;
      margin-top: 10px;
      color: white;
    }
  }
}
.moment-content {
  margin-bottom: 20px;
  position: relative;
  .swiper {
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
  }
  p {
    color: white;
    text-align: center;
  }
}
.moment-content .swiper-button-prev,
.moment-content .swiper-button-next {
  transform: scale(0.7);
  color: #ffffff;
}
.history-content {
  display: flex;
  justify-content: space-around;
  img {
    width: 30%;
  }
}
</style>