<template>
   <header class="num_shop" v-if="index.name">
	      {{index.name[0].storeName}}
	   </header>

</template>
<script>

  export default {
      props: ['index']
	}
 
</script>
<style scoped>
   .num_shop{
     height: 2rem;
    line-height: 2rem;
    font-size: 0.7rem;
    color: white;
    text-align: center;
    background: linear-gradient(to right, #b741df ,#8641d9);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 2;	
   	} 
  
</style>
