<template>
  <view>
    <view class="content">
      <view
        class="content_lists"
        v-for="item in cartList"
        :key="item.goods_id"
      >
        <view class="content_left">
          <radio
            @tap="getRadio(item.goods_id)"
            class="content_left_radio"
            :checked="item.goods_selected"
            color="#e21918"
          />
        </view>
        <view class="content_right">
          <GoodItem class="GoodItem" :item="item"></GoodItem>
          <view class="operation">
            <view class="iconfont icon-53"></view>
            <text class="text">{{ item.goods_count }}</text>
            <view class="iconfont icon-54"></view>
          </view>
        </view>
      </view>
    </view>
    <view class="bottom">
      <view class="bottom-left">
        <radio class="content_left_radio"  color="#e21918" />
        <view class="text">全选</view>
        <view class="all">合计:</view>
        <view class="price">{{ allArice }}元</view>
      </view>
      <view class="bottom-right">
        <view class="count">去结算(12)</view>
      </view>
    </view>
  </view>
</template>

<script>
import GoodItem from "@/components/goodItem";

export default {
  components: { GoodItem },
  data() {
    return {
      cartList: [], //数组
    };
  },
  computed: {
    allArice()  {
      let allArice = 0;
      this.cartList.forEach((item) => {
        if (item.goods_selected) {
          allArice += item.goods_price * item.goods_count;
        }
      });
      return allArice;
    },
    
  },
  onShow() {
    // 因为tabBar只加载一次，用onlade不合适
    this.cartList = uni.getStorageSync("cartList");
  },

  methods: {
    getRadio(goods_id) {
        const index =this.cartList.findIndex((item) => item.goods_id ===goods_id);
      this.cartList[index].goods_selected = !this.cartList[index]
        .goods_selected;
    },
  },
  

};
</script>

<style lang="less">
.content {
  margin: 0 0 83rpx 0;
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
      display: flex;
      position: relative;
      .operation {
        position: absolute;
        right: 30rpx;
        bottom: 30rpx;
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        .iconfont {
          width: 32 rpx;
          height: 32rpx;
          padding: 0 20rpx;
        }
      }
    }
  }
}
.bottom {
  width: 100%;
  height: 83rpx;
  background-color: #fff;
  border-top: #ccc solid 1rpx;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;

  .bottom-left {
    flex: 1;
    display: flex;
    // justify-content: center;
    align-items: center;
    .content_left_radio {
      padding: 0 20rpx 0 30rpx;
    }
    .text {
      color: #bcbcbc;
      font-size: 21rpx;
    }

    .all {
      font-size: 26rpx;
      padding: 0 20rpx;
    }
    .price {
      color: red;
      font-weight: 700;
      &::before {
        content: "￥";
        font-size: 25rpx;
        color: red;
      }
    }
  }

  .bottom-right {
    padding: 0 30rpx 0 0;
    .count {
      color: #fff;
      font-size: 21rpx;
      line-height: 52rpx;
      text-align: center;
      width: 150rpx;
      height: 52rpx;
      background-color: red;
      border-radius: 52rpx;
    }
  }
}
</style>