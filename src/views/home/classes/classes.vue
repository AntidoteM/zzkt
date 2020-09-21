<template>
  <div>
    <div class="box">
        <div class="type">{{obj.name}}</div>
        <div
            class="center_box"
            v-for="(son2item,son2index) in cate"
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
</template>

<script>
export default {
  data() {
    return {
      selected: "1",
      cate: [],
      obj: {}
    };
  },
  created() {
    var id = this.$route.params.id
    this.$axios.get(`/train/${id}`).then((res) => {
      let data = res.data.data;
      this.cate = data.data;
      this.obj = data.cate
      console.log(data);
    });
  },
  methods: {
    to_videil(id) {
        console.log(id)
      this.$router.push({ path: `/Vid_details/${id}` });
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  margin-bottom: 60px;
}

.box {
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
</style>