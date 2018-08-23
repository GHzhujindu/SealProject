<template>
    <div class="systermadministorOne">
        <g-header />
        <g-tabbar-left />
        <div class="GContent"> <router-view /></div>
    </div>
</template>

<script>
import GHeader from './GHeader'
import GTabbarLeft from './GTabbarLeft'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to ganXianJuns'
    }
  },
  components: { 
    GHeader,
    GTabbarLeft
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
h1, h2 {
  font-weight: normal;
}

li {
    list-style:none;
}
a {
  color: #42b983;
  text-decoration: none;
}
    .systermadministorOne{
        width: 100%;
        height: 682px;
        margin: 0 auto;
    }
    .systermadministorOne> div{
        float: left;
    }
    .systermadministorOne_left{
        width: 150px;
        height: 100%;
    }
    .systermadministorOne_right{
        width: 85%;
        height: 100%;
    }
    .GContent{
       position: absolute;
        top: 82px;
        left: 175px;
        width:1311px;
        height: 600px;
        background: #e9f0f5;
    }
    table{
        border-collapse: collapse;
    }
</style>
