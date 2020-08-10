<template>
  <div>
    <nav-bar>
      <div slot="title">关于我们</div>
    </nav-bar>
    <div class="page-container">
      <p>公司简介</p>
      <div v-html="about.content"></div>
      <p>联系我们</p>
      <ul>
          <li>培训地址：{{about.address}}</li>
          <li>联系人员：{{about.name}}</li>
          <li>联系手机：{{about.phone}}</li>
          <li>联系邮编：{{about.postcode}}</li>
          <li>联系邮箱：{{about.email}}</li>
          <li>联系微信：{{about.wechat}}</li>
      </ul>
      <div style="text-indent: 0;text-align: center;">
        <img style="width: 50%" :src="about.img_code" alt="" />
        <p>关注公众号</p>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "../../../../components/navbar";
export default {
  data() {
    return {
        about: {}
    };
  },
  created() {
      this.$axios.get('/about').then((res)=>{
          this.about = res.data.data.about
      })
  },
  components: {
    navBar,
  },
};
</script>

<style lang="less" scoped>
.page-container {
  margin-top: 45px;
  p{
      text-align: center;
      font-size: 18px;
      padding: 10px;
  }
  div{
      padding: 5px;
      text-indent: 20px;
  }
  ul{
      padding: 10px;
  }
}
</style>