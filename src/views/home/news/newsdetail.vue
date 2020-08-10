<template>
    <div>
        <nav-bar>
            <div slot="title">新闻详情</div>
        </nav-bar>
        <div class="info">
            <div class="title">{{title}}</div>
            <div class="time">{{time}}</div>
            <div v-html="content"></div>
        </div>
    </div>
</template>

<script>
import navBar from "../../../components/navbar";
export default {
    data(){
        return{
            content: "",
            title: '',
            time: ''
        }
    },
    components: {
        navBar
    },
    created(){
        console.log(this.$route.params.id)
        this.$axios.get(`newsdetail/${this.$route.params.id}`).then((res)=>{
            if(res.data.status == 200){
                let data = res.data.data.news
                console.log(data)
                this.title = data.title
                this.time = data.updated_at
                this.content = data.content
            }
        })
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
    .info{
        margin-top: 45px;
    }
    .title{
        padding-top: 10px;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
    }
    .time{
        font-size: 16px;
        text-align: right;
        padding:10px 20px;
    }
</style>