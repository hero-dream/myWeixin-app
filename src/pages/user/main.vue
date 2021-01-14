<template>
  <view>
    <view v-if="userInfo.avatarUrl" class="user_head">
      <image class="user_bj" :src="userInfo.avatarUrl" mode="aspectFill" />
      <image class="user_avatar" :src="userInfo.avatarUrl" mode="" />
      <view class="name">{{ userInfo.nickName }}</view>
    </view>
    <view v-else class="user_head">
      <button
        class="button"
        type="warn"
        open-type="getUserInfo"
        @getuserinfo="getuserInfoData"
      >
        请登录
      </button>
    </view>
    <view class="nav">
      <view class="iconfont icon-daifukuan01"><text>待付款</text></view>
      <view class="iconfont icon-daishouhuo"><text>待收货</text> </view>
      <view class="iconfont icon-tuikuan"><text>退款/退货</text> </view>
      <view class="iconfont icon-quanbudingdan-01"><text>全部订单</text> </view>
    </view>
    <view class="message">
      <view class="layout">
        <view class="left" @tap="makePhoneCall">
          <view class="iconfont icon-kefu">
            <text>联系客服</text>
          </view>
        </view>
        <view class="phone">400-168-120</view>
      </view>
      <view class="layout">
        <view class="iconfont icon-yijianfankui"><text>意见反馈</text></view>
      </view>
      <view class="layout">
        <view class="left">
          <view class="iconfont icon-ziyuan">
            <text>当前版本</text>
          </view>
        </view>
        <view class="banben">v.4.1.1</view>
      </view>
    </view>
  </view>
</template>

<script>
import { getWxlogin } from "@/api";
export default {
  data() {
    return {
      userInfo: {},
    };
  },

  onLoad() {
    const userInfo = uni.getStorageSync("userInfo");
    console.log(userInfo);
    this.userInfo = userInfo;
  },
  methods: {
    async getuserInfoData(e) {
      console.log(e);
      const { signature, iv, rawData, encryptedData, userInfo } = e.detail;
      const [, { code }] = await uni.login(); //验证码
      //  console.log(code);
      const res = await getWxlogin({
        signature,
        iv,
        rawData,
        encryptedData,
        code,
      });
      console.log(res);
      const { token } = res.data.message;
      if (res.data.message) {
        uni.setStorageSync("token", res.data.message.token);
        uni.setStorageSync("userInfo", userInfo);
        uni.showToast({
          title: "登录成功",
          duration: 1000,
        });
      } else {
        uni.showToast({
          title: "登录失败",
          icon: "error",
          duration: 1000,
        });
      }

      //  uni.setStorageSync('userInfo', userInfo)
    },
    makePhoneCall() {
      uni.makePhoneCall({
        phoneNumber: "10001",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.user_head {
  height: 350rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  .button {
    width: 352rpx;
    height: 88rpx;
    color: #fff;
    font-size: 36rpx;
  }

  .user_bj {
    width: 120%;
    height: 120%;

    position: absolute;
    filter: blur(35rpx);
    z-index: -1;
  }

  .user_avatar {
    width: 150rpx;
    height: 150rpx;
    border-radius: 50%;
  }

  .name {
    margin: 20rpx 0 0 0;
    color: #fff;
  }
}
.nav {
  margin: 10rpx 15rpx 0 15rpx;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 725rpx;
  height: 144rpx;
  background-color: #f9f9f9;
  border-radius: 10rpx;
  .iconfont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 50rpx;

    text {
      // color: #fff;
      font-size: 26rpx;
    }
  }
}
.message {
  margin: 10rpx 15rpx 0 15rpx;
  width: 726rpx;
  height: 520rpx;
  background-color: #f9f9f9;
  border-radius: 15rpx;

  .layout {
    width: 705rpx;
    height: 100rpx;
    display: flex;
    // justify-content: center;
    align-items: center;
    margin: 0 10rpx;

    border-bottom: #e3e3e3 solid 1rpx;

    .left {
      flex: 1;
      .icon-kefu {
        text {
        }
      }

      .phone {
        margin: 0 10rpx;
      }
    }
  }

  .icon-yijianfankui {
    text {
    }
  }
}
</style>