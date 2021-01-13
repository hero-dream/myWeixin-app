<template>
  <view>
    <view class="user_head">
      <button class="button" type="warn" open-type="getUserInfo" @getuserinfo="getuserInfoData">请登录</button>
    </view>
  </view>
</template>

<script>
export default {
  methods:{
  async  getuserInfoData(e){
      console.log(e);
     const {signature,iv,rawData,encryptedData,userInfo}=e.detail
 const res= await uni.login()
 console.log(res);
  //  uni.setStorageSync('userInfo', userInfo)
    }
  }

}
</script>

<style lang="less" scoped>
.user_head{
  height: 350rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  .button{
    width: 352rpx;
    height: 88rpx;
    color: #fff;
    font-size: 36rpx;
    
  }

}
</style>