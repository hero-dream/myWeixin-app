<template>
  <view class="content">
      <view class="content_in"  >
          <view class="text">综合</view>
          <view class="text">销量</view>
          <view class="text">价格</view>
      </view>
  </view>
</template>

<script>
export default {
 data(){ 
    return{
    }
     },  
methods:{}
}
</script>

<style lang="less">
.content{
    height:88rpx;
    width: 100%;
    // background-color: #f3f3f3;
    border-bottom: red 2rpx solid;
 

    .content_in{
           display: flex;
       align-items: center;
           height:88rpx;
           line-height: 88rpx;
           justify-content:space-around;
         
          
        .text{
            color: #6b6b6b;
          

        }
    }
}
</style>