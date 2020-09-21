<template>
  <div>
    <div class="tab_top">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">赛前培训</mt-tab-item>
        <mt-tab-item id="2">新职业培训</mt-tab-item>
      </mt-navbar>
    </div>
    <mt-tab-container v-model="selected" class="box">
      <mt-tab-container-item id="1">
        <div v-for="(item,index) in cate" :key="index">
          <div class="lable">{{item.name}}</div>
          <div v-for="(sonitem,sonindex) in item.son" :key="sonindex">
            <div class="type">{{sonitem.name}}</div>
            <div class="list">
              <div
                class="center_box"
                v-for="(son2item,son2index) in sonitem.son"
                :key="son2index"
                @click="to_videil(son2item.id)"
              >
                <div class="img_box">
                  <img class="img" :src="son2item.img_src" alt />
                </div>
                <div>
                  <div class="title">{{son2item.title}}</div>
                  <div class="hour">共{{son2item.video_count}}个课时</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </mt-tab-container-item>

      <mt-tab-container-item id="2">
        <div v-for="(item,index1) in newcate" :key="index1">
          <div class="lable">{{item.name}}</div>
          <div v-for="(sonitem,sonindex1) in item.son" :key="sonindex1">
            <div class="type">{{sonitem.name}}</div>
            <div class="list">
              <div
                class="center_box"
                v-for="(son2item,son2index1) in sonitem.son"
                :key="son2index1"
                @click="to_videil(son2item.id)"
              >
                <div class="img_box">
                  <img class="img" :src="son2item.img_src" alt />
                </div>
                <div>
                  <div class="title">{{son2item.title}}</div>
                  <div class="hour">共{{son2item.video_count}}个课时</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      cate: [],
      newcate: [],
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
    this.$axios.get("/train").then((res) => {
      let data = res.data.data;
      this.cate = data.cate;
      this.newcate = data.newscate;
      console.log(data);
    });
  },
  methods: {
    to_videil(id) {
      this.$router.push({ path: `/Vid_details/${id}` });
    },
  },
};
</script>

<style lang="less" scoped>
.tab_top {
  .mint-navbar {
    .is-selected {
      color: #0099ff;
    }
  }
}
.box {
  margin-bottom: 60px;
}

.mint-tab-container-wrap {
  .type {
    padding: 10px;
    text-align: center;
    font-size: 14px;
  }
  .lable {
    position: relative;
    left: 3.3%;
    margin: 10px 7px;
    font-size: 12px;
    color: #3a77ac;
  }
  .lable::after {
    display: block;
    content: "";
    width: 4px;
    height: 13px;
    background: rgb(48, 105, 230);
    position: absolute;
    left: -8px;
    top: 0px;
  }
  .list{
    display: flex;
    flex-wrap: wrap;
    .center_box {
      width: 44%;
      display: inline-block;
      margin: 3% 0 1% 4%;

      .img_box {
        width: 100%;
        .img {
          width: 100%;
          height: 100px;
        }
      }
      .title {
        font-size: 12px;
        font-weight: 600;
      }
      .hour {
        font-size: 8px;
        color: #999;
        margin: 6px 0 0 0;
      }
    }
  }
}
</style>