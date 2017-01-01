<template>
   <div class="tab_content clearfix">
		        <div class="tab_content_detail">
			        <div class="tab_content_detail_1">
					   <div class="tab_content_detail_1_flex">
					     <div class="flex_left" v-if="item.item">
						    <img v-bind:src="item.item[0].img">
							<p>{{item.item[0].itemname}}</p>
						 </div>
						 <div class="flex_right">
						    <div class="flex_right_content" v-if="item.item">
							   <img v-bind:src="item.item[1].img">
							  <p>{{item.item[1].itemname}}</p>
							</div>
							
							<div class="flex_right_content" v-if="item.item">
							   <img v-bind:src="item.item[2].img">
							   <p>{{item.item[2].itemname}}</p>
							</div>
						 </div>
					   </div> 
					  <div class="tab_detail_bottom" v-if="item.item">
					    <img v-bind:src="item.item[3].img">
						 <p>{{item.item[3].itemname}}</p>
					  </div>
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

   .tab_content_detail_1_flex{display:flex;height:5.8rem}
	 .tab_content_detail_1_flex>div{position:relative}
	 .flex_left{flex:3;font-size:0.6rem;height:5.7rem}
	 .flex_left img{width:99%;height:100%}
	 .flex_right{flex:2}
	 .tab_content{margin-top:0.6rem}
	 .tab_content_detail_1_flex>div p{position:absolute;bottom:0;left:0;color:white;text-align:center;background:rgba(0,0,0,0.5)}
	 
	 .flex_right_content{position:relative;overflow:hidden}
	 .flex_right_content img{width:100%;height: 100%}
	 
	 .flex_left>p{width:99%!important;height:1.2rem;line-height:1.2rem}
	 .flex_right_content{margin-bottom:0.1rem;height:2.8rem;overflow:hidden}
	 .flex_right{font-size:0.5rem}
	 
	 .flex_right p{width:100%;height:1rem;line-height:1rem}
	 .tab_detail_bottom img{width:100%;}
	 .tab_detail_bottom{height:5.8rem;position:relative;overflow:hidden}
	 .tab_detail_bottom p{   
		position: absolute;
		bottom: 0;
		left: 0;
		color: white;
		font-size:0.6rem;
		text-align: center;
		background: rgba(0,0,0,0.5);
		width:100%;
		height:1.3rem;
		line-height:1.3rem
	}
	.tab_content_detail_1{margin-bottom:0.1rem;padding-bottom:4rem;}
	
	.nav_bottom{position:fixed;left:0;bottom:0;width:100%}
	.nav_bottom ul{display:flex;font-size:0.6rem}
	.nav_bottom a{flex:1;text-align:center;height:3rem;background:white;}
	.nav_bottom li img{width:1.4rem;margin:0.4rem 0 0rem 0}
	
	a:link, a:active, a:hover, a:visited {
    color: black;
    text-decoration: none;
}
.nav_bottom ul{box-shadow:0 0 2px #d9d9d9}
.tab_content_detail{display:none;float:left}
.tab_content_detail:nth-child(1){display:block}

.select_store{height:50rem;display:none;z-index:2;transform:translate3d(12rem,0,0);transition:all 1s ease-in-out;position:fixed;width:9.2rem;right:0;top:2rem;background:white;box-shadow:-2px 0px 3px #d8d7d9;z-index:10}
    .select_store>p{box-shadow:0px  1px 3px #e8e7e8;padding-left:0.2rem;height:1rem;font-size:0.5rem;border-left:2px solid #a641dd;color:#a641dd;line-height:1rem}
	.content{position:relative;}
	.select_store li{display:flex;padding:0.4rem 0 0.1rem 0;border-bottom:1px solid #e8e7e8}
	.select_store li img{width:2rem;height:2rem;border-radius:50%}
	.li_text>p{font-size:0.6rem;margin-top:0.3rem}
	.li_text> span{font-size:0.5rem;color:#b5b5b5}
	.li_img{flex:1;text-align:center}
	.li_text{flex:2;line-height:0.7rem}	
	.select_store ul{height:21rem;overflow:auto}

</style>