<template>
  <div id="GSystemLogUser">
      <el-container>
          <el-aside width="116px">
                <div class="GSystemManagement_left">
                    <ul>
                        <li>
                            <div><img src="../assets/u464.png"></img></div>
                            用印记录
                        </li>
                        <li>
                            <div><img src="../assets/u469.png"></img></div>
                            业务日志
                        </li>
                        <li>
                            <div><img src="../assets/u459.png"></img></div>
                            用户日志
                        </li>
                    </ul>
               </div>
          </el-aside>
          <el-main>
             <div class="GSystemManagement_right">
                
                <g-system-log-user-list />
            
            </div>
          </el-main>
    </el-container>
       
     
      
  </div>
</template>

<script>
import GPaper from './GPaper'
import GSystemLogUserList from './GSystemLogUserList'
export default {
  data () {
    return {
    }
  },
  components: { 
    GPaper,
    GSystemLogUserList
   }
}
</script>

<style scoped>
#GSystemLogUser .el-main{
    padding: 0!important;
}
    #GSystemLogUser{
        width: 100%;
        min-height: 600px;
        min-width:1311px;
        margin: 0 auto;
        background: #E9EEF3;
    }
    #GSystemLogUser .el-aside {
        background-color: #E9EEF3;
        color: #333;
      }
    .GSystemManagement_left{
        padding: 0 20px;
        text-align:center;
         min-height: 600px;
    }
    .GSystemManagement_left>ul>li> div{
       width: 76px;
       height: 76px;
       margin: 0 0 5px 0;
    }
    .GSystemManagement_left>ul>li> div>img{
    margin-top: 10px;
    }
    
    .GSystemManagement_right{
        padding: 0 18px;
        heihgt: 100%;
        min-height: 600px;

    }
    .GSystemManagement_right> table{
        width: 100%;
        mine-width: 958px;
        text-align:center;
    }
    .GSystemManagement_right> table>tr{
        width: 100%;
        height:53px;
    }
    .GSystemManagement_right> table>tr:nth-of-type(odd){
      background: #fff;
    }
    .GSystemManagement_right> table>tr:nth-of-type(even){
      background: #fafafa;
    }
    .GSystemManagement_right> table>tr>td{
        width: 12.5%;
    }
     
    .GSystemManagement_right > div>span{
        width:140px;
        height:40px;
        border-radius: 4px;
        border:1px solid;
        background: #fff;
        text-align:center;
        line-height: 40px;
        position:absolute;
        right: 20px;
        top: 10px;
    }
   
</style>
