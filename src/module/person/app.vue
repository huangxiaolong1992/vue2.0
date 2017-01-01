<template>
  <div id="app">
      <div class="personal clearfix">
      <div class="personal_left">
      <img src="http://qiniu.jobwisdom.cn/system/mobile/image/head_pic.png">
    </div>
    <div class="personal_center">
       <p v-if="person.name">{{person.name[0].storeName}}<img v-bind:src="person.sex[0].img">
       <span class="vip" v-if="vip">会员</span></p>
       <div class="num">1350000000</div>
       <p>注册门店:{{person.register}}</p>
    </div>
    </div>
    
    <ul class="personal_list">
      <li>
      <p>剩余积分</p>
      <span>11.00</span>
    </li>
      <li>
      <p>剩余积分</p>
      <span>11.00</span>
    </li>
    <li>
      <p>剩余积分</p>
      <span>11.00</span>
    </li>
    <li>
      <p>剩余积分</p>
      <span>11.00</span>
    </li>
    </ul>
    
    <div class="order_ul">
      <ul class="clearfix">
        <a href="">
        <li>
         <img src="http://qiniu.jobwisdom.cn/system/mobile/image/login_3.png">
       <p>订单</p>
        </li>
      </a>
      <a href="">
         <li>
         <img src="http://qiniu.jobwisdom.cn/system/mobile/image/login_4.png">
       <p>预约</p>
       </li>
      </a> 
      <a href=""> 
      <li>
        <img src="http://qiniu.jobwisdom.cn/system/mobile/image/login_5.png">
        <p>疗程</p>
        </li>
      </a>
      <a href=""> 
      <li>
        <img src="http://qiniu.jobwisdom.cn/system/mobile/image/login_6.png">
        <p>积分</p>
        </li>
      </a>
       <a href=""> 
      <li>
        <img src="http://qiniu.jobwisdom.cn/system/mobile/image/login_7.png">
        <p>优惠券</p>
        </li>
      </a>
       <a href=""> 
      <li>
        <img src="http://qiniu.jobwisdom.cn/system/mobile/image/login_8.png">
        <p>储值卡</p>
        </li>
      </a>
       <a href=""> 
      <li>
        <img src="http://qiniu.jobwisdom.cn/system/mobile/image/login_9.png">
        <p>购物清单</p>
        </li>
      </a>
      <a href=""> 
      <li>
        <img src="http://qiniu.jobwisdom.cn/system/mobile/image/login_10.png">
        <p>最新活动</p>
        </li>
      </a>
      <a href=""> 
      <li>
        <img src="http://qiniu.jobwisdom.cn/system/mobile/image/login_13.png">
        <p>股东首页</p>
        </li>
      </a>
       <a href=""> 
      <li>
        <img src="http://qiniu.jobwisdom.cn/system/mobile/image/login_11.png">
        <p>点击WIFI</p>
        </li>
      </a>
      <a href=""> 
      <li>
        <img src="http://qiniu.jobwisdom.cn/system/mobile/image/login_12.png">
        <p>个人设置</p>
        </li>
      </a>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li> 
    </ul>
    </div>
    <nav_bottom></nav_bottom>
  </div>
</template>

<script>
import '../../common/css/reset.css';
import '../../common/js/common.js';
import nav_bottom from '../../components/nav_bottom'

export default{
  data(){
   return{
     person:{},
     vip:true
   }
  },
  created(){
    this.$http.get("http://localhost:8080/api/module/person").then((res) => {
       res=res.body;
       if(res.errno===0){
         this.person= res.data
          }
        }
     );
  },
   components: {  
    "nav_bottom":nav_bottom
    }
}

</script>
<style scoped>
.personal{position:relative;overflow:hidden;line-height:5rem;height:5rem;background:url('http://qiniu.jobwisdom.cn/system/mobile/image/login_1.png') no-repeat;background-size:cover}
    .personal_left{float:left;margin:1rem 0.6rem 0 0.6rem}
  .personal_left img{width:3rem}
  .personal_center>p img{vertical-align:middle;width:0.8rem;margin:0 0.2rem}
  .personal_center .vip{text-align:center;display:inline-block;color:white;background:#e0462d;border-radius:0.2rem;width:2rem;height:0.8rem;font-size:0.5rem;line-height:0.8rem}
    .personal_center{float:left;line-height:1rem;margin-top:1rem}
  .personal_center{color:white;font-size:0.6rem}
  .personal .toggle_store{display:inline-block;line-height:1rem;height:1rem;position:absolute;top:0.5rem;right:0.5rem;width:3rem;color:white;font-size:0.6rem;border-radius:0.2rem;border:1px solid white;text-align:center}
 
    .personal_list{display:flex;width:100%;height:2.4rem;background:white;}
  .personal_list li{line-height:0.9rem;margin-top:0.3rem;flex:1;border-right:1px solid #e6e6e6;font-size:0.6rem;text-align:center;height:1.4rem;padding:0.2rem 0;}
  .personal_list li>p{color:#6c6c6c;}
  .personal_list li:last-child{border-right:none}
  
  .order_ul{margin-top:0.5rem;height: 20rem}
  .order_ul ul li{border-bottom:1px solid #e6e6e6;border-right:1px solid #e6e6e6;text-align:center;font-size:0.6rem;float:left;width:24.69%;height:4rem;background:white}
  .order_ul ul li img{width:1.8rem;margin:0.5rem 0 0.2rem 0}
  .order_ul ul a:nth-child(4n) li{border-right:none}
  .order_ul ul li:nth-child(4n) {border-right:none}

</style>