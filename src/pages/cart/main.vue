<template>
  <view>
  
    
<view>
<GoodItem v-for="item in cartList" :key="item.goods_id" :item="item"></GoodItem>
</view>
  </view>
</template>

<script>
import GoodItem from "@/components/goodItem"

export default {
  components:{GoodItem},
  data(){return{
    cartList:''
  }},
  onShow(){
    // 因为tabBar只加载一次，用onlade不合适
  this.cartList=  uni.getStorageSync('cartList')

  }

}
</script>

<style lang="less">


</style>