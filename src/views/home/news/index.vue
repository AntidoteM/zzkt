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
      <mt-tab-container-item class="text_list" id="1">
        <mt-cell
          class="text_item"
          v-for="(item,index) in dynamic"
          :title="item.title"
          :key="index"
          v-on:click.native="toDetail(item.id)"
        />
      </mt-tab-container-item>
      <mt-tab-container-item class="text_list" id="2">
        <mt-cell
          class="text_item"
          v-for="(item,index) in inform"
          :title="item.title"
          :key="index"
          v-on:click.native="toDetail(item.id)"
        />
      </mt-tab-container-item>
      <mt-tab-container-item class="text_list" id="3">
        <mt-cell
          class="text_item"
          v-for="(item,index) in skill"
          :title="item.title"
          :key="index"
          v-on:click.native="toDetail(item.id)"
        />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { Navbar, TabItem, TabContainer, TabContainerItem, Cell } from "mint-ui";
export default {
  data() {
    return {
      selected: "1",
      dynamic: [],
      inform: [],
      skill: [],
    };
  },
  components: {
    [Navbar.name]: Navbar,
    [TabItem.name]: TabItem,
    [TabContainerItem.name]: TabContainerItem,
    [TabContainer.name]: TabContainer,
    [Cell.name]: Cell,
  },
  created() {
    this.$axios.get("/news").then((res) => {
      let data = res.data.data.news;
      this.dynamic = data.dynamic;
      this.inform = data.inform;
      this.skill = data.skill;
    });
  },
  methods: {
    toDetail(n) {
      console.log(n);
      this.$router.push({ path: `/news_details/${n}` });
    },
  },
};
</script>

<style lang="less" scoped>
.tab_top {
  .mint-navbar {
    background: url(http://h5.danengshou.com/img/logo_bg.png) no-repeat top
      center;
    .is-selected {
      color: #fff;
    }
  }
}
.center_box {
  .text_list {
    .text_item {
      background: url(http://gaosaiedu.com/home/img/arrows.svg) no-repeat top
        left;
      background-position: 5% 57%;
      background-size: 4% 40%;
      padding: 0 25px;
      .mint-cell-wrapper {
        .mint-cell-title {
            margin-left: 20px;
          text-indent: 6%;
          color: #999;
        }
      }
    }
  }
}
</style>