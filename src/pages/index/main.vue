<template>
	<view>
		<Search></Search>
		<swiper  class="swiper" :indicator-dots="indicatorDots" 
		indicator-active-color="#ea4350"   circular="circuar"
		:autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item>
				<image src="../../static/cart_selected.png" mode="" />
			</swiper-item>
				<swiper-item>
				<image src="../../static/cart_selected.png" mode="" />
			</swiper-item>
			<swiper-item>
				<image src="../../static/cart_selected.png" mode="" />
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
			circular:true,
		     indicatorDots: true,
            autoplay: true,
            interval: 2000,
            duration: 500
				
		
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
</style>
