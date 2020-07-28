<template>
    <div>
        <div class="tab_top">
            <mt-navbar v-model="selected">
            <mt-tab-item id="1">赛前培训</mt-tab-item>
            <mt-tab-item id="2">新职业培训</mt-tab-item>
        </mt-navbar>
        </div>
        <mt-tab-container v-model="selected">
            
            <mt-tab-container-item id="1">
                <div class="lable">第二届全国新能源汽车关键技术技能大赛培训资源</div>
                <!-- <mt-cell v-for="n in 10" :title="'content ' + n" :key="n"/> -->
                <div class="center_box" v-for="n in 10" :key="n" @click="to_videil">
                    <div class="img_box">
                        <img class="img" src="../../../assets/img/1592992583(1).jpg" alt="">
                    </div>
                    <div>
                        <div class="title">动力电池PACK装调与检测</div>
                        <div class="hour">共2个课时</div>
                    </div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class="lable">无人装机调检修工</div>
                <!-- <mt-cell v-for="n in 4" :title="'content ' + n" :key="n"/> -->
                <div class="center_box" v-for="n in 10" :key="n">
                    <div class="img_box">
                        <img class="img" src="../../../assets/img/1592992583(1).jpg" alt="">
                    </div>
                    <div>
                        <div class="title">动力电池PACK装调与检测</div>
                        <div class="hour">共2个课时</div>
                    </div>
                </div>
            </mt-tab-container-item>
            
        </mt-tab-container>
    </div>
</template>

<script>
import {Navbar, TabItem, TabContainer, TabContainerItem, Cell} from "mint-ui"
export default {
    data(){
        return{
            selected: '1'
        }
    },
    components:{
        [Navbar.name]: Navbar,
        [TabItem.name]: TabItem,
        [TabContainerItem.name]: TabContainerItem,
        [TabContainer.name]: TabContainer,
        [Cell.name]: Cell
    },
    methods: {
        to_videil(){
            
            this.$router.push("/Vid_details")
        }
    }
}
</script>

<style lang="less" scope>
    .tab_top{
        .mint-navbar{
             background: url(http://h5.danengshou.com/img/logo_bg.png) no-repeat top center;
             background-size: cover;
             border:0px ;
             .is-selected{
                     color: #fff;
                 }
            .mint-tab-item{
                border:0px
            }
        }
    }
   
      .mint-tab-container-wrap{
           .lable{
                  position: relative;
                  left: 3.3%;
                  margin:10px 7px;
                  font-size: 12px;
                  color: #3a77ac;
             }
             .lable::after{
                 display: block;
                 content: '';
                 width: 4px;
                 height:13px;
                 background: rgb(48, 105, 230);
                 position: absolute;
                 left: -8px;
                 top: 0px;
             }
              .center_box{
                 width: 44%;
                 display: inline-block;
                 margin: 3% 0 1% 4%;      

                 .img_box{
                     width: 100%;
                     .img{
                         width: 100%;
                     }
                 }
                 .title{
                     font-size: 12px;
                     font-weight: 600;
                 }
                 .hour{
                     font-size: 8px;
                     color: #999;
                     margin: 6px 0 0 0;
                 }
             }
      }
     
</style>