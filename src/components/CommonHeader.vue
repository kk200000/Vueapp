<template>
  <div class="headerContainer">
    <div class="l-content">
      <!--左侧栏折叠按钮-->
      <el-button class="el-icon-menu" size="3px" @click="changeCollapse()"></el-button>

      <el-breadcrumb separator="/" >
        <el-breadcrumb-item v-for="item in this.tabs" :key="item.name" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>


    <el-dropdown>
      <el-avatar :size="30" :src="this.$store.state.user.avatar"></el-avatar>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>



  </div>
</template>
<style lang="less" scoped>
.headerContainer{
  display: flex;
  justify-content: space-between;  // 横轴
  align-items: center;  // 纵轴
  background-color: #333;
  height: 60px;
  padding: 0 20px;
  .text{
    color: white;
    font-size: 14px;
    margin-left: 10px;
  }
  .l-content{
    display: flex;
    align-items: center;
    /deep/ .el-breadcrumb__item{
      .el-breadcrumb__inner{       // 样式穿刺 deep
        &.is-link{
          color: #666;

        }
      }
      &:last-child{
        .el-breadcrumb__inner{
          color: #fff;
        }

      }
    }


    .el-icon-menu{
      &.el-button--default {
        &.el-button--3px{
          margin-right: 20px;
        }
      }
    }

  }

}
el-button{
  height: 10px;
}

</style>
<script>
import {mapState} from 'vuex'
export default {

  name: 'Commonheader',

  data() {
    return {

    }
  },
  methods: {
    changeCollapse(){
      this.$store.commit('changeCollapse')
    }
  },
  computed:{
    ...mapState({
       tabs: (state) => state.tab.tabList
})
  }
};
</script>