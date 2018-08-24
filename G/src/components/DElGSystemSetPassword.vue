<template>
  <div id="GSystemSetPassword">
      <el-container>
          <el-aside width="116px">
                <div class="GSystemManagement_left">
                    <ul>
                        <li>
                            <div><img src="../assets/u464.png"></img></div>
                            定义界面
                        </li>
                        <li>
                            <div><img src="../assets/u469.png"></img></div>
                            口令定义
                        </li>
                        <li>
                            <div><img src="../assets/u459.png"></img></div>
                            授权管理
                        </li>
                    </ul>
               </div>
          </el-aside>
          <el-main>
             <div class="GSystemManagement_right">
                
                <g-system-set-password-list />
            
            </div>
          </el-main>
    </el-container>
       
     
      
  </div>
</template>

<script>
import GPaper from './GPaper'
export default {
  data () {
    return {
    }
  },
  components: { 
    GPaper,
   GSystemSetPasswordList
   }
}
</script>

<style scoped>
#GSystemSetPassword .el-main{
    padding: 0!important;
}
    #GSystemSetPassword{
        width: 100%;
        min-height: 600px;
        min-width:1311px;
        margin: 0 auto;
        background: #E9EEF3;
    }
    #GSystemSetPassword .el-aside {
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
    
   
</style>
