<template>
  <div>
    <!-- <NavBar v-slot:title></NavBar> -->
    <router-view></router-view>
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

<style lang="less" scope>
router-view{
  max-height: calc(100%-60px);
}
</style>