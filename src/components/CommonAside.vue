<template>
  <div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen"
             @close="handleClose" :collapse="isCollapse"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
    >
      <h3>管理系统</h3>
      <el-menu-item @click="clickMemu(item)" v-for="item in nochildren" :key="item.name" v-bind:index="item.name">
        <i class=""></i>
        <span slot="title"></span>
      </el-menu-item>
      <el-submenu v-for="item in haschildren" :key="item.label" v-bind:index="item.label">
        <template slot="title">
          <i class=""></i>
          <span slot="title"></span>
        </template>
        <el-menu-item-group >
          <el-menu-item ></el-menu-item>
        </el-menu-item-group>
      </el-submenu>


    </el-menu>
  </div>

</template>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  height: 100vh;
  h3{
    text-align: center;
    color: #fff;
    line-height: 48px;
  }
}
</style>
<script>
export default {
  data() {
    return {

      menuData: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '首页',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '首页',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        }
      ]
    };
  },
  computed:{
    // 没有子菜单
    nochildren:function(){

    },
    // 有子菜单
    haschildren:function(){

    },
    isCollapse(){
      return this.$store.state.tab.isCollapse;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMemu(item){


    },

  },

}

</script>