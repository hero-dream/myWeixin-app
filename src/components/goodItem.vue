<template>
  <view class="content">
    <navigator
      hover-class="none"
      :url="`/pages/goods_detail/main?goods_id=${item.goods_id}`"
      class="goodsList"
    >
      <view class="goodsLeft">
        <image
          lazy-load
          class="images"
          :src="item.goods_small_logo"
          mode="aspectFit"
        />
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

<style lang="less">
.content {
  padding: 0 20rpx;
  .goodsList {
    margin-top: 10rpx;
    display: flex;
    align-items: center;
    padding-bottom: 5rpx;
    box-sizing: border-box;
    max-width: 698rpx;
    max-height: 209rpx;
    .goodsLeft {
      .images {
        width: 191rpx;
        height: 191rpx;
      }
    }
    .goodRight {
      margin-left: 10rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .name {
        margin: 10rpx 0 0 0;
        font-size: 26rpx;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .price {
        margin: 40rpx 0 0 0;
        color: red;
        font-size: 24rpx;
      }
    }
  }
}
</style>