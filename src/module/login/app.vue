<template>
  <div id="app">
  <div class="prompt_content">
    <div class="prompt">
       您的账号或者密码有误
    </div>
  </div>
    <div class="login_header">
      <img src="http://qiniu.jobwisdom.cn/system/mobile/image/login.png">
    <div class="logo">
      <img v-bind:src="login.logo">
       <p v-if="login.name">{{login.name[1].storeName}}</p>
    </div> 
    </div>
    
    <div class="login_input">
      <div class="link">
       <div class="link_list">
       </div>
       <div class="link_text">
        绑定手机,开启会员服务
       </div>
       <div class="link_list">
       </div>
    </div>  
    </div>
     
  <div class="message_content login_one">
    
       <div class="prompt_content" v-if="show">
          <div class="prompt">
          {{msg}}
          </div>
        </div>
 
      <div class="login_information">
      <div class="login_information_1">
        <p >帐号:</p>
        <input type="text" placeholder="admin" id="username">
      </div>
      <div class="login_information_1">
        <p >密码:</p>
        <div class="code">
          <input type="text" placeholder="admin" id="password">
        </div>
      </div>
      </div>
      
      <div class="order_button"> 
        <a class="order_right_now login_button_one" v-on:click="login_to" >
           登录
        </a>
     </div>
    </div>
    </div>
 
  </div>
</template>

<script>
import '../../common/css/animate.min.css';
import '../../common/css/reset.css';
import '../../common/js/common.js';
import '../../common/js/zepto.min.js'
export default {
  data () {
     return {
     show:false,
     msg:'您的账号或密码有误',
     login:{

     }
   }
  }, 
  created(){
    this.$http.get("http://localhost:8080/api/module/login").then((res) => {
       res=res.body;
       if(res.errno===0){
         this.login= res.data
          }
        }
     );
  },
  methods:{
    login_to() {
       var username = document.getElementById('username').value;
       var password = document.getElementById('password').value;
       var data = { "username": username, "password":password};
       this.$http.post("login",data).then((res)=>{
          res=res.body;
          if(res=='1'){
            location.assign("index.html")
          }else{
             $(".prompt_content").show();
             $(".prompt_content").addClass('animated rubberBand')
             setTimeout(function(){
                $(".prompt_content").removeClass("rubberBand").css({
                  "opacity":0,
                  "display":"none"
                });

             },3000)
           }

       })
   }
  }

}
</script>


 

<style scoped>

.login_header{position:relative}
  .login_header>img{width:100%;}
  .logo{position:absolute;text-align:center;bottom:-3.2rem;width:100%}
  .logo img{width:3.5rem;height:3.5rem;border-radius:50%;box-shadow:0 0 4px #e4e4e4}
  .logo>p{font-size:0.8rem;color:#f05e16}
  .login_input{padding:0.5rem;margin-top:4rem}
  
  .link{display:flex;}
  .link_list{flex:2;height:1px;background:#e5e5e5;position:relative;top:0.35rem}
  .link_text{flex:3;color:#c6c6c6;font-size:0.5rem;text-align:center;}
  
  .login_information{width:12rem;margin:0.5rem auto}
  .login_information_1>p{font-size:0.5rem}
  .login_information_1 input[type="tel"],.login_information_1 input[type="text"]{font-family:'微软雅黑';border:none;height:1.4rem;border-radius:0.8rem;width:98%;margin-top:0.5rem;padding-left:2%;font-size:0.5rem;box-shadow:0 0px 4px #f0f0f0}
  .login_information_1{margin-bottom:1rem}
  .code{position:relative}
  .code input[type="button"]{-webkit-appearance: none;appearance: none;position:absolute;right:0;top:0;display:inline-block;height:1.48rem;width:3.6rem;border-radius:1rem;color:white;text-align:center;line-height:1.48rem;background:#8642d9;font-size:0.5rem;margin-top:0.5rem;border:none}
    .order_right_now {
    display: inline-block;
    width: 8rem;
    border-radius: 2rem;
    height: 1.8rem;
    line-height: 1.8rem;
    text-align: center;
    color: white;
    font-size: 0.7rem;
    background: linear-gradient(to right, #ba39dc ,#8837d5);
    box-shadow: 1px 3px 3px #ca9de8;

    }
  .order_button {
      text-align: center;
      margin-top:1.5rem;
      padding-bottom:2rem
    }
  .sex{
    border: none;
    height: 1.4rem;
    border-radius: 0.8rem;
    width: 98%;
    margin-top: 0.5rem;
    padding-left: 2%;
    font-size: 0.5rem;
    box-shadow: 0 0px 4px #f0f0f0;
    background:white;
    line-height:1.4rem
  }
  .sex span{margin-right:1rem}
  
    .sex input[type="radio"]:checked {
          background: url(http://qiniu.jobwisdom.cn/system/mobile/image/checked.png) no-repeat;
        background-position: center center;
        background-size: cover;
        border: none;
        width: 0.65rem;
        height: 0.7rem;
    }
    .sex input[type="radio"]{
      -webkit-appearance: none;
      appearance: none;
      margin: 0;
      cursor: pointer;
      vertical-align: bottom;
      background: white;
      -moz-border-radius: 1px;
      border-radius: 1px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      position: relative;
      vertical-align:middle;
      margin-right:0.3rem;
      border:1px solid #e5e5e5;
      width: 0.65rem;
      height: 0.7rem;
      border-radius:0.7rem
      
    }
    .login_second{display:none;transform:translate3d(12rem,0,0)}
    .message_content{transition:all 1s ease-in-out}
    
    .login_one{position:absolute;width:100%}

    .prompt{width:10rem;height:1.6rem;line-height:1.6rem;margin:0 auto;border-radius: 0.3rem;
      background: rgba(0,0,0,0.5);color:white;font-size:0.8rem;}

  .prompt_content{opacity:0;display:none;z-index:2;top:30%;width:100%;text-align: center;position: absolute;left: 0;}
  
</style>