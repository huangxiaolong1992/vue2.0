<template>
<div>
  <router-view></router-view>
  <div class="nav_bottom">
	    <ul>
	    <router-link to="/person">
		      <a>
			   <li>
			    <img src="http://qiniu.jobwisdom.cn/system/mobile/image/navbottom1.png">
				<p>我的</p>
			   </li>
			  </a>
		 </router-link>
		  <router-link to="/home">
			  <a href="">
			   <li>
			    <img src="http://qiniu.jobwisdom.cn/system/mobile/image/navbottom2.png">
				<p >预约</p>
			   </li>
			  </a>
		 </router-link>
		  <router-link to="/index">
			  <a>
			    <li>
			      <img src="http://qiniu.jobwisdom.cn/system/mobile/image/navbottom33.png">
				  <p>商城</p>
			   </li>
			  </a>
		  </router-link>
		   <router-link to="/home">
			  <a href="">
				<li>
				  <img src="http://qiniu.jobwisdom.cn/system/mobile/image/navbottom4.png">
				  <p>门店</p>
				</li>
	          </a>
          </router-link>
        </ul>		
	  </div>
				
</div>
</template>
<script>


</script>
<style scoped>
	.nav_bottom{position:fixed;left:0;bottom:0;width:100%}
	.nav_bottom ul{display:flex;font-size:0.5rem}
	.nav_bottom a{flex:1;text-align:center;height:3rem;background:white;}
	.nav_bottom li img{width:1.4rem;margin:0.4rem 0 0rem 0}
	.nav_bottom ul{box-shadow:0 0 3px #a7a7a7}
</style>