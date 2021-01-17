<template>
<view class="search">
<navigator  url="/pages/search/main"  hover-class="none" class="search_in">搜索</navigator>
</view>
</template>

<script>
export default {

}
</script>

<style>
.search{
  padding: 10rpx   25rpx;
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: #e21918;
 
}
.search_in{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 700rpx;
  height: 80rpx;
  color: #ccc;
  border-radius: 5rpx;
  background-color: #fff;

}
</style>