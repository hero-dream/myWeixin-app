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
          :src="item.goods_small_logo ||'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_pic%2F01%2F47%2F02%2F6357433910e736f.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613293863&t=4330ad82e535233fdf87a50fdf36289e'"
          mode="aspectFit"
        />
      </view>
      <view class="goodRight">
        <view class="name">{{ item.goods_name }}</view>
        <view class="price">{{ item.goods_price }}</view>
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
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      .price {
        margin: 40rpx 0 0 0;
        color: red;
        font-size: 36rpx;
         &::before {
        content: "￥";
        font-size: 25rpx;
        color: red;
      }
      }
    }
  }
}
</style>