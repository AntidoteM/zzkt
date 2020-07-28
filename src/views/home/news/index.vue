<template>
    <div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">新闻动态</mt-tab-item>
            <mt-tab-item id="2">通知公告</mt-tab-item>
            <mt-tab-item id="3">技术资料</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell v-for="n in 10" :title="'content ' + n" :key="n"/>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :title="'content ' + n" :key="n"/>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 6" :title="'content ' + n" :key="n"/>
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
    
</style>