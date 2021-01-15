<template>
  <view>
    <view class="contenr">
      <view v-if="address.userName" class="chooseAddress">
        <view class="region">
          {{ addressAll }}
        </view>
        <view class="message">
          <text class="name">{{ address.userName }}</text>
          <text class="telNumber">{{ address.telNumber }}</text>
        </view>
      </view>

      <view class="pay_button" v-else @tap="chooseAddress">
        <button class="button"><text class="text">添加地址</text></button>
      </view>
      <view class="shopList">
        <view class="text">已选商品</view>
        <view class="list">
          <GoodItem v-for="item in cartList" :key="item.goods_id" :item="item"></GoodItem>
        </view>
      </view>
    </view>
    <view class="bottom">
      <view class="bottom-left">
        <view class="all">合计:</view>
        <view class="price">{{ allArice }}元</view>
      </view>
      <view class="bottom-right">
        <navigator hover-class="none" url="/pages/pay/main" class="count"
          >去支付({{ allCount }})</navigator
        >
      </view>
    </view>
  </view>
</template>

<script>
import GoodItem from "@/components/goodItem";
export default {
  components:{GoodItem},
  data() {
    return {
      address: {},
      cartList:[]
    };
  },
  computed: {
    addressAll() {
      const { provinceName, cityName, countyName, detailInfo } = this.address;
      return provinceName + cityName + countyName + detailInfo;
    },


   allArice() {
      let allArice = 0;
      this.cartList.forEach((item) => {
        if (item.goods_selected) {
          allArice += item.goods_price * item.goods_count;
        }
      });
      return allArice;
    },

  allCount() {
      let allcount = 0;
      this.cartList.forEach((item) => {
        if (item.goods_selected) {
          allcount += item.goods_count;
        }
      });
      return allcount;
    },
},
  

  methods: {
    chooseAddress() {
      uni.chooseAddress({
        success: (res) => {
          console.log(res);
          uni.setStorageSync("address", res);
          this.address = res;
        },
      });
    },
  },
  onLoad() {
    const address = uni.getStorageSync("address");
    this.address = address;

  this.cartList= uni.getStorageSync('cartList') || []


  },
};
</script>

<style lang="less">
.contenr {
  .pay_button {
    height: 187rpx;
    width: 710rpx;
    display: flex;

    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;

    .button {
      width: 352rpx;
      height: 88rpx;
      color: red;
      border: red solid 1rpx;
      font-size: 36rpx;
      border-radius: 44rpx;
    }
  }
  .chooseAddress {
    margin: 20rpx;
    height: 187rpx;
    width: 710rpx;
    background-color: #f9f9f9;

    .region {
      font-size: 30rpx;
      margin: 20rpx;
      padding-top: 40rpx;
    }

    .message {
      margin: 0 20rpx;
      font-size: 26rpx;
      color: #595959;
      .name {
        padding-right: 40rpx;
      }
    }
  }
  .shopList {
    margin: 0 20rpx 90rpx 20rpx;
    width: 711rpx;
    min-height: 489rpx;
    background-color: #f9f9f9;
  .text {
padding: 17rpx;
font-size: 26rpx;
  }

  .list {
    
  border-bottom: 1rpx solid red;
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