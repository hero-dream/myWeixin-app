<template>
  <view>商品详情{{goods_id}}</view>
</template>

<script>
export default {
  data(){
    return{
goods_id:'',
detailData:[]
  }},

onLoad({goods_id}){
   this.goods_id=goods_id
  this.getDetail()
 

},
methods:{
  getDetail(){
    uni.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail', 
      data: {
    goods_id:this.goods_id
      },
      success: (res) => {
        console.log(res.data);
   
      }
    });

  }
}

}
</script>

<style>

</style>