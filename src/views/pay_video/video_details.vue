<template>
    <div class="video_center">
        <div class="flex_betw title">
            <div class="left_array" @click="exit()"></div>
            <div class="title_center">课程详情</div>
            <div class="right_cent"></div>
        </div>
        <div class="video_box">
            <video src="../../assets/video/shipin.mp4" controls="controls"></video>
        </div>
        <div class="center_txt">
            <div class="video_name">动力电池PACK装调与检测</div>
            <div class="flex hour">
                <div class="lable_l">0人学过</div>
                <div class="lable_c">|</div>
                <div class="lable_r">共1课时</div>
            </div>
        </div>
       <div class="nav_box">
            <div class="tab_top">
                <mt-navbar v-model="selected">
                    <mt-tab-item id="1">简介</mt-tab-item>
                    <mt-tab-item id="2">目录</mt-tab-item>
                </mt-navbar>
            </div>


            <mt-tab-container v-model="selected" class="center_box">
                <mt-tab-container-item class="text_list" id="1" >
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
                </mt-tab-container-item>
                <mt-tab-container-item class="text_list" id="2" >
                    <mt-cell class="text_item" v-for="n in 6" :title="'文章内容 ' + n" :key="n"/>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
import {Navbar, TabItem, TabContainer, TabContainerItem, Cell} from "mint-ui"

export default {
    data(){
        return{
             selected: '1',
             id_index:0,
             one_data:[
                 {
                     one_center:'这是一级',
                     check:false,
                     one_child:[
                    {
                        tow_data:'二级',
                        tow_check:false,
                        tow_child:[
                            {three_data:'三级'},
                            {three_data:'三级'}

                        ]
                    },
                    {
                        tow_data:'二级',
                        tow_check:false,
                        tow_child:[
                            {three_data:'三级'},
                            {three_data:'三级'}

                        ]
                    }
                 ]},
                  {
                     one_center:'这是一级',
                     check:false,
                     one_child:[
                     {
                        tow_data:'二级',
                        tow_check:false,
                        tow_child:[
                            {three_data:'三级'},
                            {three_data:'三级'}

                        ]
                    },
                    {
                        tow_data:'二级',
                        tow_check:false,
                        tow_child:[
                            {three_data:'三级'},
                            {three_data:'三级'}

                        ]
                    }
                 ]}
             ]
        }
    },
    components:{
        [Navbar.name]: Navbar,
        [TabItem.name]: TabItem,
        [TabContainerItem.name]: TabContainerItem,
        [TabContainer.name]: TabContainer,
        [Cell.name]: Cell
    },
    methods:{
        exit(){
            this.$router.push('/classes')
        },
        one_cli(index){
            console.log(index)
            this.one_data[index].check=!this.one_data[index].check
        },
        three_cli(index,indexs){
            console.log(index,indexs)
            this.one_data[index].one_child[indexs].tow_check=!this.one_data[index].one_child[indexs].tow_check
        }
    }
}
</script>

<style lang="less" scope>
.video_center{
    .video_box{
        video{
            width: 100%;
        } 
    }
    .center_txt{
            
            .video_name{
                margin: 12px 0 0 15px;
            }
            .hour{
                font-size: 13px;
                color: #999;
                margin: 8px 0 0 15px;
                .lable_c{
                    margin: 0 5px;
                }
            }
    }
    .title{
        background: #1abefc;
        padding: 5px 0;
            .left_array{
                border-left: 1px solid #fff;
                 border-bottom: 1px solid #fff;
                transform: rotate(43deg);
                width: 5px;
                height: 5px;
                margin: 10px 0 10px 10px;
            }
            .title_center{
                color: #fff;
                line-height: 25px;
            }
    }
    .nav_box{
        .mint-tab-item{
            color: #999;
            font-weight: 600;
        }
        .is-selected{
            border:0px;
            font-weight: 600;
            color: #000;
        }
        .is-selected::after{
            display: block;
            content:'';
            width: 30px;
            height: 5px;
            background: #22abeb;
            margin: 6px auto 0;
            border-radius: 10px;
           
        }
         .mint-tab-item-label{
                font-size: 18px;
            }
        .center_box{
            .text_list{
                .one_css{
                    background: red;
                    .tow_css{
                        background: blue;
                        .three_css{
                            background: chartreuse;
                        }
                     .therr_over{
                        overflow: hidden;
                        height: 20px;
                        }
                    }
                }
                .one_over{
                    overflow: hidden;
                    height: 20px;
                   
                }
            }
        }
    }
}
</style>