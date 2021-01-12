<template>
  <view>

    <view class="content">
      <view class="content_lists"  v-for="item in cartList" :key="item.goods_id">
      <view class="content_left">
        <radio class="content_left_radio" checked="true" color="#e21918" />
      </view>
      <view class="content_right">
        <GoodItem class="GoodItem" :item="item"></GoodItem>
      </view>
    </view></view>
  </view>
</template>

<script>
import GoodItem from "@/components/goodItem";

export default {
  components: { GoodItem },
  data() {
    return {
      cartList: "",
    };
  },
  onShow() {
    // 因为tabBar只加载一次，用onlade不合适
    this.cartList = uni.getStorageSync("cartList");
  },
};
</script>

<style lang="less">
.content {
 
  .content_lists {
    display: flex;
    .content_left {
      padding: 0 0 0 20rpx;
      display: flex;
      align-items: center;
justify-content: center;
width: 78rpx;
.content_left_radio {
        width: 35rpx;
        height: 35rpx;
      display: flex;
      align-items: center;
justify-content: center;

      }
    }

    .content_right {
      .GoodItem {
        width: 628rpx;
        // padding: 0 10rpx 0 0 ;

      }
    }
  }
}
</style>