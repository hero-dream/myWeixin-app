<template>
  <view class="cats">
    <Search></Search>
    <view class="category">
      <scroll-view scroll-y class="category-left">
        <view>左边</view>
      </scroll-view>
      <scroll-view scroll-y class="category-right">
        <view>右边</view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import Search from "../../components/search";
export default {
  components: { Search },
};
</script>

<style lang="less" scoped>
.cats {
  .category {
    margin: 90rpx 0 0 0;
    display: flex;
    .category-left {
      flex: 2;
      height: calc(100vh - 90rpx);
      background-color: #f3f3f3;
      color: #909090;
    }
    .category-right {
      flex: 5;
      height: calc(100vh - 90rpx);
      background-color: pink;
    }
  }
}
</style>