<template>
  <view>
    <view class="contenr">
      <view class="head">
      <view class="search">
          <view class="iconfont icon-tubiao-"></view>
        <input class="input" type="text" placeholder="请输入">
      </view>
    
      <view class="button">搜索</view>
</view>
      

    </view>
  </view>
</template>

<script>
export default {

}
</script>

<style lang="less" >
.head{
  display: flex;
  margin: 15rpx;
.search{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 599rpx;
  height: 60rpx;
  background-color: #E7E7E7;
  border-radius: 27rpx;
  overflow: hidden;
  position: relative;
  .input{
   height: 100%;
    width: 80%;
    // background-color:blue;
    font-size: 26rpx;
  }
  .icon-tubiao-{
    position: absolute;
    left: 10rpx;
    top: 15rpx;
    font-size: 29rpx;
    z-index: 1;
    
  }
}
.button{
  width: 100rpx;
  height: 60rpx;
  background-color:#EA4350;
  color: #fff;
  line-height: 60rpx;
  text-align: center;
  font-size: 25rpx;
  margin: 0 15rpx;
  border-radius: 8rpx;
}}
</style>