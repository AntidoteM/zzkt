<template>
  <div class="video_center">
    <nav-bar>
      <div slot="title">课程详情</div>
    </nav-bar>
    <div class="video_box">
      <video
        id="myVideo"
        class="video-js vjs-big-play-centered vjs-fluid"
        :poster="video.img_src"
      >
      <source :src="video.video_url" type="video/mp4" />
      </video>
    </div>
    <div class="center_txt">
      <div class="video_name">{{train.title}}</div>
      <div class="flex hour">
        <!-- <span class="lable_l">0人学过</span>
        <span class="lable_c">|</span>-->
        <span class="lable_r">共{{train.video_count}}课时</span>
      </div>
    </div>
    <div class="nav_box">
      <div class="tab_top">
        <mt-navbar v-model="selected">
          <!-- <mt-tab-item id="1">简介</mt-tab-item> -->
          <mt-tab-item id="2">目录</mt-tab-item>
        </mt-navbar>
      </div>

      <mt-tab-container v-model="selected" class="center_box">
        <!-- <mt-tab-container-item class="text_list" id="1" >
                    <div v-for="(item,index) in one_data" :key='index'>
                        <div class="one_css " :class="item.check?'one_over':''" @click.stop="one_cli(index)">{{item.one_center}} {{index}}
                            <div class="tow_css"  v-for="(itema,indext) in item.one_child" :key="indext">
                               <div :class="itema.tow_check?'therr_over':''">
                                    <div @click.stop="three_cli(index,indext)">{{itema.tow_data}}{{indext}}55</div>
                                    <div class="three_css"  v-for="(items,indexs) in itema.tow_child" :key="indexs" >
                                       {{items.three_data}}{{indexs}}
                                    </div>
                               </div>
                                
                            </div>
                        </div>
                    </div>
        </mt-tab-container-item>-->
        <mt-tab-container-item class="text_list" id="2">
          <mt-cell
            class="text_item"
            v-for="(item,index) in videolist"
            :title="item.title"
            :class="currentindex==index?'active':''"
            :key="index"
            v-on:click.native="play(index)"
          />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import { Navbar, TabItem, TabContainer, TabContainerItem, Cell, Toast } from "mint-ui";
import navBar from "../../components/navbar";
export default {
  data() {
    return {
      selected: "2",
      id_index: 0,
      //  one_data:[
      //      {
      //          one_center:'这是一级',
      //          check:false,
      //          one_child:[
      //         {
      //             tow_data:'二级',
      //             tow_check:false,
      //             tow_child:[
      //                 {three_data:'三级'},
      //                 {three_data:'三级'}

      //             ]
      //         },
      //         {
      //             tow_data:'二级',
      //             tow_check:false,
      //             tow_child:[
      //                 {three_data:'三级'},
      //                 {three_data:'三级'}

      //             ]
      //         }
      //      ]},
      //       {
      //          one_center:'这是一级',
      //          check:false,
      //          one_child:[
      //          {
      //             tow_data:'二级',
      //             tow_check:false,
      //             tow_child:[
      //                 {three_data:'三级'},
      //                 {three_data:'三级'}

      //             ]
      //         },
      //         {
      //             tow_data:'二级',
      //             tow_check:false,
      //             tow_child:[
      //                 {three_data:'三级'},
      //                 {three_data:'三级'}

      //             ]
      //         }
      //      ]}
      //  ]
      videolist: [],
      video: {},
      currentindex: 0,
      train: {},
      myPlayer: null
    };
  },
  components: {
    [Navbar.name]: Navbar,
    [TabItem.name]: TabItem,
    [TabContainerItem.name]: TabContainerItem,
    [TabContainer.name]: TabContainer,
    [Cell.name]: Cell,
    navBar,
  },
  created() {
    this.$axios.get(`/traindetail/${this.$route.params.id}`).then((res) => {
      this.train = res.data.data.train;
    }).catch((res)=>{
        console.log(res)
    });
    this.$axios.get(`/player/${this.$route.params.id}`).then((res) => {
      this.videolist = res.data.data.videolist;
      this.video = this.videolist[0];
      this.initvideo()
    }).catch(()=>{
        Toast({
            message: '请先登录',
            position: 'bottom'
        })
    });
    
  },
  methods: {
    initvideo(){
      this.$nextTick(() => {
        let isMousedown = false;
        let oldTime, newTime, maxTime;
        let firstplay = true;
        this.myPlayer = this.$video(document.getElementById("myVideo"), {
            controls: false,
            autoplay: true,
            preload: "auto",
        });
        this.myPlayer.on("ended", () => {
            var vid = this.video.id;
            this.$axios.post('/duration',{vid}).then((res)=>{
                console.log(res)
            })
            // if (this.videolist.length > this.currentindex + 1) {
            //     this.currentindex += 1;
            //     this.play(this.currentindex)
            // }
        });
        this.myPlayer.on("pause", () => {
            if (isMousedown == false) {
                oldTime = this.myPlayer.currentTime();
            }
        });
        this.myPlayer.on("play", () => {
            isMousedown = false;
            newTime = this.myPlayer.currentTime();
            if (newTime < maxTime) {
            this.myPlayer.currentTime(newTime);
            } else {
            this.myPlayer.currentTime(oldTime);
            }
            if (firstplay) {
                firstplay = false;
                var vid = this.video.id;
                console.log(vid);
                this.$axios.post('/getrecord',{vid}).then((res)=>{
                    console.log(res)
                })
            }
        });
        document.getElementsByClassName("vjs-progress-holder")[0]
            .onmousedown = () => {
                isMousedown = true;
                oldTime = this.myPlayer.getCache().currentTime;
            };
        this.myPlayer.on("timeupdate", () => {
            if (this.myPlayer.currentTime() > maxTime && !isMousedown) {
                maxTime = this.myPlayer.currentTime();
            }
        });
        this.myPlayer.on('canplay', () => {
            this.myPlayer.play();            			//自动播放
        });
        this.myPlayer.on('loadedmetadata', () => {
            this.myPlayer.currentTime(0);		    //跳转
        });
      });
    },
    play(index) {
      this.video = this.videolist[index];
      this.currentindex = index;
      this.myPlayer.src(this.video.video_url)
      this.myPlayer.load()
      this.myPlayer.currentTime(0);
    //   this.myPlayer.requestFullscreen();
    },
    exit() {
      this.$router.push("/classes");
    },
    one_cli(index) {
      console.log(index);
      this.one_data[index].check = !this.one_data[index].check;
    },
    three_cli(index, indexs) {
      console.log(index, indexs);
      this.one_data[index].one_child[indexs].tow_check = !this.one_data[index]
        .one_child[indexs].tow_check;
    },
  },
};
</script>

<style lang="less" scoped>
.video_center {
  .video_box {
    padding-top: 45px;
    video {
      width: 100%;
    }
  }
  .center_txt {
    .video_name {
      margin: 12px 0 0 15px;
    }
    .hour {
      font-size: 13px;
      color: #999;
      margin: 8px;
      margin-left: 15px;
      .lable_c {
        margin: 0 5px;
      }
    }
  }
  .nav_box {
    .mint-tab-item {
      color: #999;
      font-weight: 600;
    }
    .is-selected {
      border: 0px;
      font-weight: 600;
      color: #000;
    }
    .is-selected::after {
      display: block;
      content: "";
      width: 30px;
      height: 5px;
      background: #22abeb;
      margin: 6px auto 0;
      border-radius: 10px;
    }
    .mint-tab-item-label {
      font-size: 18px;
    }
    .center_box {
        .active{
            color: #22abeb;
        }
      .text_list {
        .one_css {
          background: red;
          .tow_css {
            background: blue;
            .three_css {
              background: chartreuse;
            }
            .therr_over {
              overflow: hidden;
              height: 20px;
            }
          }
        }
        .one_over {
          overflow: hidden;
          height: 20px;
        }
      }
    }
  }
}
</style>