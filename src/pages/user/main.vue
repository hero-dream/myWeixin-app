<template>
  <view>
    <view v-if="userInfo.avatarUrl"  class="user_head">
   <image class="user_bj" :src="userInfo.avatarUrl" mode="aspectFill" />
  <image class="user_avatar" :src="userInfo.avatarUrl" mode="" />
  <view class="name">{{userInfo.nickName}}</view>
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
  </view>
</template>

<script>
import { getWxlogin } from "@/api";
export default {
  data(){
   return{ 
     userInfo:{}
   }
  },

  onLoad(){
 const userInfo= uni.getStorageSync('userInfo')
 console.log(userInfo);
 this.userInfo=userInfo;
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
 filter:blur(35rpx);
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
</style>