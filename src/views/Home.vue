<template>
  <div class="home">
    <el-row>
      <el-col :span="8" style="padding-right: 10px">

        <el-card class="box-card">

          <div class="user">
            <el-avatar :size="150" :src="this.$store.state.user.avatar"></el-avatar>

            <div class="userInfo">
              <p class="username">
                {{this.$store.state.user.Username}}
              </p>

              <p class="userrole">
                {{this.$store.state.user.UserRole}}
              </p>
            </div>
          </div>

          <div class="loginInfo">
            <p class="loginTime">
              上次登录时间: <span>2021-7-29</span>
            </p>

            <p class="loginAdress">
              上次登录地点: <span>广州</span>
            </p>
          </div>

        </el-card>


      </el-col>




      <el-col :span="16" >
        <div class="num">
          <el-card :body-style="{display:'flex'}" v-for="item in countData" :key="item.name">
            <i :class="`el-icon-${item.icon}`" class="icon" :style="{'background':item.color}"></i>
            <div class="detail">
              <p class="price">￥{{item.value}}</p>
              <p class="desc">{{item.name}}</p>
            </div>

          </el-card>
        </div>




      </el-col>


    </el-row>


    <el-row>
      <el-col :span="8">
        <el-card class="box-card buytable">
          <el-table
              stripe
              :data="tableData"
              style="width: 100%">
            <el-table-column
                v-for ="item in tableHeader"
                :key="item.name"
                :prop="item.prop"
                :label="item.name"
                >
            </el-table-column>

          </el-table>
        </el-card>
      </el-col>


      <el-col :span="16">
        <el-card style="height: 280px">
            <!--折线图-->
            <div ref="echarts1" style="height: 280px"></div>
        </el-card>

        <div class="graph">
          <el-card style="height: 260px"></el-card>
          <el-card style="height: 260px"></el-card>
        </div>

      </el-col>
    </el-row>

  </div>
</template>

<style lang="less" scoped>
  .num{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .el-card{
      width: 32%;
      margin-bottom: 20px ;
    }
    .icon{
      width: 80px;
      height: 80px;
      line-height: 80px;
      font-size: 30px;
      text-align: center;
    }
    .detail{
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .price{
        font-size: 30px;
        margin-bottom: 10px;
        line-height: 30px;
        height: 30px;
      }
      .desc{
        color: #999999;
        font-size: 14px;
        text-align: center;
      }
    }
  }

  .graph{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .el-card{
      width: 48%;
    }
  }


.box-card{
  width: 500px;
}
  .buytable{
    margin-top: 20px;
  }

  .user{
      display: flex;
      align-items: center;
      padding-bottom:20px ;
      margin-bottom: 20px;
      border-bottom: 1px solid #ccc;
    .userInfo{
        margin-left: 40px;
      .username{
        font-size: 32px;
        margin-bottom: 10px;
      }
      .userrole{
        color: #999;
      }

    }

  }
  .loginInfo{
    p{
      line-height: 28px;
      font-size: 14px;
      color: #999999;
      span{
        margin-left: 60px;
        color: #666;
      }
    }
  }
</style>


<script>

import {getData} from "@/api";
import * as echarts from 'echarts'

export default {
  name: 'HomeView',
  mounted(){
      getData().then((data)=>{
        console.log(data)
      })
      // 此处初始化Echart，因为要获取dom元素
    const ec1 =  echarts.init(this.$refs.echarts1)
    // 指定图表的配置项和数据
    const option = {
      legend: {
        // 图例文字颜色
        textStyle: {
          color: "#333",
        },
      },
      grid: {
        left: "20%",
      },
      // 提示框
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category", // 类目轴
        data: [],
        axisLine: {
          lineStyle: {
            color: "#17b3a3",
          },
        },
        axisLabel: {
          interval: 0,
          color: "#333",
        },
      },
      yAxis: [
        {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
        },
      ],
      color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3"],
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    ec1.setOption(option);
  },
  data(){
    return{
      tableData: [
          {
        today: '2063',
        name: '王小虎',
        month: '2063',
        total:2063
      }, {
        today: '2063',
        name: '王小虎',
        month: '2063',
        total:2063
      }, {
        today: '2063',
        name: '王小虎',
        month: '2063',
        total:2063
      }, {
        today: '2063',
        name: '王小虎',
        month: '2063',
        total:2063
      }],

      tableHeader:[
        {
          name:"课程",
          prop:"name"
        },
        {
          name:"今日购买",
          prop:"today"
        },
        {
          name:"本月购买",
          prop:"month"
        },
        {
          name:"总购买",
          prop:"total"
        }


      ],

      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    }
  },
  components: {

  },

}
</script>
