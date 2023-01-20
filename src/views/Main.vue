<template>
  <div>
    <el-container>

      <el-aside >
          <Caside></Caside>
      </el-aside>

      <el-container>

        <el-header>
          <Cheader></Cheader>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import Caside from '../components/CommonAside'
import Cheader from '../components/CommonHeader'
export default {
  name: "Main",
  data(){
    return{

    }
  },
  components:{
    Caside,
    Cheader
  }
}
</script>

<style>

</style>
