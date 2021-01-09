<template>
  <view class="content">
    <navigator hover-class="none" :url="`/pages/goods_detail/main?goods_id=${item.goods_id}`" class="goodsList">
      <view class="goodsLeft">
        <image lazy-load  class="images" :src="item.goods_big_logo" mode="aspectFit" />
      </view>
      <view class="goodRight">
        <view class="name">{{ item.goods_name }}</view>
        <view class="price">￥{{ item.goods_price }}</view>
      </view>
    </navigator>
  </view>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="less" scoped>
.content {
  .goodsList {
    margin-top: 10rpx;
    display: flex;
    padding-left: 22rpx;
    padding-bottom: 5rpx;
    width: 698rpx;
    height: 209rpx;
    .goodsLeft {
      .images {
        width: 210rpx;
        height: 210rpx;
      }
    }
    .goodRight {
      margin-left: 20rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .name {
        margin: 20rpx 0 0 0;
        font-size: 26rpx;
      }
      .price {
        color: red;
        font-size: 26rpx;
      }
    }
  }
}
</style>