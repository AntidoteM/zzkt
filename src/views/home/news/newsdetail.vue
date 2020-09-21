<template>
    <div>
        <nav-bar>
            <div slot="title">新闻详情</div>
        </nav-bar>
        <div class="info">
            <div class="title">{{title}}</div>
            <div class="time">{{time}}</div>
            <div class="author">{{author?'作者：'+author:''}}</div>
            <div class="content" v-html="content"></div>
            <div class="source">{{source?'来源：'+source:''}}</div>
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
            time: '',
            source: '',
            author: ''
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
                this.source = data.source
                this.author = data.author
            }
        })
    },
    methods: {

    }
}
</script>

<style scoped>
    .info{
        margin-top: 45px;
    }
    .title{
        padding: 10px 20px;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
    }
    .time{
        font-size: 12px;
        text-align: right;
        padding-right: 20px;
    }
    .author{
        margin-top: 5px;
        font-size: 14px;
        text-align: right;
        padding-right: 20px;
    }
    .source{
        color: #dddddd;
        font-size: 14px;
        padding: 5px;
        text-align: center;
    }
    .info >>> .content{
        font-size: 14px !important;
        padding:10px 20px;
    }
    .content >>> p,.content >>> span{
        line-height: 24px !important;
        font-size: 16px !important;
    }
    .content >>> img{
        max-width: 100% !important;
    }
</style>