<template>
  <div id="app">
    <div class="num_shop">
      <store_header v-bind:index="index"></store_header>
    </div>
    <div class="slider">
     <slider v-bind:main="index"></slider>
    </div>
    <div class="index_tab">
       <ul class="num_shop_item">
        <li>
          <router-link to="/home">
            <span><img src="http://qiniu.jobwisdom.cn/system/mobile/image/index_15.png"/></span>
           <p>项目</p></router-link>
        </li>
        <li>
          <router-link to="/foo">
            <span><img src="http://qiniu.jobwisdom.cn/system/mobile/image/index_16.png"/></span>
           <p>疗程</p>
          </router-link>
        </li>
        <li>
          <router-link to="/bar">
           <span><img src="http://qiniu.jobwisdom.cn/system/mobile/image/index_17.png"/></span>
           <p>商品</p>
          </router-link>
        </li>

       </ul>
       <router-view v-bind:item="index"></router-view>


       <nav_bottom></nav_bottom>
    
    </div>
  </div>
</template>

<script>
import '../../common/css/reset.css';
import '../../common/js/common.js';
import store_header from '../../components/store_header'
import slider from '../../components/slider'
import nav_bottom from '../../components/nav_bottom'

export default {
  data(){
    return {
     index:{

     }
    }
  },
  created(){
    this.$http.get("http://localhost:8080/api/module/index").then((res) => {
       res=res.body;
       if(res.errno===0){
         this.index= res.data
          }
        }
     );
  },
  components: {
    'store_header':store_header,
    'slider':slider,
    "nav_bottom":nav_bottom
    }
  } 
</script>


 

<style scoped>
.slider{margin-top:2rem;}

.index_tab{padding:0.2rem 0.2rem 4rem 0.2rem}
  .index_tab>ul{display:flex;margin-top:0.5rem}
  .index_tab>ul li{flex:1;text-align:center;font-size:0.6rem;}
  .index_tab>ul li>p{margin-top:0.2rem;display:inline-block;margin-left:0.1rem}
  .index_tab>ul li span img{width:0.8rem;vertical-align:middle;position:relative;top:-0.05rem}
   .colorActive{color:#f1b9cd}
   .index_tab>ul li>p {
    margin-top: 0.2rem;
    display: inline-block;
    margin-left: 0.1rem;
}
.num_shop_item p{margin-top: 0.2rem}
.router-link-active{color:#f1b9cd;}

.num_shop_item a{display: inline-block;}
</style>