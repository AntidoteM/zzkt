<template>
  <div>
    <!-- <NavBar v-slot:title></NavBar> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <TabBar />
  </div>
</template>

<script>
// import NavBar from '../../components/navbar'
import TabBar from '../../components/tabbar'
export default {
  data(){
    return{
      
    }
  },
    components: {
      // NavBar,
      TabBar
    }
}
</script>

<style lang="less" scoped>
router-view{
  max-height: calc(100%-60px);
}
</style>