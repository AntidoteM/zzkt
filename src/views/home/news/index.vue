<template>
    <div>
        <div class="tab_top">
            <mt-navbar v-model="selected">
            <mt-tab-item id="1">新闻动态</mt-tab-item>
            <mt-tab-item id="2">通知公告</mt-tab-item>
            <mt-tab-item id="3">技术资料</mt-tab-item>
        </mt-navbar>
        </div>
        

        <mt-tab-container v-model="selected" class="center_box">
            <mt-tab-container-item class="text_list" id="1" >
                <mt-cell class="text_item" v-for="n in 10" :title="'文章内容 ' + n" :key="n"/>
            </mt-tab-container-item>
            <mt-tab-container-item class="text_list" id="2" >
                <mt-cell class="text_item" v-for="n in 6" :title="'文章内容 ' + n" :key="n"/>
            </mt-tab-container-item>
             <mt-tab-container-item class="text_list" id="3" >
                <mt-cell class="text_item" v-for="n in 3" :title="'文章内容 ' + n" :key="n"/>
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

    }
}
</script>

<style lang="less" scope>
    .tab_top{
        .mint-navbar{
             background: url(http://h5.danengshou.com/img/logo_bg.png) no-repeat top center;
             .is-selected{
                     color: #fff;
                 }

        }
        
    }
    .center_box{
        .text_list{
            .text_item{
                background: url(http://h5.danengshou.com/img/logo_bg.png) no-repeat top left;
                background-position: 3% 57%;
                background-size: 4% 40%;
               .mint-cell-wrapper{
                   .mint-cell-title{
                       text-indent: 6%;
                       color: #999;
                   }
               }
            }
            
        }
    }
</style>