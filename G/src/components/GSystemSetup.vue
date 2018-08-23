<template>
<div>
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
            <g-paper/>

 </div>
</template>

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

  .el-table .warning-row {
  height:53px;
  }
.has-gutter th{
	color: #000;
	font-weight: bold;
}
 
  .GContent >div{
  padding: 0 20px;
  }
  table tr{
  height: 53px;
  }
  table tr:nth-of-type(odd){
    background: #fff;

  }
  table tr:nth-of-type(even){
    background: #fafafa;
  	
  }
</style>

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