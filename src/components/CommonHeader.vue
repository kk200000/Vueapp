<template>
  <div class="header">
    <el-container>
      <!--左侧栏折叠按钮-->
      <el-button class="el-icon-menu" size="3px" @click="changeCollapse()"></el-button>
      <span>首页</span>
    </el-container>


    <el-dropdown>
      <el-avatar :size="30" :src="url"></el-avatar>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>



  </div>
</template>
<style>

.header{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
el-button{
  height: 10px;
}
</style>
<script>
export default {
  name: 'Commonheader',

  data() {
    return {
      url:""
    };
  },

  mounted() {

  },

  methods: {
    changeCollapse(){


    }
  },
  computed:{

  }
};
</script>