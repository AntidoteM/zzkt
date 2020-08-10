<template>
    <div>
        <nav-bar>
            <div slot="title">学习记录</div>
        </nav-bar>
        <div class="page-container">
            <div class="user-center-volunteer-main">
                <div class="personal-settings__right" id="studyItem">
                    <div style="padding-top:10px" v-if="list.length<=0">
                        <img style="width: 200px;display: block;margin: 0 auto;" src="http://www.danengshou.com/img/empty.png" />
                        <span style="text-align: center;display: block;margin-top: 10px;font-size: 11px;">暂无学习记录！</span>
                    </div>
                    <div class="item" v-for="(item, index) in list" :key="index" @click="todetail(item.video.cid)">
                        <img :src="item.video.img_src" alt="">
                        <span>{{item.video.title}}</span>
                    </div>
                </div>
                <div class="module page-index-pagination" id="paginations" style="margin: 0.3rem 0"></div>
            </div>
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
import navBar from '../../../../components/navbar'
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        this.$axios.get('/user/studyrecord').then((res)=>{
            this.list = res.data.data.data
            console.log(res.data.data)
        })
    },
    components: {
        navBar
    },
    methods:{
        todetail(id){
            this.$router.push({path: `/Vid_details/${id}`})
        }
    }
}
</script>

<style lang="less" scoped>
    .page-container {
        margin-top: 45px;
    }
    .item{
        padding: 10px;
        img{
            width: 150px;
        }
        span{
            margin-left: 10px;
            vertical-align: top;
        }
    }
</style>