<template>
  <view class="content">
    <Search></Search>
    <swiper
      class="swiper"
      :indicator-dots="indicatorDots"
      indicator-active-color="#ea4350"
      circular="circuar"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <swiper-item
        class="swiper-item"
        v-for="item in swiperData"
        :key="item.index"
      >
        <image class="image" :src="item.image_src" mode="aspectFill" />
      </swiper-item>
    </swiper>
    <view class="nav">
      <navigator class="navData" v-for="item in navData" :key="item.index">
        <image class="img" :src="item.image_src" mode="aspectFit" />
      </navigator>
    </view>
  </view>
</template>

<script>
import Search from "../../components/search";
export default {
  components: { Search },
  data() {
    return {
      swiperData: [],
      navData: [],
      circular: true,
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1500,
    };
  },
  onLoad() {
    uni.request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
      success: (res) => {
        console.log(res.data);
        this.swiperData = res.data.message;
        // this.text = 'request success';
      },
    });

    uni.request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems",
      success: (res) => {
        console.log(res.data);
        this.navData = res.data.message;
      },
    });
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.content {
  margin: 100rpx 0 0 0;
  .swiper {
    height: 340rpx;
    .swiper-item {
      .image {
        height: 340rpx;
        width: 100%;
      }
    }
  }
  .nav {
    margin: 12rpx 0 0 0;
    display: flex;
	align-items: center;
	justify-content:space-evenly;
    .navData {
		 width: 128rpx;
	   height: 140rpx;

      .img {
        display: flex;
        width: 128rpx;
       height: 140rpx;
      }
    }
  }
}
</style>