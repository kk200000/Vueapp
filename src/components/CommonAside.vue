<template>
  <div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen"
             @close="handleClose" :collapse="isCollapse"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
    >

      <h3 v-if="!isCollapse">通用后台管理系统</h3>
      <h3 v-else>后台</h3>
<!--      无子菜单-->
      <el-menu-item @click="clickMemu(item)" v-for="item in nochildren" :key="item.name" :index="item.name">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>


<!--      有子菜单-->
      <el-submenu v-for="item in haschildren" :key="item.label" v-bind:index="item.label" >
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{item.label}}</span>
        </template>

        <el-menu-item-group v-for="child in item.children" :key="child.name" :index="child.name" >

          <el-menu-item :index="child.name" @click="clickMemu(child)">
            <i :class="`el-icon-${child.icon}`"></i>
            {{child.label}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>


    </el-menu>

  </div>

</template>
<style lang="less" scoped>
// 菜单展开时
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

// 折叠菜单时
.el-menu-vertical-demo{
  height: 100vh;
  h3{
    text-align: center;
    color: #fff;
    line-height: 48px;
  }
}

.el-menu{
  border: 0;
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
              label: '首页1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '首页2',
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
      return this.menuData.filter((item)=>{
            if (!item.children){
              return item
            }
        })
    },
    // 有子菜单
    haschildren:function(){
      return this.menuData.filter((item)=>{
        if (item.children){
          return item
        }
      })
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
      if(item.path==='/'&&this.$route.path==='/home'){

      }
      else if (item.path!==this.$route.path)
        this.$router.push(item.path)

      // console.log(item)
      this.$store.commit('updateMenu',item)
    },

  },

}

</script>