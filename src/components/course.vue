<template>
   <div class="tab_content clearfix">
		<div class="tab_content_detail">      
			  <div class="course" v-if="item.item" v-for="it in item.course">
				 <img v-bind:src="it.img">
		          <p>{{it.itemname}}</p>
			</div>
		</div>
	</div>	
						

</template>
<script>
export default {
      props: ['item']
}

</script>
<style scoped>
  .course{
  	height:5rem;
  	position: relative;
  }
  .course img{height:5rem;width: 100%}
  .course p{    position: absolute;
    bottom: 0;
    left: 0;
    color: white;
    font-size: 0.6rem;
    text-align: center;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 1.3rem;
    line-height: 1.3rem; }
  .tab_content{ 
  	margin-top: 0.6rem;
 }

</style>