<template>
  <view>
    <view class="contenr">
    <view class="pay_button">
      <button class="button"><text class="text">添加地址</text></button>
    </view>
</view>
  </view>
</template>

<script>
export default {

}
</script>

<style lang="less">
.contenr{
.pay_button {
  height: 350rpx;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  .button {
    width: 352rpx;
    height: 88rpx;
    color: red;
    border:red solid 1rpx;
    font-size: 36rpx;
    border-radius: 44rpx;
  }
  }
}
</style>