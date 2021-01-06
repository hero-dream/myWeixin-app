<template>
	<view class="content">
		<Search></Search>
		<swiper  class="swiper" :indicator-dots="indicatorDots" 
		indicator-active-color="#ea4350"   circular="circuar"
		:autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item class="swiper-item" v-for="item in swiperData" :key="item.index">
				<image class="image" :src="item.image_src" mode="aspectFill" />
			</swiper-item>
				
		</swiper>
	</view>
</template>

<script>
import Search from "../../components/search"
	export default {
		components:{Search},
		data() {
			return {
				swiperData:[],
			circular:true,
		     indicatorDots: true,
            autoplay: true,
            interval: 3000,
            duration: 1500
				
		
			}
		},
		onLoad() {
			uni.request({
				url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata', 
				success: (res) => {
					console.log(res.data);
					this.swiperData=res.data.message
					// this.text = 'request success';
				}
			});

		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
.content{
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
}
</style>