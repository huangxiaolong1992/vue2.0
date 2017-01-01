<template>
	  <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in main.sliderItem">
            	 <img v-bind:src="item.img">
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>

</template>
<script>
import '../common/css/swiper.min.css'
import '../common/js/swiper.min.js'

export default{
  props: ['main'],
  mounted(){
  	   var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        autoplay: 5000,
        loop: true,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
    	observeParents:true,//
    });
  } 
}
</script>
<style scoped>
    .swiper-container img{width:100%;}
	.swiper-container{height: 6rem}
   
</style>