<template>
  <div class="nav_bottom" >
	    <ul>
	      <a href="person.html">
		   <li>
		    <img src="http://qiniu.jobwisdom.cn/system/mobile/image/navbottom1.png">
			<p>我的</p>
		   </li>
		  </a> 
		  <a href="index.html">
		    <li>
		      <img src="http://qiniu.jobwisdom.cn/system/mobile/image/navbottom3.png">
			  <p>商城</p>
		   </li>
		  </a>
        </ul>		
	  </div>
				

</template>
<script>
import '../common/js/zepto.min.js'
export default {
    mounted(){
    	var url=location.href;
    	if(url.indexOf('person')!='-1'){
    		console.log('a')
    		$('.nav_bottom li').eq(0).find('p').css('color','#b841df');
    		$('.nav_bottom li').eq(0).find('img').attr('src','http://qiniu.jobwisdom.cn/system/mobile/image/navbottom11.png')
    	}
    	if(url.indexOf('index')!='-1'){
    		$('.nav_bottom li').eq(1).find('p').css('color','#b841df');
    		$('.nav_bottom li').eq(1).find('img').attr('src','http://qiniu.jobwisdom.cn/system/mobile/image/navbottom33.png')
    	}

     }
}

</script>
<style scoped>
	.nav_bottom{position:fixed;left:0;bottom:0;width:100%}
	.nav_bottom ul{display:flex;font-size:0.5rem}
	.nav_bottom a{flex:1;text-align:center;height:2.6rem;background:white;}
	.nav_bottom li img{width:1.4rem;margin:0.4rem 0 0rem 0}
	.nav_bottom ul{box-shadow:0 0 3px #a7a7a7}
</style>