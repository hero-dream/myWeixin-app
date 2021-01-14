<template>
  <view>
    <view class="contenr">
      <view class="pay_button" v-if="address.userName" @tap="chooseAddress">
        <button class="button"><text class="text">添加地址</text></button>
      </view>
      <view v-else class="chooseAddress">
        <view class="region">
          {{ addressAll }}
        </view>
        <view class="message">
          <text class="name">{{ address.userName }}</text>
          <text class="telNumber">{{ address.telNumber }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      address: {},
    };
  },
  computed: {
    addressAll() {
      const { provinceName, cityName, countyName, detailInfo } = this.address;
      return provinceName + cityName + countyName + detailInfo;
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
      padding-top: 25rpx;
    }

    .message {
      margin: 0 20rpx;
      font-size: 26rpx;
      color: #595959;
      .name {
        padding-right: 40rpx;
      }

      .telNumber {
      }
    }
  }
}
</style>