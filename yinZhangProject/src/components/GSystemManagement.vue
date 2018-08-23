<template>
  <div id="GSystemManagement">
       <div class="GSystemManagement_left">
            <ul>
                <li>
                    <div><img src="../assets/u113.png"></img></div>
                    角色管理
                </li>
                <li>
                    <div><img src="../assets/u1303.png"></img></div>
                    权限管理
                </li>
            </ul>
       </div>
        <div class="GSystemManagement_right">
            <div class="hi">
                <el-row>
                  <el-button type="info" plain>新建审批类型</el-button>
                </el-row>
            </div>
            <el-table
                :data="tableData2"
                style="width: 100%"
                :row-class-name="tableRowClassName">
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="HHH">
                </el-table-column>
              </el-table>

                <g-paper />
       </div>
  </div>
</template>

<script>
import GPaper from './GPaper'
export default {
 components: { 
        GPaper
       },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
    },
    data() {
      return {
        tableData2: [{
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }]
      }
    }
}
</script>

<style scoped>
.hi{
    margin: 10px;
    width: 100%;
    height: 30px;
    text-align:right;
    padding-right: 20px;
    margin-bottom: 20px;
}
.hi  button{
    width: 155px;
    height: 40px;

}
.hi  button span{
    color: #000;
}
 .GSystemManagement_right table tr{
  height: 53px;
  }
  table  tbody tr:nth-of-type(odd){
    background: #fff;

  }
  table tbody tr:nth-of-type(even){
    background: #fafafa;
    
  }
 .el-table .warning-row {
  height:53px;
  }
.has-gutter th{
    color: #000;
    font-weight: bold;
}
    #GSystemManagement{
        width: 100%;
        height: 602px;
    }
    #GSystemManagement>div{
        float:left;
    }
    .GSystemManagement_left{
        padding: 0 20px;
        text-align:center;
        height: 600px;
    }
    .GSystemManagement_left>ul>li> div{
       width: 76px;
       height: 76px;
       margin: 20px 0 5px 0;
    }
    .GSystemManagement_left>ul>li> div>img{
    margin-top: 3px;
    }
    .GSystemManagement_right{
        width:1176px;
        heihgt: 100%;
        height: 600px;

    }
    
     
</style>
