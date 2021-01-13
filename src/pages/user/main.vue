<template>
  <view>
    <view class="user_head">
      <button
        class="button"
        type="warn"
        open-type="getUserInfo"
        @getuserinfo="getuserInfoData"
      >
        请登录
      </button>
    </view>
  </view>
</template>

<script>
import { getWxlogin } from "@/api";
export default {
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
        uni.setStorageSync("token",res.data.message.token);
        uni.setStorageSync("userInfo", userInfo);
        uni.showToast({
          title: '登录成功',
          duration: 1000
        })
      }else{
          uni.showToast({
          title: '登录失败',
          icon:"error",
          duration: 1000
        })
      }

      //  uni.setStorageSync('userInfo', userInfo)
    },
  },
};
</script>

<style lang="less" scoped>
.user_head {
  height: 350rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  .button {
    width: 352rpx;
    height: 88rpx;
    color: #fff;
    font-size: 36rpx;
  }
}
</style>